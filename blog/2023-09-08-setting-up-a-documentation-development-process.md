---
title: "HowTo: Setting a documentation development process"
description: Learn about the documentation development process and how to set it up on your project.
last_update: 
  date: 9/11/2023
authors:
  - name: Vadym Sachenko
    title: Author, creator, and owner of TechWriteIt
    url: https://github.com/VadymSachenko
    image_url: https://github.com/VadymSachenko.png
hide_table_of_contents: false
tags:
  - docs-as-code
  - DDLC
  - medium
---

In this article, I want to delve deeper into setting up a documentation development process and provide a real example of how to integrate it into your project's development process.

## Determining document types

First, you need to identify all potential document types that your team delivers within your project. You can achieve this by conducting a series of interviews with your team members, including product owners, tech leads, architects, developers, and quality assurance engineers.

### Example

Let's consider an example where the team delivers the following documents: feature overviews, user guides, API documents, migration guides, integration guides, and installation guides. In this case, the documentation can be categorized into two groups:

* **User documentation**: Feature overviews and user guides.
* **Technical documentation**: Migration guides, integration guides, installation guides, and API documents.

## Determining responsible teams

Once you have a comprehensive list of required documents, you need to discuss and align which team members will be responsible for writing each type of documentation.

In this scenario, developers are accountable for creating installation and integration guides, while technical writers handle API and migration documents, as well as feature overviews and user guides. Therefore, you have two groups of responsible individuals:

* **Technical writers**: API documents, migration guides, feature overviews, and user guides.
* **Developers**: Installation and integration guides.

## Setting up a documentation development process

After identifying the document types and assigning specific teams, you can establish a documentation development process. Your goal here is to analyze each document type and determine the most efficient approach for delivery.

### Example

If an epic introduces a feature that enables Back Office users to create discount vouchers for customers, the best approach might be to test the feature and then write a corresponding user guide. In this case, a technical writer can handle it independently. Conversely, if the epic involves technical documents, such as integration or installation guides that require running multiple commands and incorporating updated code examples, modules, and dependencies, developers should be responsible for these documents.

Consequently, for each document type requiring a distinct documentation process, you need to establish a separate workflow.

