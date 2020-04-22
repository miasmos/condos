/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */

import { uniq } from "lodash";
import CondosClient from "./client";
import {
    AreasOptions,
    MapAreasResponse,
    AreasResponse,
    ListingsOptions,
    ListingsResponse,
    PolygonsOptions,
    PolygonsResponse,
    Location,
    StatsOptions,
    StatsResponse,
} from "../types";

class CondosApi {
    static listings({
        offer,
        precision,
        groupBy: cluster_groupby,
        neighbourhood,
        sublocality,
    }: ListingsOptions): Promise<ListingsResponse> {
        let neighbourhood_id = neighbourhood as unknown;
        if (Array.isArray(neighbourhood_id)) {
            neighbourhood_id = uniq(neighbourhood_id).join(",");
        }
        let sublocality_id = sublocality as unknown;
        if (Array.isArray(sublocality_id)) {
            sublocality_id = uniq(sublocality_id).join(",");
        }

        return CondosClient.get<ListingsResponse>("/map-search/listings", {
            offer,
            precision,
            cluster_groupby,
            neighbourhood_id,
            sublocality_id,
        });
    }

    static async areas({
        areaType: area_type,
        areaId: area_id,
    }: AreasOptions): Promise<AreasResponse> {
        const {
            Areas: { center_point_json = "", polygon_json, ...areasProps },
            ...props
        } = await CondosClient.get<AreasResponse>("/menus/areas", {
            area_type,
            area_id,
        });

        return {
            Areas: {
                center_point_json: JSON.parse(center_point_json as string) as Location,
                ...areasProps,
            },
            ...props,
        };
    }

    static async mapAreas({
        areaType: area_type,
        areaId: area_id,
    }: AreasOptions): Promise<MapAreasResponse> {
        const { Areas } = await CondosClient.get<MapAreasResponse>("/mappings/areas", {
            area_type,
            area_id,
        });

        Object.keys(Areas).forEach(areaId => {
            const { polygon_json = "", center_point_json = "", ...props } = Areas[areaId];
            Areas[areaId] = {
                ...props,
                polygon_json: JSON.parse(polygon_json as string) as Location[],
                center_point_json: JSON.parse(center_point_json as string) as Location,
            };
        });

        return { Areas };
    }

    static async polygons({ neighbourhood, locality }: PolygonsOptions): Promise<PolygonsResponse> {
        let neighbourhood_id = neighbourhood as unknown;
        if (Array.isArray(neighbourhood_id)) {
            neighbourhood_id = uniq(neighbourhood_id).join(",");
        }
        let locality_id = locality as unknown;
        if (Array.isArray(locality_id)) {
            locality_id = uniq(locality_id).join(",");
        }

        const data = await CondosClient.get<PolygonsResponse>("/areas/polygons", {
            neighbourhood_id,
            locality_id,
        });

        Object.keys(data).forEach(areaId => {
            const { polygon_json = "", center_point_json = "" } = data[areaId];
            data[areaId] = {
                polygon_json: JSON.parse(polygon_json as string) as Location[],
                center_point_json: JSON.parse(center_point_json as string) as Location,
            };
        });
        return data;
    }

    static stats({ neighbourhood: neighbourhood_id }: StatsOptions): Promise<StatsResponse> {
        return CondosClient.get<StatsResponse>(`/neighbourhoods/${neighbourhood_id}/stats`);
    }
}

export default CondosApi;
