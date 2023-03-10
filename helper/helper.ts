import urls from "@/data/url";

export const findUrlsAndCreateParams = (slug: string) => {
  const currentUrls = urls.find((url) => url.label === slug);
  const currentParams = currentUrls?.urls;
  const params: { params: { slug: string } }[] = [];
  currentParams?.map((url) => params.push({ params: { slug: url } }));
  return params;
};
