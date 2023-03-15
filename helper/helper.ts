import urlsAndFeaturesData from "@/data/urlsAndFeaturesData";

export const findUrlsAndCreateParams = (slug: string) => {
  const currentUrls = urlsAndFeaturesData.find(
    (url: { label: string }) => url.label === slug
  );
  const currentParams = currentUrls?.urls;
  const params: { params: { slug: string } }[] = [];
  currentParams?.map((url: any) => params.push({ params: { slug: url } }));
  return params;
};

export const findDataFromSlug = (
  slug: string,
  featureLabel: string | string[] | undefined
) => {
  const categorie = urlsAndFeaturesData.find(
    (url: { label: string }) => url.label === slug
  );
  return categorie?.features?.filter(
    (feature) => feature.slug === featureLabel
  );
};

export const findFeatureIntroFromSlug = (
  slug: string,
  featureLabel: string | string[] | undefined
) => {
  const categorie = urlsAndFeaturesData.find(
    (url: { label: string }) => url.label === slug
  );
  return categorie?.featureIntro?.filter(
    (feature) => feature.slug === featureLabel
  );
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
