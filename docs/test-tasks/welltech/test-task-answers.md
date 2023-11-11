---
title: Test task answers
description: This document provides answers to the questions from the test task file.
sidebar_position: 3
last_update: 
  date: 11/11/2023
---

This document provides answers to the questions from the test task file.

## Task 1: Write the instruction

**Task description**: Describe the instructions of how the features should be used by the final user by defining the main steps of the flow.

**Answer**:

To read the instructions, see [Request localization](docs/test-tasks/welltech/request-localization.md).

For details about  the feature and process overview document and the sequence diagram, see [Localization module overview](docs/test-tasks/welltech/localization-module-overview.md)

## Task 2: Data exchange description

**Task description**: Identify at what steps data exchange between the two systems will take place.

**Answer**: In the [Localization process flow](docs/test-tasks/welltech/localization-module-overview.md#localization-process-flow) section, the data exchange between the Tool and Crawdin takes place in the following steps:
* Step 2: The Tool the key validity with Crawdin and sends the request.
* Step 5: Crowdin sends the key and its translations back to the Tool.

## Task 3: Exchanged data types 

**Task description**: Based on your own guesses, describe which systems might exchange data and how this exchange might occur. You are also welcome to describe the data, which will be exchanged.

**Answer**: 

I suppose the data is exchanged between the Tool and Crawdin through API calls.

The Tool sends to Crowdin the following data:
* An authentication request.
* Information about the new key, including key name, description, and text to be translated.


Crowdin sends back to the Tool the following data:
* An authentication response: success or failure.
* A response indicating that the key already exists in Crowdin.
* A response that the new key creation request has been received.
* Translated content from the localization team.

## Task 4: Highlight missing information

**Task description**: Highlight the areas where there is not enough information for you to understand the logic and workflow. (You can list these areas and your questions in the same file where you are doing the task.)

**Answer**: The following information is missing:

* *Exchanged data details*. The exact nature of the data exchanged between The Tool and Crowdin is unclear. Should the entered key follow a specific format or structure? Should the user use any tags, or does the user add the key as raw text? This information can be added to the documentation.

 * *Localization team and user notifications*. Details about the notification mechanism from The Tool to the Localization team and the notification to the user are missing. To enhance the clarity of the process description, provide more detailed information about the content of notifications for both the user and the localization team.

* *UI elements*. Some names of the UI elements that users interact with when requesting localization are omitted. In certain steps, it might be unclear what windows, pages, and buttons users interact with. This information is crucial for precise guidance through the process, especially when the guide lacks visual elements like videos, screenshots, or animations. Additionally, a detailed description of the missing UI elements must be included in the [Reference information: Request localization](/docs/test-tasks/welltech/request-localization.md#reference-information-request-localization) section.

* *Prerequisite details*. If there are specific permissions that users need or additional configurations that must be done, these details must be mentioned in the [Prerequisites](/docs/test-tasks/welltech/request-localization.md#prerequisites) section.

* *Error handling*. The name and text of the error message mentioned in the test task's file are not provided. Also, notification to the user lacks specificity. Provide more information about the content of these messages.
Additionally, The Tool may check the text for various criteria, not just for duplicated keys. Thus, different types of errors may occur, such as format inconsistencies, incorrect language, or disallowed characters. Ensure that the provided information covers all possible error scenarios.

