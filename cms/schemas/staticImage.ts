import { defineType, defineField } from "sanity";
import { FaRegImage } from "react-icons/fa";

export default defineType({
  title: "Bildeposisjoner",
  name: "imagePosition",
  type: "document",
  icon: FaRegImage,
  fields: [
    defineField({
      title: "Plass",
      name: "position",
      type: "string",
      readOnly: true,
      options: {
        list: [
          { title: "Vår leilighet", value: "vaarleilighet" },
          { title: "Banner på toppen", value: "banner" },
          { title: "Ved knapper", value: "actionbuttons" },
        ],
        layout: "dropdown",
      },
    }),
    defineField({
      title: "Bilde",
      name: "image",
      type: "image",
      fields: [
        defineField({
          title: "Bildetekst",
          name: "caption",
          type: "string",
        }),
      ],
      options: {
        metadata: ["lqip"],
        hotspot: true,
      },
    }),
  ],
});
