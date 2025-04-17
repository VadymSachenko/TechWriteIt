---
title: "AI use case: Generate documentation with AI"
description: Learn how to use AI tools like ChatGPT to generate consistent documentation. This article provides a step-by-step guide with examples for documenting template parameters, settings, and edge cases.
last_update: 
  date: 4/16/2025
---

import RenderedTemplateExample from '@site/references/templates/RenderedTemplateExample.md';
import ConfigurationTemplate from '@site/references/templates/ConfigurationTemplateExampleForAI.md';
import RawTemplateExample from '@site/references/templates/RawTemplateExample.md';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Writing overviews, summaries, user guides, release notes, and feature overviews is one of the most popular ways technical writers use AI tools such as ChatGPT, Claude, and Gemini.
However, AI cannot yet scan your mind and instantly generate the desired output. To achieve the results you want, you need to provide clear instructions and structure. This article demonstrates how to do this by walking you through a practical use case of using ChatGPT for technical documentation. You'll learn how to:
- Create templates for consistent document structure
- Write effective prompts that guide the AI
- Prepare and organize supporting materials
- Test and refine the AI's output

The article includes a real-world example of documenting template configurations, complete with a sample prompt and template. Whether you're documenting software features, API endpoints, or configuration parameters, these techniques will help you maintain consistency across your documentation.

## Use case scenario: AI-powered documentation templates

Your company regularly creates dozens of templates, which are available in Back Office. Your marketing team uses these templates to create visually appealing HTML pages.
Depending on the team's marketing strategy they choose and configure these templates in the back office: upload images, add texts and colors, set up rules for dynamically changing text, and so on.
Some configurations are straightforward, while others are more sophisticated, have dependencies from other templates, limitations, and edge cases that are not obvious, especially to newcomers.

As a technical writer, to document configuration fields, exceptions, and behavior specifics for each template, you gather all information about a new template, which may include the following:
- JSON file defining a template's structure in the Back Office and configuration field headings
- Information from Jira tickets—each template has one or several tickets containing all information needed for writing the document
- Screenshots of Back Office configurations and how they look when configured and rendered on an HTML page
- Subject-matter expert interviews covering key points, specifics, and edge cases of the template configuration

