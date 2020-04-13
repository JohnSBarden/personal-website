import fs from "fs";

function readFile(fp) {
  return fs.readFileSync(fp, "utf8");
}

export { readFile };
