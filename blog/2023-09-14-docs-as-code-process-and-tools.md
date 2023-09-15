---
title: Docs-as-Code process and tools
description: Learn about the Docs-as-Code methodology, integration, and tools
last_update: 
  date: 9/14/2023
authors:
  - name: Vadym Sachenko
    title: Author, creator, and owner of TechWriteIt
    url: https://github.com/VadymSachenko
    image_url: https://github.com/VadymSachenko.png
hide_table_of_contents: false
tags:
  - docs-as-code
  - medium
---

In my previous article, [Docs-as-Code Methodology and Advantages](/blog/2023-09-07-docs-as-code-methodology-and-advantages.md), I provided an overview of the Docs-as-Code methodology and its general advantages. In this article, I will delve into the specific benefits of integrating Docs-as-Code, discuss the tools used, present an example of the Docs-as-Code workflow in your team's development process, and explain the significance of Docs-as-Code tools.

## Integrating Docs-as-Code

When contemplating the documentation process and whether integration is worthwhile, it's essential to consider who will be responsible for authoring the documentation.
If this responsibility primarily falls on the shoulders of technical writers, the choice of tools may not be as critical. However, if developers are actively involved in the writing process, embracing Docs-as-Code and integrating suitable writing and publishing tools into the development workflow can yield significant advantages. By "suitable tools," I refer to developer-focused programs, tools, version control systems, and collaboration platforms. These tools are well-known to developers, enabling them to seamlessly participate in documentation production.


## What "Docs-as-Code tooling" exactly stands for

Docs-as-Code, in essence, involves applying the same principles and practices to your documentation as developers do to their code. Therefore, when referring to "Docs-as-Code tooling," I'm talking about embracing tools and approaches that are familiar to developers:

**Working with plain text files**: In Docs-as-Code, documentation is authored in plain text files, steering clear of proprietary binary formats like Adobe FrameMaker or Microsoft Word. Plain text files are more conducive to version control and collaboration.

**Leveraging static site generators**: An essential aspect of Docs-as-Code is employing open-source static site generators like Sphinx, Jekyll, or Hugo. These tools empower you to build documentation locally via the command line, a departure from commercial software like FrameMaker or Word.

**Utilizing Text Editors**: To align with Docs-as-Code principles, authors prefer text editors such as Atom or Sublime Text. These editors foster a transparent, code-like approach, in contrast to closed, proprietary tools that operate as enigmatic black boxes.

**Storing documentation in a version control repository**. Docs are stored within version control repositories, commonly Git repositories, much like how software code is managed. This approach replaces conventional storage solutions like SharePoint, Google Docs, or shared drives. In some cases, documentation may even reside in the same repository as the codebase it documents.

**Using collaborative version control platforms**: Collaboration in Docs-as-Code hinges on version control systems like Git. Writers employ the same approach as developers: branching, merging, pushing, and pulling to facilitate seamless collaboration. Technical Writers can use GitHub for Desktop to alleviate the adaptation. In this case, they don't need to work with a CLI and memorize a bunch of commands to manage documentation within a repository because GitHub for Desktop offers an intuitive user interface, which allows getting started with minimum knowledge. 

**Automated site building**: Automation is a cornerstone of Docs-as-Code. Continuous delivery pipelines automate the generation of web-ready documentation whenever changes are pushed to a specific branch. This eliminates the need for manual publishing and file transfers. 

**Validation through custom workflows and scripts**: Custom workflows and scripts play a vital role in Docs-as-Code by automating validation checks. These scripts can identify broken links, sidebar discrepancies, code owners, pull request (PR) labels, incorrect terminology, formatting discrepancies, and other errors, reducing the reliance on manual content inspection.

**Agile documentation management**: Docs-as-Code aligns documentation processes with agile development methodologies, such as Scrum. Documentation work is structured into manageable chunks, tracked in an issue management system like Jira, assigned to bi-weekly sprints, and progress is regularly reported to stakeholders, often involving live demonstrations.

In summary, adopting Docs-as-Code entails applying the same systems, workflows, and best practices to documentation that are commonly employed in software development. This approach enhances collaboration, version control, and overall efficiency in managing documentation projects.


## Example: Docs-as-Code documentation development workflow

Let's dive into a practical example of how the Docs-as-Code documentation development process can work in a real project. Let's consider a scenario where a software development team is using Docusaurus for documentation, Jira for issue tracking, GitHub (or GitHub desktop as an option for technical writers) for version control, and S3 for storing images.

:::tip

To get a better understanding of this example, I recommend first reading the [Setting a documentation development process](/blog/2023-09-08-setting-up-a-documentation-development-process.md).

:::

### Step 1: Issue creation (Jira)

