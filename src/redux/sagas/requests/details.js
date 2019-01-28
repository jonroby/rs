import { get } from "../requestMethods";

const url = "http://dev1-sample.azurewebsites.net/properties.json";
export default [get, url];

// Presumably an API endpoint is available that the consumer can GET by id.
// Here I'm just hitting the same endpoint and using a curried function to
// filter the results by the id to obtain the correct property.
export const transform = id => data =>
  data
    .filter(d => d.id === id)
    .map(d => {
      // Hack: This checks if there are no photos; if not, just use the main image url
      const images =
        d.resources.photos && d.resources.photos.length > 0
          ? d.resources.photos.map(p => ({ url: p.url, urlSmall: p.urlSmall }))
          : [{ url: d.mainImageUrl, urlSmall: d.mainImageUrl }];
      return {
        id: d.id,
        address: {
          address1: d.address.address1,
          city: d.address.city,
          state: d.address.state,
          zip: d.address.zip,
        },
        images,
      };
    })
    .reduce((prev, curr) => curr, {});
