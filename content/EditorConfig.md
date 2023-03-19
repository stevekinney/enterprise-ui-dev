EditorConfig is a standard for setting up consistent editor settings across your team. I'm going to lift a quote from [their website](https://editorconfig.org):

> EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. The EditorConfig project consists of **a file format** for defining coding styles and a collection of **text editor plugins** that enable editors to read the file format and adhere to defined styles. EditorConfig files are easily readable and they work nicely with version control systems.

Depending what editor you use, it might support reading the `.editorconfig` out of the box. Editors like Visual Studio Code, Visual Studio, and some of the assorted JetBrains editors (e.g. WebStorm, PyCharm, etc.) [support EditorConfig by default](https://editorconfig.org/#pre-installed).

If you're using Atom, Vim, Emacs, SublimeText, TextMate, or one of the other editors that don't have support built in, then you can [download the appropriate plug-in](https://editorconfig.org/#download) and you should be good to go.

There are certainly a number of other ways to enforce coding standards, but EditorConfig is a fairly lightweight and unobstrusive way to get everyone on the same page. This could be helpful for you if you're switching between mutliple projects that have different standards or for getting everyone on your team aligned regardless of the conventions of whatever operating system they happen to be using.

Here is an example of a file:

```ini
root = true

[*]
end_of_line = lf
insert_final_newline = true

[*.{js,ts,jsx,tsx}]
indent_style = space
indent_size = 2

[*.{yml,yaml}]
indent_style = space
indent_size = 4
trim_trailing_whitespace = true
```

You can see a list of all of the supported properties [here](https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties). Not every property is supported by every editor and/or plugin.
