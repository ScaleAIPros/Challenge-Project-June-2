# ScaleAIPros — Brand & Build Rules

## Brand Identity
- **Name:** ScaleAIPros
- **Handle:** @ScaleAIPros
- **Website:** https://scaleaipros.com/
- **Leads go to:** info@ScaleAIPros.com
- **HeyGen Avatar ID:** f517238c99d448cd8a227b6c10eacfd5
- **HeyGen Voice ID:** 6fd58dfdfd3140c29ecf987e7ee8d6a8

## Core Message
> "AI doesn't have to be complicated. We make automation simple and practical for your business."

Audience: non-technical business owners who are curious about AI but intimidated by it.

## Voice & Tone
- Plain English — no jargon, no acronyms without explanation
- Confident but not arrogant
- Direct and action-oriented ("here's how to do it" not "one might consider…")
- Warm, like a knowledgeable friend — not a sales pitch
- Short sentences. Active voice. Real examples.

## Brand Colors
- Background: `#0A0A0F` (near-black)
- Surface: `#12121A`
- Accent 1 (cyan): `#00D4FF`
- Accent 2 (purple): `#7C3AED`
- Text primary: `#F0F0F0`
- Text muted: `#8888AA`
- Border: `#1E1E2E`

## Typography
- Headlines: Inter (700, 800)
- Body: Inter (400, 500)
- Code / tech labels: JetBrains Mono (400)

