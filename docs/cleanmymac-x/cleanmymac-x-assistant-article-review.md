---
title: CleanMyMac X Assistant article review
description: This document gives general feedback to the CleanMyMac X Assistant article.
sidebar*position: 1
last*update: 
  date: 11/3/2023
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This document provides a review of the [CleanMyMac X Assistant](https://macpaw.com/support/cleanmymac/knowledgebase/cleanmymac-assistant) article, based on the [Apple Style Guide](https://support.apple.com/guide/applestyleguide/welcome/1.0/web), [Google developer documentation style guide](https://developers.google.com/style), and my personal experience as a user.

The sections below have the following structure: the explanation of inconsistencies, mistakes, or typos, a reference to the rules that prove the point, and the tab pane, which shows what the current mistake looks like and suggests a change to fix it.

## Style guide inconsistencies and personal recommendations

This section highlights identified inconsistencies with the Apple Style Guide and includes my recommendations, which are aligned with the Google style guide and my own experience.

### Lists

Complex list items that form complete sentences should end with a period. For detailed information on this rule, refer to the [Apple Style Guide](https://support.apple.com/guide/applestyleguide/l-apsg087a9dba/web), specifically the section on "lists (bulleted)".

:::info Optional adjustments

The Google developer guide recommends using complete sentences in lists, which I endorse as well. I believe that having an introductory sentence with a complete structure enhances readability and clarity. It’s important to note that this specific rule is optional due to its absence in the Apple Style Guide.

:::

#### Suggested changes

The example below shows the current version of sentences and suggested changes.

![lists](/docs/cleanmymac-x/cleanmymac-x-assistant-article-review/lists.png)


<Tabs>
  <TabItem value="current version" label="❌Current version">
    Just click the Assistant button and let it:
    <ul>
    <li>Suggest further cleanup, optimization, and security steps</li>
    <li>Remind about uncompleted operations and necessity of the regular cleanup</li>
    <li>Give tips to use CleanMyMac X more effectively</li>
    <li>Provide statistics on how helpful CleanMyMac X has been for you</li>
    </ul>
  </TabItem>
  <TabItem value="correct version" label="✔️ Suggested changes" default>
    Just click the Assistant button and let it complete the following tasks for you:
    <ul>
    <li>Suggest further cleanup, optimization, and security steps.</li>
    <li>Remind about uncompleted operations and necessity of the regular cleanup.</li>
    <li>Give tips to use CleanMyMac X more effectively.</li>
    <li>Provide statistics on how helpful CleanMyMac X has been for you.</li>
    </ul>
  </TabItem>
</Tabs>

### Em dashes

Do not use spaces before and after em dashes (—). For further details about this rule, in the [Apple Style Guide](https://support.apple.com/guide/applestyleguide/d-apsg7af4f5d0/web), see the "dash (em)" section.  Although the Apple Style Guide does not explicitly mention the absence of spaces, its examples and use cases consistently lack spaces before and after em dashes.

:::info

The Google style guide provides clear rules on em-dash usage, which I have used as additional evidence. For more information, see [Em dashes](https://developers.google.com/style/dashes#em-dashes).

:::


#### Suggested changes

The example below shows the current version of sentences and suggested changes.

![em-dashes-example-1](/docs/cleanmymac-x/cleanmymac-x-assistant-article-review/em-dashes-example-1.png)

![em-dashes-example-2](/docs/cleanmymac-x/cleanmymac-x-assistant-article-review/em-dashes-example-2.png)

<Tabs>
  <TabItem value="current version" label="❌Current version">
    <p>Recommendations with yellow buttons show the most actual tasks — those that contribute the most to the safety and effectiveness of your Mac.</p>
    Even with notifications turned off, you can still use recommendations — just click the Assistant button in any module of CleanMyMac X.
  </TabItem>
  <TabItem value="Correct version" label="✔️ Suggested changes" default>
    <p>Recommendations with yellow buttons show the most actual tasks—those that contribute the most to the safety and effectiveness of your Mac.</p>
    Even with notifications turned off, you can still use recommendations—just click the Assistant button in any module of CleanMyMac X.
  </TabItem>
</Tabs>

### Highlighting and word choice

If you want to highlight a word or phrase, use *italics*. For details about the rule, in the [Apple Style Guide](https://support.apple.com/en-lk/guide/applestyleguide/apsg346ef241/1.0/web/1.0), see "italics (n.), italic (adj.)".

Also, do not use *hover over*; use *hold the pointer over* instead. For details about the rule, in the [Apple Style Guide](https://support.apple.com/guide/applestyleguide/h-apsg9dac5903/1.0/web/1.0), see "hover (v.)".

#### Suggested changes

The example below shows the current version of sentences and suggested changes.

![other-suggestions-bold-comma](/docs/cleanmymac-x/cleanmymac-x-assistant-article-review/other-suggestions-bold-comma.png)

<Tabs>
  <TabItem value="current version" label="❌Current version">
    <b>To hide a particular recommendation,</b> hover over it for a second, then click the X button in the upper-right corner.
  </TabItem>
  <TabItem value="Correct version" label="✔️ Suggested changes" default>
    <i>To hide a particular recommendation</i>, hold the pointer over it for a second, then click the X button in the upper-right corner.
  </TabItem>
</Tabs>

### Parentheses

Readers may often overlook phrases and words in parentheses. Therefore, it’s advisable to avoid placing essential information in parentheses. However, it’s acceptable to use parentheses when you are confident that even if the content within them is ignored, it won’t impact the sentence’s meaning. Alternatively, you can use em dashes or rephrase the text as a separate sentence.

:::info

While I couldn’t find a respective rule in the Apple Style Guide, I found numerous examples in the guide that adhere to the practice mentioned above. Additionally, the Google style guide provides clear rules on the use of parentheses. For more details, see [Parentheses](https://developers.google.com/style/parentheses).

:::

#### Suggested changes

The example below shows the current version of sentences and the suggested changes.

![parentheses](/docs/cleanmymac-x/cleanmymac-x-assistant-article-review/parentheses.png)

<Tabs>
  <TabItem value="current version" label="❌Current version">
    If you don’t want the Assistant to show recommendations automatically (for example, when you finish cleanup), turn these notifications off in Preferences:
  </TabItem>
  <TabItem value="Correct version" label="✔️ Suggested changes" default>
    If you don’t want the Assistant to show recommendations automatically—for example, when you finish cleanup—turn these notifications off in Preferences:

  </TabItem>
</Tabs>

## Article structure analysis

This section assesses the article’s structure and provides recommendations for improvements.

### Recommendations in Assistant section: Problem

The "Recommendations in Assistant" section explains that the "Assistant" button lets users achieve or perform the following:
* Suggest further cleanup, optimization, and security steps
* Remind about uncompleted operations and the necessity of regular cleanup
* Give tips to use CleanMyMac X more effectively
* Provide statistics on how helpful CleanMyMac X has been for you

However, if you examine the GIF animation preceding the list, you’ll notice that the Assistant has *six* features:
* Get rid of junk.
* Detect Mail clutter.
* Clear large files.
* Manage extensions.
* Analyze disk space.
* Optimize your Mac.

This discrepancy makes the list confusing as it’s unclear which explanation corresponds to each feature.

### Recommendations in Assistant section: Suggested solution

To make the bulleted list in the "Recommendations in Assistant" section more focused and comprehensible, I recommend restructuring it as follows:

<Tabs>
  <TabItem value="current version" label="❌Current version">
  <p>Just click the Assistant button and let it:</p>
    <ul>
  <li>Suggest further cleanup, optimization, and security steps</li>
  <li>Remind about uncompleted operations and necessity of the regular cleanup</li>
  <li>Give tips to use CleanMyMac X more effectively</li>
  <li>Provide statistics on how helpful CleanMyMac X has been for you</li>
</ul>

  </TabItem>
  <TabItem value="Correct version" label="✔️ Suggested changes" default>
  <p>Just click the Assistant button and let it complete the following tasks for you:</p>
    <ul>
      <li><i>Get rid of junk</i>. [<i>Here goes a feature description</i>]</li>
      <li><i>Detect Mail clutter</i>. [<i>Here goes a feature description</i>]</li>
      <li><i>Clear large files</i>. [<i>Here goes a feature description</i>]</li>
      <li><i>Manage extensions</i>. [<i>Here goes a feature description</i>]</li>
      <li><i>Analyze disk space</i>. [<i>Here goes a feature description</i>]</li>
      <li><i>Optimize your Mac</i>. [<i>Here goes a feature description</i>]</li>
    </ul>

  </TabItem>
</Tabs>

### Silent mode section: Problem

The "Silent mode" section provides instructions on how to turn off the recommendations in Assistant. Typically, documents such as instructions, quick start guides, and How-Tos use task-based headings. For task-based headings, it’s recommended to use the *imperative mood* rather than a noun phrase, which is typically used for conceptual topics. In this case, this rule is not followed. 

:::info

While I couldn’t find a respective rule in the Apple Style Guide, I found relevant examples in the [iPhone User Guide](https://support.apple.com/en-bh/guide/iphone/welcome/ios) and other articles in the CleanMyMac X Knowledge Base. Additionally, the Google style guide provides clear rules on the task-based titles. For more details, see [Headings and titles](https://developers.google.com/style/headings).

:::

![task-based-title](/docs/cleanmymac-x/cleanmymac-x-assistant-article-review/task-based-title.png)

### Silent mode section: Suggested solution

To make the title task-based, I suggest renaming it to "Turn on silent mode"

You can switch the tabs in the following example to view the current version of sentences and the suggested changes.

<Tabs>
  <TabItem value="current version" label="❌Current version">
    <h2>Silent mode</h2>
  </TabItem>
  <TabItem value="Correct version" label="✔️ Suggested changes" default>
    <h2>Turn on silent mode</h2>
  </TabItem>
</Tabs>

