/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */

import { Area, ParsedArea, Location } from "../../types";

class AreasAdapter {
    static area({ polygon_json, center_point_json, area_id, ...props }: Area): ParsedArea {
        const result = {
            area_id: Number(area_id),
            ...props,
        } as ParsedArea;
        if (polygon_json) {
            result.polygon_json = JSON.parse(polygon_json as string) as Location[];
        }
        if (center_point_json) {
            result.center_point_json = JSON.parse(center_point_json as string) as Location;
        }

        return result;
    }
}

export default AreasAdapter;
