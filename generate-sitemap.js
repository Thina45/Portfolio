import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { resolve } from "path";

const sitemap = new SitemapStream({ hostname: "https://thinakarandev.com" });

// ✅ Only include your main domain and any extra pages you might have
const links = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  // Example: uncomment below if you ever add these as separate routes
  // { url: '/projects', changefreq: 'monthly', priority: 0.8 },
  // { url: '/contact', changefreq: 'monthly', priority: 0.8 },
];

links.forEach((link) => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap)
  .then((data) => {
    const outputPath = resolve("./public/sitemap.xml");
    const writeStream = createWriteStream(outputPath);
    writeStream.write(data.toString());
    writeStream.end();
    console.log("✅ Sitemap successfully generated at /public/sitemap.xml");
  })
  .catch((err) => console.error(err));
