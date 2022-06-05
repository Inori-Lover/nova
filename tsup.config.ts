import { defineConfig } from "tsup";

export default defineConfig({
    clean: true,
    sourcemap: true,
    minify: true,
    dts: true,
});
