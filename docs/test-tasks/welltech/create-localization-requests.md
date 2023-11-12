---
title: Create localization requests
description: Learn how to make localization request 
sidebar_position: 3
last_update: 
  date: 11/11/2023
---

This user guide shows how to request localization through the [Localization module](/docs/test-tasks/welltech/localization-module-overview.md).

## Prerequisites

:::info Example section

A prerequisites section lists steps that need to be done before proceeding with the given instruction.

Due to the absence of information about the UI elements, this section exists as an example only.

:::

* Prerequisite 1
* Prerequisite 2

Review the [reference information](#reference-information-create-a-localization-request) before you start or look up the necessary information as you go through the process.

## Create a localization request

1. In the Tool's admin pane, select **Tools&nbsp<span aria-label="and then">></span> Localization**.
2. On the **Localization module** page that opens, go to the **Key** section and click **Create new key**.
3. In the **Key** dialog that appears, enter the necessary information for the new key:
    1. For **Key**, enter a key name.
    2. Optional: For **Description**, enter the key description.
    3. For **Text**, enter the text that you want to translate and click **Send**. This sends the request to Crowdin. 

Once your request is processed, you receive a notification in the Tool. 

:::note Duplicates are not allowed

Sending keys that already exist (duplicates) is not allowed. When clicking **Send**, the Tool verifies the entered information with Crawdin. If the key already exists, the error message is displayed.

::: 

## Reference information: Create a localization request

| ATTRIBUTE | DESCRIPTION |
|---|---|
|Key name|Name of the key.|
|Description|Description of the key.|
|Text| Text that needs to be translated.|
