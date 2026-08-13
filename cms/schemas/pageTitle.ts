import { defineType, defineField } from "sanity";

export default defineType({
  title: "Tittel",
  name: "pageTitle",
  type: "document",
  fields: [
    defineField({
      title: "Tittel",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Undertittel",
      name: "subtitle",
      type: "string",
    }),
  ],
});
