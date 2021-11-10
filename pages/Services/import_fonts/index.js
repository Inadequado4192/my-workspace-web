"use strict";
const _textarea = document.getElementById("textarea");
const _name = document.getElementById("name");
const _path = document.getElementById("path");
const _format = document.getElementById("format");
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    document.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
    }, false);
});
['dragenter', 'dragover'].forEach(eventName => {
    document.addEventListener(eventName, () => document.body.classList.add("drag"), false);
});
['dragleave', 'drop'].forEach(eventName => {
    document.addEventListener(eventName, () => document.body.classList.remove("drag"), false);
});
let files = new Map();
document.addEventListener("drop", e => {
    let dt = e.dataTransfer;
    if (dt == null)
        return;
    ([...dt.files]).forEach(file => {
        let tmp = file.name.split(".");
        let extensions = tmp[tmp.length - 1];
        let name = tmp.splice(0, tmp.length - 1)[0];
        if (fontsType.includes(extensions)) {
            let _set = files.get(name);
            let __ = new Map();
            (_set == undefined ? files.set(name, new Set()).get(name) : _set)
                .add(extensions);
        }
    });
    start(files);
}, false);
function start(files) {
    _textarea.value = "";
    console.log(files);
    for (let a of files)
        writeFont(a[0], a[1]);
}
function writeFont(name, extensions) {
    let src = [""];
    extensions.forEach(extension => {
        src.push(`         url("${_path.value}${name}.${extension}")${_format.checked ? ` format("${extension}")` : ""}`);
    });
    _textarea.value +=
        `@font-face {
    font-family: "${_name.value || name.split("-")[0] || name}";
    src: local("☺")${src.join(",\n")};
    font-weight: ${findWeight(name)};
    font-style: ${findStyle(name)};
}\n`;
}
function findWeight(name) {
    const o = {
        Thin: "100",
        ExtraLight: "200",
        Light: "300",
        Regular: "400", Normal: "400",
        Medium: "500",
        SemiBold: "600",
        Bold: "700",
        ExtraBold: "800",
        Black: "900"
    };
    for (let key in o) {
        if (new RegExp(key).test(name))
            return o[key];
    }
    return "400";
}
function findStyle(name) {
    const o = {
        Normal: "normal",
        Italic: "italic",
        Oblique: "oblique",
    };
    for (let key in o) {
        if (new RegExp(key).test(name))
            return o[key];
    }
    return "normal";
}
const fontsType = ["abf", "acfm", "afm", "amfm", "bdf", "cha", "chr", "dfont", "eot", "etx", "euf", "f3f", "ffil", "fnt", "fon", "fot", "gdr", "gf", "glif", "gxf", "lwfn", "mf", "mxf", "nftr", "odttf", "otf", "pfa", "pfb", "pfm", "pfr", "pk", "pmt", "sfd", "suit", "t65", "tfm", "ttc", "tte", "ttf", "txf", "ufo", "vfb", "vlw", "vnf", "woff", "woff2", "xfn", "xft", "ytf"];
_name.oninput = _path.oninput = _format.oninput = () => start(files);




