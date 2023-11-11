---
title: Localization module overview
description: Learn about the Localization module of the Tool
sidebar_position: 1
last_update: 
  date: 11/11/2023
---

The Tool's *Localization* module lets you manage localizations with the assistance of the third-party service Crowdin.

## Localization process flow

When you [create a request](/docs/test-tasks/welltech/request-localization.md) for text translation, the requests go through the following steps:

1. A user logs in to the Tool, creates a new key, and provides the required information.
2. The Tool checks with Crowdin if the new key already exists. If it does, an error message is displayed. Otherwise, the Tool sends a request to Crowdin to create the new key.
3. Crowdin processes the request and the localization team is notified about the new key.
4. The localization team performs the translation for the new key and saves the translation.
5. Crowdin sends the key and its translations back to the Tool.
6. The user is notified about the successful translation of the new key.

The following diagram illustrates the localization process:

```mermaid
sequenceDiagram
    Actor User
    participant Tool
    participant Crowdin
    participant Localization team

    User ->> Tool: Log in to the Tool
    User ->> Tool: Open "Localization" module
    User ->> Tool: Select "Key" section
    User ->> Tool: Click "Create new key"
    User ->> Tool: Enter info about new key (key name, description, text)

    Tool ->> Crowdin: Key exists?
    alt Yes
        Crowdin -->> Tool: Yes
        Tool ->> User: Display error message
    else No
        Crowdin -->> Tool: No
        Tool ->> Crowdin: Send create new key request
        Crowdin ->> Crowdin: New key gets created
        Crowdin ->> Localization team: Notify localization team about new key
        Localization team ->> Localization team: Translate content
        Localization team ->> Crowdin: Save translation
        Crowdin ->> Tool: Add new key to the Tool
        Tool ->> User: Notify user about new key
    end
```
## Related user guides

[Request localization](/docs/test-tasks/welltech/request-localization.md)