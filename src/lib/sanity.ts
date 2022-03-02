import sanityCliet from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityCliet({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-02-28",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_PROJECT_TOKEN,
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source: string) => builder.image(source)
