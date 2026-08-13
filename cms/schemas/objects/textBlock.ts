import { defineArrayMember, defineType } from "sanity";

export default defineType({
  title: "Textblock",
  name: "textblock",
  type: "array",
  of: [defineArrayMember({ type: "block" }), defineArrayMember({ type: "textWithIcon" })],
});
