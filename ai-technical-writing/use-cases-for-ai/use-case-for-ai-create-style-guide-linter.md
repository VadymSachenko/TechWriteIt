---
title: "Use cases for AI: Create personalized style guide linter"
description: This use case explain how to create a personalized style guide linting tool using AI. 
last_update: 
  date: 4/10/2025
---


In this article, I want you to show you how you can create linting tool and a template that will proofread and write dococuments according to [Google developer style guide](https://developers.google.com/style) and a specific template.

Writing of overviews, summaries, user guides, and feat overviews is probably one of the most popular ways AI tools such as ChatGPT, Claude, Gemini are used. 
Those are damn smart LLMs and they can serve you well but, unfortunatelly  they can't "git clone" your minds to please yourself in the way you want it.
However, you can teach and train them to generate what you want and how you want it.

One of the frequent tasks I have to fulfil is writing and proofreading different documents.
As a rule, as a technical writer you choose (sometines create) and follow a style guide.
Having one makes sure the documents the tech writing teams delivers has identical tone of voice, in general clear and well-understood.
However, having one is easy whereas making your docs fully comply with it is a challenge, especially if you come to a new project, which adopts a diffent style guide from the one you used to do.
And even if the style guide is the same, you can't be 100% sure that a human eye can detect every single deviation and inconsistency.

To address these chellengase I a two-step-approach:
1. Templating
2. Style guiding.

## Templating


