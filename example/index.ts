import CondosApi, { Precision, Neighbourhood, GroupType, OfferType } from "../src";

(async (): Promise<void> => {
    try {
        console.log(
            await CondosApi.listings({
                precision: Precision.Narrow,
                neighbourhood: Neighbourhood.KingWest,
                groupBy: GroupType.Neighbourhood,
                offer: OfferType.Sale,
            })
        );
    } catch (error) {
        console.log("got error:", error);
    }
})();
