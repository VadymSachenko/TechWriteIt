---
title: Deploy a Docusaurus project to GiHub pages
sidebar_label: Deploy
description: Learn how to deploy a Docusaurus to GiHub pages
sidebar_position: 2
last_update: 
  date: 9/7/2023
---

To make your website available and accessible to users on the internet, you need to deploy it. 
This document shows how to configure and deploy a Docusaurus project to GitHub pages, a hosting service provided by GitHub.

## Prerequisites

* Install [Docusaurus](/docs/docusaurus/getting-started/install-docusaurus.md).
* Get a GitHub account: To deploy your project to [GitHub](https://github.com/) pages, you need a GitHub account.
* Install a code editor (for example, [Visual Studio Code](https://code.visualstudio.com/)): You need a code editor for working with your Docusaurus project.

## Create a repository

On GitHub, create a new repository for your project

1. In the **Repositories** tab, click **New**.

![repositories-new](/docs/docusaurus/repositories-new.png)

1. On the **Create a new repository** page that opens, do the following:
   1. For the **Repository** name, enter a name for your new repository—for example, `my-new-repository`.
   2. Optional: For **Description**, enter a description of your project.
   3. Click **Create repository**. This creates a new repository and redirects you to your new repository's page. 

![create-repository](/docs/docusaurus/create-repository.png)

## Configure docusaurus.config.js

The `docusaurus.config.js` file serves as the central configuration file for your Docusaurus project, allowing you to tailor your documentation website to your specific needs and preferences.
By modifying this file, you can control many aspects of your site's behavior, deployment, and appearance.

For more details about `docusaurus.config.js`, in the official documenatation, see [`docusaurus.config.js`](https://docusaurus.io/docs/api/docusaurus-config)

To be able to deploy your project, you need to adjust `docusaurus.config.js`:

1. In your text editor, open `docusaurus.config.js` and adjust the `url`, `baseUrl`, `organization`, `projectName`, and `deploymentBranch` variables as follows:
```js title="docusaurus.config.js"
const config = {
  ...
  url: 'https://github.com',
  baseUrl: '/REPOSITORY_NAME/',.
  organizationName: 'USER_NAME',
  projectName: 'REPOSITORY_NAME',
  deploymentBranch: 'gh-pages',
  ...
}
  ```

Replace the following placeholders:
* *`REPOSITORY_NAME`*: Replace it with the name of the repository you created in the [Create a repository for your new project](#create-a-repository) step.
* *`USER_NAME`*: Replace it with the name of your GitHub account.


## Initialize and set up your Git repository

1. Initialize a new Git repository in the current directory and stage and commit changes:

```bash
git init
git add .
git commit -m 'first commit'
```

2. Rename the default branch to `main`:

```bash
git branch -M main
```

3. Add a remote named `origin` and specify your GitHub repository URL:

```bash
git remote add origin https://github.com/USER_NAME/REPOSITORY_NAME.git
```

Replace the placeholders:
* *`REPOSITORY_NAME`*: Replace it with the name of the repository you created in the [Create a repository for your new project](#create-a-repository) step.
* *`USER_NAME`*: Replace it with the name of your GitHub account.

4. Push the local `main` branch to the `origin` remote:

```bash
git push -u origin main
```

## Deploy your project

Deploy your project to GitHub Pages:

```bash
GIT_USER='USER_NAME' yarn deploy
```

Replace `USER_NAME` with the name of your GitHub account.

:::info The "bash: GIT_USER: command not found" error

If you get the `bash: GIT_USER: command not found` error when running `GIT_USER='USER_NAME' yarn deploy`, try this command instead:

```bash
export GIT_USER=`USER_NAME`
yarn deploy
```

:::