In this scenario, your steps would be as follows:
1. [Prepare the first document](#prepare-your-first-document).
2. [Create a document template for ChatGPT](#create-an-ai-documentation-template)
3. [Upload all necessary files](#upload-supporting-documentation)
4. [Test and refine the prompt](#test-and-refine-your-ai-prompts)

These steps are covered in detail in the following sections.

### Prepare your first document

Create the first demo document and get approval from your team. You'll later use it as a basis to create a template for ChatGPT.
The document must be complete and cover all aspects:
- **Finalized structure:** Think through all the structure details: introduction, prerequisites, notes, screenshots, configuration steps, and reference links.
- **Content completeness:** Ensure you've documented all configuration options, edge cases, and dependencies.
- **Visual elements:** Include relevant screenshots and diagrams showing how configurations look in both the Back Office and when rendered on the page.

### Create an AI documentation template

To get documents with the desired structure, create a markdown template for the AI to use when generating documents.
Preparing a good template is a time-consuming process because you need to think through everything. It's like creating a detailed guide for the AI that covers all steps in detail. 
The recommended approach is to take your document, go through it line by line, leaving detailed instructions and adding examples and placeholders where you want the AI to replace or add something specific.

Here are general rules to follow to write a good template:

- **Use placeholders:** If the document has a static text where only part of it needs to change, use placeholders indicating the dynamic word or phrase, followed by explanation which values should it be replaced with. Use one placeholder for the same word or phrase. For example, the following sentence has a placeholder that indicates that the AI must replace it with a template name: `This document describes Back Office configs of the {TEMPLATE_NAME} template. Replace {TEMPLATE_NAME} with a template name from the input data. Example: demo_config`,
- **Provide examples of desired output:** Upload your document so that the model can put everything together and thus have a more complete understanding of what you want. Example: `The attached markdown document describes Back Office configs of the demo_config template.`
- **Define structure rules:** Specify how headings should be formatted, what sections are required, and how content should be organized. This helps the AI maintain consistency across all generated documents.
- **Include style guide requirements:** Add specific formatting rules, such as how to format code snippets, when to use bold or italic text, and how to structure lists. You can either move out the rules into a separate document or add them under the template in the same file. This ensures the AI follows your company's [style guide](/2023-09-20-what-are-documentation-style-guides-and-why-you-should-use-them).

### Write effective AI prompts

Once the template is ready, prepare a prompt that gives the AI clear step-by-step instructions. Here are general rules for writing a good prompt:

- **Clarify your goal:**: Start by stating the exact outcome you want. If you need a specific document format, highlight that before anything—`the output must be a markdown code block`
- **Provide relevant context:** Explain the use case and why the output matters. Mention or upload any background information references, such as conversations, images, or specific requirements the AI should factor in. `Incorporate all relevant details from the attached JSON schema, images, and transcript`
- **Upload a template:** The most important step is to provide a Markdown template and point the AI to it explicitly. For example, `Follow the structure and rules from the uploaded configuration_parameters_template.md markdown sample file`
- **Ask for clarifications:** Instruct the AI to request more details if needed. This helps ensure no critical information is overlooked. For example, `Confirm any clarifications you need before starting`

### Upload supporting documentation

Provide the AI with all necessary information so that it has context for filling out the template: a JSON schema, descriptions of Jira tickets, interview transcription, screenshots, a sample document, and so on. Ensure that the data is consistent and up to date.

### Test and refine your AI prompts

Having a good prompt doesn't guarantee the desired result. Testing and refinement are crucial steps in the process. Here's how to approach this:

- **Start with a small test case:** Begin with a simple template configuration that has fewer parameters and dependencies. This helps you identify issues in the prompt without getting overwhelmed by complexity. For example, test with a basic template that has only 5-10 configuration fields before moving to more complex ones.

- **Check for common issues:**
  - **Missing information:** If the AI omits important details, add explicit instructions about what must be included. For example: "Make sure to document all edge cases mentioned in the Jira ticket."
  - **Incorrect formatting:** If the output doesn't follow your style guide, figure out what rules exactly are skipped and add more specific formatting rules to the template.
  - **Inconsistent terminology:** If the AI uses different terms for the same concept, provide a glossary of approved terms.

- **Iterate based on feedback:**
  - After each test, review the output.
  - Note what worked well and what needs improvement.
  - Update the prompt and template accordingly.
  - Test again with the same example to verify improvements.

- **Document your findings:**
  - Keep track of what changes improved the results.
  - Create a checklist of common issues to watch for.
  - Share successful prompt patterns with your team.

Remember that refining prompts is an ongoing process. As you work with different types of templates and configurations, you'll discover new ways to improve your prompts and templates.

## Example prompt, template and result

This section demonstrates the practical application of the techniques discussed in preceding sections:
- A complete prompt that incorporates all the best practices we've covered
- The template structure used to guide the AI
- The final output showing how the AI processed the information
- A comparison between the raw markdown and the rendered result

This example focuses on documenting a template configuration, but the same principles apply to other types of technical documentation.

### Prompt example

**Prompt text:**

```markdown
Create a single Markdown file named t-demo-config.md. Incorporate all relevant details from the attached JSON schema, images, and transcript.
Your goal is to document the configuration parameters for the demo_config template following the structure and rules from the uploaded configuration-template.md markdown sample file.
The output must be a markdown code block. Please confirm any clarifications you need before starting.
```

**Attached files:** 
- JSON schema, info from Jira tickets
- Screenshot of a rendered template
- Screenshot of the template's configuration fields in the Back Office

**Template:**

<details>
<summary>Click to view template example</summary>

<ConfigurationTemplate />

</details>

### Response example

<Tabs>
  <TabItem value="raw" label="Raw template text" default>

<RawTemplateExample />

  </TabItem>
  <TabItem value="rendered" label="Rendered template">

<RenderedTemplateExample />

  </TabItem>
</Tabs>

