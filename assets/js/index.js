"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interface = void 0;
const fs_web_1 = require("./fs-web");
var Interface;
(function (Interface) {
    function get(selectors) {
        return document.querySelector(selectors);
    }
    Interface.get = get;
    function gets(selectors) {
        return document.querySelectorAll(selectors);
    }
    Interface.gets = gets;
    {
        const buttons = gets("#selects > button");
        buttons.forEach(b => b.onclick = () => {
            get("#selects > button.active")?.classList.remove("active");
            b.classList.add("active");
            gets("#container > div").forEach(div => div.classList.add("disabled"));
            let id = b.getAttribute("data-block");
            get(`#container > div#${id}`)?.classList.remove("disabled");
        });
    }
    (async function () {
        await (await fs_web_1.readDir("./pages/Code")).forEach(async (f) => {
            console.log(await fs_web_1.readFile(f.path));
        });
    })();
})(Interface = exports.Interface || (exports.Interface = {}));
console.log("__dirname: " + __filename);