Returning to the example from the previous [Determining Document Types](#determining-document-types) section, the project encompasses two document groups: technical and user. Each group necessitates its documentation process. In this scenario, a general workflow for each group may look like this:

* **Technical documentation**: `New`&nbsp;<span aria-label="and then">&rarr;</span> `In Progress`&nbsp;<span aria-label="and then">&rarr;</span> `Dev Review`&nbsp;<span aria-label="and then">&rarr;</span> `PO Review`&nbsp;<span aria-label="and then">&rarr;</span> `TW Peer Review`&nbsp;<span aria-label="and then">&rarr;</span> `Published`
* **User documentation**: `New`&nbsp;<span aria-label="and then">&rarr;</span> `In Progress`&nbsp;<span aria-label="and then">&rarr;</span> `PO Review`&nbsp;<span aria-label="and then">&rarr;</span> `TW Peer Review`&nbsp;<span aria-label="and then">&rarr;</span> `Published`

| STATUS           | DESCRIPTION                                           |
|------------------|-------------------------------------------------------|
| `New`            | The documentation ticket is created.                  |
| `In Progress`    | The document is in progress.                          |
| `Dev Review`     | The document is reviewed and approved by a developer or architect. |
| `PO Review`      | The document is reviewed and approved by a product owner (PO) or product manager (PM). |
| `TW Peer Review` | The document is reviewed and approved by another technical writer from the team (TW). |
| `Published`      | After the document receives all approvals, it is published. |

:::info Tailor steps to your needs

The aforementioned process includes only general steps, so you may need to break these steps into sub-steps or introduce new ones to meet your project requirements.

For example, you can expand the documentation process steps as follows: 

`New`&nbsp;<span aria-label="and then">&rarr;</span> `In Progress`&nbsp;<span aria-label="and then">&rarr;</span> `Ready for Dev Peer Review`&nbsp;<span aria-label="and then">&rarr;</span> `In Dev Peer Review`&nbsp;<span aria-label="and then">&rarr;</span> `Ready for PO Review`&nbsp;<span aria-label="and then">&rarr;</span> `In PO Review`&nbsp;<span aria-label="and then">&rarr;</span> `Ready for TW Peer Review`&nbsp;<span aria-label="and then">&rarr;</span> `Ready for Publishing`&nbsp;<span aria-label="and then">&rarr;</span> `Published`.

:::

## Exploring and integrating the development process

Now that you've established your documentation development process, you need to integrate it into the development process workflow. To do this, you should examine your team's development process workflow in detail and identify the most suitable point for integration. Analyze each step, understand the significance of each workflow status, the responsible parties, and the tasks involved.

Once you have a thorough understanding of the development process, you can determine when documentation tickets should be created. Subsequently, provide the list of requirements to your Jira administrator to automate the generation of documentation tickets for each document type.

### Development process example

Let's consider a scenario where the development process follows this workflow:

`New Epic`&nbsp;<span aria-label="and then">&rarr;</span> `In Progress`&nbsp;<span aria-label="and then">&rarr;</span> `Code Review`&nbsp;<span aria-label="and then">&rarr;</span> `Testing`&nbsp;<span aria-label="and then">&rarr;</span> `Architectural Review`&nbsp;<span aria-label="and then">&rarr;</span> `Demo`&nbsp;<span aria-label="and then">&rarr;</span> `Ready for Release`&nbsp;<span aria-label="and then">&rarr;</span> `Done`

| STATUS              | DESCRIPTION                                                               |
|---------------------|---------------------------------------------------------------------------|
| `New Epic`          | A new epic is created, and the scope of work is defined; the epic is divided into smaller tasks assigned to the team. |
| `In Progress`       | The epic is in development.                                              |
| `Code Review`       | After completing the development phase, a code review is conducted.       |
| `Testing`           | The Quality Assurance (QA) team tests the code, reports bugs, and the dev team resolves reported bugs. |
| `Architectural Review` | A final review is conducted by an architect.                             |
| `Demo`              | A team member (typically QA) conducts a demo to demonstrate the functionality to stakeholders. |
| `Ready for Release` | The team prepares for the epic's release.                                 |
| `Done`              | All tasks are closed, and the epic is shipped to production.              |

Documentation should be initiated as early as possible to avoid delaying the release. Therefore, the most appropriate time to begin documentation might be when an epic enters the `In Progress` phase, as this is when all team members start working on their respective tasks. Depending on the document type, the stage at which documentation tickets are picked up and processed may vary, but they should always be ready for the right moment.

:::tip Don't close epics without delivered documentation

Consider configuring your documentation process to prevent closing an epic without published documentation. Documentation is a vital part of the overall development process, and the release should be considered incomplete without it.

:::

When the documentation step is integrated into the development process, it will follow this workflow:

1. When an epic transitions from `New` to `In Progress`, documentation tickets are automatically created.
2. The PO or PM decides which documents need to be created or updated based on the epic. They update ticket descriptions to specify the required documentation and close redundant tickets.
3. The technical writer and development teams assign the relevant documentation tickets and follow the documentation development workflows.
4. Once all documentation and development tickets are resolved, the epic can be closed.

## Conclusion

In this article, we've explored the essential steps to establish a documentation development process and seamlessly integrate it into your project's development workflow. By following these guidelines, you can ensure that your technical documentation meets the needs of your project and its stakeholders.

Key takeaways from this discussion include the folliwing points:

1. **Determining document types**: Begin by identifying all the different types of documents required for your project, ranging from user guides to technical specifications.
2. **Determining responsible teams**: Assign responsibilities to the appropriate team members based on their expertise. All team members play vital roles in documentation.
3. **Setting up a documentation development process**: Establish a clear and efficient workflow for creating, reviewing, and publishing documentation tailored to each document type.
4. **Exploring and integrating the development process**: Seamlessly integrate documentation into your project's development process to ensure documentation aligns with the development timeline.

By implementing these practices, you can streamline your documentation process and improve collaboration among team members, ultimately resulting in high-quality documentation that enhances your project's success.

Remember that documentation is not just an afterthought but an integral part of your project's lifecycle. Starting documentation early and integrating it into your development process will help ensure your project is complete, well-documented, and ready for success.