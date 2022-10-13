import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";

const pagesDirectory = path.join(process.cwd(), "content/pages");

let pageCache;

export function fetchPageContent() {
  if (pageCache) {
    return pageCache;
  }
  // Get file names under /pages
  const fileNames = fs.readdirSync(pagesDirectory);
  const allPagesData = fileNames
    .filter((it) => it.endsWith(".md"))
    .map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(pagesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the page metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }),
        },
      });
      const matterData = matterResult.data;
      matterData.fullPath = fullPath;

      const slug = fileName.replace(/\.md$/, "");

      return matterData;
    });
  // Sort pages by date
  pageCache = allPagesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  return pageCache;
}
