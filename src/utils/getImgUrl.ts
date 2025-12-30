const getImgUrl = (fileName: string) => {
  return new URL(`../assets/images/${fileName}`, import.meta.url).href;
};

export default getImgUrl;
