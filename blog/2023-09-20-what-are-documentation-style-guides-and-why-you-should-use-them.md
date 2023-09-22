---
title: What are documentation style guides and why you should use them?
description: Learn about documentation style guides, why you should use them, and their pros and cons.
last_update: 
  date: 9/22/2023
authors:
  - name: Vadym Sachenko
    title: Author, creator, and owner of TechWriteIt
    url: https://github.com/VadymSachenko
    image_url: https://github.com/VadymSachenko.png
hide_table_of_contents: false
tags:
  - style guide
  - beginner
---

In this article, I would like to discuss style guides, their role in the [documentation development process](blog/2023-09-08-setting-up-a-documentation-development-process.html), and the pros and cons of existing style guides and custom ones.

Similar to the software development process, where a team follows sequential steps to develop and deliver a product, documentation requires a similar approach. However, in addition to the need for a well-defined documentation development process, documents also require consistency, which is ensured by a *style guide*. A style guide is a comprehensive set of established conventions and guidelines that govern the creation and presentation of documentation. These guidelines encompass various aspects of writing, formatting, and structuring content to ensure uniformity and readability. Some well-known examples of style guides include Google's Style Guide, Microsoft's Style Guide, and The Chicago Manual of Style.

## Problems addressed by style guides and their benefits

Let's explore the specific issues that style guides aim to resolve and why they are valuable.

**Consistency**: One of the primary issues that style guides address is consistency. Consistency in documentation is crucial for creating a seamless reading experience. When you adhere to consistent rules regarding spelling, grammar, punctuation, naming, formatting, and structure, it minimizes confusion and enhances comprehension.

**Reduction of ambiguity**: Ambiguity in technical documentation can lead to misunderstandings, errors, and user frustration. A style guide helps reduce ambiguity by providing clear guidelines on how to express ideas, instructions, technical concepts, word choice, and more.

**Enhanced user experience**: A well-crafted style guide contributes to an improved user experience. When users encounter a documentation portal that adheres to a consistent style, they know what to expect from published documents. If users have used a user guide on this portal before, they can be confident that the next instruction they read will have a similar structure, wording, phrases, and format. This familiarity with the structure and wording enhances their ability to navigate and comprehend the content effectively.

## Choosing between new and existing style guides

When you realize the need for a style guide, you will likely consider two options: creating your own style guide or using an existing one. Let's delve into the advantages and disadvantages of each option.

### Creating your own style guide

Your project's documentation style, format, and other requirements might be highly specific, necessitating a tailored approach. For example, if you work for a healthcare IT company that develops software for medical practitioners, your documentation style guide would need to address strict regulatory requirements for handling patient data. Generic style guides like those from Google or Microsoft may not cover these aspects adequately. Your custom style guide would specify how to document data encryption procedures, user access controls, and compliance with healthcare regulations, ensuring that your documentation aligns with the industry's unique demands. However, designing a custom style guide has its advantages and pitfalls.

#### Advantages of a custom style guide

**Tailored to your technology stack**: Existing style guides like Google's or Microsoft's are generic and may not address the intricacies of your specific technology stack. Your style guide can provide guidance on how to document code snippets, configuration files, and workflows unique to your projects.

**Custom rerminology**: Your projects may use domain-specific terminology or product names not covered by general style guides. A custom style guide allows you to define and standardize the usage of these terms. For instance, if your product uses a unique acronym, your style guide can specify whether to spell it out or use the acronym consistently. In some cases, you may want to supplement an existing style guide with additional rules for specific terms and acronyms.

**Consistent branding and messaging**: Your company or product may have a distinct brand voice and messaging strategy. A custom style guide ensures that your documentation aligns with your brand identity. For example, if your company emphasizes a friendly and approachable tone, your style guide can include guidelines on using conversational language in documentation.

**Workflows and tools integration**: Your projects may involve specific workflows or tools (e.g., code review processes in GitHub or issue tracking in Jira) that require documentation. A custom style guide can detail how to document these processes effectively, ensuring that your documentation integrates seamlessly with your development and project management tools.

