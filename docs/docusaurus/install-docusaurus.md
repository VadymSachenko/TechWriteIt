---
title: Install docusaurus
description: Learn how to install a docusaurus project locally
sidebar_position: 2
last_update: 
  date: 9/6/2023
---

This document shows how to install documsaurus locally.

Docusaurus is an open-source documentation framework developed by Facebook that simplifies the process of creating and maintaining documentation websites. In this guide, we will walk you through the steps to install Docusaurus locally on your development machine. This installation includes setting up a Docusaurus project, configuring it, and running it on your local environment. We'll also cover the necessary steps to create a GitHub repository for your Docusaurus project.

For more information about docusaurus and more detailed instructions, see [official docusaurus documentation](https://docusaurus.io/docs/2.1.0).

## Prerequisites

Before you begin, ensure you have the following tools installed on your system:

- [Node.js](https://nodejs.org/): Docusaurus is built with JavaScript, and Node.js is required to run it.
- [Yarn](https://yarnpkg.com/): A package manager used to manage Docusaurus dependencies.
- A code editor (for example, [Visual Studio Code](https://code.visualstudio.com/)): A code editor for working with your Docusaurus project.
- [GitHub](https://github.com/) or [GItLab](https://about.gitlab.com/) account: To create a repository for your project.
- Optional: [GitHub Desktop](https://desktop.github.com/): 

To install docusaurus, follow the steps in the sections below.


### Create a repository

On GitHub, create a new repository for your project

1. In the Repositories tab, click New.
2. On the Create a new repository peage that opens, In Repository name, enter a name for your new repository. 
3. 

### Install Docusaurus CLI

Open your terminal and run the following command to install the Docusaurus Command Line Interface (CLI):

```bash
npm install -g @docusaurus/init
```

### Create a New Docusaurus Project

Navigate to the directory where you want to create your Docusaurus project and run the following command:

```bash
npx @docusaurus/init init my-docusaurus-project classic
```

Replace `my-docusaurus-project`` with your preferred project name. This command initializes a new Docusaurus project with the classic template.

### Change directory
Move into your newly created Docusaurus project directory:

```bash
cd my-docusaurus-project
```


### Start the Development Server
To preview your documentation website locally, run the following command:

```bash
npm run start
```

By defaul, your Docusaurus project gets available at ```http://localhost:3000```.

