import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemas } from "./sanity/schemas";

const config = defineConfig({
    projectId: '8vs5zxdx',
    dataset: 'production',
    title: "Virtual Explorer",
    apiVersion: "2023-07-29",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas}
})

export default config;