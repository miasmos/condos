/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */

import CondosClient from "./client";
import {
    AreasOptions,
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
        neighbourhood: neighbourhood_id,
    }: ListingsOptions): Promise<ListingsResponse> {
        return CondosClient.get<ListingsResponse>("/map-search/listings", {
            offer,
            precision,
            cluster_groupby,
            neighbourhood_id,
        });
    }

    static async areas({
        areaType: area_type,
        areaId: area_id,
    }: AreasOptions): Promise<AreasResponse> {
        const { Areas } = await CondosClient.get<AreasResponse>("/mappings/areas", {
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

    static async polygons({
        neighbourhood: neighbourhood_id,
    }: PolygonsOptions): Promise<PolygonsResponse> {
        const data = await CondosClient.get<PolygonsResponse>("/areas/polygons", {
            neighbourhood_id,
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
