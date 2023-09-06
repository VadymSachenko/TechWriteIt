---
title: Install docusaurus on Mac or Windows
description: Learn how to install a docusaurus project locally
sidebar_position: 1
last_update: 
  date: 9/6/2023
---

This document shows how to install documsaurus locally on Mac or widnows

Docusaurus is an open-source documentation framework developed by Facebook that simplifies the process of creating and maintaining documentation websites. In this guide, we will walk you through the steps to install Docusaurus locally on your development machine. This installation includes setting up a Docusaurus project, configuring it, and running it on your local environment. We'll also cover the necessary steps to create a GitHub repository for your Docusaurus project.

For more information about docusaurus and more detailed instructions, see [official docusaurus documentation](https://docusaurus.io/docs/2.1.0).

## Prerequisites

Before you begin, ensure you have the following tools installed on your system:

- [Node.js](https://nodejs.org/): Docusaurus is built with JavaScript, and Node.js is required to run it.
- [Yarn](https://yarnpkg.com/): A package manager used to manage Docusaurus dependencies.


To install docusaurus, follow the steps in the sections below.


### Create a repository

On GitHub, create a new repository for your project

1. In the **Repositories** tab, click **New**.
2. On the **Create a new repository** page that opens, do the following:
   1. For **Repository** name, enter a name for your new repository—for example, `my-new-project`.
   2. Optional: For **Description**, enter a description of you project.
   3. Click **Create repository**. This creates a new repository and redirects you to your new repository's page. 


### Create a new docusaurus project

Navigate to the destination folder where you want to create your Docusaurus project and run the following command:

```bash
npx create-docusaurus@latest REPOSITORY_NAME classic
```

Replace *`REPOSITORY_NAME`* with the name of the repository you created in the preceding step.

This command initializes a new Docusaurus project with the classic template.


### Install Node.Js packages or dependencies

1. Move into your newly created Docusaurus project directory:

```bash
cd my-docusaurus-project
```

2. Install Node.Js packages or dependencies into your project:

```bash
npm install
```


### Optional: Start the development server

When Node.Js packages or dependencies get installed you can preview your documentation website locally. For this, run the following command:

```bash
npm start
```

By defaul, your docusaurus project gets available at `http://localhost:3000`.

That's it, now you have your locall project up and running.

## Next steps

Deploy your project to GitHub pages:

