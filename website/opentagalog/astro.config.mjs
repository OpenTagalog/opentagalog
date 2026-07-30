// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { unified } from "@astrojs/markdown-remark";

export default defineConfig({
    integrations: [mdx()],
    markdown: {
        processor: unified({
            smartypants: false,
        }),
    },
});
