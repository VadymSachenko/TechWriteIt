---
title: CleanMyMac X Assistant article review
description: This document gives general feedback to the CleanMyMac X Assistant article.
sidebar*position: 2
last*update: 
  date: 11/2/2023
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This document reviews the [CleanMyMac X Assistant](https://macpaw.com/support/cleanmymac/knowledgebase/cleanmymac-assistant) article based on [Apple Style Guide](https://support.apple.com/guide/applestyleguide/welcome/1.0/web), [Google developer documentation style guide](https://developers.google.com/style) and my personal experience as a user of the knowledge base.

Each section consists of two main section:
* *Style guide inconsistencies and personal recommendations*. This section lists doscivered inconsistencies with Apple Style Guide. Also, as optional changes, it provides recommendations backed with the Google style guide and my personal experiance.
* *Structure analysis*. This section holds recommendation for the readability improvements.

the explanation to an insistency, mistake or type, a reference to the rules that prove the point, and the tab pane, which shows what the current mistake looks like and suggests the change to fix it.

## Style guide inconsistencies and personal recommendations

This section lists doscivered inconsistencies with Apple Style Guide. Also, as optional changes, it provides my recommendations backed with the Google style guide and personal experiance.

### Lists

Complex list items that are complete sentences should end with a period. For details about the rule, in  [Apple Style Guide](https://support.apple.com/guide/applestyleguide/l-apsg087a9dba/web), see "lists (bulleted)".

:::info Optional adjustments

Google developer guide recommends having a list with a complete sentence, not a partial one that’s completed by the list items. I advocate for this rules as well. For me, it just feels right that an introdution sentence has a complete structure. However, the absence of this specifc rule in Apple Style Guide means following this recommendation is completely optional. 

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
  <TabItem value="correct version" label="✔️ Suggested change" default>
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

Don’t put spaces before and after em dashes(—). For details about the rule, in [Apple Style Guide](https://support.apple.com/guide/applestyleguide/d-apsg7af4f5d0/web), see "dash (em)". Though the absence of spaces is not clearly stated in Apple Style Guide, the examples and use cases provided in it don’t have spaces before and after em-dashes.


:::info

Yet, the Google style guide has clear rules about the usage of em-dashes. Therefore, I used it as additional evidence. For details, see [Em dashes](https://developers.google.com/style/dashes#em-dashes).

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
  <TabItem value="Correct version" label="✔️ Suggested change" default>
    <p>Recommendations with yellow buttons show the most actual tasks—those that contribute the most to the safety and effectiveness of your Mac.</p>
    Even with notifications turned off, you can still use recommendations—just click the Assistant button in any module of CleanMyMac X.
  </TabItem>
</Tabs>

### Highlighting and word choice

If you want to highlight a word or phrase, use *italics*. For details about the rule, in [Apple Style Guide](https://support.apple.com/en-lk/guide/applestyleguide/apsg346ef241/1.0/web/1.0), see "italics (n.), italic (adj.)".

Also, do not use *hover over*; use *hold the pointer over* instead. For details about the rule, in [Apple Style Guide](https://support.apple.com/guide/applestyleguide/h-apsg9dac5903/1.0/web/1.0), see "hover (v.)".

![other-suggestions-bold-comma](/docs/cleanmymac-x/cleanmymac-x-assistant-article-review/other-suggestions-bold-comma.png)

#### Suggested changes

The example below shows the current version of sentences and suggested changes. 

<Tabs>
  <TabItem value="current version" label="❌Current version">
    <b>To hide a particular recommendation,</b> hover over it for a second, then click the X button in the upper-right corner.
  </TabItem>
  <TabItem value="Correct version" label="✔️ Suggested change" default>
    <i>To hide a particular recommendation</i>, hold the pointer over it for a second, then click the X button in the upper-right corner.
  </TabItem>
</Tabs>

### Parentheses

Some readers tend to ignore phrases and words in parentheses. So I recommend avoiding putting important information in parentheses.
However, it’s okay to use parentheses if you are sure that even if the content is ignored, this won’t impact the meaning of the sentence.
Alternatively, you can use em dashes or move out the text as a separate sentence.

:::info

Though I couldn’t find a respecrive rule in Apple Stely Guide, I found many examples in the guide that followed the mentioned above practice. 

Yet, the Google style guide has clear rules about the usage of parentheses. Therefore, I used it as additional evidence. For details, see [Parentheses](https://developers.google.com/style/parentheses).

:::

#### Suggested changes

The example below shows the current version of sentences and suggested changes.

![parentheses](/docs/cleanmymac-x/cleanmymac-x-assistant-article-review/parentheses.png)

<Tabs>
  <TabItem value="current version" label="❌Current version">
    If you don’t want the Assistant to show recommendations automatically (for example, when you finish cleanup), turn these notifications off in Preferences:
  </TabItem>
  <TabItem value="Correct version" label="✔️ Suggested change" default>
    If you don’t want the Assistant to show recommendations automatically—for example, when you finish cleanup—turn these notifications off in Preferences:

  </TabItem>
</Tabs>

## Structure analysis

This section analyzes the article and provides suggestions on improvements.

### Recommendations in Assistant section: Problem

The "Recommendations in Assistant" section explains that the Assisstant button lets users achieve or do the following:
* Suggest further cleanup, optimization, and security steps.
* Remind about uncompleted operations and necessity of the regular cleanup.
* Give tips to use CleanMyMac X more effectively.
* Provide statistics on how helpful CleanMyMac X has been for you.

However, If you look at the GIF animation that precedes the list, you can notice that Assitant has *six* features:
* Get rid of junk.
* Detect Mail clutter.
* Clear large files.
* Manage extensions.
* Analyze disk space.
* Optimize your Mac.

This makes the list consfusing because it's not clear what explanation stands for what feature.

### Recommendations in Assistant: Suggested changes

To make the bulleted list of the the "Recommendations in Assistant" clearer and more feature-focused, I suggest to restructure it in the following way:

<Tabs>
  <TabItem value="current version" label="❌Current version">
    <ul>
  <li>Suggest further cleanup, optimization, and security steps.</li>
  <li>Remind about uncompleted operations and necessity of the regular cleanup.</li>
  <li>Give tips to use CleanMyMac X more effectively.</li>
  <li>Provide statistics on how helpful CleanMyMac X has been for you.</li>
</ul>

  </TabItem>
  <TabItem value="Correct version" label="✔️ Suggested change" default>
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

#### Silent mode: Problem

The "Silent mode" section is an instruction that shows how to turn off the recommendations in Assistant. As a rule, documents such as instructions, quick start guides, and HowTos use task-based headings.
For such headings, it’s recommended to use the *imperative mood* rather than a noun phrase, which is usually used for conceptual topics. However, in this case, this rule is not followed.

![task-based-title](/docs/cleanmymac-x/cleanmymac-x-assistant-article-review/task-based-title.png)

#### Silent mode: Suggested changes

To make the title task-based, I suggest to rename title to "Turn on silent mode".

In the following example, you can switch the tabs to view the current version of sentences and suggested changes.

<Tabs>
  <TabItem value="current version" label="❌Current version">
    <h2>Silent mode</h2>
  </TabItem>
  <TabItem value="Correct version" label="✔️ Suggested change" default>
    <h2>Turn on silent mode</h2>
  </TabItem>
</Tabs>

