/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */

import { DateTime } from "luxon";
import {
    StatSummary,
    ParsedStatSummary,
    StatInsightItem,
    ParsedStatInsightItem,
} from "../../types";

class StatsAdapter {
    static summaryStats({
        sold_avg_price,
        sold_price_change,
        sold_avg_beds,
        sold_avg_baths,
        sold_avg_sqft,
        sold_avg_psf,
        sold_psf_change,
        leased_avg_price,
        leased_price_change,
        leased_avg_beds,
        leased_avg_baths,
        leased_avg_sqft,
        leased_avg_psf,
        leased_psf_change,
        ...summaryStats
    }: StatSummary): ParsedStatSummary {
        return {
            ...summaryStats,
            sold_avg_price: (sold_avg_price ? Number(sold_avg_price) : sold_avg_price) as
                | number
                | null,
            sold_price_change: (sold_price_change
                ? Number(sold_price_change)
                : sold_price_change) as number | null,
            sold_avg_beds: (sold_avg_beds ? Number(sold_avg_beds) : sold_avg_beds) as number | null,
            sold_avg_baths: (sold_avg_baths ? Number(sold_avg_baths) : sold_avg_baths) as
                | number
                | null,
            sold_avg_sqft: (sold_avg_sqft ? Number(sold_avg_sqft) : sold_avg_sqft) as number | null,
            sold_avg_psf: (sold_avg_psf ? Number(sold_avg_psf) : sold_avg_psf) as number | null,
            sold_psf_change: (sold_psf_change ? Number(sold_psf_change) : sold_psf_change) as
                | number
                | null,
            leased_avg_price: (leased_avg_price ? Number(leased_avg_price) : leased_avg_price) as
                | number
                | null,
            leased_price_change: (leased_price_change
                ? Number(leased_price_change)
                : leased_price_change) as number | null,
            leased_avg_beds: (leased_avg_beds ? Number(leased_avg_beds) : leased_avg_beds) as
                | number
                | null,
            leased_avg_baths: (leased_avg_baths ? Number(leased_avg_baths) : leased_avg_baths) as
                | number
                | null,
            leased_avg_sqft: (leased_avg_sqft ? Number(leased_avg_sqft) : leased_avg_sqft) as
                | number
                | null,
            leased_avg_psf: (leased_avg_psf ? Number(leased_avg_psf) : leased_avg_psf) as
                | number
                | null,
            leased_psf_change: (leased_psf_change
                ? Number(leased_psf_change)
                : leased_psf_change) as number | null,
        };
    }

    static insightItem({
        avg_price,
        end_date,
        avg_psf,
        avg_sqft,
        avg_dom,
        avg_psf_change,
        avg_price_change,
        ...leasedProps
    }: StatInsightItem): ParsedStatInsightItem {
        return {
            ...leasedProps,
            avg_price: (avg_price ? Number(avg_price) : avg_price) as number | null,
            end_date: (end_date ? DateTime.fromISO(end_date as string).toSeconds() : end_date) as
                | number
                | null,
            avg_psf: (avg_psf ? Number(avg_psf) : avg_psf) as number | null,
            avg_sqft: (avg_sqft ? Number(avg_sqft) : avg_sqft) as number | null,
            avg_dom: (avg_dom ? Number(avg_dom) : avg_dom) as number | null,
            avg_psf_change: (avg_psf_change ? Number(avg_psf_change) : avg_psf_change) as
                | number
                | null,
            avg_price_change: (avg_price_change ? Number(avg_price_change) : avg_price_change) as
                | number
                | null,
        };
    }
}

export default StatsAdapter;