// https://www.typescriptlang.org/play?jsx=0#code/MYewdgzgLgBA+lApgDygQwE6LTAvDAExGAFcBbRMKAOgHNEoBRAG0QqoCEBPASQIAoARElSZsggJQw0EGAAkAKgFkAMgpRQAgljQs2lKAG4AUKEiw4YNBTyFi5A3QZ72UbnyFWKk6bMWqeMAAHEiZWVxMzaHggtCgAC1siUlcnMP1OXgFBWISfGXllFUCQ9IjTcGi4ADMQDDI4pPtU+jKDd2za+rj8vyKS0JcDE2MAbQByAgw0eipEDHGAGhhJ6doQADd5pZWpmdY0LZ3VkCDxgF1qLsY0YHj+RC2qADlrRDwAPhgAb2MASGSDio1DQBAIjCeUBUAEtoJR5g9Ia8KMsHlJcF9fn8-ohqEEsJCACKIapoEjMKD8CT-HHUaCnAAKGFOMzi0PAVP+AF9lqTmBBENSuRIRhM9rMkAtlqsZpttpdrrd7o8DMj3hifv9AalQeDITC4WAESqXm9UeivtrHAAjEAELjUYDMGQQA00XVCcWSXlofmC4zCkxitYHI7SqanC5XOo3O6I1VvT6agHNRy6iEGN3wjDx00omBUpNW4G2+2O50QV2wmhYMhyz1rb0wPkCoUi4wdqBcILvADKDAAYtDWLJ8P2oAAeLs9kDVZvgKAQBTdxCjMDka3zc4fEzT95Dke2JRoIIT6AYaFgWjLccHxAQHfGViwarD+8ALhgd9HMCNAHcYGPU9z0va8YFvN8HypExi3dMEMyoLMjRzQQIyCQRlnVTF-mfQhYHwXECDiNAFGmSBqnmEw-mhOd+AIfD8HXZhmCkLAoBIDAwCo-hRmoPj6KuSDzgkaMMFje5X1YJMsT+XCoDIIJbEk3EvFxCAgmYaFKUEahJCo2SGBgDRKAgdlIE-PdZ3nKglxXNcNy3Wx+AnNAwC4D55KCCRRk86hWCvBIYAAWhgABGc59Nw1TbF89TNOARB+AABmWXz-NoQKQtC7ykoimkaILWobOXHtqEvJ0SAIe8HlQEyzIgCQpBkgyLAFfDm0gtJ+FU9tsRa+A4Fsf9AJPaCaT+fg4DavB8BIMAqtfI0CBgAB+DqRzpBhurNX9EAA8cqRE1ptooKQCggw9PymhhqT6v4QTBGqkEgerer+LluVu6BMEpZSGpMHlm19VsRmqObgCgMyYG+jBfsgz9vya-4EA0MQ0GoDZfRIdUYEEQQqKiEBWD8kBaH4P7eq6AtcJwKyKZgP8LyQAcF34NBRly5Z2fC9sPuMMGwAhqHGa0xAWaoE7EE-ECr0w2qXsqT8LvvJH+ogDBgGlqALyvUZzlsUY8bynF5dMypRPEp66vAaSaXV4A8RICB7gAAxgd2PY9jjmCEAASb44FyeIMaxxAuX91SuWof3jIVsAuUkf2ajqBoaDuRBgAAa0QZa1rdrpU7975Y7N+PJDdz88a5F3esDDs-hR0QdBD5hsZgABqXAaRdgABIqoCC0kEuTfvB+sYcuErpPVJbtuAB859-N46Q0rShCCyQOf1hel4oBOqPtz9mGIX0hEALjJE++e3qAAKxAS8hEWAAdMBJC5ExPdHv9EGhWh4igT8-tFoEAAOo-z-pSHq79jCfwXEFaAXBWCAO+MA3sXZWCSwkNArkL8XYAw7ALIWNtgFgN-v-SWWsda0AkJQ0CyYoiwBALYGSCh4iXkrqFJKSUMI0kYKgaYMIIGVwAExcJ4diQR-9K4AGYxGLBpAAJUQLQckmBK4ABY5EwGeCnX0Gi5E0iUDnaE5BK4AFYDHYn7GQaEHAiYEErgANksX8OxzAHG4wAOwuL4drNAbiPGCAABwuI4M6LOlcACcYjuT-CpvwXC2cuAwEvDAEAqtqK0WGko2gfCgj8CSSJJA0BMGsQYBxMABYXJuQ+Ok0YSTjYfT+GxCpuNNHcPwYQyGxDLwEDQYgxKqlaFXhodDbWdCsQMLScwmkOjujMErmAXRzBxF-B4OgeKlctK+mhMAVZAB5a0mkACO2NK4gCOdCU5iBxHQL+PExJiBkmpPScmTJBZsnKLyQUp5RT7yQLeI1GALTOJVNcu5OpDSqJNJBZUwQSz5n4wDB2KZ-dbI9gNoINA1pqgYVxrcaoZA8VYsJcS6wpLliCGtAQXFlK7hoGJXcDAxKaULmJYgEAUB2VQGQOykgtLcbVGkQKwQ1RJLEuqFQCV4BpVcspbQKYxLaAitoJpFVyARXMD-JK4lZARVkA1cSsA1RtbErtFAKAIrOUiqCKSYltrrT2opbjW1zLKVBEzvasgcrcYQGqAQYlEASBaWJVARxZjQ3OuEFAPZlKLU3LjZa0NhrKX8pAMSjY1RHWUo2FqjNxriV-lnCKotYrhHEo1a-SlGqfWCC4Em-WBQGEjGMJYZe4BLylFsIHOIwcO3BFCN2gucRqD9q7fgQsGoYZwxHCKIAA