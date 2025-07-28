export async function getDocument(url: string) {
  return fetch(url)
    .then((res) => {
      return res.text();
    })
    .catch((err) => {
      console.error(
        `The following error has ocured while trying to get the document at ${url}: `
      );
      console.error(err);
      return "";
    });
}