## Design Rules
- Always dark background (#0A0A0F)
- Accent glow effects on key CTAs (cyan)
- Cards: `#12121A` background, 1px `#1E1E2E` border, 8–16px radius
- Buttons: filled cyan (#00D4FF) with black text for primary; ghost purple for secondary
- Mobile-first, responsive
- No clip art, no stock-photo faces (use headshot or avatar only)

## Content Source
Video: https://www.youtube.com/watch?v=RTmlxuroR50
Topic: HeyGen 2026 — How to create AI avatar videos step-by-step

## What Every Build Must Include
1. `@ScaleAIPros` handle visible
2. Link back to https://scaleaipros.com/
3. CTA pointing to the lead-magnet landing page OR guide site
4. Dark brand design — no light themes
5. Plain-English copy — no tech jargon

## Secrets Rule
All API keys live in `.secrets/` only. Never in client code, never committed, never in deploys.

## Custom Clarifying Command
Before any major build, ask:
1. Who is the primary audience for this piece?
2. What is the single most important action you want them to take?
3. Do you have any existing assets (images, copy, video) to incorporate?
4. What does success look like for this deliverable?
5. Any hard constraints (deadline, platform, budget, tech stack)?

---

# SCALE AI PROS — UI / BRAND DESIGN SYSTEM

> **Scope note:** This is the master design system for the Scale AI Pros
> client-facing application (dashboards, client management, assessments,
> proposals, and related internal tooling). It is a light, professional
> business-app look and feel — distinct from the dark, neon **Brand Colors**
> used on the public marketing sites (`free-tool`, `guide-site`,
> `launch-site`, `lead-page`) defined earlier in this file. Do not mix the
> two: marketing/lead-gen surfaces stay dark per the Brand Colors section
> above; the application UI described below stays light per this section.

Use the following design and formatting standards throughout the entire
application. These standards should remain consistent across every module,
screen, workflow, dashboard, form, report, and future enhancement.

## Brand Color Palette

- **Primary Dark Navy** `#0B1F3A` — main navigation, headers, footer areas, dark backgrounds, strong visual emphasis
- **Primary Electric Blue** `#1677FF` — primary buttons, active navigation items, links, key actions, important interactive elements
- **Bright Cyan** `#00C2FF` — accent elements, highlights, icons, progress indicators, selective visual emphasis
- **White** `#FFFFFF` — main content backgrounds, cards, forms, negative space
- **Light Gray** `#F4F7FB` — page backgrounds, alternate sections, table backgrounds, secondary containers
- **Dark Text** `#111827` — primary body text, form labels, high-readability content
- **Medium Gray** `#6B7280` — supporting text, helper text, metadata, secondary information
- **Light Border Gray** `#E5E7EB` — card borders, form field borders, table separators, dividers
- **Success Green** `#16A34A` — success states, completed actions, approved statuses, positive indicators
- **Warning Amber** `#F59E0B` — warnings, pending statuses, items requiring attention
- **Error Red** `#DC2626` — errors, failed actions, high-priority alerts, destructive actions

**Recommended Brand Gradient:** `#0B1F3A → #1677FF → #00C2FF`
Use gradients sparingly — hero/dashboard accents, selected headers, branded visual elements. Do not overuse gradients throughout the interface.

## Visual Style

The application should feel: modern, professional, clean, technology-forward, trustworthy, consultative, organized, and easy for nontechnical users to understand.

Avoid: overly futuristic AI styling, excessive neon effects, glowing elements, cluttered interfaces, excessive animations, overuse of gradients, dense technical dashboards, decorative elements that reduce readability.

The interface should feel like a polished professional business application rather than a consumer app.

## Typography

Preferred font: **Inter**. Acceptable alternatives: Manrope, Poppins.

Typography hierarchy:
- **H1:** 32–40px, bold — primary page titles
- **H2:** 24–30px, bold or semibold — major sections
- **H3:** 18–22px, semibold — cards and subsections
- **Body:** 15–16px, regular — high readability
- **Labels:** 13–14px, medium or semibold
- **Helper Text:** 12–14px, medium gray

Maintain strong contrast and clear visual hierarchy.

## Spacing System

Use an 8px spacing system throughout the application.

Recommended spacing values: 4px (very small), 8px (compact), 16px (standard), 24px (section), 32px (large), 48px (major section), 64px (page-level separation).

Maintain generous whitespace. Avoid cramped layouts.

## Page Layout

Use a consistent application shell:
- Persistent left navigation sidebar
- Top header
- Main content area
- Optional contextual right panel when needed

Main content should have a clear page title, short page description when helpful, primary action in a predictable location, consistent content width, and generous whitespace.

Use responsive grid layouts. Preferred desktop structure: 12-column grid system.

## Navigation

Use persistent left-side navigation for primary application modules. Navigation should clearly show the active module, use icons and labels, keep major functions visible, allow collapsed navigation where appropriate, and maintain consistent ordering.

Use breadcrumbs when users navigate more than one level deep.
Example: `Clients > ABC Plumbing > Automation Assessment`

## Buttons

**Primary Button:** Electric Blue `#1677FF`, white text, medium or semibold text, 8–10px corner radius, clear hover state.

**Secondary Button:** White background, navy or Electric Blue text, light border, 8–10px corner radius.

**Destructive Button:** Red `#DC2626`, white text.

Buttons should have consistent heights. Recommended height: 40–44px.

Button labels should describe the action. Preferred examples: Save Client, Generate Assessment, Create Recommendation, Send Proposal, Approve Solution. Avoid vague buttons such as Submit, Click Here, Continue — unless context makes the action obvious.

## Cards

Use cards for grouped information.

Card styling: white background, light gray border, 10–14px corner radius, subtle shadow, 16–24px internal padding, clear title, optional icon, strong visual hierarchy. Avoid excessive shadows.

Use cards for: client summaries, metrics, recommendations, automation opportunities, website assessments, tasks, project status, reports.

## Forms

Forms should be simple and highly readable. Use:
- Labels above fields
- Consistent field height
- Clear required field indicators
- Helpful placeholder text where appropriate
- Inline validation
- Helpful error messages
- Clear section grouping

Recommended field height: 40–44px. Recommended corner radius: 8px.

Required fields should use an asterisk and accessible labeling. Avoid extremely long single-page forms — break longer intake forms into logical sections or steps.

## Form Sections

Group information into clearly labeled areas, e.g.: Business Information, Contact Information, Website Presence, Marketing & Lead Generation, Sales Process, Customer Communication, Current Technology, Automation Needs, Goals & Priorities, Budget & Timeline, Internal Notes.

Use section descriptions where clarification is helpful.

## Tables

Tables should support fast scanning. Include when appropriate: search, filters, sortable columns, pagination, sticky headers, row actions, status badges.

Use clear row separation. Do not overcrowd tables with unnecessary columns — move secondary information into detail views when appropriate.

## Status Badges

Use status badges consistently. Recommended statuses: New, Discovery, Needs Review, Assessment Complete, Recommendation Ready, Proposal Ready, Proposal Sent, Approved, In Build, Testing, Waiting on Client, On Hold, Complete.

Every badge should include text. Never rely on color alone.

## Client Onboarding Progress

Use a stepper or progress indicator. Recommended stages:
1. Client Intake
2. Discovery
3. Website Assessment
4. Automation Assessment
5. Recommendations
6. Proposal
7. Approval
8. Implementation
9. Testing
10. Handoff
11. Ongoing Support

Clearly show completed steps, current step, and upcoming steps.

## Information Hierarchy

The application must visually distinguish between:
- **Client-Provided Information** — information directly provided by the client
- **Internal Team Notes** — observations, commentary, and analysis entered by Scale AI Pros staff
- **AI-Generated Recommendations** — suggestions generated by the system or AI
- **Approved Implementation Decisions** — solutions or recommendations formally approved for implementation

Do not visually present AI-generated recommendations as confirmed client requirements. Use labels, icons, badges, or section headers to make the source of information clear.

## Dashboard Design

Use clean dashboard cards and summary panels. The primary client dashboard should provide visibility into: client name, business name, client status, onboarding progress, website status, automation opportunities, priority recommendations, open tasks, missing information, outstanding client actions, proposal status, implementation status, GoHighLevel integration status, next recommended action.

Do not overload dashboards with unnecessary charts. Prioritize actionable information.

## Icons

Use one consistent icon library. Preferred: **Lucide Icons**.

Icons should support understanding, remain visually consistent, use similar stroke weight, and be used alongside text for important actions. Do not rely on icons alone for critical navigation.

## Modals and Side Panels

Use modals for: confirmations, small focused tasks, warnings, quick actions.

Use side panels/drawers for: quick client edits, notes, activity history, recommendation details, task details.

Avoid forcing users to leave their current screen for simple edits.

## Confirmation Dialogs

Require confirmation before destructive actions such as: delete client, delete assessment, remove integration, delete proposal, clear information, cancel implementation.

Clearly describe what will happen.

## Toast Notifications

Use short toast notifications for: saved successfully, updated successfully, integration connected, recommendation generated, proposal created, error occurred.

Toast notifications should disappear automatically unless user action is required.

## Empty States

Never display an unexplained blank section. Provide useful empty-state messaging.
Example: *"No automation opportunities have been identified yet. Complete the Automation Assessment to generate recommendations."*
Include a relevant action where appropriate, e.g. `[Start Assessment]`.

## Loading States

Provide clear loading indicators for: AI generation, report generation, GoHighLevel synchronization, client data loading, assessments, proposal generation.

Use skeleton loaders where appropriate. Do not allow users to repeatedly trigger the same action while processing.

## Error States

Errors should explain: what happened, whether data was saved, what the user should do next. Avoid technical error messages when a plain-language explanation is possible.

## Responsive Design

Primary optimization: desktop. Also support tablet and mobile.

Desktop should provide the richest workflow. Tablet and mobile should maintain access to essential functions. Navigation should collapse appropriately on smaller screens.

## Accessibility

Target WCAG 2.1 AA compliance. Include: strong color contrast, keyboard navigation, visible focus states, proper form labels, alt text, accessible buttons, accessible table headers, screen reader-friendly navigation, descriptive error messages.

Never communicate critical information using color alone.

## Search and Filtering

Where appropriate, provide search and filters for: clients, assessments, tasks, proposals, projects, recommendations, automation opportunities.

Filters should remain easy to clear. Show active filters.

## Reports

Reports should use Scale AI Pros branding and include: Scale AI Pros logo, client name, report title, date, clear section headings, recommendations, priority indicators, next steps.

Reports should be visually suitable for presenting directly to clients.

## Print and PDF Output

Create separate print/PDF styling. Do not simply print the application screen.

PDF documents should: use white backgrounds, include Scale AI Pros branding, use consistent typography, use page headers and footers where appropriate, avoid navigation elements, avoid application controls, maintain professional spacing, handle page breaks correctly.

## AI-Generated Content

AI-generated information should clearly show that it is a recommendation or draft. Examples: AI Recommendation, Suggested Automation, Draft Recommendation, AI-Generated Opportunity.

Users should be able to accept, edit, reject, or regenerate. AI-generated content should never automatically become an approved implementation requirement.

## Priority Levels

Use consistent priority labels: Critical, High, Medium, Low. Priority should include text and visual indication.

## Automation Opportunity Cards

Each automation opportunity should display: opportunity name, business problem, current process, recommended automation, expected benefit, estimated impact, priority, complexity, recommended platform, GoHighLevel applicability, estimated implementation effort, status.

## Website Assessment Cards

Website assessments should clearly identify: no website, website exists, refresh recommended, rebuild recommended, website acceptable, landing page only, e-commerce, WordPress, other platform.

Assessment areas may include: visual design, navigation, mobile responsiveness, accessibility, calls to action, lead capture, forms, SEO, performance, branding, content, integration capability, automation opportunities.

## GoHighLevel Integration Display

Clearly show GoHighLevel integration status. Recommended statuses: Not Connected, Connection Available, Connected, Syncing, Sync Complete, Sync Error.

Display relevant integration opportunities such as: contacts, opportunities, pipelines, calendars, forms, surveys, workflows, email, SMS, voice AI, chat, reputation management, funnels, websites.

Do not expose technical API details unless the user is in an administrator/developer view.

## Role-Based Interface

Plan the design so different users can eventually have different permissions. Examples: Administrator, Consultant, Project Manager, Technical Team, Sales, Read Only.

Hide actions users do not have permission to perform.

## Activity History

Maintain a clear activity history where appropriate. Track items such as: client created, assessment completed, recommendation generated, recommendation approved, proposal generated, proposal sent, integration connected, project status changed, notes added.

Show: action, user, date, time.

## Date and Time Formatting

Use consistent date formatting. Preferred: `August 10, 2026`. For compact displays: `Aug 10, 2026`. Include time only when relevant.

## Naming Conventions

Use clear business-friendly terminology. Prefer: Client, Assessment, Recommendation, Opportunity, Solution, Implementation, Project, Next Action. Avoid unnecessary technical terminology.

## Content Style

Application language should be: professional, clear, concise, consultative, action-oriented, easy for nontechnical users to understand. Avoid unnecessary jargon. When technical terminology is required, provide short explanations.

## Consistency Requirement

Maintain the established Scale AI Pros design system throughout every module. Do not create a new visual style for individual modules.

All screens, forms, dashboards, reports, modals, tables, buttons, typography, colors, spacing, navigation, status indicators, icons, and responsive behavior must remain visually consistent with previously developed modules.

## Component Reuse Requirement

Create reusable UI components instead of recreating similar interfaces. Reusable components should include: buttons, input fields, dropdowns, cards, status badges, tables, modals, side panels, alerts, toast notifications, client headers, progress indicators, page headers, navigation items, empty states, loading states.

Future modules should reuse these components.

## Design Principle

The user should be able to look at any screen and quickly understand:
1. Which client they are working with.
2. Where the client is in the onboarding process.
3. What has already been completed.
4. What still needs attention.
5. What Scale AI Pros recommends.
6. What the client has approved.
7. What the next action should be.

The interface should prioritize clarity, workflow progression, and actionable information over decoration.
