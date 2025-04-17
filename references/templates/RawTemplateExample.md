```markdown
---
title: Template t__demo_template configuration parameters
description: Example documentation showing how a typical template might be documented
last_update:
  date: 4/14/2025
---

This document explains the configuration parameters of the `t__demo_template` template, including descriptions, example values, and visual references to how the configurations might appear.

## t__demo_template block
---

The **t__demo_template** block allows you to define feedback screens and text parameters for displaying a user’s resulting score. It controls the main score label text, title size, text alignment, and additional variations for different score ranges.

### Title text

- **Description:** Sets the title label that appears as the main score indicator.  
- **Format:** Text  
- **ICU support:** ✅  
- **Translation support:** ✅  
- **Example values**: `total score`

### Title size

- **Description:** Determines the heading size for the score variations’ title. It applies to all score variation headings.  
- **Format:** Dropdown list with the following options:
  - **h3**: Large heading, 24px
  - **h4**: Medium heading, 20px
  - **h5**: Small heading, 16px

### Text alignment

- **Description:** Defines how the score variation title and subtitle are aligned.  
- **Format:** Dropdown list with the following options:
  - **left**: Align content to the left
  - **center**: Center the content

### Score variations
---

The **Score Variations** block lets you define several result screens triggered by the user’s final score.

#### Score to trigger

- **Description:** Sets the threshold at which this variation activates.  
- **Format:** Number  
- **Example values**: `10`, `50`

#### Screen title

- **Description:** Defines a heading shown on the result screen for this particular score range.  
- **Format:** Text  
- **ICU support:** ✅  
- **Translation support:** ✅  
- **Example values**: `"Your  level is beginner"`

#### Screen subtitle

- **Description:** A short descriptive subtitle shown under the main title in this variation’s feedback screen.  
- **Format:** Text  
- **ICU support:** ✅  
- **Translation support:** ✅  
- **Example values**: `Results are calculated based on recent activity.`

#### Label icon

- **Description:** An optional icon displayed beside the screen title for this variation.  
- **Format:** CDN URL  
- **Example values**: `https://example-cdn.com/assets/label-icon-example.webp`

#### Score explanation

- **Description:** Displays a short explanation or summary related to the user’s score for this variation.  
- **Format:** Text  
- **ICU support:** ✅  
- **Translation support:** ✅  
- **Example values**: `We'll personalize your training based on your final score.`

## Related documents

- [Configure t__demo_template](/docs/templates/configure-t-demo-template.md)
```