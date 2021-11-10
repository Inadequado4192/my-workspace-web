export interface FileInfo {
    name: string;
    size: number | null;
    data: string;
    path: string;
}
export async function __readDir(path: string, init?: RequestInit | undefined) {
    let d = new DOMParser().parseFromString(await (await fetch(path, init)).text(), "text/html"), f = new Set<FileInfo>(), n: string;
    if (!d.querySelector("body.directory")) throw Error(`no such file or directory, scandir '${path}'`)
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
export async function readFile(path: string, init?: RequestInit | undefined) {
    return await (await fetch(path, init)).text();
}