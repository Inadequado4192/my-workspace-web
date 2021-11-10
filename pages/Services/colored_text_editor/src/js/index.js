"use strict";
const windowsKey = Object.keys(window);
const textarea = document.querySelector("#colored_text_editor > textarea");
const content = document.querySelector("#colored_text_editor > div");
if (textarea === undefined)
    throw Error("Textarea not found");
var Highlighting;
(function (Highlighting) {
    function __(color, txt) {
        return `<span style="color: ${color};">${txt}</span>`;
    }
    function keywords(text) {
        SYNTAX.js.keywords.forEach(word => text = text.replace(eval(`/\\b${word}\\b/g`), __(HIGHLIGHTING.js.keywords, word)));
        return text;
    }
    Highlighting.keywords = keywords;
    function variables(text) {
        windowsKey.forEach(word => text = text.replace(eval(`/\\b${word}\\b/g`), __(HIGHLIGHTING.js.variable, word)));
        return text;
    }
    Highlighting.variables = variables;
})(Highlighting || (Highlighting = {}));
var Textarea;
(function (Textarea) {
    function rewrite(text) {
        text = text.replaceAll(" ", "&nbsp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\n", "<br>");
        content.innerHTML = text;
    }
    Textarea.rewrite = rewrite;
    textarea.addEventListener("input", () => {
        rewrite(textarea.value);
    });
    textarea.addEventListener("scroll", () => {
        content.scrollTop = textarea.scrollTop;
        content.scrollLeft = textarea.scrollLeft;
    });
})(Textarea || (Textarea = {}));
const STRUCT = {};
setTimeout(() => {
    let t = `"use strict";
const windowsKey = Object.keys(window).slice();

const textarea = document.querySelector("#colored_text_editor > textarea");
const content = document.querySelector("#colored_text_editor > div");
if (textarea === undefined)
    throw Error("Textarea not found");
var Highlighting;
(function (Highlighting) {
    function __(color, txt) {
        return \`<span style="color: \${color};">\${txt}</span>\`;
    }
    function keywords(line) {
        SYNTAX.js.keywords.forEach(word => line.value = line.value.replace(eval(\`/\\b\${word}\\b/g\`), __(HIGHLIGHTING.js.keywords, word)));
    }
    Highlighting.keywords = keywords;
    function variables(line) {
        windowsKey.forEach(word => line.value = line.value.replace(eval(\`/\\b\${word}\\b/g\`), __(HIGHLIGHTING.js.variable, word)));
    }
    Highlighting.variables = variables;
    function highlighting(lines) {
        lines.forEach(l => l.highlighting());
    }
    Highlighting.highlighting = highlighting;
})(Highlighting || (Highlighting = {}));
class Line {
    constructor(value) {
        this.value = value;
    }
    ;
    highlighting() {
        Highlighting.keywords(this);
        Highlighting.variables(this);
    }
    toString() { return this.value; }
}
var Textarea;
(function (Textarea) {
    function rewrite(text) {
        text = text.replaceAll(" ", "&nbsp;");
        const lines = new Set(text.split("\n").map(t => new Line(t)));
        Highlighting.highlighting(lines);
        console.log(lines);
        content.innerHTML = Array.from(lines).join("<br />");
    }
    Textarea.rewrite = rewrite;
    textarea.addEventListener("input", () => {
        rewrite(textarea.value);
    });
    textarea.addEventListener("scroll", () => {
        content.scrollTop = textarea.scrollTop;
        content.scrollLeft = textarea.scrollLeft;
    });
})(Textarea || (Textarea = {}));
"Hello world const";
'Hello world const';
\`Hello
world const\`;`;
    textarea.value = t;
    Textarea.rewrite(t);
}, 500);
