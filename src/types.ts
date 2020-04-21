/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */

import { OfferType, GroupType, Neighbourhood, Precision, AreaType } from "./enum";

export interface JsonResponse<T> {
    status: number;
    message: "success" | "error";
    data: T;
}

export interface Location {
    lat: number;
    lng: number;
}

// Listings
export interface Listing {
    address_id: number;
    address_count: number;
    lat: string;
    lng: string;
    cluster_hash: string;
    cluster_count: number;
    min_price: string;
    max_price: string;
    bed_type: string;
    bathrooms: number;
    group_name?: string;
    asking_price: number;
}

export interface ListingsOptions {
    offer: OfferType;
    precision: Precision | number;
    groupBy?: GroupType;
    neighbourhood?: Neighbourhood | number;
}

export interface ListingsResponse {
    precision: string;
    clusters: Listing[];
}

// Areas
export interface Area {
    children: unknown[];
    parent: string;
    label: string;
    url: string;
    area_type: string;
    filter_type: string;
    area_id: number;
    center_point_json: string;
    polygon_json: string;
    zoom_level: number[];
}

export interface ParsedArea extends Omit<Area, "center_point_json" | "polygon_json"> {
    polygon_json: Location[];
    center_point_json: Location;
}

export interface AreasOptions {
    areaType: AreaType;
    areaId: number;
}

export interface AreasResponse {
    Areas: { [key: string]: Area | ParsedArea };
}

// Polygons
export interface PolygonItem {
    polygon_json: string;
    center_point_json: string;
}

export interface ParsedPolygonItem {
    polygon_json: Location[];
    center_point_json: Location;
}

export interface PolygonsOptions {
    neighbourhood: Neighbourhood | number;
}

export interface PolygonsResponse {
    [key: string]: PolygonItem | ParsedPolygonItem;
}

// Stats
export interface StatPhoto {
    id: number;
    model_id: number;
    model_type: string | null;
    large_path: string | null;
    normal_path: string | null;
    tile_path: string | null;
    original_path: string | null;
    thumb_path: string | null;
    small_path: string | null;
    extension: string | null;
    order: number;
}

export interface StatParent {
    name: string;
    url: string;
    area_type: string;
    area_id: number;
}

export interface AreaStat {
    id: number;
    area_type: string;
    default_value_field: string;
    last_updated: string;
}

export interface StatDescriptions {
    intro: string;
    whats_nearby: string;
    getting_around: string;
}

export interface StatSummary {
    sale_listings_count: number;
    rent_listings_count: number;
    sold_avg_price: string;
    sold_price_change: string;
    sold_price_rank: number;
    sold_price_rank_out_of: number;
    sold_avg_beds: string;
    sold_avg_baths: string;
    sold_avg_sqft: string;
    sold_avg_psf: string;
    sold_psf_change: string;
    sold_psf_rank: number;
    sold_psf_rank_out_of: number;
    leased_avg_price: string;
    leased_price_change: string;
    leased_price_rank: number;
    leased_price_rank_out_of: number;
    leased_avg_beds: string;
    leased_avg_baths: string;
    leased_avg_sqft: string;
    leased_avg_psf: string;
    leased_psf_change: string;
    leased_psf_rank: number;
    leased_psf_rank_out_of: number;
    rank_type: GroupType;
    rank_parent_name: string;
    rank_parent_url: string;
    rank_parent_type: string;
    rank_parent_id: number;
}

interface StatInsightItem {
    count: number;
    avg_price: string;
    end_date: string;
    avg_psf: string;
    count_psf: number;
    avg_sqft: string;
    avg_dom: string;
    avg_psf_change: string;
    avg_price_change: string;
}

export interface StatInsights {
    Leased: StatInsightItem;
    Sold: StatInsightItem;
    info: {
        id: number;
        type: string;
        url: string;
        display_name: string;
    };
}

export interface StatsOptions {
    neighbourhood: Neighbourhood | number;
}

export interface StatsResponse {
    id: number;
    long_name: string;
    short_name: string;
    display_name: string;
    sublocality_id: number;
    locality_id: number;
    locality_parent_id: number;
    locality_grandparent_id: number;
    province_id: number;
    country_id: number;
    slug: string;
    url: string;
    zoom_level: number | null;
    photo: StatPhoto;
    descriptions: StatDescriptions;
    parent_stats: StatParent;
    summary_stats: StatSummary;
    insights: StatInsights;
}
