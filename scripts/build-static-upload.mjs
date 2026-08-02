import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = new URL("../", import.meta.url);
const source = await readFile(new URL("../worker/site.js", import.meta.url), "utf8");
const start = source.indexOf("String.raw`") + "String.raw`".length;
const end = source.indexOf("`;\n\nconst JSON_HEADERS", start);

if (start < "String.raw`".length || end < 0) {
  throw new Error("No se pudo extraer la página del portal.");
}

let html = source.slice(start, end)
  .replaceAll("__ORIGIN__", ".")
  .replace(
    "finishExercise(\\\\''+key+'\\\\')",
    "finishExercise(\\''+key+'\\')"
  )
  .replace(
    "async function loadMaterials(){",
    "async function loadMaterials(){if(location.protocol==='file:'||location.hostname){document.getElementById('materials').innerHTML='<div class=\"empty\">Los materiales de simulación se incorporarán en una próxima actualización.</div>';return;}"
  )
  .replace(
    "async function uploadMaterial(){",
    "async function uploadMaterial(){toast('La carga de archivos estará disponible en una próxima actualización.');return;"
  );

const target = new URL("../cloudflare-upload/", import.meta.url);
await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });
await writeFile(new URL("index.html", target), html, "utf8");
await cp(new URL("../public/og.png", import.meta.url), new URL("og.png", target));
await cp(new URL("../public/favicon.svg", import.meta.url), new URL("favicon.svg", target));

console.log(join(root.pathname, "cloudflare-upload"));
