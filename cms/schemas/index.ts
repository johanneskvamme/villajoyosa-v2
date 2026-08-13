import amenity from "./amenity";
import content from "./content";
import gallery from "./gallery";
import location from "./location";
import pageTitle from "./pageTitle";
import staticImage from "./staticImage";

import { createPageSelectorWithSubset, Pages } from "./objects/pageSelector";
import textBlock from "./objects/textBlock";
import textWithIcon from "./objects/textWithIcon";

const textPageSelector = createPageSelectorWithSubset("textPageSelector", [
  Pages.Frontpage,
  Pages.Area,
  Pages.Transport,
  Pages.Rent,
]);

const imagePageSelector = createPageSelectorWithSubset("imagePageSelector", [
  Pages.Frontpage,
  Pages.Images,
]);

export const schemaTypes = [
  textWithIcon,
  pageTitle,
  amenity,
  location,
  textBlock,
  textPageSelector,
  imagePageSelector,
  content,
  gallery,
  staticImage,
];
