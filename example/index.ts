import CondosApi, {
    Precision,
    GroupType,
    OfferType,
    NeighbourhoodDowntown,
    NeighbourhoodEastEnd,
    SublocalityToronto,
} from "../src";

(async (): Promise<void> => {
    try {
        console.log(
            await CondosApi.listings({
                precision: Precision.Normal,
                neighbourhood: [
                    NeighbourhoodDowntown.KingWest,
                    NeighbourhoodEastEnd.EastEndDanforth,
                ],
                sublocality: [SublocalityToronto.Etobicoke],
                groupBy: GroupType.Neighbourhood,
                offer: OfferType.Sale,
            })
        );
    } catch (error) {
        console.log("got error:", error);
    }
})();
