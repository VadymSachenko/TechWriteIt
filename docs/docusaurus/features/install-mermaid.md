---
title: Install Mermaid
description: Learn how to install Mermaid in your project 
sidebar_position: 1
last_update: 
  date: 9/11/2023
---

*[Mermaid](https://mermaid.js.org/intro/)* is a JavaScript-based tool that lets you create diagrams and flowcharts using simple text-based syntax.
It's widely used for visualizing complex processes, data flows, and system architectures directly in your documentation.

This document shows how to install and configure Mermaid in your Docusaurus project.

## Install Mermaid

```bash
npm install --save @docusaurus/theme-mermaid
```

## Configure Mermaid

To use Mermaid in your documents, add the following configuration to your `docusaurus.config.js`:

```js title="docusaurus.config.js"
...
const mermaid = require('mermaid')
...
const config = {
  ...
    markdown: {
      mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
};
```

## Usage example

To see how Mermaid renders, add the following code block to your document

``````markdown title="Example Mermaid diagram"
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
``````

Now you have Mermaid installed and configured, and you can start creating diagrams and flowcharts.

For details about markdown syntax,  in Mermaid's official documentation, see [Syntax and Configuration](https://mermaid.js.org/intro/n00b-syntaxReference.html).