import AreasAdapter from "../../../src/api/adapters/areas";
import { expect } from "chai";

describe("api/adapters/areas", () => {
    describe("area()", () => {
        it("should return a ParsedArea", async () => {
            const result = AreasAdapter.area({
                children: [],
                parent: "Sublocality_14",
                label: "St. James Town",
                url: "toronto/st-james-town",
                area_type: "Neighbourhood",
                filter_type: "neighbourhood_id",
                area_id: 740,
                zoom_level: [12, 20],
                polygon_json: '[{ "lat": 43.67063437396704, "lng": -79.37053710222233 }]',
                center_point_json: '{"lat":43.67051551235013,"lng":-79.36868065029215}',
            });

            expect(result).deep.equal({
                children: [],
                parent: "Sublocality_14",
                label: "St. James Town",
                url: "toronto/st-james-town",
                area_type: "Neighbourhood",
                filter_type: "neighbourhood_id",
                area_id: 740,
                zoom_level: [12, 20],
                polygon_json: [
                    {
                        lat: 43.67063437396704,
                        lng: -79.37053710222233,
                    },
                ],
                center_point_json: {
                    lat: 43.67051551235013,
                    lng: -79.36868065029215,
                },
            });
        });
    });
});
