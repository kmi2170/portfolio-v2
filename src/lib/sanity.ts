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

export interface ImageSource {
  type: string;
  asset: {
    ref: string;
    type: string;
  }
}

export interface DataBase {
  createdAt: string;
  id: string;
  rev: string;
  type: string;
  updatedAt: string;
}

export const urlFor = (source: ImageSource) => builder.image(source).url()
