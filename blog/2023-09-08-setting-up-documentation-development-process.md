---
title: "HowTo: Set up Docs-as-Code on your project"
description: Learn about documentation development process and how to set it up on your project
last_update: 
  date: 9/8/2023
authors:
  - name: Vadym Sachenko
    title: Author, creator, and owner of TechWriteIt
    url: https://github.com/VadymSachenko
    image_url: https://github.com/VadymSachenko.png
hide_table_of_contents: false
tags:
  - docs-as-code
  - DDLC
  -  medium
---

In my previous post [Docs-as-Code methodology and advantages](/blog/2023-09-07-docs-as-code-methodology-and-advantages.md), I explained what the docs-as-code methodology is and its advantages over a traditional documentation process. In this article, I want to dive deeper into this topic and show you a real example of how the Docs-as-Code approach can be set up and integrated into a project.

## Prerequisites

Tooling used on projects may differ, but they are always similar. For this example, I'll use the following:
* Jira
* GitHub
* VS Code

## Determining document types

First, you need to determine all possible types of documents within your project that your team delivers. When you have the whole list on paper, divide these into categories, by target audience.

### Example

Let's consider an example where the team delivers the following documents:

* User documentation: feature overviews and user guides.
* Developer documentation: migration, integration, and installation guides and API documents.

After you divide documents into categories, you need to classify them by the roles responsible for writing these documents.
In this case, developers create installation and integration guides, whereas technical writers write API and migration documents and also take care of feature overviews and user guides.


## Setting up a documentation development process

When you know the delivered types of documents, you can set up a documentation development process. This can be achieved only by analyzing different ways of delivering documents, and then choosing the appropriate one for your team, time and effort wise. 

### Example: developer and user guides

For example, if an epic adds a feature that lets Back Office users create discount vouchers for customers and you, as a technical writer, need to write a respective guide, the best way might be to test all this on your own. On the contrary, if the epic requires a technical document, like integration or installation guides, which require running a bunch of commands and adding code examples, modules, and dependencies, then developers are held responsible for these kinds of documents.
Each documentation type may require a different documentation development process; In this case, you need to set up a separate Jira workflow for each document type. 


Let's get back to the example from the preceding [Determining document types](#determining-document-types) section. The project needs to deliver developer and user documents, which require different documentation development processes. Also, we jsut fugired out the most appropriate way to produce documentation. Based on this, here's how a general workflow may look like:

* Developer documentation: `New` => `In Progress` => `Dev review` => `PO review` => `TW peer review` => `Published`.
* User documentation: `New` => `In Progress` => `Dev review` => `PO review` => `TW peer review` => `Published`.

The following is a dedsripton of each step:

* `New`: The documentation ticket is created.
* `In progress`: The document is in progress.
* `Dev review`: The document is reviewed and approved by a developer. 
* `PO review`: The document is reviewed and approved by a product owner (PO).
* `Ready for TW peer review`: The document is reviewed and approved by another technical writer.
* `Published`: The document is published, and the documentation ticket is closed.

:::info Tailor steps to your needs

The preceding process involves only general steps, so you may need to break steps into substeps or add new ones to meet your project requirements.

For example, you can extend the developer documentation process steps as follows: 

`New` > `In progress` > `Ready for dev peer review` > `In dev peer review` > `Ready for PO review` > `In PO review` > `Ready for TW peer review` > `Ready for publishing` > `Published`.

:::

someone responsible for the whole epic, usually a product owner (PO) or product manager (PM) should review documentation tickets to make sure that both are needed. Sometimes, epics may not require documentation, Such documents must be clossed immediately after the ticket is generated.


## Exploring the development process

To be able to integrate your documentation developments steps, you need to understand the development process within your team and then find the most appropriate place for integrating a documentation step into it.

### Example:

Let's consider a situation when a development process has the following workflow:

`New epic` > `In progress` > `Code review` > `Testing` > `Architectural review` > `Demo` > `Ready for release` > `Done`

* `New epic`: A new epic is created, and the scope of work is defined; Epic splits into smaller tasks that are assigned to the team. 
* `In progress`: The epic is developed.
* `Code review`: After the development phase comes to an end, code review is done.
* `Testing`: Quality Assurance (QA) team tests code and reports bugs, and dev team fixes reported bugs.
* `Architectural review`: An architect does a final review.
* `Demo`: A team member (usually QA) conducts Demo to show stakeholders that the development is workable and can be released.
* `Ready for release`: The team does final preparations to release the epic.
* `Done`: All tasks have been closed and thus the epic has been shipped to production.


You need to look into each step and examine all possible details—for example, what each status means, what piece of work lies within, and who stays behind each step. 

## Integrating documentation process

When you know and understand all stages and specifics of the development process, determine and decide at what step documentation tickets should be created.
Then, hand over the complete list of requirements to your Jira administrator to set up an automatic documentation ticket generation per each document type. 

:::tip "Start documentation as early as possible"

As a rule, documentation should be created as early as possible in order not to detain the release. Therefore, the most appropriate choice is when an epic gets in progress—this is when everyone starts working on their tasks. Even though depending on the document type, the stage when documentation tickets are picked up and processed may vary, they always can wait for the right moment to come.

Also, note that the documentation process must be configured to restrict closing epic without ready-to-go documentation. Documentation is an important part of the whole development process, without it being delivered the released feature should be considered incomplete.

:::


After you have the ticket generation process enabled, each time a new epic gets in progress, there will be two types of documentation tickets generated:
* Developer documentation.
* User documentation.

