# Code in text 

In ordinary text sentences, use code font to mark up most things that have anything to do with code.
For code font, use backticks (`) 

## Items to put in code font

- Attribute names and values
- Class names
- Command output (for example, nameserver 169.254.169.254)
- Command-line utility names, such as gcloud, gsutil, kubectl, and bq
- Data types
- Defined (constant) values for an element or attribute
- DNS record types
- Enum (enumerator) names
- Environment variable names
- Element names (XML and HTML)
- Place angle brackets (<>) around the element name; you might have to escape the angle brackets to make them appear in the document.
- Filenames, filename extensions (if used), and paths
- Folders and directories
- HTTP verbs
- HTTP status codes
- HTTP content-type values
- IAM role names (for example, roles/storage.admin)
- Language keywords
- Method and function names
- Namespace aliases
- Placeholder variables
- Query parameter names and values
- Strings (such as URLs or domain names) that are used in commands and code:
  - In IAM, a condition can specify a page that only Human Resources admins can access—for example, `https://hr.example.com`.
  - The logID field includes the domain `corpaudits.example.com`.
- Text input (for example, `my-instance`)
- UI elements that are rendered based on previously entered text input. For example, if a reader was instructed in a procedure to enter an instance name as `my-instance`, when you tell them to click the instance name, use code font and bold: Click `my-instance`.
- Don't put quotation marks around code unless the quotation marks are part of the code.

## Items to put in ordinary (non-code) font

- Domain names.
- Names of products, services, and organizations.

## Items that are sometimes in code font

The following list includes items that are sometimes in code font.
- If command-line utility names are spelled the same as the software project or product with which they are associated, with only differences in capitalization, then use code font for the command and ordinary font for the name of the project or product. Examples:
  - Invoke the GCC 8.3 compiler using `gcc` for C programs or `g++` for C++ programs.
  - To send the file over FTP with IPv6, use `ftp -6`.
  - The options for the `curl` command are explained on the curl project website.
  - The `apt` program includes commands from the `apt-get` and `apt-cache` programs for working with APT packages.

- To use the email address as computer input or output, use code font.
- To treat the email address as a way to contact someone or a reference to someone, use non-code font and hyperlink the email address:
  - Enter the username, not the full email address. For example, enter `alex`, not `alex@example.com`.
  - For help, contact [support@example.com](mailto:support@example.com).

## Method names

When you refer to a method name in text, omit the class name except where including it would prevent ambiguity:
- **Correct**: To retrieve the zebra's metadata, call its `get()` method.
- **Icorrect**: To retrieve the zebra's metadata, call its `animal.get()` method.

Put an empty pair of parentheses after a method name to indicate that it's a method.

## HTTP status codes

To refer to a single status code, use the following formatting and phrasing: an HTTP `400 Bad Request` status code.

Call it a *status code* instead of a response code or error code, and put the number and the name in code font. If the HTTP is implicit from context, you can leave it out.

To refer to a range of codes, use the following form: an HTTP `2xx` or `400` status code. Use _`Nxx`_ (with a specific digit in place of _`N`_) to indicate anything in the _`N`00*-_`N`99* range, and put the status code number in code font even if you're leaving out the code's name.

To specify an exact range, you can do so: an HTTP status code in the `200`-`299` range. Here, too, put the numbers in code font.

## Grammatical treatment of code elements

Don't use code elements such as keywords and filenames as if they were English verbs or nouns. Don't inflect the name of a code element, such as to make it plural or possessive. Instead, include a noun after the name of the code element, and inflect that noun.

| Corect | Incorrect |
|-------------|-----------------|
| The `ADDRESS` constant's value is defined in the `settings.h` file. | `ADDRESS`'s value is defined in `settings.h`. |
| To add the data, send a `POST` request. | `POST` the data. |
| To retrieve the data, send a `GET` request. | Retrieve information by `GET`ting the data. |
| You can't close the file before opening it. You can't call the `close()` method for a file before you call `open()`. | `Close()`ing the file requires you to have `open()`ed it first. |
| Takes an array of extended ASCII code points (an array of `INT64` values) and returns BYTES values. For `STRING` arguments, returns the original string with all alphabetic characters in uppercase. | Takes an array of extended ASCII code points (ARRAY of INT64) and returns BYTES.  |

**Exception**: When documenting a Java API, you can leave out words like object or instance and instead use the class name as a noun: store the `MyClass` you got from the `ClassFactory`. To pluralize such nouns, add *object* or *instance*. **Example:** store the `MyClass` objects you got from the `ClassFactory` instances.

# Code samples

## Basic guidelines

- Indent every line of the code block by four spaces.
- **Indicate omitted code by using a comment** in the syntax of the language of your code sample. Don't use three dots or the ellipsis character (…). If a code block contains an omission, don't format the block as click-to-copy.

**Correct:**

```js
function helloWorld() {
  alert('Hello, world! This sentence is so long that it wraps onto a second
    line.');
}
```

```yaml
apiVersion: serving.knative.dev/v1
kind: Service
# Several lines of code are omitted here.
spec:
  template:
    spec:
      containers:
      - image: IMAGE_URL
        ports:
        - name: h2c
          containerPort: 8080

```

## Introductory statements

Precede a code sample with an introductory sentence or paragraph. The introduction can end with a colon or a period; usually a colon if it immediately precedes the sample and a period if there's more material (such as a note paragraph) between the introduction and the sample, or if the introduction paragraph ends in a sentence that isn't directly related to the sample.

**Correct** (ending with a period): The following code sample shows how to use the `get` method. For information about other methods, see [link]. [sample]

**Correct:**

The following code sample shows how to use the `get` method:

```
[sample]
```

For information about other methods, see [link].

# Procedures

## Single-step procedures

When a procedure consists of only one step, write the step in one sentence and format it as a bulleted list:

**Correct:** To clear (flush) the entire log, click **Clear logcat**.

**Incorrect:** To clear (flush) the entire log, follow this step:
  1. **Click Clear logcat**.

## Steps that say where to complete a task

Tell the reader where to complete an action—for example, in a particular tool or UI field—before you state the action.

**Correct:**

1. In Google Docs, click **File&nbsp;<span aria-label="and then">></span> New&nbsp;<span aria-label="and then">></span> Document**.
2. In the Google Cloud console, go to the Monitoring page.

**Incorrect:**

1. Click **File&nbsp;<span aria-label="and then">></span> New&nbsp;<span aria-label="and then">></span> Document** in Google Docs.
2. Go to the Monitoring page in the Google Cloud console.

## Steps with goals

When a step includes a goal, state the goal before the action.

**Correct:**

To start a new document, click **File&nbsp;<span aria-label="and then">></span> New&nbsp;<span aria-label="and then">></span> Document**.

**Incorrect:**

**Click File&nbsp;<span aria-label="and then">></span> New&nbsp;<span aria-label="and then">></span> Document** to start a new document.

Sometimes, the preceding format can imply that the required step is optional. In such cases, use the following format:

**Correct:** Start a new document: click **File&nbsp;<span aria-label="and then">></span> New&nbsp;<span aria-label="and then">></span> Document**.

To determine whether you need to use the colon format, consider how the goal of the step relates to the goal of the procedure. For example, in a procedure for creating a bar chart, a step with the goal "To create the chart" is clearly required. A step with the goal "To enhance the chart" is also unlikely to create confusion. But a step with the goal "To sort the data by date" might or might not be necessary. To clarify that the step isn't optional, use "Sort the data by date:" instead.

## Steps with results or justifications

State the action first and the result second. Keep the result in the same paragraph as the action.

**Correct:**

1. Click Run. The query results appear after the query runs.

**Correct:**

1. Click **Enter**.
2. In the **New file** dialog that appears, click Next.

**Incorrect:**

1. Click **Enter**. The **New file** dialog appears.
2. In the **New file** dialog, click **Next**.

If you include a justification for why the step is important, state the action first and the justification second.

**Correct:** Store the private key in a secure location. You need it later.

## Summary of guidelines for writing procedures

| Guidance | Correct | Icorrect |
|---|---|---|
| Make sure that the first sentence in a procedural step includes an imperative verb. | Clone the repository that contains the sample data. | You need the project ID later in this document. Retrieve the project ID. |
| Use complete sentences. | | |
| Use parallel structure and consistent verb form. | Download the service account key to your local machine. Click More, and then click Download. | Download the service account key to your local machine by clicking More and then clicking Download file. |
| For an optional step, type *Optional:* as the first word of the step. | Optional: Type an arbitrary string... | (Optional) Type an arbitrary string... |
| Set the context (such as a tool or an environment) in which the reader performs a procedure. | In Cloud Shell, connect to the development cluster. | |
| If there are multiple headings associated with a set of procedures, restate the context of the procedure in the first step, even if the context is the same as in the previous procedure. | In the Google Cloud console, go to the **BigQuery** page. | |
| Write in the order that the reader needs to follow. State the location of the action before stating the action. | In Google Docs, click **File&nbsp;<span aria-label="and then">></span> New&nbsp;<span aria-label="and then">></span> Document**. | Click **File&nbsp;<span aria-label="and then">></span> New&nbsp;<span aria-label="and then">></span> Document** in Google Docs. |
| | In the Google Cloud console, go to the Monitoring page. | Go to the Monitoring page in the Google Cloud console. |
| State the purpose or goal of the action before stating the action. | To start a new document, click **File&nbsp;<span aria-label="and then">></span> New&nbsp;<span aria-label="and then">></span> Document**. | Click **File&nbsp;<span aria-label="and then">></span> New&nbsp;<span aria-label="and then">></span> Document** to start a new document. |
| Don't use directional language to orient the reader, such as above, below, or right-hand side. This type of language doesn't work well for accessibility or for localization. If a UI element is hard to find, provide a screenshot. | | |
| Don't use please. | To open a document, click **File&nbsp;<span aria-label="and then">></span> Open**. | To open a document, please click **File&nbsp;<span aria-label="and then">></span> Open**. |
| Avoid using run the following command to introduce code. Instead, focus on what the command does. | In Cloud Shell, deploy the load generator... | In Cloud Shell, deploy the load generator by running the following command... |
| | Define a firewall rule to allow internal traffic... | Run the following command... |
| If the reader must press Enter after a step, then include that instruction as part of the step. | Click the search box, type `custom function`, and then press Enter. | 1. Click the search box and type `custom function`. 2. Press **Enter**. |
| Don't include keyboard shortcuts. | Copy the command, and then paste it... | Press <kbd>Ctrl+C</kbd>, and then press <kbd>Ctrl+V</kbd>... |
| When there's more than one way to do something, give only the best way. Giving alternate ways can confuse readers. | | |
| If your procedure includes code samples, see how to format code samples. | | |
| If your procedure includes commands, see how to format commands. | | |
| Ensure that the reader has the information that they need in order to prepare for the task ahead of time. Having information in advance supports task management, executive functioning, memory, and emotional regulation. | The following hardware and software are required:... | |
| Include as few steps as possible to complete the task. Limit interruptions in the path. | | |
| Focus on one reader decision at a time. Separate each instruction by making each instruction a separate list item. | | |

# Text formatting rules

## Bold

For UI elements and at the beginning of notices, use double asterisk (`__`) for bold.

## Italic

To use italics formatting, use underscores (`_`).

Use italics when drawing attention to a specific word or phrase or indicating emphasis, such as when defining terms or using words as words.

Italicize titles of books, movies, web series, and other full-length works, unless they're part of a link. 

Italicize mathematical variables and version variables. For example, *x + y = 3*, version 1.4.*x*.

## Underline

Do not underline.

## Code font

Use code font (``) to apply a monospace font and other styling to code in text, inline code, and user input.

Use code blocks  (```), for code samples or other blocks of code.

Use code font to mark up code, such as filenames, class names, method names, HTTP status codes, console output, and placeholders.

## Capitalization in titles and headings

In document titles and headings, use sentence case. That is, capitalize only the first word in the title, the first word in a subheading after a colon, and any proper nouns or other terms that are always capitalized a certain way. 

Don't put a period at the end of a title or heading.

## Capitalization in references to titles and headings

In references, use sentence case.

When you reference the title of any work or source that doesn't follow this guide, retain the original capitalization.

Use all-capitals for placeholders. **Correct:** _`PLACEHOLDER`_

## Quotation marks

For titles of shorter works—such as articles or episodes in a web series—put titles in quotation marks, unless they're part of a link.

## Other punctuation conventions

- Don't use ampersands (&) as conjunctions or shorthand for and. Use _and_ instead. That includes headings and navigation. Exception: It's okay to use & in cases where you need to refer to a UI element or the name of a menu that uses _&_.
- Put quotation marks and end punctuation outside of link text

# UI elements and interaction 

## Focus on the task
When practical, state instructions in terms of what the user should accomplish, rather than focusing on the widgets and gestures. By avoiding reference to UI elements, you help the user understand the purpose of an instruction, and it can help future-proof procedures.

**Correct:** Refresh the page.

**Correct:** Expand the **Advanced options** section.

However, know the audience and understand the context. In some cases, the point of a procedure is to guide the user through elements on the page. Or the UI might not be obvious, and it's helpful to explain the gestures for completing a step. Provide the level of detail that seems useful for the intended audience.

**Correct:** Click **Refresh**.

**Correct:** To expand the **Advanced options** section, click the ▶ expander arrow.

**Incorrect:** Click the zippy to expand the **Advanced options** section.

## Format names of UI elements

When referring to any UI element by name, put its name in bold, using ** in Markdown. This includes names for buttons, menus, dialogs, windows, list items, or any other feature on the page that has a visible name. Don't use code font for UI elements, unless it's an element that meets the requirements for code font. In that case, use both code font and bold.

Don't make an official feature name or product name bold, except when it directly refers to an element on the page that uses the name (such as a window title or button name).

Follow the capitalization as it appears on the page. However, if labels are inconsistent or they're all uppercase, use sentence case.

| Guideline | Correct | Incorrect |
|-----------|-------------|-----------------|
| Use sentence case and appropriate formatting and terminology for all labels. | In the **New project** window, select the **New activity** checkbox, and then click **Next**. | In **the New Project** window, select "New Activity", and then click the "Next" button. |
| When a label is all uppercase, use sentence case. | Click **↻ Refresh**. | Click **REFRESH**. |
| When referring to multiple labels that are inconsistently cased, use sentence case for all of the labels. | Click **New project**, and then click **New activity**. | Click **NEW PROJECT**, and then click **New Activity**. |

## Refer to UI elements

Don't use UI elements as if they were English verbs or nouns.

| Correct | Incorrect |
|-------------|-----------------|
| In the **Name** field, enter an account name. | **Name** the account. |
| To save the settings, click **Save**. | **Save** the settings. |
| In the **Service account ID** field, enter a name. For **Service account ID**, enter a name. | Specify a **Service account ID**. |

## Terminology and usage

Focus on the feature and its functionality, not the UI element. If you think it adds clarity for the reader, add the name of the UI element. For example, both of the following sentences are valid:

**Correct:** Go to **File&nbsp;<span aria-label="and then">></span> Tools**.

**Correct:** In the **File** menu, click **Tools**.

Following are some definitions of the terms to use when referring to UI elements.

### Windows, pages, dialogs, and panes

Most often, a window is the entire application window in a desktop environment. However, it can also refer to modular application elements that you can open and close. For example, in Android Studio, several windows are available in the **View&nbsp;<span aria-label="and then">></span> Tool Windows** menu.

**Correct:** In the **MyApp** window, click **Edit**.

**Incorrect:** In the **MyApp** page, click **Edit**.

Use *page* when referring to a web page.

**Correct:** In the **Google Cloud** console, go to the **Deployments** page.

**Incorrect:** In the **Google Cloud** console, go to the **Deployments** window.

A *dialog* is a smaller window that is usually detached from the main application window and appears in front of the window.

**Correct:** In the **Welcome** dialog, click **OK**.

**Incorrect:** In the **Welcome** pop-up window, click **OK**.

A *pane* is similar to a window inside the application—it's a distinct rectangular region of a window. However, a pane is tightly coupled to the other UI regions around it and usually cannot be hidden on its own, whereas a window is distinctly separate and can be hidden. Do not use terms such as *panel*, *section*, *area*, or *column* to refer to a pane.

**Correct:** In the **Create service account** pane, click **New**.

**Incorrect:** In the **Create service account** panel, click **New**.

### Menu bar

In a desktop application, the menu bar appears at the top of the window or at the top of the screen; it's a set of menus (such as **File** or **Edit**), each of which is a set of related *commands* and/or nested submenus.

To refer to an item in a menu, use the term *command*, not *choice*, *menu item*, or *option*. Exception: if you're documenting how to build an interface, you can use *menu item*.

To refer to a menu, use the form the _`LABEL_NAME`_ menu.

To tell the reader where to find a command in a menu or submenu, use a phrase like *In the **File** menu, select **Open**.*

#### Using angle brackets

If you use angle brackets (>), follow these guidelines:

* Put a nonbreaking space (&nbsp;) before each angle bracket.
* Don't bold each menu name separately; instead, enclose the entire sequence in a single bold element (**...**).
* Wrap the angle bracket with a span tag and add an aria-label attribute with and then text (for example, <span aria-label="and then">></span>).
* Apply only to menu items. Don't use it to describe a combination of different UI elements.

**Correct:** Select **View&nbsp;<span aria-label="and then">></span> Tools&nbsp;<span aria-label="and then">></span> Developer Tools**.

**Correct:** Select **MyApp&nbsp;<span aria-label="and then">></span> Preferences**, and then select the **Languages** preference pane.

**Incorrect:** Select **MyApp&nbsp;<span aria-label="and then">></span> Preferences&nbsp;<span aria-label="and then">></span> Languages&nbsp;<span aria-label="and then">></span> +&nbsp;<span aria-label="and then">></span> CSS**.

### Navigation menu

A *navigation menu* is a control—usually a pane or window—that contains a list of items that the user can click to go to pages in an application or website. Don't use the terms *navigation bar*, *navigation pane*, *navigation panel*, or *navigation window* for such a control.

### Toolbar

A *toolbar* is a set of buttons for common user actions. A toolbar button that includes a menu is called a menu button. Refer to the toolbar by name if you think that the user needs help finding a button.

**Correct:** On the **Dashboard** toolbar, click **Edit**.

**Correct:** Click **Edit**.

## Buttons and icons

A *button* initiates an action when clicked (or tapped, in the case of a touchscreen). To refer to a button, use the button's label.

**Correct:** Click **OK**.

**Incorrect:** Click the "OK" button.

An *icon* is a symbol or image that represents an object or a function. An icon can be a button as well. If the button includes an icon, write the name of the button as shown in the tooltip, and add the button icon immediately before the name.

**Correct:** Click **︙ Settings and utilities**.

**Incorrect:** Click **︙**.

If a UI element name ends with an ellipsis (...), leave out the ellipsis.

**Correct:** Click **Browse**.

**Incorrect:** Click **Browse...**.

Don't use directional language to orient the reader, such as *above*, *below*, or r*ight-hand side*.

**Correct:** Click **☰ Menu**.

**Incorrect:** In the left-side panel, click the button with three lines.

### Tab

A *tab* is a navigation element that looks like a file tab. To refer to a tab, use the form the _`LABEL_NAME`_ tab.

**Correct:** Select **Tools&nbsp;<span aria-label="and then">></span> Options**, and then click the **Edit** tab.

### Text box

A *text box* is a box that the user can type in. Use *box* and the form the _`LABEL_NAME`_ box. Format text that the user types by using code formatting (``).

**Correct:** In the **Owner** box, enter your name.

**Correct:** In the **Name** box, enter `wsfc-1`.

### List box, combo box, and spin box

A *list box* is a box that offers the user a list of items. To refer to a list box, use the form the _`LABEL_NAME`_ list or the _`LABEL_NAME`_ box, whichever is clearer.

**Correct:** In the Item list, select Desktop.

A *combo box* is a combination of a text box and a list box. To refer to a combo box, use the form *the `LABEL_NAME` box*. To refer to entering a value into a combo box, use the verbs *type* or *select* or *enter*.

**Correct:** In the **Font** box, type or select the font that you want to use.

A spin box is a box that lets the user choose a value by clicking arrows or by typing. To refer to a spin box, use the form *the `LABEL_NAME` box*. To refer to entering a value into a spin box, use the verb enter.

**Correct:** In the **Font Size** box, enter a font size.

### Checkbox

A checkbox is a small box that indicates whether an option is on or off. To refer to a checkbox, use the form the _`LABEL_NAME` checkbox*. Don't use the verbs *check* and *uncheck*; use *select* and *clear* instead.

**Correct:** Select the **Automatically check for updates** checkbox.

**Correct:** Clear the **Bookmarks** checkbox.

### Radio button

A radio button is a small button used to choose one item from a group of mutually exclusive options. To refer to a radio button, use the radio button's label, or refer to the group of buttons by its label.

**Correct:** Select Do not remember passwords.

**Correct:** For Startup mode, choose an option.

### Expander arrow

An expander arrow is the UI element used to expand or collapse a section of navigation or content. Avoid referring to these explicitly in documentation, but when you do, use the terms expander arrow and expandable section rather than terms like expando or zippy.

**Correct:** To expand the Advanced options section, click the w_rtexpander arrow.

**Incorrect:** To expand the Advanced options section, click the zippy.

### Toggle

A *toggle* is the UI element that switches back and forth between on and off states. Don't use the word toggle as a verb. Describe the action that you want the user to take.

**Correct:** To turn on the setting, click the **Wi-Fi** toggle.

In some cases, you might not know what state the toggle is in before the user interacts with it so be clear what position the toggle should be in.

**Correct:** In **Settings**, click the **Magic mode** toggle to the on position.

### Press and type keyboard keys

To indicate that the user should press a given keyboard key or combination, use the `<kbd>` element.

Following is an example `<kbd>` tag:

**Correct:** Press <kbd>Control+C</kbd>.

To refer to a letter key, use uppercase instead of lowercase.

**Correct:** To save, press <kbd>Control+S</kbd>.

**Incorrect:** To save, press <kbd>Control+s</kbd>.

To refer to a key that the user types to enter that key's value as text input, use the <code> element, not the <kbd> element.

To refer to a keyboard key, use the key's name. If that's ambiguous, use the form the KEY_NAME key.

**Correct:** Press <kbd>Esc</kbd>.

**Correct:** Press the <kbd>Esc</kbd> key.

Spell out the names of modifier keys such as Command, Control, Option, and Shift. Don't use symbols for those keys. To refer to a key combination, use the form MODIFIER+KEY_NAME.

**Correct:** Press Control+V.

When you provide shortcuts for multiple operating systems, put the macOS shortcut in parentheses after the Windows and Linux shortcut.

**Correct:** To copy, press <kbd>Control+C</kbd> (or <kbd>Command+C</kbd> on macOS).

**Incorrect:** To copy, press <kbd>Ctrl+C (<kbd>⌘+C</kbd>).

To refer to a key or combination that uses the <kbd>Shift</kbd> key, use the form _`MODIFIER`+<kbd>Shift</kbd>+`KEY_NAME`_.

**Correct:** Press <kbd>Control+Shift+?</kbd>.

Spell out the names of characters that could be confusing in a *keyboard shortcut*, such as *comma*, *hyphen*, *period*, and *plus*.

To refer to a keyboard shortcut, use either *keyboard shortcut* or k*ey combination*.

To refer to pressing a key or combination to cause an action to *occur*, use the verb *press*. To refer to typing a key or combination as part of text, use the verbs *enter* or *type*.

## Prepositions

When documenting the UI, use the following prepositions.

| Preposition | UI element | Correct |
|-------------|------------|-------------|
| in | dialogs | In the **Alert** dialog, click **OK**. |
| in | fields | In the **Name** field, enter `wsfc-1`. |
| in | lists | In the **Item** list, select **Desktop**. |
| in | menus | In the **File** menu, click **Tools**. |
| in | panes | In the **Metrics** pane, click **New**. |
| in | windows | In the **Task** window, click **Start**. |
| on | pages | On the **Create an instance** page, click **Add**. |
| on | tabs | On the **Edit** tab, click **Save**. |
| on | toolbars | On the **Dashboard** toolbar, click **Edit**. |

# Word list

This is a list that explain how and which words you must or must not use.

<dl>
  <dt></dt>
  <dd></dd>
</dl>

<dl>
  <dt>& (ampersand)</dt>
  <dd>Don't use & instead of and in headings, text, navigation, or tables of contents.</dd>
  <dt>about versus on</dt>
  <dd>When a cross-reference includes information that describes what the cross-reference links to, use about instead of on. Recommended: For more information about indexes, see Managing indexes.</dd>
  <dt>above</dt>
  <dd>Don't use for a range of version numbers. Instead, use later. Don't use to refer to a position in a document. Instead, use earlier or preceding. Don't use to refer to a position in the UI. Instead, write instructions that avoid directional language. For more information, see Writing accessible documentation. It's OK to use above in a non-directional way, such as when describing a hierarchy.</dd>
  <dt>and/or</dt>
  <dd>Don't use unless space is limited, such as in a table.</dd>
  <dt>and so on</dt>
  <dd>Avoid using and so on whenever possible. </dd>
  <dt>as</dt>
  <dd>If you mean *because*, then use *because* instead of *as*.</dd>
  <dt>below</dt>
  <dd>Don't use for a range of version numbers. Instead, use earlier. Don't use to refer to a position in a document. Instead, use later or following. Don't use to refer to a position in the UI. Instead, write instructions that avoid directional language. For more information, see Writing accessible documentation. It's OK to use below in set phrases such as below (the) average, below the mean, below zero. It's OK to use below in a non-directional way, such as when describing a hierarchy.</dd>
  <dt>above</dt>
  <dd>Don't use for a range of version numbers. Instead, use *later*.
Don't use to refer to a position in a document. Instead, use *earlier* or *preceding*.
Don't use to refer to a position in the UI. Instead, write instructions that avoid directional language. It's OK to use above in a non-directional way, such as when describing a hierarchy.</dd>
  <dt>allows you to</dt>
  <dd>Don't use. Instead, use lets you</dd>
  <dt>can</dt>
  <dd>Use can in the following ways: To convey permission (for example, "You can access the server"); To refer to an optional action (for example, "You can also view logs with the Log Viewer"); To describe a possible outcome (for example, "The process can take 30 minutes").</dd>
  <dt>clear</dt>
  <dd>Use (as a verb) to refer to clearing a check mark from a checkbox. Recommended: Clear Automatically check for updates.</dd>
  <dt>deselect</dt>
  <dd>Don't use to refer to clearing a check mark from a checkbox. Instead, use clear.</dd>
  <dt>desire, desired</dt>
  <dd>Don't use. Instead, use a word like *want* or *need*.</dd>
  <dt>display (verb)</dt>
  <dd>Don't use as an intransitive verb. Display is a transitive verb; therefore, it requires an object. It is often misused in technical documentation, as demonstrated by the following example:
Recommended: The Output Directories area appears; The Output Directories area is displayed; The Output Directories area displays the vector image.</dd>
  <dt>documentation or document or documents</dt>
  <dd>Within a document, use *in this document*, and not *in this article*, *in this topic*, or *in this doc*. It's OK to use *in this tutorial*, *in this quickstart*, or *in this codelab*. Always spell out documentation except in cases where space is limited, such as in tabs and URLs. Recommended: You can find many examples in this document; This document provides guidance about creating tables. Not recommended: You can find many examples in this article; This topic provides guidance about creating tables.</dd>
  <dt>does not yet</dt>
  <dd>Avoid because this phrase can become outdated. The phrase can also prematurely disclose product or feature strategy or inappropriately imply that a product or feature might change.</dd>
  <dt>drop-down</dt>
  <dd>Not* dropdown* or drop down. In most cases, you can omit *drop-down* in favor of list or menu. If the omission results in ambiguity, then include *drop-down* as a modifier.</dd>
  <dt>e.g.</dt>
  <dd>Don't use. Instead, use phrases like *for example* or *such as*. Many people confuse *e.g.* and *i.e.*</dd>
  <dt>email</dt>
  <dd>Not *e-mail*, *Email*, or *E-mail*. Don't use as a verb. Use a specific verb in front of the word. For example, *send email*. This construction is better for translation and a global audience.</dd>
  <dt>enable</dt>
  <dd></dd>
  <dt>check</dt >
  <dd>Don't use to refer to marking a checkbox. Instead, use *select*. Recommended: Select Automatically check for updates. Not recommended: Check Automatically check for updates.</dd>
  <dt>checkbox</dt>
  <dd>Not *check box*</dd>
  <dt>config</dt>
  <dd>Avoid. Instead, spell out the full word when it's used in a non-code sense: *configuration* or *configuring*. Use the verbatim code item name when referring to, for example, a data structure or a file with that name.</dd>
  <dt>cons</dt>
  <dd>Don't use. Instead, use a more precise term, such as *disadvantages*.</dd>
  <dt>could</dt>
  <dd>Avoid using. Instead, use *can* where possible.</dd>
  <dt>Create a new ... </dt>
  <dd>Avoid using unless you need to distinguish the item from another recently created item. Instead, use *Create a ...*. Recommended: Create a project. Not recommended: Create a new project.</dd>
  <dt>currently</dt>
  <dd>Avoid because this word is implied. The word can also prematurely disclose product or feature strategy or inappropriately imply that a product or feature might change.</dd>
  <dt>etc.</dt>
  <dd>Avoid using *etc.*, *and so forth*, and *and so on*. Recommended: Your app might experience problems such as instability or high latency. Recommended: Your app might experience problems, including instability or high latency.</dd>
  <dt>for instance</dt>
  <dd>Avoid. Instead, use *for example* or *such as*.</dd>
  <dt>functionality</dt>
  <dd>Use with caution. With respect to hardware or software, functionality refers to a set of associated functions or capabilities and how they work. However, the word is sometimes overused, especially when the intended meaning is capabilities or features.</dd>
  <dt>future, in the future</dt>
  <dd>Avoid in timeless documentation because this word or phrase can become outdated.</dd>
  <dt>he, him, his</dt>
  <dd>Don't use a gendered pronoun except for a specific individual of known gender. Use *they* and *their* for the general singular pronoun.</dd>
  <dt>higher</dt>
  <dd>Don't use for a range of version numbers. Instead, use *later*. Don't use to refer to a position in a document. Use *earlier* or *preceding*. Don't use to refer to a position in the UI. Instead, write instructions that avoid directional language.</dd>
  <dt>hit</dt>
  <dd>Don't use as a synonym for click, press, or type.</dd>
  <dt>hover</dt>
  <dd>Don't use. Instead use *hold the pointer over*.</dd>
  <dt>in order to</dt>
  <dd>Avoid *in order to*; instead, use *to*.</dd>
  <dt>later</dt>
  <dd>Avoid in timeless documentation because this word can become outdated. If you must use latest, give the reader a reference point—for example, a version number or release date. Recommended: To help keep your system secure, install the latest version of the tools.</dd>
  <dt>let's (as a contraction of let us)</dt>
  <dd>Don't use if at all possible.</dd>
  <dt>login (noun or adjective), log in (verb)</dt>
  <dd>For the verb form, *sign in* is generally better. If you're documenting a tool that uses the term *log in*, then use that term.</dd>
  <dt>may</dt>
  <dd>In general, reserve for official policy or legal considerations. To convey possibility, use *can* or *might* instead. To convey permission, use *can* instead.</dd>
  <dt>might</dt>
  <dd>Use to convey possibility or an uncertain outcome (for example, "You might be prompted to enter your credentials").</dd>
  <dt>must</dt>
  <dd>Use to describe a required action or state (for example, "You must have the Editor role"). You can also write you need in order to convey a requirement.</dd>
  <dt>now</dt>
  <dd>Avoid when describing features of products or services because this word is implied. If the intent of the text is a comparison between past and present, you can use now—for example, "In versions of the tool earlier than 1.10, you could use only the default value, but now you can assign a custom value." Recommended: This feature lets you use combinations of user properties. Not recommended: This feature now lets you use combinations of user properties.</dd>
  <dt>old, older</dt>
  <dd>Don't use to refer to a previous version of a product. Instead, use *earlier*. Make sure that you provide a version number by which to understand earlier.</dd>
  <dt>once</dt>
  <dd>If you mean *after*, then use *after* instead of *once*.</dd>
  <dt>outside the box, out of the box, out-of-the-box</dt>
  <dd>Avoid using in a figurative way. OK to use literally.</dd>
  <dt>please</dt>
  <dd>Don't use *please* in the normal course of explaining how to use a product, even if you're explaining a difficult task. Don't use the phrase *please note*. Use *please* only when you're asking for permission or forgiveness—for example, when what you're asking for benefits you, inconveniences a reader, or suggests a potential issue with a product. Recommended: If the issue persists, please contact your account representative.</dd>
  <dt>possible</dt>
  <dd>Don't use *possible* or *impossible* to mean you *can* or you *can't*.</dd>
  <dt>press</dt>
  <dd>Use when referring to pressing a key or a key combination to cause an action to occur. Also use for mechanical buttons. For on-screen and soft (capacitive) buttons, use tap. Recommended: Press Control+C (or Command+C on macOS).</dd>
  <dt>pros</dt>
  <dd>Don't use. Instead, use a more precise term, such as *advantages*.</dd>
  <dt>shall</dt>
  <dd>Don't use.</dd>
  <dt>should, should be</dt>
  <dd>Avoid. Clarify what you mean. Determine if an action is required versus optional, an outcome is expected versus possible, or a state is actual versus recommended. If an action is required: Use *must*, or rephrase the sentence so that it's a clear imperative instruction such as "Do the following before you continue." If an action is recommended: Use *We recommend...*. You can use *should* if a recommended action is generally recognized. For example, "You should use a strong password ..." or "You should follow the principle of least privilege ...." If an action is optional: Use *can*. For example, "You can also use approach B to solve the same problem." If an outcome is expected: Describe the outcome in terms of what is expected. For example: "The process returns 10 items." If an outcome is possible: Use might or can. For example, "The process can take about 30 minutes." If a state is actual: When you're describing the state of something, such as the value of a variable, avoid writing "The value should be true." Instead, clarify which of the following you mean: "You must set the value to true;" "The server sets the value to true;" "If the value is false, follow these steps to change it to true."</dd>
  <dt>since</dt>
  <dd>If you mean *because*, then use *because* instead of *since*. *Since* is ambiguous; it can refer to the passage of time. *Because* refers to causation or the reason for something.</dd>
  <dt>soon</dt>
  <dd>Avoid in timeless documentation because this word can become outdated. The word can also prematurely disclose product or feature strategy or inappropriately imply that a product or feature might change. **Correct**: This setting is optional. **Incorrect**: This setting is optional for existing applications but will soon be required for all applications.</dd>
  <dt>status bar</dt>
  <dd>Not *statusbar* or *status-bar*.</dd>
  <dt>tab</dt>
  <dd>When referring to the sub-pages of a console, use page instead of tab.</dd>
  <dt>table name</dt>
  <dd>wo words. Set specific table names in code font.</dd>
  <dt>text box, textbox</dt>
  <dd>Don't use. Instead, use *box*.</dd>
  <dt>they (singular)</dt>
  <dd>This is our preferred gender-neutral pronoun. Whether used as singular or plural, it always takes the plural verb. For example, "A user authenticates their identity by entering their password."</dd>
  <dt>this, that</dt>
  <dd>Where possible, put a noun after this or that for clarity. If doing so results in clunky prose, then don't do it; but even then, try thinking about what the noun would be. If you aren't sure what noun this or that refers to, then consider rephrasing— otherwise, your reader probably won't know what noun you're referring to, either.</dd>
  <dt>timeframe</dt>
  <dd>Not time frame. Avoid where possible, or use an alternative such as period, schedule, deadline, or when. But if you do use it, then write it as one word.
</dd>
  <dt>timestamp</dt>
  <dd>Not *time stamp*.</dd>
  <dt>type</dt>
  <dd>Use *enter* instead.</dd>
  <dt>UI</dt>
  <dd>Don't use generically to refer to a page or dashboard. Use a more specific term like *page* or *console*. If a specific term is unavailable, use *web interface*. **Correct**: In the Google Cloud console. **Correct**: On the **Cloud Tasks** page. **Correct**: In the Secure Source Manager web interface. Not recommended: In the **Cloud Tasks** UI</dd>
  <dt>uncheck</dt>
  <dd>Don't use to refer to clearing a check mark from a checkbox. Instead, use *clear*. **Correct**: Clear Automatically check for updates. **Incorrect**: Uncheck Automatically check for updates. **Incorrect**: Deselect Automatically check for updates.</dd>
  <dt>via</dt>
  <dd>Don't use.</dd>
  <dt>vice versa</dt>
  <dd>Don't use. Instead, use a phrase like the *other way around*, *conversely*, or *otherwise*. In some contexts, *vice versa* is unclear or imprecise because in a complex sentence it's hard to know which two things are swapped with each other. In such cases, make it explicitly clear what two things are swapped.</dd>
  <dt>vs.</dt>
  <dd>Don't use vs. as an abbreviation for versus; instead, use the unabbreviated versus.</dd>
  <dt>we</dt>
  <dd>Don't use *we* (or other second-person plural pronouns such as *our* or *us*) to address the reader who is performing the tasks that you're documenting. Instead, use *you*. It's OK to use *we* to refer to the organization that's represented as the author of the document as long as the antecedent is clear.</dd>
  <dt>web page</dt>
  <dd>Not *webpage*. But is possible, avoid both by using *page*.</dd>
  <dt>will</dt>
  <dd>Avoid. Applies equally to its past tense, *would*. </dd>
  <dt>wish</dt>
  <dd>Don't use. Instead, use a word like *want* or *need*.</dd>
  <dt>with</dt>
  <dd>Don't use *with* when expressing ownership: **Correct**: A handset that has 2 GB of RAM. **Incorrect:** A handset with 2 GB of RAM. Don't use *with* when expressing use: **Correct**: Use the debugging tool to debug. **Incorrect**: Debug this tool with the debugging tool. </dd>
  <dt>would</dt>
  <dd>Avoid using. Instead, use *can* where possible.</dd>
  <dt>you</dt>
  <dd>Use *you* instead of *user* to address the reader of your document.</dd>
</dl>