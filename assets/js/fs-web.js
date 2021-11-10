"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFile = exports.readDir = void 0;
async function readDir(path, init) {
    let d = new DOMParser().parseFromString(await (await fetch(path, init)).text(), "text/html"), f = new Set(), n;
    if (!d.querySelector("body.directory"))
        throw Error(`no such file or directory, scandir '${path}'`);
    Array.from(d.querySelectorAll("#files > li > a")).slice(1).forEach(a => {
        f.add({
            name: (n = a.querySelector(".name")?.textContent ?? ""),
            size: parseInt(a.querySelector(".size")?.textContent ?? "") || null,
            data: a.querySelector(".date")?.textContent ?? "",
            path: `${path}/${n}`
        });
    });
    return f;
}
exports.readDir = readDir;
async function readFile(path, init) {
    return await (await fetch(path, init)).text();
}
exports.readFile = readFile;
