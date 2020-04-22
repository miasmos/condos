import { expect } from "chai";
import ListingsAdapter from "../../../src/api/adapters/listings";
import { BedType } from "../../../src";

describe("api/adapters/listings", () => {
    describe("precision()", () => {
        it("should return a number", async () => {
            const result = ListingsAdapter.precision("1");
            expect(result).equal(1);
        });
    });

    describe("listing()", () => {
        it("should return a ParsedListing", async () => {
            const result = ListingsAdapter.listing({
                address_id: 235966,
                address_count: 1,
                lat: "43.64163010000",
                lng: "-79.41599340000",
                cluster_hash: "dpz82be",
                group_name: "King West",
                cluster_count: 1,
                min_price: "699000.00",
                max_price: "699000.00",
                bed_type: BedType.OnePlusDen,
                bathrooms: 2,
                asking_price: 699000,
            });
            expect(result).deep.equal({
                address_id: 235966,
                address_count: 1,
                lat: 43.6416301,
                lng: -79.4159934,
                cluster_hash: "dpz82be",
                group_name: "King West",
                cluster_count: 1,
                min_price: 699000.0,
                max_price: 699000.0,
                bed_type: "1+1",
                bathrooms: 2,
                asking_price: 699000,
            });
        });
    });
});
