import StatsAdapter from "../../../src/api/adapters/stats";
import { expect } from "chai";
import { GroupType } from "../../../src";

describe("api/adapters/stats", () => {
    describe("summaryStats()", () => {
        it("should return a ParsedStatSummary", async () => {
            const result = StatsAdapter.summaryStats({
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
            });

            expect(result).deep.equal({
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
                rank_type: "Neighbourhood",
                rank_parent_name: "Downtown",
                rank_parent_url: "toronto/downtown",
                rank_parent_type: "Sublocality",
                rank_parent_id: 14,
            });
        });

        it("should return a ParsedStatInsightItem", async () => {
            const result = StatsAdapter.insightItem({
                count: 2107,
                avg_price: "2669.02",
                end_date: "2020-04-21",
                avg_psf: "4.08",
                count_psf: 2095,
                avg_sqft: "654.03",
                avg_dom: "19.34",
                avg_psf_change: "0.49",
                avg_price_change: "0.29",
            });

            expect(result).deep.equal({
                count: 2107,
                avg_price: 2669.02,
                end_date: 1587441600,
                avg_psf: 4.08,
                count_psf: 2095,
                avg_sqft: 654.03,
                avg_dom: 19.34,
                avg_psf_change: 0.49,
                avg_price_change: 0.29,
            });
        });
    });
});
