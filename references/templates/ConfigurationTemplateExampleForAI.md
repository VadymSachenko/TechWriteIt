```markdown
---
title: Template {TEMPLATE_NAME} configuration parameters
description: Learn about configuration parameters of the {TEMPLATE_NAME} template
last_update:
  date: {CURRENT_DATE}<!-- format d/m/yyyy, for example, 4/10/2025-->
---

This document explains the configuration parameters of the `{TEMPLATE_NAME}` template, including detailed descriptions, example values, and visual examples of how the configurations appear on screens.

<details>
<summary>Template {TEMPLATE_NAME} example</summary>

![Template {TEMPLATE_NAME} example](/docs/wellfunnel-studio/templates/working-with-templates/template-{TEMPLATE_NAME}/{TEMPLATE_NAME}-configuration-parameters.md/{TEMPLATE_NAME}.png)
<!--
Replace {TEMPLATE_NAME}:
- Everywhere except file and image paths, use the original template name with underscores—for example, t__product_select_body.
- In file and image paths, use the template name in a dash-separated format. Example: for t__product_select_body, it's template-t-product-select-body.

Example:

<details>
<summary>Template t__demo_template example</summary>

![Template t__demo_template example](/docs/templates/template-t-demo-template/t-demo-template-configuration-parameters.md/t-demo-template.png)

</details>
-->

</details>

{HEADING_LEVEL} {CONFIG_TITLE} {ENITITY_TYPE}

<!--
Replace {CONFIG_TITLE} with the respective title of the configuration section or field taken from the JSON file. The letter case must be inherited from the JSON file's title parameter value and can't be changed to fulfil the style guide rules.

Replace {ENITITY_TYPE} with the type of the configuration. For objects and arrays, use "block". For objects/arrays whose title already contains "block" or for strings and properties, ignore this placeholder.

Replace {HEADING_LEVEL} with the appropriate heading level:
- For the first main object, use H2 headings (##).
- For the following child items, reduce the heading level by 1 step based on the JSON structure.
- If the final document would end up having more than four heading levels (####), then:
  - Make H3 (###) become H2 (##).
  - Make H4 (####) become H3.
  - H2 remain H2.

For properties of arrays and objects, use one level lower than their parent’s heading.

Examples:

For this object, we have "## t__demo_template block" and "### Title text":

{
  "title": "t__demo_template",
  "type": "object",
  "required": [],
  "properties": {
    "$title": {
      "type": "string",
      "title": "Title text"
    },
    ...
  }
}


For this array, we have:
- "## Variations",
- "### Text row",
- "#### Left part text":

{
  ...
  "mainBlock": {
    "type": "array",
    "title": "Variations",
    "items": {
      "type": "object",
      "title": "Text row",
      "properties": {
        "$leftText": {
          "type": "string",
          "title": "Left part text"
        },
        ...
      }
    }
  }
}

-->

--- <!--Add the splitting line for objects and arrays only-->

- **Description:** {DESCRIPTION}
<!--
Replace {DESCRIPTION} with a description generated based on the provided info.

For objects and arrays:
  - Don't use "- **Description:**". Start right away from the description tag.
  - Start with "The **{CONFIG_TITLE}** {ENITITY_TYPE} {VERB}"
    - Examples: lets you configure…, creates…, manages…, etc.
  - Provide a 2–3 sentence summary of what it controls.
  - Example: "The **t__demo_template** block lets you configure a single score row consisting of a title, color, and score logic. This row contributes to a total score calculation and can be used in combination with other rows or templates like `t__user_level_feedback` to display user-specific outcomes."

For strings or properties:
  - Do NOT use {CONFIG_TITLE} directly in the description.
  - Describe what this specific item is responsible for. Start from a verb in the imperative form or past simple.
    - Examples: "Sets", "Lets you...", Used for…", "Defines…", etc.
  - If {CONFIG_TITLE} is connected to another {CONFIG_TITLE}, refer to it in brackets.
  - Example: "Checkbox responsible for the visibility of a divider line under [Total block](#total-block). If selected, the divider line is displayed."
-->
- **Format:** {FORMAT}
<!--
Replace {FORMAT} with one of the following (if applicable). If none fit, mention the custom format in {DESCRIPTION} and REMOVE this "- **Format:**" line.

Possible values:
- Text
- Number
- CDN URL
- HEX color code
- Drop-down list with the following options:
    - **{ENUM_VALUE_1}**: {ENUM_DESCRIPTION_1}
    - **{ENUM_VALUE_2}**: {ENUM_DESCRIPTION_2}
    - ...
    - **{ENUM_VALUE_N}**: {ENUM_DESCRIPTION_N}

If it's "enum": [true, false], remove the "**Format:**" line. Instead, handle it in the **Description** (explain what happens when true or false).

Examples:
- **Format:** Text
- **Format:** Number
- **Format:** HEX color code
- **Format:** Dropdown with the following options:
  - **caption-small**: 10&nbsp;px
  - **small-text**: 14&nbsp;px
  - **caption**: 12&nbsp;px
-->

- **ICU support:** ✅<!--Include this line only when "**Format:** Text." Otherwise, remove it.-->
- **Translation support:** ✅<!--Include only when "**Format:** Text." Otherwise, remove it.-->
- **Example values**: {EXAMPLE_VALUES}
<!--
Replace {EXAMPLE_VALUES} with example values. Don't embrace example values in quotes. Only include "**Example values**" if one of these formats applies:
- **Format:** Text
- **Format:** HEX color code
- **Format:** CDN URL

- For "HEX color code": Provide values like `#000000`, `#FFFFFF`.
- For "CDN URL": Use a path like:`https://example-cdn.com/assets/{config-title-lowercase-dash-separated}.webp`
  - Example: `https://example-cdn.com/assets/icon-after-text.webp`
- For "Text": Provide a short sentence in backticks. Example: `"Please agree to our terms."`
-->

<details>
<summary>{CONFIG_TITLE} example</summary>

![{CONFIG_TITLE} example](../../../../../static/docs/wellfunnel-studio/templates/working-with-templates/template-{TEMPLATE_NAME}/{TEMPLATE_NAME}-configuration-parameters.md/{CONFIG_TITLE}-example.png)
<!--In the image path, use {CONFIG_TITLE} in a dash-separated format. Example: checkout-title -->

</details>

For instructions about adding files to the CDN server, see [Add files to CDN server](/docs/features/add-files-to-cdn-server.md).
<!--Add this line only if the first format item is a CDN URL. Otherwise, remove it.-->

For information about image compression specifics, see [Image compression through Back Office interface](/docs/back-office/other/image-compression-through-back-office-interface.md).
<!--Add this line only if the first format item is a CDN URL. Otherwise, remove it.-->

## Related documents

- [Configure {TEMPLATE_NAME}](/docs/templates/template-{TEMPLATE_NAME}/configure-{TEMPLATE_NAME}.md)
```