// CyberPrompt 300+ — Main Application Logic

(function () {
  'use strict';

  // State
  let currentView = 'home'; // home | category | scenario | scenario-detail
  let currentCategory = null;
  let currentScenario = null;
  let searchQuery = '';
  let skillFilter = 'all';
  let variableValues = {};
  let currentLang = localStorage.getItem('cp300-lang') || 'en';

  // DOM refs
  const contentArea = document.getElementById('content-area');
  const searchInput = document.getElementById('search-input');
  const skillSelect = document.getElementById('skill-filter');
  const langSelect = document.getElementById('lang-select');
  const sidebarNav = document.getElementById('sidebar-nav');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const toastContainer = document.getElementById('toast-container');
  const themeToggle = document.getElementById('theme-toggle');

  // =====================================================================
  // I18N HELPER
  // =====================================================================

  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key;
  }

  function updateStaticUI() {
    // Sidebar branding
    const sidebarBrandSpan = document.querySelector('.sidebar-logo span');
    if (sidebarBrandSpan) sidebarBrandSpan.textContent = t('sidebarBrand');

    const sidebarSectionLabel = document.querySelector('.sidebar-section-label');
    if (sidebarSectionLabel) sidebarSectionLabel.textContent = t('categories');

    const statLabel = document.querySelector('.stat-label');
    if (statLabel) statLabel.textContent = t('totalPrompts');

    // Search placeholder
    searchInput.placeholder = t('searchPlaceholder');

    // Skill filter options
    const skillOptions = skillSelect.querySelectorAll('option');
    if (skillOptions.length >= 4) {
      skillOptions[0].textContent = t('allLevels');
      skillOptions[1].textContent = t('beginner');
      skillOptions[2].textContent = t('intermediate');
      skillOptions[3].textContent = t('advanced');
    }

    // Language selector
    if (langSelect) langSelect.value = currentLang;
  }

  // =====================================================================
  // THEME MANAGEMENT
  // =====================================================================

  function getInitialTheme() {
    var saved = localStorage.getItem('cp300-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('cp300-theme', theme);
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme') || 'dark';
    var next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    lucide.createIcons();
  }

  // =====================================================================
  // INITIALIZATION
  // =====================================================================

  function init() {
    // Apply saved or system theme
    applyTheme(getInitialTheme());

    // Update total count dynamically
    const totalEl = document.getElementById('total-count');
    if (totalEl) totalEl.textContent = PROMPTS.length;

    // Restore language preference
    if (langSelect) langSelect.value = currentLang;

    updateStaticUI();
    renderSidebar();
    renderHome();
    updateTopbarVisibility('home');
    bindEvents();
  }

  function bindEvents() {
    searchInput.addEventListener('input', debounce(onSearch, 150));
    skillSelect.addEventListener('change', onSkillFilter);
    mobileMenuBtn.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);

    if (langSelect) {
      langSelect.addEventListener('change', onLangChange);
    }

    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeSidebar();
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
      }
    });
  }

  // =====================================================================
  // LANGUAGE CHANGE
  // =====================================================================

  function onLangChange() {
    currentLang = langSelect.value;
    localStorage.setItem('cp300-lang', currentLang);
    updateStaticUI();
    renderSidebar();

    // Re-render current view
    switch (currentView) {
      case 'home':
        renderHome();
        break;
      case 'category':
        if (currentCategory) renderCategoryView(currentCategory);
        break;
      case 'scenario':
        if (currentScenario) renderScenarioDetail(currentScenario);
        break;
      case 'search':
        if (searchQuery.length >= 2) renderSearchResults();
        break;
      default:
        renderHome();
    }
  }

  // =====================================================================
  // SIDEBAR
  // =====================================================================

  function renderSidebar() {
    let html = '';
    // All Prompts
    html += '<button class="nav-item active" data-nav="home" onclick="app.navigate(\'home\')">';
    html += '<i data-lucide="layout-grid"></i>';
    html += '<span>' + t('allPrompts') + '</span>';
    html += '<span class="nav-count">' + PROMPTS.length + '</span>';
    html += '</button>';

    CATEGORIES.forEach(function(cat) {
      var count = PROMPTS.filter(function(p) { return p.category === cat.id; }).length;
      var catName = t('cat.' + cat.id) || cat.name;
      html += '<button class="nav-item" data-nav="' + cat.id + '" onclick="app.navigate(\'category\', \'' + cat.id + '\')">';
      html += '<i data-lucide="' + cat.icon + '"></i>';
      html += '<span>' + catName + '</span>';
      html += '<span class="nav-count">' + count + '</span>';
      html += '</button>';
    });

    sidebarNav.innerHTML = html;
    lucide.createIcons();
  }

  function updateActiveNav(id) {
    document.querySelectorAll('.nav-item').forEach(function(el) {
      el.classList.toggle('active', el.dataset.nav === id);
    });
  }

  function toggleSidebar() {
    sidebar.classList.toggle('open');
    sidebarOverlay.classList.toggle('active');
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('active');
  }

  // =====================================================================
  // NAVIGATION
  // =====================================================================

  function updateTopbarVisibility(view) {
    var searchContainer = document.querySelector('.search-container');
    var skillFilter = document.getElementById('skill-filter');
    var hideSearch = (view === 'home' || view === 'scenario');
    if (searchContainer) searchContainer.style.display = hideSearch ? 'none' : '';
    if (skillFilter) skillFilter.style.display = hideSearch ? 'none' : '';
  }

  function navigate(view, param) {
    closeSidebar();
    currentView = view;
    searchQuery = '';
    searchInput.value = '';
    updateTopbarVisibility(view);

    switch (view) {
      case 'home':
        currentCategory = null;
        currentScenario = null;
        updateActiveNav('home');
        renderHome();
        break;
      case 'category':
        currentCategory = param;
        currentScenario = null;
        updateActiveNav(param);
        renderCategoryView(param);
        break;
      case 'scenario':
        currentScenario = param;
        variableValues = {};
        renderScenarioDetail(param);
        break;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // =====================================================================
  // HOME VIEW
  // =====================================================================

  function renderHome() {
    var heroDesc = t('heroDesc').replace('{count}', PROMPTS.length);
    var html = '';

    // Hero
    html += '<div class="hero">';
    html += '<h2>CyberPrompt <span class="accent">300+</span></h2>';
    html += '<p>' + heroDesc + '</p>';
    html += '</div>';

    // Value Proposition — Stats
    html += '<div class="value-stats">';
    html += '<div class="value-stat-card">';
    html += '<i data-lucide="clock" class="value-stat-icon"></i>';
    html += '<div class="value-stat-number">' + t('valueStat1Number') + '</div>';
    html += '<div class="value-stat-label">' + t('valueStat1Label') + '</div>';
    html += '<div class="value-stat-desc">' + t('valueStat1Desc') + '</div>';
    html += '</div>';
    html += '<div class="value-stat-card">';
    html += '<i data-lucide="layers" class="value-stat-icon"></i>';
    html += '<div class="value-stat-number">' + PROMPTS.length + '</div>';
    html += '<div class="value-stat-label">' + t('valueStat2Label') + '</div>';
    html += '<div class="value-stat-desc">' + t('valueStat2Desc') + '</div>';
    html += '</div>';
    html += '<div class="value-stat-card">';
    html += '<i data-lucide="workflow" class="value-stat-icon"></i>';
    html += '<div class="value-stat-number">' + SCENARIOS.length + '</div>';
    html += '<div class="value-stat-label">' + t('valueStat3Label') + '</div>';
    html += '<div class="value-stat-desc">' + t('valueStat3Desc') + '</div>';
    html += '</div>';
    html += '</div>';

    // Before/After Demo Section
    html += '<div class="section-header">';
    html += '<h2>' + t('seeTheDifference') + '</h2>';
    html += '<span class="section-badge">' + t('beforeVsAfter') + '</span>';
    html += '</div>';
    html += '<div class="demo-cards">';

    var demos = [
      {
        title: t('demoTitle1'),
        icon: 'siren',
        before: {
          label: t('withoutCyberPrompt'),
          prompt: t('demoBefore1Prompt'),
          result: t('demoBefore1Result'),
          time: t('demoBefore1Time')
        },
        after: {
          label: t('withCyberPrompt'),
          prompt: t('demoAfter1Prompt'),
          result: t('demoAfter1Result'),
          time: t('demoAfter1Time')
        }
      },
      {
        title: t('demoTitle2'),
        icon: 'cloud',
        before: {
          label: t('withoutCyberPrompt'),
          prompt: t('demoBefore2Prompt'),
          result: t('demoBefore2Result'),
          time: t('demoBefore2Time')
        },
        after: {
          label: t('withCyberPrompt'),
          prompt: t('demoAfter2Prompt'),
          result: t('demoAfter2Result'),
          time: t('demoAfter2Time')
        }
      },
      {
        title: t('demoTitle3'),
        icon: 'bug',
        before: {
          label: t('withoutCyberPrompt'),
          prompt: t('demoBefore3Prompt'),
          result: t('demoBefore3Result'),
          time: t('demoBefore3Time')
        },
        after: {
          label: t('withCyberPrompt'),
          prompt: t('demoAfter3Prompt'),
          result: t('demoAfter3Result'),
          time: t('demoAfter3Time')
        }
      }
    ];

    demos.forEach(function(demo) {
      html += '<div class="demo-card">';
      html += '<div class="demo-card-title">';
      html += '<i data-lucide="' + demo.icon + '" style="width:20px;height:20px;color:var(--color-primary)"></i>';
      html += ' ' + demo.title;
      html += '</div>';
      html += '<div class="demo-comparison">';
      html += '<div class="demo-before">';
      html += '<div class="demo-label demo-label-before">';
      html += '<i data-lucide="x-circle" style="width:14px;height:14px"></i>';
      html += ' ' + demo.before.label;
      html += '</div>';
      html += '<div class="demo-prompt">' + demo.before.prompt + '</div>';
      html += '<div class="demo-result">' + demo.before.result + '</div>';
      html += '<div class="demo-time">';
      html += '<i data-lucide="clock" style="width:14px;height:14px"></i>';
      html += ' ' + demo.before.time;
      html += '</div>';
      html += '</div>';
      html += '<div class="demo-divider">';
      html += '<i data-lucide="arrow-right" style="width:20px;height:20px"></i>';
      html += '</div>';
      html += '<div class="demo-after">';
      html += '<div class="demo-label demo-label-after">';
      html += '<i data-lucide="check-circle" style="width:14px;height:14px"></i>';
      html += ' ' + demo.after.label;
      html += '</div>';
      html += '<div class="demo-prompt">' + demo.after.prompt + '</div>';
      html += '<div class="demo-result">' + demo.after.result + '</div>';
      html += '<div class="demo-time">';
      html += '<i data-lucide="zap" style="width:14px;height:14px"></i>';
      html += ' ' + demo.after.time;
      html += '</div>';
      html += '</div>';
      html += '</div>';
      html += '</div>';
    });

    html += '</div>';

    // Scenarios Section
    html += '<div class="section-header">';
    html += '<h2>' + t('scenarioWorkflows') + '</h2>';
    html += '<span class="section-count">' + SCENARIOS.length + ' ' + t('scenarios') + '</span>';
    html += '</div>';
    html += '<div class="scenario-grid">';
    SCENARIOS.forEach(function(s) {
      var sName = t('scenario.' + s.id) || s.name;
      var sDesc = t('scenarioDesc.' + s.id) || s.description;
      html += '<div class="scenario-card" onclick="app.navigate(\'scenario\', \'' + s.id + '\')" tabindex="0" role="button"';
      html += ' onkeydown="if(event.key===\'Enter\')app.navigate(\'scenario\',\'' + s.id + '\')">';
      html += '<div class="scenario-card-header">';
      html += '<i data-lucide="' + s.icon + '" class="scenario-card-icon"></i>';
      html += '<span class="scenario-card-title">' + sName + '</span>';
      html += '</div>';
      html += '<p class="scenario-card-desc">' + sDesc + '</p>';
      html += '<p class="scenario-card-steps">' + s.steps.length + ' ' + t('stepsInWorkflow') + '</p>';
      html += '</div>';
    });
    html += '</div>';

    // Categories Section
    html += '<div class="section-header">';
    html += '<h2>' + t('browseByCategory') + '</h2>';
    html += '<span class="section-count">' + CATEGORIES.length + ' ' + t('categoriesCount') + '</span>';
    html += '</div>';
    html += '<div class="category-grid">';
    CATEGORIES.forEach(function(cat) {
      var count = PROMPTS.filter(function(p) { return p.category === cat.id; }).length;
      var catName = t('cat.' + cat.id) || cat.name;
      var catDesc = t('catDesc.' + cat.id) || cat.description;
      html += '<div class="category-card" onclick="app.navigate(\'category\', \'' + cat.id + '\')" tabindex="0" role="button"';
      html += ' onkeydown="if(event.key===\'Enter\')app.navigate(\'category\',\'' + cat.id + '\')">';
      html += '<div class="category-card-header">';
      html += '<i data-lucide="' + cat.icon + '" class="category-card-icon"></i>';
      html += '<span class="category-card-title">' + catName + '</span>';
      html += '<span class="category-card-count">' + count + '</span>';
      html += '</div>';
      html += '<p class="category-card-desc">' + catDesc + '</p>';
      html += '<div class="category-card-footer">';
      html += '<i data-lucide="chevron-right" style="width:16px;height:16px"></i>';
      html += '</div>';
      html += '</div>';
    });
    html += '</div>';

    contentArea.innerHTML = html;
    lucide.createIcons();
  }

  // =====================================================================
  // CATEGORY VIEW
  // =====================================================================

  function renderCategoryView(catId) {
    var cat = CATEGORIES.find(function(c) { return c.id === catId; });
    if (!cat) return renderHome();

    var catName = t('cat.' + cat.id) || cat.name;
    var catDesc = t('catDesc.' + cat.id) || cat.description;

    var prompts = PROMPTS.filter(function(p) { return p.category === catId; });
    prompts = applyFilters(prompts);

    var html = '<button class="back-btn" onclick="app.navigate(\'home\')">';
    html += '<i data-lucide="arrow-left" style="width:16px;height:16px"></i> ' + t('backToHome');
    html += '</button>';

    html += '<div class="prompt-list-header">';
    html += '<h2>' + catName + '</h2>';
    html += '<p>' + catDesc + '</p>';
    html += '</div>';

    var countLabel = prompts.length + ' ' + (prompts.length !== 1 ? t('prompts') : t('prompt'));
    html += '<div class="prompt-count-bar">';
    html += '<span>' + countLabel + '</span>';
    html += '</div>';

    if (prompts.length === 0) {
      html += renderNoResults();
    } else {
      prompts.forEach(function(p) { html += renderPromptCard(p); });
    }

    contentArea.innerHTML = html;
    lucide.createIcons();
  }

  // =====================================================================
  // SCENARIO DETAIL VIEW
  // =====================================================================

  function renderScenarioDetail(scenarioId) {
    var scenario = SCENARIOS.find(function(s) { return s.id === scenarioId; });
    if (!scenario) return renderHome();

    var sName = t('scenario.' + scenario.id) || scenario.name;
    var sDesc = t('scenarioDesc.' + scenario.id) || scenario.description;

    var html = '<div class="scenario-detail">';
    html += '<button class="back-btn" onclick="app.navigate(\'home\')">';
    html += '<i data-lucide="arrow-left" style="width:16px;height:16px"></i> ' + t('backToHome');
    html += '</button>';

    html += '<div class="prompt-list-header">';
    html += '<h2>' + sName + '</h2>';
    html += '<p>' + sDesc + '</p>';
    html += '</div>';

    // Variables
    if (scenario.variables.length > 0) {
      html += '<div class="scenario-variables">';
      html += '<h3>' + t('customizeVariables') + '</h3>';
      html += '<div class="variable-grid">';
      scenario.variables.forEach(function(v) {
        var val = variableValues[v.key] || '';
        html += '<div class="variable-field">';
        html += '<label for="var-' + v.key + '">' + v.label + '</label>';
        html += '<input type="text" id="var-' + v.key + '" data-var-key="' + v.key + '"';
        html += ' placeholder="' + v.placeholder + '" value="' + escapeHtml(val) + '"';
        html += ' oninput="app.updateVariable(\'' + v.key + '\', this.value)">';
        html += '</div>';
      });
      html += '</div></div>';
    }

    // Copy All
    html += '<div class="copy-all-bar">';
    html += '<button class="btn btn-secondary" onclick="app.copyAllWorkflow(\'' + scenarioId + '\')">';
    html += '<i data-lucide="clipboard-copy" style="width:16px;height:16px"></i> ' + t('copyEntireWorkflow');
    html += '</button>';
    html += '</div>';

    // Steps
    scenario.steps.forEach(function(step, i) {
      var prompt = PROMPTS.find(function(p) { return p.id === step.promptId; });
      if (!prompt) return;

      html += '<div class="scenario-step">';
      html += '<div class="scenario-step-header">';
      html += '<span class="step-number">' + (i + 1) + '</span>';
      html += '<span class="step-phase">' + step.phase + '</span>';
      html += '</div>';
      html += '<p class="step-description">' + step.description + '</p>';
      html += renderPromptCard(prompt, true);
      html += '</div>';
    });

    html += '</div>';
    contentArea.innerHTML = html;
    lucide.createIcons();
  }

  // =====================================================================
  // SEARCH & FILTER
  // =====================================================================

  function onSearch(e) {
    searchQuery = e.target.value.trim().toLowerCase();
    if (currentView === 'category' && currentCategory) {
      renderCategoryView(currentCategory);
    } else if (searchQuery.length >= 2) {
      renderSearchResults();
    } else if (currentView === 'home' || searchQuery.length === 0) {
      currentView = 'home';
      updateActiveNav('home');
      renderHome();
    }
  }

  function onSkillFilter() {
    skillFilter = skillSelect.value;
    if (currentView === 'category' && currentCategory) {
      renderCategoryView(currentCategory);
    } else if (searchQuery.length >= 2) {
      renderSearchResults();
    }
  }

  function renderSearchResults() {
    currentView = 'search';
    updateActiveNav('');
    var prompts = applyFilters(PROMPTS);

    var html = '<div class="prompt-list-header">';
    html += '<h2>' + t('searchResults') + '</h2>';
    html += '<p>' + t('showingResultsFor') + ' "' + escapeHtml(searchQuery) + '"</p>';
    html += '</div>';

    var countLabel = prompts.length + ' ' + (prompts.length !== 1 ? t('results') : t('result'));
    html += '<div class="prompt-count-bar">';
    html += '<span>' + countLabel + '</span>';
    html += '</div>';

    if (prompts.length === 0) {
      html += renderNoResults();
    } else {
      prompts.forEach(function(p) { html += renderPromptCard(p); });
    }

    contentArea.innerHTML = html;
    lucide.createIcons();
  }

  function applyFilters(prompts) {
    var result = prompts;

    if (searchQuery.length >= 2) {
      result = result.filter(function(p) {
        return p.title.toLowerCase().includes(searchQuery) ||
          p.prompt.toLowerCase().includes(searchQuery) ||
          (p.subcategory && p.subcategory.toLowerCase().includes(searchQuery)) ||
          (p.useWhen && p.useWhen.toLowerCase().includes(searchQuery));
      });
    }

    if (skillFilter !== 'all') {
      result = result.filter(function(p) {
        return getSkillLevel(p.id).toLowerCase() === skillFilter;
      });
    }

    return result;
  }

  // =====================================================================
  // RENDERING HELPERS
  // =====================================================================

  function renderPromptCard(prompt, embedded) {
    var skillLevel = getSkillLevel(prompt.id);
    var skillClass = skillLevel.toLowerCase();
    var cat = CATEGORIES.find(function(c) { return c.id === prompt.category; });
    var promptText = replaceVariables(prompt.prompt);
    var highlightedText = highlightVariables(promptText);

    var html = '<div class="prompt-card">';
    html += '<div class="prompt-card-header">';
    html += '<div>';
    html += '<span class="prompt-card-id">#' + String(prompt.id).padStart(3, '0') + '</span>';
    html += '<span class="prompt-card-title"> ' + escapeHtml(prompt.title) + '</span>';
    html += '</div>';
    html += '<button class="btn btn-copy" onclick="app.copyPrompt(' + prompt.id + ', event)" title="Copy to clipboard" aria-label="Copy prompt to clipboard">';
    html += '<i data-lucide="clipboard-copy" style="width:14px;height:14px"></i> ' + t('copy');
    html += '</button>';
    html += '</div>';
    html += '<div class="prompt-code-container">';
    html += '<pre class="prompt-code-text">' + highlightedText + '</pre>';
    html += '</div>';
    html += '<div class="prompt-card-meta">';
    html += '<span class="tag tag-' + skillClass + '">' + skillLevel + '</span>';

    if (!embedded && cat) {
      var catName = t('cat.' + cat.id) || cat.name;
      html += '<span class="tag tag-secondary">' + catName + '</span>';
    }
    if (prompt.subcategory) {
      html += '<span class="tag tag-default">' + prompt.subcategory + '</span>';
    }
    if (prompt.useWhen) {
      html += '<span class="prompt-use-when">' + escapeHtml(prompt.useWhen) + '</span>';
    }

    html += '</div></div>';
    return html;
  }

  function renderNoResults() {
    var html = '<div class="no-results">';
    html += '<i data-lucide="search-x"></i>';
    html += '<h3>' + t('noPromptsFound') + '</h3>';
    html += '<p>' + t('noPromptsFoundDesc') + '</p>';
    html += '</div>';
    return html;
  }

  // =====================================================================
  // VARIABLE REPLACEMENT
  // =====================================================================

  function updateVariable(key, value) {
    variableValues[key] = value;
    // Re-render scenario detail to update prompt texts
    if (currentView === 'scenario' && currentScenario) {
      // Just update the code containers instead of full re-render
      document.querySelectorAll('.prompt-code-text').forEach(function(el) {
        var card = el.closest('.prompt-card');
        var idEl = card ? card.querySelector('.prompt-card-id') : null;
        var promptId = idEl ? idEl.textContent.replace('#', '').trim() : null;
        if (promptId) {
          var prompt = PROMPTS.find(function(p) { return p.id === parseInt(promptId); });
          if (prompt) {
            el.innerHTML = highlightVariables(replaceVariables(prompt.prompt));
          }
        }
      });
    }
  }

  function replaceVariables(text) {
    var result = text;
    Object.entries(variableValues).forEach(function(entry) {
      var key = entry[0];
      var value = entry[1];
      if (value) {
        var regex = new RegExp('\\[' + escapeRegex(key) + '\\]', 'g');
        result = result.replace(regex, value);
      }
    });
    return result;
  }

  function highlightVariables(text) {
    // Escape HTML first, then highlight remaining [VARIABLE] placeholders
    var escaped = escapeHtml(text);
    return escaped.replace(/\[([A-Z0-9_/]+)\]/g, '<span class="variable-highlight">[$1]</span>');
  }

  // =====================================================================
  // COPY FUNCTIONS
  // =====================================================================

  function copyPrompt(id, event) {
    var prompt = PROMPTS.find(function(p) { return p.id === id; });
    if (!prompt) return;

    var text = replaceVariables(prompt.prompt);
    copyToClipboard(text);

    // Button feedback
    var btn = event.currentTarget;
    btn.classList.add('copied');
    btn.innerHTML = '<i data-lucide="check" style="width:14px;height:14px"></i> ' + t('copied');
    lucide.createIcons({ nodes: [btn] });

    setTimeout(function() {
      btn.classList.remove('copied');
      btn.innerHTML = '<i data-lucide="clipboard-copy" style="width:14px;height:14px"></i> ' + t('copy');
      lucide.createIcons({ nodes: [btn] });
    }, 2000);

    showToast(t('promptCopied'));
  }

  function copyAllWorkflow(scenarioId) {
    var scenario = SCENARIOS.find(function(s) { return s.id === scenarioId; });
    if (!scenario) return;

    var fullText = '=== ' + scenario.name + ' Workflow ===\n\n';
    scenario.steps.forEach(function(step, i) {
      var prompt = PROMPTS.find(function(p) { return p.id === step.promptId; });
      if (!prompt) return;
      fullText += '--- Step ' + (i + 1) + ': ' + step.phase + ' ---\n';
      fullText += step.description + '\n\n';
      fullText += replaceVariables(prompt.prompt);
      fullText += '\n\n';
    });

    copyToClipboard(fullText);
    showToast(t('workflowCopied'));
  }

  function copyToClipboard(text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(function() { fallbackCopy(text); });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }

  // =====================================================================
  // TOAST
  // =====================================================================

  function showToast(message) {
    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = '<i data-lucide="check-circle"></i> ' + escapeHtml(message);
    toastContainer.appendChild(toast);
    lucide.createIcons({ nodes: [toast] });

    setTimeout(function() {
      toast.classList.add('toast-exit');
      setTimeout(function() { toast.remove(); }, 200);
    }, 2500);
  }

  // =====================================================================
  // UTILITIES
  // =====================================================================

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function debounce(fn, ms) {
    var timer;
    return function () {
      var args = arguments;
      var context = this;
      clearTimeout(timer);
      timer = setTimeout(function() { fn.apply(context, args); }, ms);
    };
  }

  // =====================================================================
  // PUBLIC API
  // =====================================================================

  window.app = {
    navigate: navigate,
    copyPrompt: copyPrompt,
    copyAllWorkflow: copyAllWorkflow,
    updateVariable: updateVariable
  };

  // Boot
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
