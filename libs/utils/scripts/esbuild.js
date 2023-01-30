const esbuild = require("esbuild");

const isWatch = process.argv.includes("--watch");

const promises = [
  esbuild.build({
    entryPoints: ["src/main.ts"],
    outdir: "build/esm",
    bundle: true,
    sourcemap: true,
    minify: true,
    splitting: true,
    format: "esm",
    target: ["esnext"],
    define: { "process.env": "import.meta.env" }
  }),
  esbuild.build({
    entryPoints: ["src/main.ts"],
    outdir: "build/cjs",
    bundle: true,
    sourcemap: true,
    minify: true,
    format: "cjs"
  })
];

Promise.all(promises).catch(err => {
  console.error(err);
  process.exit(1);
});
