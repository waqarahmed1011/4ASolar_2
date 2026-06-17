import { mkdir, writeFile } from "fs/promises";
import path from "path";

const BASE = process.cwd();
const CDN = "https://virya-energy.com";

async function downloadFile(url, destPath) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`  SKIP ${url.split("/uploads/")[1]} → HTTP ${res.status}`);
      return false;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(path.dirname(destPath), { recursive: true });
    await writeFile(destPath, buf);
    console.log(`  OK   ${destPath.replace(BASE, "")}`);
    return true;
  } catch (e) {
    console.warn(`  ERR  ${url} → ${e.message}`);
    return false;
  }
}

async function downloadBatch(items, concurrency = 4) {
  const queue = [...items];
  const workers = Array.from({ length: concurrency }, async () => {
    while (queue.length) {
      const item = queue.shift();
      if (item) await downloadFile(item.url, item.dest);
    }
  });
  await Promise.all(workers);
}

const P = `${BASE}/public`;

const assets = [
  // Logo
  { url: `${CDN}/wp-content/uploads/2024/10/virya-logo-1.png`, dest: `${P}/images/virya-logo.png` },
  // Favicon
  { url: `${CDN}/wp-content/uploads/2024/10/Vector.png`, dest: `${P}/seo/favicon.png` },

  // SVG icons (items slider tabs)
  { url: `${CDN}/wp-content/uploads/2024/12/wind.svg`, dest: `${P}/icons/wind.svg` },
  { url: `${CDN}/wp-content/uploads/2024/12/solar.svg`, dest: `${P}/icons/solar.svg` },
  { url: `${CDN}/wp-content/uploads/2024/12/hydrogen.svg`, dest: `${P}/icons/hydrogen.svg` },
  { url: `${CDN}/wp-content/uploads/2024/12/monitoring.svg`, dest: `${P}/icons/monitoring.svg` },
  { url: `${CDN}/wp-content/uploads/2024/12/transition.svg`, dest: `${P}/icons/transition.svg` },

  // Lottie JSON files
  { url: `${CDN}/wp-content/uploads/2024/11/wind.json`, dest: `${P}/lottie/wind.json` },
  { url: `${CDN}/wp-content/uploads/2024/11/profile.json`, dest: `${P}/lottie/profile.json` },
  { url: `${CDN}/wp-content/uploads/2024/11/fuel.json`, dest: `${P}/lottie/fuel.json` },
  { url: `${CDN}/wp-content/uploads/2024/11/globe.json`, dest: `${P}/lottie/globe.json` },
  { url: `${CDN}/wp-content/uploads/2024/12/SES-illu-en.json`, dest: `${P}/lottie/ses-illu-en.json` },

  // Hero / general images
  { url: `${CDN}/wp-content/uploads/2024/12/Virya-Energy-Image.jpg`, dest: `${P}/images/virya-image-1.jpg` },
  { url: `${CDN}/wp-content/uploads/2024/12/Virya-Energy-Image6.jpg`, dest: `${P}/images/virya-image-6.jpg` },
  { url: `${CDN}/wp-content/uploads/2024/12/Virya-Energy-Image8.jpg`, dest: `${P}/images/virya-image-8.jpg` },
  { url: `${CDN}/wp-content/uploads/2024/12/Virya-Energy-Image27.jpg`, dest: `${P}/images/virya-image-27.jpg` },
  { url: `${CDN}/wp-content/uploads/2024/12/Virya-Energy-Image31.jpg`, dest: `${P}/images/virya-image-31.jpg` },

  // Items slider images
  { url: `${CDN}/wp-content/uploads/2024/12/Sustainable-business-solutions.jpg`, dest: `${P}/images/expertise-wind.jpg` },
  { url: `${CDN}/wp-content/uploads/2024/12/Wind-Energy.jpg`, dest: `${P}/images/expertise-wind-2.jpg` },
  { url: `${CDN}/wp-content/uploads/2024/12/Hydrogen-Energy.jpg`, dest: `${P}/images/expertise-hydrogen.jpg` },
  { url: `${CDN}/wp-content/uploads/2024/12/Energy-Distribution.jpg`, dest: `${P}/images/expertise-energy.jpg` },

  // Highlighter section
  { url: `${CDN}/wp-content/uploads/2025/10/Landownder-cover.jpg`, dest: `${P}/images/highlighter-landowners.jpg` },
];

console.log(`Downloading ${assets.length} assets…`);
await downloadBatch(assets, 5);
console.log("Done.");
