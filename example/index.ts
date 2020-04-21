import CondosApi, { Precision, Neighbourhood, GroupType, OfferType } from "../src";
import { AreaType } from "../src/enum";

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
        // console.log(
        //     await CondosApi.areas({
        //         areaType: AreaType.Locality,
        //         areaId: 1,
        //     })
        // );
        // console.log(
        //     await CondosApi.polygons({
        //         neighbourhood: 753,
        //     })
        // );
        // console.log(
        //     await CondosApi.stats({
        //         neighbourhood: 753,
        //     })
        // );
    } catch (error) {
        console.log("got error:", error);
    }
})();