**Compliance and regulations**: Depending on your industry, your documentation may need to adhere to specific compliance standards or regulations, such as GDPR or HIPAA. A custom style guide can provide guidelines for documenting sensitive information, ensuring that your documentation complies with legal requirements.

#### Pitfalls of a custom style guide

**Incomplete coverage**: It's nearly impossible to cover all edge cases and scenarios at once. Building a style guide is an iterative process that may require continuous updates. Consequently, you can never be sure that your style guide includes everything you need, and when you write a new document, there might be breaches, unaddressed rules, formatting issues, or wording not covered in your style guide. As a result, you may need to simultaneously update your style guide and work on your task.

**Time-consuming**: Developing a comprehensive style guide is a time-intensive process that demands careful planning and execution. Your team must be prepared for the extended duration of style guide development, which could span weeks, months, or even longer. If you already have published documentation, each time you update your style guide, you may need to review the published documents to maintain consistency.

**Responsibility**: As your project evolves, so do documentation requirements and style guide updates. When you have your style guide, it becomes your responsibility to keep it up-to-date, ensuring it remains relevant and effective. This necessitates regular reviews and updates to incorporate new terminologies, best practices, and evolving user expectations.

:::info "Pitfalls prevail"

Creating a new documentation style guide is always a substantial challenge, and the pitfalls are a significant reason why you might prefer an existing style guide with the addition of your own custom rules.

:::

### Using an existing style guide

The easiest and often suitable approach for most projects is to select an existing style guide that aligns with your needs. However, even this option has its advantages and disadvantages, which you should weigh when making a decision.

#### Advantages of using an existing style guide

**Established best practices**: Existing style guides are often based on established best practices in the field. By adopting one, you benefit from the collective wisdom and expertise of the industry.

**Community support**: You don't need to maintain popular style guides. They have active user communities and resources for addressing questions and challenges, making it easier to find solutions and stay updated.

**Time and cost efficiency**: Using an existing style guide saves you the time and resources required to create and maintain a custom guide, allowing you to focus on your documentation tasks more efficiently.

**Interoperability**: Aligning with a widely recognized style guide enhances the likelihood that your documentation will be interoperable with other projects and industry standards, improving usability and acceptance.

**Automated checks**: For well-known style guides like Google and Microsoft, there are ways to adopt them through automation, using tools such as the [Vale linter](https://vale.sh/). If you want to start using Vale, refer to the [Install and configure Vale](docs/docusaurus/features/install-and-configure-vale.html) instructions.

#### Weaknesses of using an existing style guide

**Lack of specificity**: Existing style guides are designed to be general and may not cover all the specific needs of your project. You may encounter situations where the guide doesn't provide clear guidance on how to handle certain types of content or industry-specific terminology.

**Limited customization**: While existing style guides offer a framework for consistency, they may not allow for extensive customization to perfectly align with your project's unique requirements. You may find yourself needing to make exceptions or add supplementary guidelines.

**Evolution lag**: Established style guides may not adapt quickly to emerging trends or technologies. Your project may need to incorporate modern practices or address new issues that the existing guide hasn't accounted for.

**Overcomplexity**: Some well-known style guides can be quite extensive and complex, which may not be suitable for all projects. Navigating and applying every rule effectively can be challenging, especially for smaller teams or projects with limited resources.

**Conflict with brand identity**: Using an existing style guide may not align perfectly with your company's specific brand voice and messaging strategy. Conflicts between the prescribed style and your desired brand image may arise.

## Conclusion

The decision to create your own style guide or adopt an existing one depends on your project's specific needs, resources, and objectives. While creating a custom style guide offers greater flexibility and control, it comes with the costs of time and effort. Alternatively, automated or manual adoption of existing style guides provides efficiency but may require ongoing learning and vigilance. Ultimately, your choice should align with your documentation goals and your team's capabilities.

Regardless of your choice, chosing and following a style guide is a vital part of documentation development and maintenance. It ensures that your documentation consistently delivers clarity and professionalism, enhances the user experience, and contributes to the success of your projects.
