# Tailwind "classRegex in a complex js object" issue

#### What version of Tailwind CSS are you using?

For example: v3.4.3

#### What build tool (or framework if it abstracts the build tool) are you using?

N/A

#### What version of Node.js are you using?

For example: v18.18.0

#### What browser are you using?

N/A

#### What operating system are you using?

macOS, Windows

#### Other infos

VSCode version: 1.90.1  
Tailwind CSS IntelliSense plugin version: v0.10.5

#### Reproduction URL

This repo

Steps to reproduce:

- Install VSCode and Tailwind CSS IntelliSense plugin
- Open the project in VSCode by opening the workspace file
- run `yarn install` in the terminal
- Open `src/preset/button/index.js`
- from the line 167 the second string provides intellisense. All strings before it doesn't

#### Describe your issue

[Original issue](https://github.com/tailwindlabs/tailwindcss/issues/13862)
