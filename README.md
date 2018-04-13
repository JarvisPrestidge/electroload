# Electroload

Hot-reloading module for electron single page web-apps

Installation
---
```bash
$ yarn add electroload
```

Usage
---
Just initialize this module with desired glob or file path to watch and let it refresh electron browser windows as targets are changed:

```js
import { app, BrowserWindow } from "electron";
import electroload from "electroload";
import * as path from "path";

const targetFile = path.join(__dirname, "..", "renderer", "app.html");
const targetUri = `file://${targetFile}`;

// Enable live reloading!
electroload(targetFile, targetUri);
```

Why this module?
---
Other hot-reloading solutions didn't provide typing support and lacked the ability to reload specific offline uris (useful for offline SPAs)

Changelog
---
 - **1.0.2**: Fixing typings by adding imported types to `"dependencies"` from `"devDependencies"` 
 - **1.0.1**: Add readme + general code clean up
 - **1.0.0**: Initial release