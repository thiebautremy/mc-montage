import urls from "@/data/url";

export const findUrlsAndCreateParams = (slug: string) => {
  const currentUrls = urls.find((url) => url.label === slug);
  const currentParams = currentUrls?.urls;
  const params: { params: { slug: string } }[] = [];
  currentParams?.map((url) => params.push({ params: { slug: url } }));
  return params;
};

export const urlWithFirstLetterCapitalize = (
  url: string | string[] | undefined
) => {
  if (typeof url === undefined) return "";

  const capitalizeFirstLetter = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const urlInArray =
    typeof url === "string" ? url?.split("-") : !!url && url[0].split("-");
  if (urlInArray !== false)
    return urlInArray
      ?.map((url: string) => capitalizeFirstLetter(url))
      .join(" ");
};