1. An epic or user story is created in Jira as part of the development process.
2. A documentation ticket is automatically generated in Jira and linked to the epic or user story.
3. During the planning phase, the product owner (PO) or product manager (PM) identifies the need for documentation based on the epic's requirements and specifies the type of documentation required (for example, user guide, API, or integration guide), and assigns tickets to respective team members (a technical writer or developer). 
4. The PO or PO closes all redundant documentation tickets.
5. The assignee reviews the documentation ticket and begins working on it.

### Step 2: Documentation authoring (GitHub)

1. The assignee creates a branch in the GitHub repository associated with the project.
2. Using a text editor like Visual Studio Code, the assignee writes the documentation in markdown format, uploads images to an S3 bucket, and adds links to the documentation.

### Step 3: Collaboration (GitHub)

1. The assignee commits their changes to the branch, opens a pull request (PR) on GitHub, and, depending on the documentation type and workflow, requests a developer or technical writer review.
2. The PR goes through a review process and the reviewers provide feedback and suggestions.
3. The assignee makes necessary adjustments based on feedback and updates the PR.
4. Once all reviewers approve the PR, it is merged into the `master` branch.

### Step 4: Automated publishing

1. Automated CI/CD pipelines detect changes to the main branch and trigger a build.
2. The build process generates the static documentation site using Docusaurus.
3. The updated documentation is automatically published on the project's website.

### Step 5: Documentation lifecycle management (Jira)

1. The documentation ticket status is updated in Jira to reflect its progress.
2. Documentation tasks are linked to the corresponding development epic or user story.
3. Any documentation-related issues or updates are tracked in Jira.

### Step 6: Iteration and continuous improvement

1. The team follows an agile approach, iterating on documentation during bi-weekly sprints.
2. Documentation improvements, updates, or new documents are added as needed.
3. End-user and stakeholder feedback is collected during these iterations to ensure that the documentation meets their needs.

By following this workflow, the team seamlessly integrates documentation into the development process, ensuring that documentation is up-to-date, high-quality, and closely aligned with the product's development. This approach enhances collaboration, version control, and overall efficiency in managing documentation projects.


## Advantages of the Docs-as-Code adoption

While Docs-as-Code may not be the best fit for every documentation scenario, it offers several compelling advantages that make it a valuable approach for many teams. Here are some of the key benefits of adopting Docs-as-Code:

### Collaboration with developers

One of the standout advantages of Docs-as-Code is the enhanced collaboration it fosters between technical writers and developers. In complex technical documentation, developers often possess specialized knowledge that can be challenging for non-developers to document accurately. By treating documentation as code and leveraging familiar tools like Git and Markdown, developers can play a more active role in crafting and reviewing documentation. This collaboration ensures that the documentation remains technically accurate and aligned with the codebase.

### Continuous delivery

Docs-as-Code simplifies the process of publishing and updating documentation. With continuous delivery pipelines integrated into a Git repository, authors can commit and push content changes effortlessly. The automated build and publishing process eliminates the need for manual file transfers or complex deployment procedures. This streamlines the publishing workflow, allowing for quick and efficient updates to documentation.

### Increased collaboration with contributors

When documentation teams collaborate within a shared Git repository, they gain better visibility into each other's work. Using Git, authors can easily track changes made by teammates, synchronize their work, and even contribute to each other's content. This collaborative environment promotes knowledge sharing, consistency, and efficient teamwork.

### Flexibility and control

Docs-as-Code tools provide unparalleled flexibility and control over documentation outputs. Authors can customize documentation to match specific requirements, such as URL patterns, layouts, or metadata incorporation. This flexibility is particularly valuable when integrating documentation into websites or other systems with unique needs. Skilled users can harness web technologies like HTML, CSS, JavaScript, and templating languages to achieve complex documentation goals.

### Processes as well as tools

Beyond the tools themselves, Docs-as-Code encourages the adoption of engineering processes for managing documentation. Agile methodologies like Scrum can be applied to documentation projects, enhancing organization and efficiency. By aligning documentation processes with software development practices, teams can improve their workflows and deliver higher-quality documentation.

### Handling challenging factors

Docs-as-Code tools and practices offer solutions for addressing challenging documentation requirements. Localization, content reuse, versioning, authentication, and PDF generation are all areas where Docs-as-Code tools can excel with some creativity and technical expertise. Advanced templating and scripting logic in tools like Liquid, Docusaurus, or Jekyll empower authors to tackle complex tasks effectively.


## Conclusion

In summary, the adoption of Docs-as-Code brings forth numerous advantages, including improved collaboration, streamlined publishing, increased contributor awareness, flexibility, enhanced processes, and the ability to tackle challenging documentation needs. While it may require a learning curve and adaptation, Docs-as-Code offers substantial benefits for teams engaged in technical documentation. By embracing this approach, you empower your team to create, maintain, and deliver documentation that aligns seamlessly with your development efforts, ultimately resulting in better, more accurate, and up-to-date documentation.




