import * as chokidar from "chokidar";
import { app } from "electron";

/**
 * Electro-load is a hot-reloading module for electron single page web-apps
 * 
 * @param {string} glob 
 * @param {string} [target] 
 * @param {chokidar.WatchOptions} [options] 
 */
const electroload = (glob: string, target?: string, options?: chokidar.WatchOptions) => {

    const browserWindows: Electron.BrowserWindow[] = [];

    const watcher = chokidar.watch(glob, options);

    app.on("browser-window-created", (_, bw) => {
        browserWindows.push(bw);
        bw.on("closed", () => {
            const i = browserWindows.indexOf(bw);
            browserWindows.splice(i, 1);
        });
    });

    const onChange = () => {
        for (const bw of browserWindows) {
            if (target) {
                const options = { extraHeaders: "pragma: no-cache\n" };
                bw.webContents.loadURL(target, options);
            } else {
                bw.webContents.reloadIgnoringCache()
            }
        }
    };

    watcher.on("change", onChange);
};

export default electroload;