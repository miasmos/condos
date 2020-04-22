import CondosApi, {
    Precision,
    GroupType,
    OfferType,
    NeighbourhoodTorontoDowntown,
    NeighbourhoodTorontoEastEnd,
    SublocalityToronto,
} from "../src";

(async (): Promise<void> => {
    try {
        console.log(
            await CondosApi.listings({
                precision: Precision.Normal,
                neighbourhood: [
                    NeighbourhoodTorontoDowntown.KingWest,
                    NeighbourhoodTorontoEastEnd.EastEndDanforth,
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
