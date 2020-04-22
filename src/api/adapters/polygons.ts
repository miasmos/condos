/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */

import { PolygonItem, ParsedPolygonItem, Location } from "../../types";

class PolygonsAdapter {
    static polygon({ polygon_json, center_point_json }: PolygonItem): ParsedPolygonItem {
        const result = {} as ParsedPolygonItem;
        if (polygon_json) {
            result.polygon_json = JSON.parse(polygon_json as string) as Location[];
        }
        if (center_point_json) {
            result.center_point_json = JSON.parse(center_point_json as string) as Location;
        }
        return result;
    }
}

export default PolygonsAdapter;
