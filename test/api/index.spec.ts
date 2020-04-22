import { expect } from "chai";
import { DateTime } from "luxon";
import api, {
    AreaType,
    Precision,
    NeighbourhoodTorontoDowntown,
    GroupType,
    OfferType,
    ListingsResponse,
    MapAreasResponse,
    AreasResponse,
    PolygonsResponse,
    StatsResponse,
    BedType,
} from "../../src";
import { intercept } from "../util";

describe("api/index", () => {
    describe("listings()", () => {
        it("should return the expected response", async () => {
            intercept<ListingsResponse>({
                status: 1,
                message: "success",
                data: {
                    precision: "7",
                    clusters: [
                        {
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
                        },
                    ],
                },
            });

            const response = await api.listings({
                precision: Precision.Narrow,
                neighbourhood: [NeighbourhoodTorontoDowntown.KingWest],
                groupBy: GroupType.Neighbourhood,
                offer: OfferType.Sale,
            });

            expect(response).deep.equal({
                precision: 7,
                clusters: [
                    {
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
                    },
                ],
            });
        });
    });

    describe("mapAreas()", () => {
        it("should return the expected response", async () => {
            intercept<MapAreasResponse>({
                status: 1,
                message: "success",
                data: {
                    Areas: {
                        Neighbourhood_740: {
                            children: [],
                            parent: "Sublocality_14",
                            label: "St. James Town",
                            url: "toronto/st-james-town",
                            area_type: "Neighbourhood",
                            filter_type: "neighbourhood_id",
                            area_id: 740,
                            center_point_json: '{"lat":43.67051551235013,"lng":-79.36868065029215}',
                            polygon_json:
                                '[{ "lat": 43.67063437396704, "lng": -79.37053710222233 }]',
                            zoom_level: [12, 20],
                        },
                    },
                },
            });

            const response = await api.mapAreas({
                areaId: 1,
                areaType: AreaType.Locality,
            });

            expect(response).deep.equal({
                Areas: {
                    Neighbourhood_740: {
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
                    },
                },
            });
        });
    });

    describe("areas()", () => {
        it("should return the expected response", async () => {
            intercept<AreasResponse>({
                status: 1,
                message: "success",
                data: {
                    Areas: {
                        label: "Georgina",
                        url: "georgina",
                        area_type: "Locality",
                        filter_type: "locality_id",
                        area_id: "23",
                        center_point_json: '{"lat":44.303945569231004,"lng":-79.33836936550699}',
                        children: [
                            {
                                label: "Sutton & Jackson's Point",
                                url: "georgina/sutton-jackson-s-point",
                                area_type: "Neighbourhood",
                                filter_type: "neighbourhood_id",
                                area_id: 1222,
                            },
                        ],
                    },
                    Popular: {
                        label: "Popular Georgina Searches",
                        children: [
                            {
                                label: "Sutton & Jackson's Point",
                                url: "georgina/sutton-jackson-s-point",
                            },
                        ],
                    },
                    "Sub-Markets": {
                        label: "Georgina Sub Markets",
                        children: null,
                    },
                    Nearby: {
                        label: "Nearby Searches",
                        children: [
                            {
                                label: "East Gwillimbury",
                                url: "east-gwillimbury",
                                area_type: "Locality",
                                filter_type: "locality_id",
                                area_id: 24,
                            },
                        ],
                    },
                },
            });

            const response = await api.areas({
                areaId: 1,
                areaType: AreaType.Locality,
            });

            expect(response).deep.equal({
                Areas: {
                    label: "Georgina",
                    url: "georgina",
                    area_type: "Locality",
                    filter_type: "locality_id",
                    area_id: 23,
                    center_point_json: { lat: 44.303945569231004, lng: -79.33836936550699 },
                    children: [
                        {
                            label: "Sutton & Jackson's Point",
                            url: "georgina/sutton-jackson-s-point",
                            area_type: "Neighbourhood",
                            filter_type: "neighbourhood_id",
                            area_id: 1222,
                        },
                    ],
                },
                Popular: {
                    label: "Popular Georgina Searches",
                    children: [
                        {
                            label: "Sutton & Jackson's Point",
                            url: "georgina/sutton-jackson-s-point",
                        },
                    ],
                },
                "Sub-Markets": {
                    label: "Georgina Sub Markets",
                    children: null,
                },
                Nearby: {
                    label: "Nearby Searches",
                    children: [
                        {
                            label: "East Gwillimbury",
                            url: "east-gwillimbury",
                            area_type: "Locality",
                            filter_type: "locality_id",
                            area_id: 24,
                        },
                    ],
                },
            });
        });
    });

    describe("polygons()", () => {
        it("should return the expected response", async () => {
            intercept<PolygonsResponse>({
                status: 1,
                message: "success",
                data: {
                    Neighbourhood_753: {
                        polygon_json: '[{"lat":43.648839231722896,"lng":-79.38547432422638}]',
                        center_point_json: '{"lat":43.64447406999501,"lng":-79.40254389574193}',
                    },
                },
            });

            const response = await api.polygons({
                neighbourhood: NeighbourhoodTorontoDowntown.KingWest,
            });

            expect(response).deep.equal({
                Neighbourhood_753: {
                    polygon_json: [
                        {
                            lat: 43.648839231722896,
                            lng: -79.38547432422638,
                        },
                    ],
                    center_point_json: { lat: 43.64447406999501, lng: -79.40254389574193 },
                },
            });
        });
    });

    describe("stats()", () => {
        it("should return the expected response", async () => {
            intercept<StatsResponse>({
                status: 1,
                message: "success",
                data: {
                    id: 753,
                    long_name: "King West",
                    short_name: "King West",
                    display_name: "King West",
                    sublocality_id: 14,
                    locality_id: 1,
                    locality_parent_id: 1,
                    locality_grandparent_id: 1,
                    province_id: 9,
                    country_id: 1,
                    slug: "king-west",
                    url: "toronto/king-west",
                    zoom_level: null,
                    photo: {
                        id: 26540,
                        model_id: 753,
                        model_type: "App\\Neighbourhood",
                        large_path:
                            "https://shared-s3.property.ca/public/images/neighbourhood/king-west/king-west-large-1.jpg",
                        normal_path: null,
                        tile_path: null,
                        original_path:
                            "https://shared-s3.property.ca/public/images/neighbourhood/king-west/king-west-original-1.jpg",
                        thumb_path: null,
                        small_path: null,
                        extension: "jpg",
                        order: 1,
                    },
                    descriptions: {
                        intro: "<p></p>",
                        whats_nearby: "<p></p>",
                        getting_around: "<p></p>",
                    },
                    parent_stats: {
                        name: "Downtown",
                        url: "toronto/downtown",
                        area_type: "Sublocality",
                        area_id: 14,
                    },
                    summary_stats: {
                        sale_listings_count: 138,
                        rent_listings_count: 487,
                        sold_avg_price: "858057.37",
                        sold_price_change: "14.91",
                        sold_price_rank: 7,
                        sold_price_rank_out_of: 22,
                        sold_avg_beds: "1.44",
                        sold_avg_baths: "1.48",
                        sold_avg_sqft: "806.76",
                        sold_avg_psf: "1063.58",
                        sold_psf_change: "6.54",
                        sold_psf_rank: 7,
                        sold_psf_rank_out_of: 21,
                        leased_avg_price: "2642.28",
                        leased_price_change: "-1.70",
                        leased_price_rank: 10,
                        leased_price_rank_out_of: 22,
                        leased_avg_beds: "1.23",
                        leased_avg_baths: "1.31",
                        leased_avg_sqft: "658.77",
                        leased_avg_psf: "4.01",
                        leased_psf_change: "-2.91",
                        leased_psf_rank: 5,
                        leased_psf_rank_out_of: 22,
                        rank_type: GroupType.Neighbourhood,
                        rank_parent_name: "Downtown",
                        rank_parent_url: "toronto/downtown",
                        rank_parent_type: "Sublocality",
                        rank_parent_id: 14,
                    },
                    insights: {
                        Leased: {
                            count: 2107,
                            avg_price: "2669.02",
                            end_date: "2020-04-21",
                            avg_psf: "4.08",
                            count_psf: 2095,
                            avg_sqft: "654.03",
                            avg_dom: "19.34",
                            avg_psf_change: "0.49",
                            avg_price_change: "0.29",
                        },
                        Sold: {
                            count: 948,
                            avg_price: "795420.66",
                            end_date: "2020-04-21",
                            avg_psf: "1025.76",
                            count_psf: 934,
                            avg_sqft: "775.45",
                            avg_dom: "16.33",
                            avg_psf_change: "7.37",
                            avg_price_change: "6.52",
                        },
                        info: {
                            id: 753,
                            type: "Neighbourhood",
                            url: "toronto/king-west",
                            display_name: "King West",
                        },
                    },
                },
            });

            const response = await api.stats({
                neighbourhood: NeighbourhoodTorontoDowntown.KingWest,
            });

            expect(response).deep.equal({
                id: 753,
                long_name: "King West",
                short_name: "King West",
                display_name: "King West",
                sublocality_id: 14,
                locality_id: 1,
                locality_parent_id: 1,
                locality_grandparent_id: 1,
                province_id: 9,
                country_id: 1,
                slug: "king-west",
                url: "toronto/king-west",
                zoom_level: null,
                photo: {
                    id: 26540,
                    model_id: 753,
                    model_type: "App\\Neighbourhood",
                    large_path:
                        "https://shared-s3.property.ca/public/images/neighbourhood/king-west/king-west-large-1.jpg",
                    normal_path: null,
                    tile_path: null,
                    original_path:
                        "https://shared-s3.property.ca/public/images/neighbourhood/king-west/king-west-original-1.jpg",
                    thumb_path: null,
                    small_path: null,
                    extension: "jpg",
                    order: 1,
                },
                descriptions: {
                    intro: "<p></p>",
                    whats_nearby: "<p></p>",
                    getting_around: "<p></p>",
                },
                parent_stats: {
                    name: "Downtown",
                    url: "toronto/downtown",
                    area_type: "Sublocality",
                    area_id: 14,
                },
                summary_stats: {
                    sale_listings_count: 138,
                    rent_listings_count: 487,
                    sold_avg_price: 858057.37,
                    sold_price_change: 14.91,
                    sold_price_rank: 7,
                    sold_price_rank_out_of: 22,
                    sold_avg_beds: 1.44,
                    sold_avg_baths: 1.48,
                    sold_avg_sqft: 806.76,
                    sold_avg_psf: 1063.58,
                    sold_psf_change: 6.54,
                    sold_psf_rank: 7,
                    sold_psf_rank_out_of: 21,
                    leased_avg_price: 2642.28,
                    leased_price_change: -1.7,
                    leased_price_rank: 10,
                    leased_price_rank_out_of: 22,
                    leased_avg_beds: 1.23,
                    leased_avg_baths: 1.31,
                    leased_avg_sqft: 658.77,
                    leased_avg_psf: 4.01,
                    leased_psf_change: -2.91,
                    leased_psf_rank: 5,
                    leased_psf_rank_out_of: 22,
                    rank_type: GroupType.Neighbourhood,
                    rank_parent_name: "Downtown",
                    rank_parent_url: "toronto/downtown",
                    rank_parent_type: "Sublocality",
                    rank_parent_id: 14,
                },
                insights: {
                    Leased: {
                        count: 2107,
                        avg_price: 2669.02,
                        end_date: DateTime.fromISO("2020-04-21").toSeconds(),
                        avg_psf: 4.08,
                        count_psf: 2095,
                        avg_sqft: 654.03,
                        avg_dom: 19.34,
                        avg_psf_change: 0.49,
                        avg_price_change: 0.29,
                    },
                    Sold: {
                        count: 948,
                        avg_price: 795420.66,
                        end_date: DateTime.fromISO("2020-04-21").toSeconds(),
                        avg_psf: 1025.76,
                        count_psf: 934,
                        avg_sqft: 775.45,
                        avg_dom: 16.33,
                        avg_psf_change: 7.37,
                        avg_price_change: 6.52,
                    },
                    info: {
                        id: 753,
                        type: "Neighbourhood",
                        url: "toronto/king-west",
                        display_name: "King West",
                    },
                },
            });
        });
    });
});
