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
        const files = ["random.ts"];
        files.forEach(async (n) => {
            console.log(await fs_web_1.readFile(`./pages/Code/${n}`));
        });
    })();
})(Interface = exports.Interface || (exports.Interface = {}));
