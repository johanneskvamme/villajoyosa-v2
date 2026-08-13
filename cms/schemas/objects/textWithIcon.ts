import { defineType, defineField } from "sanity";

export default defineType({
  title: "Text With Icon",
  name: "textWithIcon",
  type: "object",
  fields: [
    defineField({
      title: "Icon",
      name: "icon",
      type: "iconPicker",
      options: {
        outputFormat: "react",
      },
    }),
    defineField({
      title: "Text",
      name: "text",
      type: "text",
    }),
  ],
});
