import { defineType, defineField } from "sanity";
import { FaRegImage } from "react-icons/fa";

export default defineType({
  title: "Bildegallery",
  name: "imageGallery",
  icon: FaRegImage,
  type: "document",
  fields: [
    defineField({
      title: "Navn",
      name: "name",
      description: "Navn vil vises om man holder musepekeren over bildet",
      type: "string",
    }),
    defineField({
      title: "Bilde",
      name: "image",
      description: "Bilde til bildegallery",
      type: "image",
    }),
  ],
});
