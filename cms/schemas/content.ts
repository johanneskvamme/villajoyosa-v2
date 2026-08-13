import { defineField, defineType } from "sanity";
import { FaFileAlt } from "react-icons/fa";

export default defineType({
  title: "Tekstinnhold",
  name: "content",
  icon: FaFileAlt,
  type: "document",
  fields: [
    defineField({
      title: "Navn",
      name: "name",
      type: "string",
    }),
    defineField({
      title: "Innholdstekst",
      name: "text",
      type: "textblock",
    }),
    defineField({
      title: "Vises på side",
      description: "Siden du vil at teksten skal vises på",
      name: "displayPage",
      type: "textPageSelector",
    }),
  ],
});
