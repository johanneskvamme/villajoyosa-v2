import { defineType, defineField } from "sanity";
import { preview } from "sanity-plugin-icon-picker";
import { FaClipboardList } from "react-icons/fa";

export default defineType({
  title: "Fasiliteter",
  name: "amenity",
  icon: FaClipboardList,
  type: "document",
  fields: [
    defineField({
      title: "Navn",
      name: "name",
      type: "string",
    }),
    defineField({
      title: "Tekst & Ikon",
      name: "display",
      type: "textWithIcon",
    }),
  ],
  preview: {
    select: {
      title: "name",
      provider: "display.icon.provider",
      name: "display.icon.name",
    },
    prepare(icon) {
      return {
        title: icon.title,
        media: preview({
          provider: icon.provider,
          name: icon.name,
        }),
      };
    },
  },
});
