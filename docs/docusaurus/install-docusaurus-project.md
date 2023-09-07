---
title: Install Docusaurus
sidebar_label: Install
description: Learn how to install Docusaurus locally
sidebar_position: 1
last_update: 
  date: 9/7/2023
---

This document shows how to install Docusaurus locally.

Docusaurus is an open-source documentation framework developed by Facebook that simplifies the process of creating and maintaining documentation websites. 
This guide walks you through the steps to install Docusaurus locally on your development machine. 

For more information about Docusaurus and more detailed instructions, see [official Docusaurus documentation](https://docusaurus.io/docs/2.1.0).

## Prerequisites

Before you begin, ensure you have the following tools installed on your system:

- Install [Node.js](https://nodejs.org/): Docusaurus is built with JavaScript, and Node.js is required to run it.
- Install [Yarn](https://yarnpkg.com/): A package manager used to manage Docusaurus dependencies.
- Ensure you have Command Line Interface (CLI)—for example, [git](https://git-scm.com/downloads).


To install Docusaurus, follow the steps in the sections below.

## Create a new Docusaurus project

On you PC, create a destination folder where you want to keep your Docusaurus project and run the following command:

```bash
npx create-docusaurus@latest REPOSITORY_NAME classic
```

Replace *`REPOSITORY_NAME`* with the name of the repository you created in the preceding step.

This command initializes a new Docusaurus project with the classic template.


## Install Node.Js packages or dependencies

1. Move into your newly created Docusaurus project directory:

```bash
cd my-docusaurus-project
```

2. Install Node.Js packages or dependencies into your project:

```bash
npm install
```


## Optional: Start the development server

When Node.Js packages or dependencies get installed you can preview your documentation website locally. For this, from your project's folder, run the following command:

```bash
npm start
```

By default, your Docusaurus project gets available at `http://localhost:3000`.

That's it, now you have your local project up and running.

## Next steps

[Deploy your project to GitHub pages](/docs/docusaurus/deploy-docusaurus-project-to-github-pages.md).

