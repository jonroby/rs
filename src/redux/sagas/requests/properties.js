import { get } from "../requestMethods";
import numeral from "numeral";

const url = "http://dev1-sample.azurewebsites.net/properties.json";
export default [get, url];

// These are conditions used to filter results shown to the user. The motivation is that
// if neither the price nor rent is shown, the user (probably) doesn't want to see it.
// Of course, this would be confirmed with product.
const price = d => d.listPrice;
const rent = d => d.monthlyRent;
const conditions = [price, rent];

const filter = property => {
  return conditions.every(c => c(property));
};

export const transform = data => {
  return data
    .map(d => {
      return {
        id: d.id,
        propertyImage: d.mainImageUrl,
        address: {
          address1: d.address.address1,
          city: d.address.city,
          state: d.address.state,
          zip: d.address.zip,
        },
        yearBuilt: d.physical && d.physical.yearBuilt,
        listPrice: d.financial && d.financial.listPrice,
        monthlyRent: d.financial && d.financial.monthlyRent,
      };
    })
    .map(d => {
      return {
        ...d,
        grossYield:
          d.monthlyRent &&
          d.listPrice &&
          numeral((d.monthlyRent * 12) / d.listPrice).format("0.00%"),
        listPrice: d.listPrice && numeral(d.listPrice).format("$0,0.00"),
        monthlyRent: d.monthlyRent && numeral(d.monthlyRent).format("$0,0.00"),
      };
    })
    .filter(filter);
};
