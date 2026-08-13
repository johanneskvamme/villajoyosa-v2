import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { iconPicker } from "sanity-plugin-icon-picker";
import { media } from "sanity-plugin-media";
import { dashboardTool } from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";

import { structure } from "./structure";
import { schemaTypes } from "./schemas";

const SINGLETON_TYPES = new Set(["pageTitle", "imagePosition"]);

export default defineConfig({
  name: "default",
  title: "Villajoyosa",
  projectId: "ws1g0t28",
  dataset: "production",
  plugins: [
    structureTool({ structure }),
    iconPicker(),
    media(),
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: "Lanser endringer",
          sites: [
            {
              title: "Nettsiden",
              apiId: "e69024ce-d948-4699-acd1-963be127a2af",
              buildHookId: "6168884e3900f914279a805d",
              name: "villajoyosa-v2-web",
            },
          ],
        }),
      ],
    }),
    visionTool({ defaultApiVersion: "2021-10-21" }),
  ],
  schema: {
    types: schemaTypes,
  },
  document: {
    actions: (prev, context) => {
      if (SINGLETON_TYPES.has(context.schemaType)) {
        return prev.filter(
          ({ action }) => action !== "duplicate" && action !== "delete"
        );
      }
      return prev;
    },
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === "global") {
        return prev.filter(
          (templateItem) => !SINGLETON_TYPES.has(templateItem.templateId)
        );
      }
      return prev;
    },
  },
});
