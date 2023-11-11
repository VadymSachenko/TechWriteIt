---
title: Improvements and comments
description: This document lists points that need improvements and answers the interview questions
sidebar_position: 3
last_update: 
  date: 11/11/2023
---

To create a comprehensive Tool overview document and request the localization guide, the following information is necessary:





## Comments and answers to the task 

### Task 1: Describe the instruction

**Task descripton**: Describe the instructions of how the features should be used by the final user by defining the main steps of the flow.

**Answer**: 

* To read the use guide, see [Request localization](docs/test-tasks/welltech/request-localization.md).

* [Localization module overview](docs/test-tasks/welltech/localization-module-overview.md) contains concept information about the Localization module, describes the translation request steps, and demonstrates a new diagram.

### Task 2: Data exchange

**Task descripton**: Identify at what steps data exchange between the two systems will take place.

**Answer**: 



### Task 3:

**Task descripton**: Based on your own guesses, describe which systems might exchange data and how this exchange might occur. You are also welcome to describe the data, which will be exchanged.

**Answer**: 

### Task 4: 

**Task descripton**: Highlight the areas where there is not enough information for you to understand the logic and workflow. (You can list these areas and your questions in the same file where you are doing the task.)

**Answer**:  

**Exchanged data details**. The exact nature of the data exchanged between The Tool and Crowdin is unclear. Should the entered key follow a specific format or structure? Should the user use any tags, or does the user add the key as raw text? This information can be added to the documentation.

**Localization team and user notifications**. Details about the notification mechanism from The Tool to the Localization team and the notification to the user are missing. To enhance the clarity of the process description, provide more detailed information about the content of notifications for both the user and the localization team.

**UI elements**. Some names of the UI elements that users interact with when requesting localization are omitted. In certain steps, it's unclear which windows, pages, and buttons users should interact with when following the guide. This information is crucial for precise guidance through the process, especially when the guide lacks visual elements like videos, screenshots, or animations. Additionally, a detailed description of the missing UI elements must be included in the [Reference information: Request localization](/docs/test-tasks/welltech/request-localization.md#reference-information-request-localization) section.

**Prerequisite details**. If there are specific permissions that users need to have assigned or additional configurations that must be done, include these details in the [Prerequisites](/docs/test-tasks/welltech/request-localization.md#prerequisites) section.

**Error handling**. The error message mentioned is not detailed. The notification to the user lacks specificity. Provide more information about the content of these messages.
Additionally, The Tool may check the text for various criteria, not just for duplicated keys. Thus, different types of errors may occur, such as format inconsistencies, incorrect language, or disallowed characters. Ensure that the provided information covers all possible error scenarios.