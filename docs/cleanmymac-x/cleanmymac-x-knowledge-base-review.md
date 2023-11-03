---
title: CleanMyMac X Knowledge Base review
description: This document reviewes and gives feedback to CleanMyMac X Knowledge Base
sidebar_position: 2
last_update: 
  date: 11/3/2023
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This document offers a comprehensive review of the [CleanMyMac X Knowledge Base](https://macpaw.com/support/cleanmymac/knowledgebase).

## The "Edit this page" button is missing

One important feature that is currently missing is the "Edit this page" button. By adding this button, you can facilitate both internal and external users' contributions to the documentation. This approach has proven effective in my previous company, where we received numerous internal and external pull requests. This not only helped us address stylistic and grammar issues but also significantly improved the overall quality of the knowledge base.

## Copying section links

Currently, it is not possible to refer to a specific section within a document by either copying the link next to a section or manually adding a section reference tag to a link. I would reccommend adding this functionality.

## Link names

Ensure that your links have meaningful text. When linking to a page with the title "MacPaw Account," avoid vague phrases like "this link" or "this page." Instead, use the title of the destination page.

<Tabs>
  <TabItem value="current version" label="❌ Current Version" >
    Continue reading this article if you own a license activation number. Otherwise, switch to <a href="https://macpaw.com/support/cleanmymac/knowledgebase/macpaw-account">this page</a> to learn more about the MacPaw Account. 
  </TabItem>
  <TabItem value="Correct version" label="✔️ Suggested Change" default>
    Continue reading this article if you own a license activation number. Otherwise, to learn more about MacPaw Account, see <a href="https://macpaw.com/support/cleanmymac/knowledgebase/macpaw-account">Account</a>.
  </TabItem>
</Tabs>

## Style guide linter

To make sure your documents are consistent, I recommend using style guide linters, such as [Vale.sh](https://vale.sh). These tools ensure consistency in adhering to style guide rules, sparing you from manual rule-checking. However, please note that Vale does not include the Apple Style Guide by default, so you'll need to configure the rules yourself.

## Search functionality

Search is the most critical tool in any knowledge base. New users may not be as experienced in navigating the knowledge base, making the search function their primary navigation tool. Currently, when I use the knowledge base search, I encounter difficulty in finding the articles I need. This might be due to the search applying to all MacPaw products simultaneously, without categorization. As a result, users need to input more specific queries, which consumes more time than expected.

## Knowledge base structure

* _Hierarchical Sidebar_: Currently, all articles are located on a single page, and the sidebar merely redirects users to respective sections. This navigation approach differs from what users are accustomed to on other documentation portals and knowledge bases I have used or contributed to. Implementing a traditional sidebar, where each sidebar item has its own dedicated page, may enhance the user experience.

* _Navigation Items Structure_: For new users who want to explore the product but haven't yet downloaded the app, it may not be obvious that "Cleanup," "Protection," "Speed," "Applications," and "Files" represent the app's features. I suggest adding a category that separates these documents from the rest, improving user navigation.

    <Tabs>
    <TabItem value="current version" label="❌ Current Version" >
            <picture>
            <img
                src={require('/docs/cleanmymac-x/cleanmymac-x-assistant-article-review/features-no-categories.png').default}
                alt="No category"
            />
        </picture>
    </TabItem>
    <TabItem value="Correct version" label="✔️ Suggested Change" default>
            <picture>
            <img
                src={require('/docs/cleanmymac-x/cleanmymac-x-assistant-article-review/features-category.png').default}
                alt="Feature category"
            />
        </picture>
    </TabItem>
    </Tabs>

* _CleanMyMac X overview page_: When I visit your knowledge base as a user, I expect to find basic and advanced information about the product. However, I struggle to locate a dedicated page about CleanMyMac X and its features. It appears that the knowledge base assumes that users already possess some knowledge about CleanMyMac X and its features and know where to go to find needed information. To address this, I recommend adding an introductory article about CleanMyMac X, explaining its purpose, features, and functionality.

## Breadcrumbs and URL segments

Breadcrumbs and URL segments are essential for helping users understand their location within a website. It's crucial to maintain consistency between them to prevent user confusion. When a breadcrumb name differs from the URL segment or the page title, it may lead to confusion.


See the following exaxmple for more details.

<Tabs>
  <TabItem value="current version" label="❌Current version" >
    <picture>
        <img
            src={require('/docs/cleanmymac-x/cleanmymac-x-assistant-article-review/bradcramps-actual.png').default}
            alt="Example banner"
        />
    </picture>
  </TabItem>
  <TabItem value="Correct version" label="✔️ Suggested changes" default>
    <picture>
        <img
            src={require('/docs/cleanmymac-x/cleanmymac-x-assistant-article-review/bradcramps-suggested.png').default}
            alt="Example banner"
        />
    </picture>
  </TabItem>
</Tabs>
