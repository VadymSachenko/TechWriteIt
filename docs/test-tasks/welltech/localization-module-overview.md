---
title: Localization module overview
description: Learn about the Localization module of the Tool
sidebar_position: 1
last_update: 
  date: 11/13/2023
---

The Tool's *Localization* module lets you manage localizations with the assistance of the third-party service Crowdin. 

## Localization workflow

Localization requests in the Localization module go through the following process:

1. A user logs in to the Tool, creates a new key, and provides the required information.
2. The Tool sends a request to Crowdin to create the new key.
3. Crowdin processes the request. if the key exists, it displays an error message and creates a new key otherwise.
4. The localization team is notified about the new key.
5. The localization team performs the translation for the new key.
6. The new key and its translations are sent back to the Tool.
7. The user is notified about the successful translation of the new key.


The following sequence diagram shows the localization process:

```mermaid
sequenceDiagram
    participant User
    participant Tool
    participant Crowdin
    participant Localization team

    User ->> Tool: Log in to the Tool
    User ->> Tool: Open "Localization" module
    User ->> Tool: Select "Key" section
    User ->> Tool: Click "Create new key"
    User ->> Tool: Enter info about new key

    Tool ->> Tool: Key exists?
    alt Yes
        Tool ->> User: Display error message
    else No
        Tool ->> Crowdin: Send create new key request to Crowdin
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