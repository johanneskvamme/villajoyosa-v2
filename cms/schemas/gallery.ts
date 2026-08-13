import { defineType, defineField, defineArrayMember } from "sanity";
import { FaRegImage } from "react-icons/fa";

export default defineType({
  name: "gallery",
  type: "document",
  icon: FaRegImage,
  title: "Bildegallerier",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Navn på galleriet",
      description:
        "Navnet bør gi en indikasjon på hva galleriet skal brukes til og vises i kolonnen til venstre.",
    }),
    defineField({
      name: "images",
      type: "array",
      title: "Bilder",
      of: [
        defineArrayMember({
          name: "image",
          type: "image",
          title: "Bilde",
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alternativ tekst",
            }),
          ],
        }),
      ],
      options: {
        layout: "grid",
      },
    }),
    defineField({
      title: "Vises på side",
      description: "Siden du vil at bildegalleriet skal vises på",
      name: "displayPage",
      type: "imagePageSelector",
    }),
  ],
  preview: {
    select: {
      image: "images.0",
      name: "name",
    },
    prepare(selection) {
      const { image, name } = selection;

      return {
        title: name,
        media: image,
      };
    },
  },
});
