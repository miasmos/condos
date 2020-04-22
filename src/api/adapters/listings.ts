/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */

import { Listing, ParsedListing } from "../../types";

class ListingsAdapter {
    static precision(precision: string): number {
        return Number(precision);
    }

    static listing({ min_price, max_price, lat, lng, ...props }: Listing): ParsedListing {
        return {
            ...props,
            min_price: Number(min_price),
            max_price: Number(max_price),
            lat: Number(lat),
            lng: Number(lng),
        };
    }
}

export default ListingsAdapter;
