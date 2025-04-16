---
title: "Use cases for AI: Ger a personalized style guide linting tool"
description: This use case explain how to create a personalized style guide linting tool using AI. 
last_update: 
  date: 4/10/2025
---

import ConfigurationTemplate from '@site/references/templates/ConfigurationTemplateExampleForAI.md';
import RawTemplateExample from '@site/references/templates/RawTemplateExample.md';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In this article, I want you to show you a use case of how you can create a templte for your preffered AI tool to proofread and write dococuments according to [Google developer style guide](https://developers.google.com/style) and a specific template.

## Intro words

Writing of overviews, summaries, user guides, release notes, and feature overviews is probably one of the most popular ways AI tools such as ChatGPT, Claude, Gemini are used by tech writers.
However, they just can't "git clone" your minds and intsanly provide you the output you want. 
Therefore, this article shares a specific use case with specific steps that explains how you can use an LLM tool to generate documents for you if they have similiar structure.  

## Use case scemario

Your company regularly creates dozens of templates, which are available in Back Office. Your marketing team uses these templates to create visually appealing HTML pages.
Depending on the team's marketing strategy they choose and configure these templates in the back office: upload images, add texts and colors, set up rules for dynamicaly changing text, and so on.
Some confiurations are straighforward, while others are move sophisticated, have dependencies from other tempates, limitation, and edge cases that are not obvoius, especially to newcomers.

As a technical writer, to write documentation explaining configuration fields, exceptions, and behavior specifics for each template, you gather the following information:
- JSON file defining a template's structure in the Back Office and configuration field headings.
- Information from Jira tickets—each template has one of several tickets containing all information needed for writing the document
- Screenshots with Back Office configurations and how they look when configred and rendered on an HTML page.
- Subject-matter expert interview, where they cover key points, specifics, and edge cases of the template configuration. 

In this scenario, your steps would be as follows:
1. Prepare first document
2. Create a template for ChatGPT
3. Upload all necessary files
4. Test and refine the prompt

These steps are covered in details in the following sections.

### 1. Prepare first document

Create the first demo document and get approval from your team. 
The document must be complete and cover all aspects:
- **Finalized structure**: Think thorough all the structure details: introduction, prerequisites, notes, screenshots, configuration steps, reference links.
- [TODO: add two more points]

### 2. Prepare a template

To get documents with the desired structure, create a markdown template so that AI can use it to generate documents.
Preparing a good template is a time-consuming process because you need to think through all the everything. It's like a detailed guide for the AI that covers all steps in details. 
Recommended approach is to take your document, go through it line by line, leaving detailed instructions and adding examples and placeholders where you want AI to replace or add something specific. 

Here're are general rules you need to follow to write good template:

- **Use placeholders:** If the document has a static text where only part of it needs to change, use placeholders indicating the dynamic word or phrase, followed by explanation which values should it be replaced with. Use one placeholder for the same word or phrase. For example, the following sentence has a placeholder that indicates that the AI must replace it with a template name: `This document describes Back Office configs of the {TEMPLATE_NAME} template. Replace {TEMPLATE_NAME} with a template name from the input data. Example: demo_config`,
- **Provide examples of desired output:** Upload your document so that the model can put everything together and thus have a more complete understanding of what you want. Example: `The attached markdown document describes Back Office configs of the demo_config template.`
- [TODO: Add two more points. For this, analyze the references/templates/ConfigurationTemplateExampleForAI.md ]

### 3. Write a prompt 

Once the template is ready, prepare a prompt that gives the AI step-by-step instructions clearly explaining. Here are general rules to have a good propt:

- **Clarify Your Goal:** Start by stating the exact outcome you want. If you need a specific document format, highlight that before anything—`the output must be a markdown code block opened using four backticks`.
- **Provide Relevant Context:** Explain the use case and why the output matters. Mention or upload any background information references, such as conversations, images, or specific requirements the AI should factor in. `Incorporate all relevant details from the attached JSON schema, images, and transcript`.
- **Upload a tempate:** Most important steos is to provide a Markdown template and point the AI to it explicitly. For example, `Follow the structure and rules from the uploaded configuration_parameters_template.md markdown sample file.`
- **Exclicidly State the goal:**
**Ask for Clarifications:** Instruct the AI to request more details if needed. This helps ensure no critical information is overlooked. For example, `Confirm any clarifications you need before starting`.


### 4. Upload task-related files

Provide the AI with all necessary information so that it has context for filling out the template: a JSON schema, descriptions of Jira tickets, interview transcription, screenshots, and so on. Ensure that the data is consistent and up to date. 

### 5. Test and refine the prompts

Having a good propt doesn't guarantee desired result. Therefore, test the propts, check the results and make sure that the genretated documents meets your expectations.
If not, try to figure out what's wrong and why. Probably it requires additional clarification and you missed out something in a template.



## Example prompt, template and result


This section shows demo prompt and output

### Prompt example

**Prompt text:**

```markdown
Create a single Markdown file named t-demo-config.md.Incorporate all relevant details from the attached JSON schema, images, and transcript.
Your goal is to document the configuration parameters for the demo_config template following the structure and rules from the uploaded configuration-template.md markdown sample file.
Please confirm any clarifications you need before starting.
```

**Attached files:** 
- JSON schema, info from Jira tickets
- Screenshot of a rendered template
- Sreenshot of the template's configuration fields in the Back Office.

**Template:**

<details>
<summary>Click to view template example</summary>

<ConfigurationTemplate />


</details>

### Response example

<Tabs>
  <TabItem value="raw" label="Raw text" default>

<RawTemplateExample />

  </TabItem>
  <TabItem value="rendered" label="Rendered template">

![Rendered template](/ai-technical-writing/ai-use-case/ai-use-case-writing-docs-from-templates.md/rendered-template-example.png)

  </TabItem>
</Tabs>
