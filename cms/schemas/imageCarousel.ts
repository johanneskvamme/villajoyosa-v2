import { defineType, defineField } from "sanity";
import { FaRegImages } from "react-icons/fa";

export default defineType({
  title: "Bildekarusell-bilder",
  name: "imageCarousel",
  icon: FaRegImages,
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
      description: "Bredt bilde til looping på forsiden",
      type: "image",
    }),
  ],
});
