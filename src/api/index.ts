/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */

import { uniq } from "lodash";
import CondosClient from "./client";
import StatsAdapter from "./adapters/stats";
import AreasAdapter from "./adapters/areas";
import PolygonsAdapter from "./adapters/polygons";
import ListingsAdapter from "./adapters/listings";
import {
    AreasOptions,
    MapAreasResponse,
    AreasResponse,
    ListingsOptions,
    ListingsResponse,
    PolygonsOptions,
    PolygonsResponse,
    StatsOptions,
    StatsResponse,
    StatSummary,
    StatInsightItem,
    Area,
    PolygonItem,
    Listing,
} from "../types";

class CondosApi {
    static async listings({
        offer,
        precision: requestedPrecision,
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

        const { precision, clusters } = await CondosClient.get<ListingsResponse>(
            "/map-search/listings",
            {
                offer,
                precision: requestedPrecision,
                cluster_groupby,
                neighbourhood_id,
                sublocality_id,
            }
        );

        return {
            precision: ListingsAdapter.precision(precision as string),
            clusters: (clusters as Listing[]).map(listing => ListingsAdapter.listing(listing)),
        };
    }

    static async areas({
        areaType: area_type,
        areaId: area_id,
    }: AreasOptions): Promise<AreasResponse> {
        const { Areas, ...props } = await CondosClient.get<AreasResponse>("/menus/areas", {
            area_type,
            area_id,
        });

        return {
            Areas: AreasAdapter.area(Areas as Area),
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
            Areas[areaId] = AreasAdapter.area(Areas[areaId] as Area);
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
            data[areaId] = PolygonsAdapter.polygon(data[areaId] as PolygonItem);
        });
        return data;
    }

    static async stats({ neighbourhood: neighbourhood_id }: StatsOptions): Promise<StatsResponse> {
        const {
            summary_stats,
            insights: { Leased, Sold, ...insightsProps },
            ...props
        } = await CondosClient.get<StatsResponse>(`/neighbourhoods/${neighbourhood_id}/stats`);

        return {
            ...props,
            summary_stats: StatsAdapter.summaryStats(summary_stats as StatSummary),
            insights: {
                ...insightsProps,
                Leased: StatsAdapter.insightItem(Leased as StatInsightItem),
                Sold: StatsAdapter.insightItem(Sold as StatInsightItem),
            },
        };
    }
}

export default CondosApi;
