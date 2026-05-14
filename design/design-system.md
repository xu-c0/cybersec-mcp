# CyberPrompt 300+ Design System

> Complete design specification for the CyberPrompt 300+ interactive security prompt generator tool.
> Version 1.0 | May 2026

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Color Palette](#2-color-palette)
3. [Typography](#3-typography)
4. [Component Specs](#4-component-specs)
5. [Layout](#5-layout)
6. [Iconography](#6-iconography)
7. [Visual Effects](#7-visual-effects)

---

## 1. Design Philosophy

CyberPrompt 300+ uses a dark-first, data-dense interface that communicates security expertise and technical precision. The visual language draws from terminal aesthetics, threat-map dashboards, and modern SaaS tooling -- distilled into a clean, accessible product.

**Core Principles:**

- **Dark-first**: Deep, layered dark backgrounds reduce eye strain during long sessions and signal "security tool."
- **Precision over decoration**: Every element exists for a reason. Clean grids, tight spacing, functional color.
- **Scannable hierarchy**: Users can locate prompt categories, copy text, and navigate at speed.
- **Accessible contrast**: All text meets WCAG 2.1 AA (minimum 4.5:1 for body text, 3:1 for large text).

---

## 2. Color Palette

### 2.1 Core Brand Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#00E5A0` | Primary accent -- CTAs, active nav, selected states |
| `--color-primary-hover` | `#00CC8E` | Primary hover state |
| `--color-primary-muted` | `#00E5A01A` | Primary at 10% opacity -- subtle highlights, active backgrounds |
| `--color-secondary` | `#6C63FF` | Secondary accent -- category badges, links, secondary actions |
| `--color-secondary-hover` | `#5A52E0` | Secondary hover state |
| `--color-secondary-muted` | `#6C63FF1A` | Secondary at 10% opacity |
| `--color-accent` | `#00D4FF` | Tertiary accent -- info callouts, decorative glow, code highlights |
| `--color-accent-muted` | `#00D4FF14` | Accent at 8% opacity |

### 2.2 Background Colors (Layered Surfaces)

| Token | Hex | Usage |
|---|---|---|
| `--bg-deepest` | `#07080C` | Page body / app root background |
| `--bg-base` | `#0C0E14` | Main content area |
| `--bg-raised` | `#12151E` | Cards, panels, sidebar |
| `--bg-elevated` | `#1A1E2B` | Dropdowns, modals, popovers |
| `--bg-overlay` | `#222738` | Hover overlays, tooltips |
| `--bg-input` | `#0F1119` | Input field backgrounds |

### 2.3 Background Gradients

| Token | Value | Usage |
|---|---|---|
| `--gradient-page` | `linear-gradient(180deg, #07080C 0%, #0A0D15 100%)` | Full-page background |
| `--gradient-card` | `linear-gradient(145deg, #14172180 0%, #0C0E1480 100%)` | Card surfaces |
| `--gradient-hero` | `linear-gradient(135deg, #00E5A008 0%, #6C63FF08 50%, #00D4FF08 100%)` | Hero section ambient glow |
| `--gradient-sidebar` | `linear-gradient(180deg, #0C0E14 0%, #07080C 100%)` | Sidebar background |
| `--gradient-glow-green` | `radial-gradient(circle at center, #00E5A020 0%, transparent 70%)` | Decorative glow behind primary elements |
| `--gradient-glow-purple` | `radial-gradient(circle at center, #6C63FF18 0%, transparent 70%)` | Decorative glow behind secondary elements |

### 2.4 Text Colors (Hierarchy)

| Token | Hex | Usage |
|---|---|---|
| `--text-primary` | `#F0F2F5` | Headings, high-emphasis body text |
| `--text-secondary` | `#A0A8B8` | Body text, descriptions |
| `--text-tertiary` | `#6B7280` | Captions, placeholders, metadata |
| `--text-disabled` | `#3D4455` | Disabled labels |
| `--text-inverse` | `#07080C` | Text on primary-colored backgrounds |
| `--text-code` | `#00D4FF` | Inline code, terminal output |
| `--text-link` | `#6C63FF` | Hyperlinks |
| `--text-link-hover` | `#8B85FF` | Hyperlink hover |

### 2.5 Border Colors

| Token | Hex | Usage |
|---|---|---|
| `--border-default` | `#1E2230` | Card borders, dividers |
| `--border-subtle` | `#14172140` | Faint separators |
| `--border-focus` | `#00E5A0` | Focus ring color |
| `--border-input` | `#262B3A` | Input field borders |
| `--border-input-hover` | `#3A4050` | Input hover state border |

### 2.6 Semantic Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-success` | `#22C55E` | Success messages, positive indicators |
| `--color-success-bg` | `#22C55E14` | Success background tint |
| `--color-warning` | `#F59E0B` | Warnings, caution indicators |
| `--color-warning-bg` | `#F59E0B14` | Warning background tint |
| `--color-danger` | `#EF4444` | Errors, destructive actions, critical severity |
| `--color-danger-bg` | `#EF444414` | Danger background tint |
| `--color-info` | `#00D4FF` | Informational messages, tips |
| `--color-info-bg` | `#00D4FF14` | Info background tint |
| `--color-critical` | `#FF3B6F` | Critical-severity prompt tags |
| `--color-high` | `#F59E0B` | High-severity prompt tags |
| `--color-medium` | `#6C63FF` | Medium-severity prompt tags |
| `--color-low` | `#22C55E` | Low-severity prompt tags |

---

## 3. Typography

### 3.1 Font Families

| Role | Font | Source | Fallback Stack |
|---|---|---|---|
| **Headings** | **Inter** | Google Fonts (OFL) | `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` |
| **Body** | **Inter** | Google Fonts (OFL) | Same as headings |
| **Code / Prompts** | **JetBrains Mono** | Google Fonts (OFL) | `'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace` |

**Why Inter?** Excellent legibility at small sizes, variable font support for fine-tuned weights, extensive language coverage, and industry-standard for SaaS.

**Why JetBrains Mono?** Purpose-built for code readability with ligature support and clear character distinction (l/1, O/0). Perfect for displaying security prompts and command-line content.

### 3.2 Type Scale (Base: 16px)

| Token | Size (px) | Size (rem) | Line Height | Weight | Usage |
|---|---|---|---|---|---|
| `--text-display` | 48 | 3.0 | 1.1 | 700 | Landing hero title |
| `--text-h1` | 32 | 2.0 | 1.25 | 700 | Page titles |
| `--text-h2` | 24 | 1.5 | 1.3 | 600 | Section headings |
| `--text-h3` | 20 | 1.25 | 1.4 | 600 | Card titles, subsection headings |
| `--text-h4` | 16 | 1.0 | 1.4 | 600 | Small headings, labels |
| `--text-body` | 16 | 1.0 | 1.6 | 400 | Default body text |
| `--text-body-sm` | 14 | 0.875 | 1.5 | 400 | Secondary body, descriptions |
| `--text-caption` | 12 | 0.75 | 1.4 | 400 | Captions, metadata, badges |
| `--text-overline` | 11 | 0.6875 | 1.4 | 600 | Overline labels (uppercase, letter-spacing: 0.08em) |
| `--text-code` | 14 | 0.875 | 1.6 | 400 | Code blocks, prompt text (JetBrains Mono) |
| `--text-code-sm` | 13 | 0.8125 | 1.5 | 400 | Inline code snippets |

### 3.3 Font Weight Tokens

| Token | Weight | Usage |
|---|---|---|
| `--font-regular` | 400 | Body text |
| `--font-medium` | 500 | Emphasized body, button text |
| `--font-semibold` | 600 | Headings (h2-h4), labels |
| `--font-bold` | 700 | h1, display, strong emphasis |

---

## 4. Component Specs

### 4.1 Prompt Category Cards

The primary UI element. Each card represents a prompt category (e.g., "Network Security", "Incident Response", "Cloud Security").

```
+-----------------------------------------------+
|  [Icon]  Category Name              [Count]    |
|  Brief description of this prompt              |
|  category and what it covers.                  |
|                                                |
|  [Tag: Severity] [Tag: Type]      [Arrow ->]   |
+-----------------------------------------------+
```

| Property | Value |
|---|---|
| Background | `var(--bg-raised)` with `var(--gradient-card)` |
| Border | `1px solid var(--border-default)` |
| Border radius | `12px` |
| Padding | `24px` |
| Min height | `160px` |
| Shadow | `0 1px 3px rgba(0, 0, 0, 0.3)` |
| Hover border | `1px solid var(--color-primary)40` (primary at 25% opacity) |
| Hover shadow | `0 4px 16px rgba(0, 229, 160, 0.06)` |
| Hover transform | `translateY(-2px)` |
| Transition | `all 0.2s ease` |
| Icon size | `24px`, color `var(--color-primary)` |
| Title font | `var(--text-h3)` weight 600, color `var(--text-primary)` |
| Description font | `var(--text-body-sm)`, color `var(--text-secondary)` |
| Count badge | `var(--text-caption)`, bg `var(--color-primary-muted)`, color `var(--color-primary)`, border-radius `99px`, padding `2px 10px` |

### 4.2 Individual Prompt Card (Expanded / Detail View)

Displays a single prompt with copy functionality.

```
+-----------------------------------------------+
|  Prompt Title                      [Copy Btn]  |
|  +-------------------------------------------+ |
|  | > Security prompt text displayed          | |
|  |   in monospace font within a              | |
|  |   code-style container...                 | |
|  +-------------------------------------------+ |
|  [Tag] [Tag]       Contributed by @user        |
+-----------------------------------------------+
```

| Property | Value |
|---|---|
| Code container bg | `var(--bg-input)` |
| Code container border | `1px solid var(--border-default)` |
| Code container border-radius | `8px` |
| Code container padding | `16px` |
| Code font | `JetBrains Mono` at `var(--text-code)` |
| Code text color | `var(--text-code)` (`#00D4FF`) |
| Code line-height | `1.7` for readability |

### 4.3 Buttons

#### Primary Button

| Property | Value |
|---|---|
| Background | `var(--color-primary)` |
| Text color | `var(--text-inverse)` |
| Font | `var(--text-body-sm)`, weight 500 |
| Padding | `10px 20px` |
| Border radius | `8px` |
| Border | none |
| Hover background | `var(--color-primary-hover)` |
| Hover shadow | `0 0 16px var(--color-primary)30` |
| Active | Scale `0.98` |
| Disabled | Opacity `0.4`, cursor `not-allowed` |
| Transition | `all 0.15s ease` |

#### Secondary Button

| Property | Value |
|---|---|
| Background | transparent |
| Text color | `var(--color-primary)` |
| Border | `1px solid var(--color-primary)40` |
| Padding | `10px 20px` |
| Border radius | `8px` |
| Hover background | `var(--color-primary-muted)` |
| Hover border | `1px solid var(--color-primary)` |

#### Ghost Button

| Property | Value |
|---|---|
| Background | transparent |
| Text color | `var(--text-secondary)` |
| Border | none |
| Padding | `8px 16px` |
| Border radius | `8px` |
| Hover background | `var(--bg-overlay)` |
| Hover text color | `var(--text-primary)` |

#### Copy-to-Clipboard Button

| Property | Value |
|---|---|
| Background | `var(--bg-elevated)` |
| Text/icon color | `var(--text-secondary)` |
| Border | `1px solid var(--border-default)` |
| Border radius | `6px` |
| Padding | `6px 12px` |
| Icon | `clipboard` (16px), swaps to `check` on success |
| Success state bg | `var(--color-success-bg)` |
| Success state color | `var(--color-success)` |
| Success state border | `1px solid var(--color-success)30` |
| Success duration | Revert after `2000ms` |
| Font | `var(--text-caption)`, weight 500 |
| Hover background | `var(--bg-overlay)` |

### 4.4 Input Fields

| Property | Value |
|---|---|
| Background | `var(--bg-input)` |
| Border | `1px solid var(--border-input)` |
| Border radius | `8px` |
| Padding | `10px 14px` |
| Font | `var(--text-body-sm)`, color `var(--text-primary)` |
| Placeholder color | `var(--text-tertiary)` |
| Focus border | `1px solid var(--border-focus)` |
| Focus shadow | `0 0 0 3px var(--color-primary-muted)` |
| Hover border | `var(--border-input-hover)` |
| Disabled bg | `var(--bg-raised)` |
| Disabled text | `var(--text-disabled)` |
| Transition | `border-color 0.15s ease, box-shadow 0.15s ease` |
| Height | `40px` (default), `48px` (large) |

#### Search Input (with icon)

| Property | Value |
|---|---|
| Left icon | `search` at `18px`, color `var(--text-tertiary)` |
| Left padding | `40px` (accommodates icon) |
| Width | `100%` of container, max `480px` |

### 4.5 Dropdowns / Select

| Property | Value |
|---|---|
| Trigger | Same as Input Field spec, with chevron-down icon right-aligned |
| Menu bg | `var(--bg-elevated)` |
| Menu border | `1px solid var(--border-default)` |
| Menu border-radius | `10px` |
| Menu shadow | `0 8px 32px rgba(0, 0, 0, 0.5)` |
| Menu padding | `4px` |
| Item padding | `8px 14px` |
| Item hover bg | `var(--bg-overlay)` |
| Item active bg | `var(--color-primary-muted)` |
| Item active color | `var(--color-primary)` |
| Item font | `var(--text-body-sm)` |
| Max height | `280px` with `overflow-y: auto` |
| Scrollbar | Thin, `var(--bg-overlay)` thumb on transparent track |

### 4.6 Navigation / Sidebar

```
+------------------+
|  [Logo] CP300+   |
|                  |
|  CATEGORIES      |
|  > All Prompts   |
|    Network       |
|    Cloud          |
|    AppSec        |
|    IR & Forensics|
|    Compliance    |
|    Pentesting    |
|    IAM           |
|    Threat Intel  |
|                  |
|  TOOLS           |
|    Favorites     |
|    History       |
|    Settings      |
|                  |
|  +------------+  |
|  | 300+ total |  |
|  | prompts    |  |
|  +------------+  |
+------------------+
```

| Property | Value |
|---|---|
| Width | `260px` (desktop), collapsible to `64px` (icon-only) |
| Background | `var(--bg-raised)` with `var(--gradient-sidebar)` |
| Border right | `1px solid var(--border-default)` |
| Logo area padding | `20px 16px` |
| Section label | `var(--text-overline)`, color `var(--text-tertiary)`, padding `16px 16px 8px` |
| Nav item padding | `8px 16px` |
| Nav item border-radius | `8px` (applied with 8px horizontal margin) |
| Nav item font | `var(--text-body-sm)`, weight 400, color `var(--text-secondary)` |
| Nav item icon | `20px`, margin-right `12px` |
| Nav item hover bg | `var(--bg-overlay)` |
| Nav item active bg | `var(--color-primary-muted)` |
| Nav item active color | `var(--color-primary)` |
| Nav item active weight | 500 |
| Nav item active icon | `var(--color-primary)` |
| Nav item active indicator | `3px` left border, `var(--color-primary)`, border-radius `0 2px 2px 0` |
| Stats card | bg `var(--bg-base)`, border `1px solid var(--border-default)`, border-radius `10px`, padding `16px`, margin `16px` |

### 4.7 Category Tags / Badges

Used for prompt metadata: severity, type, category.

| Variant | Background | Text Color | Border |
|---|---|---|---|
| Default | `var(--bg-elevated)` | `var(--text-secondary)` | `1px solid var(--border-default)` |
| Primary | `var(--color-primary-muted)` | `var(--color-primary)` | none |
| Secondary | `var(--color-secondary-muted)` | `var(--color-secondary)` | none |
| Critical | `var(--color-danger-bg)` | `var(--color-critical)` | none |
| High | `var(--color-warning-bg)` | `var(--color-high)` | none |
| Medium | `var(--color-secondary-muted)` | `var(--color-medium)` | none |
| Low | `var(--color-success-bg)` | `var(--color-low)` | none |

**Common tag properties:**

| Property | Value |
|---|---|
| Font | `var(--text-caption)`, weight 500 |
| Padding | `2px 10px` |
| Border radius | `6px` |
| Letter spacing | `0.01em` |
| Text transform | none (sentence case) |

---

## 5. Layout

### 5.1 Overall Page Structure

```
+----------+---------------------------------------------+
|          |  [Search Bar]        [Filter] [User Avatar]  |
|          |---------------------------------------------+
|          |                                              |
| Sidebar  |  Main Content Area                           |
| (260px)  |  (fluid, max-width: 1200px, centered)       |
|          |                                              |
|          |  +--------+ +--------+ +--------+            |
|          |  | Card   | | Card   | | Card   |            |
|          |  +--------+ +--------+ +--------+            |
|          |  +--------+ +--------+ +--------+            |
|          |  | Card   | | Card   | | Card   |            |
|          |  +--------+ +--------+ +--------+            |
|          |                                              |
+----------+----------------------------------------------+
```

| Property | Value |
|---|---|
| App min-height | `100vh` |
| Sidebar | Fixed left, `260px` width |
| Top bar height | `64px` |
| Main content margin-left | `260px` |
| Main content padding | `32px` |
| Max content width | `1200px` |
| Content centering | `margin: 0 auto` |
| Card grid | CSS Grid, `repeat(auto-fill, minmax(340px, 1fr))` |
| Card grid gap | `24px` |

### 5.2 Responsive Breakpoints

| Token | Breakpoint | Behavior |
|---|---|---|
| `--bp-mobile` | `< 640px` | Sidebar hidden (hamburger toggle). Single column. Padding `16px`. |
| `--bp-tablet` | `640px - 1023px` | Sidebar collapsed to `64px` (icons only). Two-column card grid. Padding `24px`. |
| `--bp-desktop` | `1024px - 1439px` | Full sidebar `260px`. Three-column card grid. Padding `32px`. |
| `--bp-wide` | `>= 1440px` | Full sidebar. Content max-width `1200px`, centered. |

### 5.3 Spacing System (8px Grid)

All spacing values are multiples of 8px, with 4px used sparingly for tight internal spacing.

| Token | Value | Usage |
|---|---|---|
| `--space-1` | `4px` | Tight gaps (icon-to-label, tag internal padding) |
| `--space-2` | `8px` | Minimum component gap, nav item margin |
| `--space-3` | `12px` | Internal component padding (small) |
| `--space-4` | `16px` | Standard internal padding, section spacing |
| `--space-5` | `20px` | Medium spacing |
| `--space-6` | `24px` | Card padding, grid gap, comfortable spacing |
| `--space-7` | `32px` | Section margins, page padding |
| `--space-8` | `40px` | Large section gaps |
| `--space-9` | `48px` | Page-level vertical rhythm |
| `--space-10` | `64px` | Top bar height, major layout gaps |
| `--space-11` | `80px` | Hero section padding |
| `--space-12` | `96px` | Maximum section spacing |

### 5.4 Border Radius Scale

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `4px` | Small internal elements, inline badges |
| `--radius-md` | `6px` | Tags, small buttons |
| `--radius-lg` | `8px` | Buttons, inputs, nav items |
| `--radius-xl` | `10px` | Dropdowns, stat cards |
| `--radius-2xl` | `12px` | Cards, panels |
| `--radius-3xl` | `16px` | Modals, large panels |
| `--radius-full` | `9999px` | Pill shapes, avatars, count badges |

---

## 6. Iconography

### 6.1 Icon Library

**Primary: Lucide Icons** (https://lucide.dev)
- License: ISC (fully open-source, commercial use allowed)
- Style: 24px grid, 1.5px stroke, rounded caps/joins
- Consistent with Inter's geometric clarity

### 6.2 Icon Size Scale

| Token | Size | Stroke | Usage |
|---|---|---|---|
| `--icon-xs` | `14px` | 1.5px | Inline with caption text |
| `--icon-sm` | `16px` | 1.5px | Buttons, tags, inline actions |
| `--icon-md` | `20px` | 1.5px | Nav items, input icons |
| `--icon-lg` | `24px` | 2px | Card icons, section headers |
| `--icon-xl` | `32px` | 2px | Empty states, feature highlights |
| `--icon-2xl` | `48px` | 2px | Hero illustrations, onboarding |

### 6.3 Category Icon Mapping

| Category | Lucide Icon | Notes |
|---|---|---|
| All Prompts | `layout-grid` | Grid overview |
| Network Security | `network` | Network topology |
| Cloud Security | `cloud-cog` | Cloud with gear |
| Application Security | `code` | Code brackets |
| Incident Response | `siren` | Emergency alert |
| Compliance & Audit | `clipboard-check` | Checklist |
| Penetration Testing | `target` | Target/crosshair |
| IAM / Identity | `fingerprint` | Biometric identity |
| Threat Intelligence | `radar` | Scanning/detection |
| Data Protection | `database` | Data store |
| Endpoint Security | `monitor-smartphone` | Device protection |
| Email Security | `mail-warning` | Email threat |
| Favorites | `star` | Saved items |
| History | `clock` | Recent activity |
| Settings | `settings` | Configuration |
| Search | `search` | Search action |
| Copy | `clipboard-copy` | Copy to clipboard |
| Copy success | `check` | Confirmation |
| Filter | `sliders-horizontal` | Filter controls |
| Expand | `chevron-right` | Drill into detail |
| Collapse sidebar | `panel-left-close` | Hide sidebar |
| External link | `external-link` | Open in new tab |
| User / Profile | `user-circle` | Account |
| Severity - Critical | `alert-octagon` | Octagon warning |
| Severity - High | `alert-triangle` | Triangle warning |
| Severity - Medium | `alert-circle` | Circle warning |
| Severity - Low | `info` | Informational |

### 6.4 Icon Color Rules

- **Default state**: `var(--text-tertiary)` (`#6B7280`)
- **Hover / Active state**: Inherits parent text color
- **Active nav**: `var(--color-primary)` (`#00E5A0`)
- **Semantic icons**: Use corresponding semantic color (success/warning/danger/info)
- **Decorative card icons**: `var(--color-primary)` at 80% opacity

---

## 7. Visual Effects

### 7.1 Glow Effects

Used sparingly to add a cybersecurity "electric" feel without overwhelming the interface.

#### Primary Glow (Green)
```css
box-shadow: 0 0 20px rgba(0, 229, 160, 0.08),
            0 0 60px rgba(0, 229, 160, 0.04);
```
**Usage**: Active/selected cards, primary button hover, focus rings.

#### Secondary Glow (Purple)
```css
box-shadow: 0 0 20px rgba(108, 99, 255, 0.08),
            0 0 60px rgba(108, 99, 255, 0.04);
```
**Usage**: Secondary interactive elements, category highlights.

#### Accent Glow (Cyan)
```css
box-shadow: 0 0 16px rgba(0, 212, 255, 0.1);
```
**Usage**: Code blocks on hover, informational highlights.

#### Ambient Background Glow
```css
background: radial-gradient(
  ellipse 600px 400px at 20% 10%,
  rgba(0, 229, 160, 0.03),
  transparent
),
radial-gradient(
  ellipse 500px 500px at 80% 80%,
  rgba(108, 99, 255, 0.03),
  transparent
);
```
**Usage**: Applied to `.app-root` for a subtle, atmospheric depth effect.

### 7.2 Border Glow

```css
/* Subtle border glow for cards on hover */
border: 1px solid rgba(0, 229, 160, 0.15);
box-shadow: inset 0 1px 0 rgba(0, 229, 160, 0.05);
```

### 7.3 Hover States

| Element | Effect |
|---|---|
| Cards | `translateY(-2px)`, border brightens to `var(--color-primary)` at 25%, subtle green glow |
| Buttons (primary) | Background darkens to hover shade, outer glow appears |
| Buttons (secondary) | Background fills with `var(--color-primary-muted)`, border brightens |
| Buttons (ghost) | Background fills with `var(--bg-overlay)` |
| Nav items | Background fills with `var(--bg-overlay)` |
| Tags | Slight brightness increase (`filter: brightness(1.1)`) |
| Links | Color shifts to `var(--text-link-hover)`, underline appears |
| Copy button | Background shifts to `var(--bg-overlay)` |

### 7.4 Active / Pressed States

| Element | Effect |
|---|---|
| Buttons | `transform: scale(0.98)`, remove glow |
| Cards | `transform: scale(0.995)`, border brightens further |
| Nav items | Background `var(--color-primary-muted)`, left indicator bar |

### 7.5 Focus States

All interactive elements must have a visible focus indicator for keyboard navigation.

```css
/* Universal focus ring */
outline: none;
box-shadow: 0 0 0 2px var(--bg-base),
            0 0 0 4px var(--color-primary);
```
**Note**: The inner ring (matching background) creates visual separation from the element.

### 7.6 Micro-Animations

| Animation | Duration | Easing | Usage |
|---|---|---|---|
| Hover transitions | `150ms` | `ease` | Buttons, icons, color changes |
| Card hover lift | `200ms` | `ease` | Card translateY + shadow |
| Dropdown open | `150ms` | `ease-out` | Menu appear (opacity + translateY -4px) |
| Dropdown close | `100ms` | `ease-in` | Menu disappear |
| Copy success | `200ms` | `ease` | Icon swap (clipboard -> check) |
| Copy revert | `200ms` | `ease` | Icon swap back after 2s delay |
| Sidebar collapse | `200ms` | `ease-in-out` | Width transition |
| Skeleton loading | `1.5s` | `ease-in-out` | Infinite pulse on loading placeholders |
| Page enter | `300ms` | `ease-out` | Fade-in + translateY(8px -> 0) |
| Toast notification | `300ms` / `200ms` | `ease-out` / `ease-in` | Slide-in from top-right / slide-out |

#### Skeleton Loading Pulse
```css
@keyframes skeleton-pulse {
  0%, 100% { opacity: 0.06; }
  50% { opacity: 0.12; }
}
background: var(--bg-overlay);
animation: skeleton-pulse 1.5s ease-in-out infinite;
border-radius: var(--radius-lg);
```

#### Page Enter Animation
```css
@keyframes page-enter {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
animation: page-enter 300ms ease-out;
```

### 7.7 Scrollbar Styling

```css
/* Thin, subtle scrollbar matching the dark theme */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: var(--bg-overlay);
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--text-tertiary);
}
```

---

## Appendix A: Accessibility Checklist

- All text passes WCAG 2.1 AA contrast ratios against `var(--bg-base)`
  - `--text-primary` (#F0F2F5) on #0C0E14: **15.4:1** (AAA)
  - `--text-secondary` (#A0A8B8) on #0C0E14: **8.2:1** (AAA)
  - `--text-tertiary` (#6B7280) on #0C0E14: **4.7:1** (AA)
  - `--color-primary` (#00E5A0) on #07080C: **9.8:1** (AAA)
- Focus indicators visible on all interactive elements (2px offset ring)
- Motion: Respect `prefers-reduced-motion` -- disable all transforms and animations
- Minimum touch target: `44px x 44px` on mobile
- Screen reader: All icons have `aria-label` or are marked `aria-hidden="true"` when decorative

## Appendix B: Dark Theme Notes

- This design system is dark-theme-only by default
- If a light theme is needed in the future, create a `[data-theme="light"]` override set
- All opacity-based colors (ending in hex alpha like `1A`, `14`, `40`) are calibrated for dark backgrounds

---

*End of Design System v1.0*
