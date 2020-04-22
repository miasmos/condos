import PolygonsAdapter from "../../../src/api/adapters/polygons";
import { expect } from "chai";

describe("api/adapters/polygons", () => {
    describe("polygon()", () => {
        it("should return a ParsedPolygonItem", async () => {
            const result = PolygonsAdapter.polygon({
                polygon_json: '[{"lat":43.648839231722896,"lng":-79.38547432422638}]',
                center_point_json: '{"lat":43.64447406999501,"lng":-79.40254389574193}',
            });

            expect(result).deep.equal({
                polygon_json: [
                    {
                        lat: 43.648839231722896,
                        lng: -79.38547432422638,
                    },
                ],
                center_point_json: { lat: 43.64447406999501, lng: -79.40254389574193 },
            });
        });
    });
});
