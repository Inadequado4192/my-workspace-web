import { readFile } from "./fs-web";

export namespace Interface {
    export function get(selectors: string): HTMLElement | null;
    export function get<T extends Element>(selectors: string): T | null {
        return document.querySelector<T>(selectors);
    }
    export function gets(selectors: string): NodeListOf<HTMLElement>;
    export function gets<T extends Element>(selectors: string): NodeListOf<T> {
        return document.querySelectorAll<T>(selectors);
    }

    // Active Buttons
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

    // Show Codes
    (async function () {
        const files = ["random.ts"] as const;
        files.forEach(async n => {
            console.log(await readFile(`./pages/Code/${n}`));
        });
    })();
}
// console.log("__dirname: " + __filename);