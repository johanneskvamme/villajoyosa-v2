import { MdTitle } from "react-icons/md";
import type { StructureBuilder, StructureResolver, ListItemBuilder } from "sanity/structure";

const singletonRestrictedPages = (listItem: ListItemBuilder) =>
  !["pageTitle"].includes(listItem.getId() ?? "");

const undesiredLibraryDocuments = (listItem: ListItemBuilder) =>
  !["media.tag"].includes(listItem.getId() ?? "");

export const structure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title("Innhold")
    .items([
      S.listItem()
        .title("Sidetittel")
        .icon(MdTitle)
        .child(
          S.document()
            .schemaType("pageTitle")
            .documentId("15c71094-5e46-47eb-93b2-3b33dccc5311")
        ),
      ...S.documentTypeListItems()
        .filter(singletonRestrictedPages)
        .filter(undesiredLibraryDocuments),
    ]);
