import { defineType, defineField } from "sanity";
import { preview } from "sanity-plugin-icon-picker";
import { FaMapMarkerAlt } from "react-icons/fa";

export default defineType({
  title: "Butikker og lokasjoner av interesse",
  name: "location",
  icon: FaMapMarkerAlt,
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
    defineField({
      title: "Kartmarkør",
      name: "position",
      type: "geopoint",
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
