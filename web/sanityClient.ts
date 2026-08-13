import { createClient } from "@sanity/client";

export default createClient({
  projectId: "ws1g0t28",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-03-25",
});
