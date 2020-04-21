export enum OfferType {
    Sale = "Sale",
    Rent = "Rent",
}

export enum GroupType {
    Neighbourhood = "Neighbourhood",
    Sublocality = "Sublocality",
    LocalityParent = "LocalityParent",
}

export type Neighbourhood =
    | NeighbourhoodEastYork
    | NeighbourhoodMidtown
    | NeighbourhoodEastEnd
    | NeighbourhoodWestEnd
    | NeighbourhoodYorkCrosstown
    | NeighbourhoodNorthYork
    | NeighbourhoodEtobicoke
    | NeighbourhoodScarborough
    | NeighbourhoodDowntown;

export enum NeighbourhoodEastYork {
    BroadviewNorth = 888,
    CrecentTown = 890,
    Danforth = 891,
    DanforthVillageEastYork = 889,
    EastYorkSouth = 887,
    Leaside = 884,
    OConnorParkview = 886,
    PlayterEstatesDanforth = 892,
    ThorncliffePark = 885,
    WoodbineLumsden = 893,
}

export enum NeighbourhoodMidtown {
    CasaLoma = 872,
    ForestHillNorth = 880,
    ForestHillSouth = 876,
    HumewoodCedarville = 875,
    LawrenceParkNorth = 878,
    LawrenceParkSouth = 879,
    MountPleasantEast = 883,
    MountPleasantWest = 882,
    OakwoodVaughan = 874,
    RosedaleMoorePark = 881,
    Wychwood = 873,
    YongeEglinton = 877,
    YongeStClair = 871,
}

export enum NeighbourhoodEastEnd {
    BlakeJones = 865,
    EastEndDanforth = 869,
    GreenwoodCoxwell = 866,
    NorthRiverdale = 864,
    SouthRiverdale = 867,
    Leslieville = 867,
    TheBeaches = 870,
    WoodbineCorridor = 868,
}

export enum NeighbourhoodWestEnd {
    CorsoItaliaDavenport = 859,
    DovercourtWallaceEmersonJunction = 858,
    DufferinGrove = 850,
    HighParkNorth = 857,
    HighParkSwansea = 852,
    JunctionArea = 855,
    LibertyVillage = 861,
    LittleItaly = 863,
    LittlePortugal = 851,
    Roncesvalles = 853,
    RunnymedeBloorWestVillage = 856,
    SouthParkdale = 854,
    TrinityBellwoods = 862,
    WestonPellamPark = 860,
}

export enum NeighbourhoodYorkCrosstown {
    BeechboroughGreenbrook = 848,
    BriarHillBelgravia = 847,
    CeldoniaFairbank = 845,
    KeelesdaleEglintonWest = 844,
    LambtonBabyPoint = 842,
    OldMill = 842,
    MountDennis = 849,
    RockcliffeSmythe = 843,
    Weston = 846,
}

export enum NeighbourhoodNorthYork {
    Banbury = 820,
    DonMills = 820,
    BathurstManor = 810,
    BayviewVillage = 828,
    BayviewWoodsSteeles = 824,
    BedformParkNortown = 809,
    BlackCreek = 836,
    BridlePath = 818,
    Sunnybrook = 818,
    YorkMills = 818,
    BrookhavenAmesbury = 833,
    ClantonPark = 811,
    DonValleyVillage = 827,
    Downsview = 841,
    Roding = 841,
    CFB = 841,
    Englemount = 808,
    Lawrence = 808,
    FlemingdonPark = 816,
    GlenfieldJaneHeights = 838,
    HenryFarm = 829,
    HillcrestVillage = 825,
    HumberSummit = 835,
    HumberleaPelmoParkW4 = 830,
    HumberleaPelmoParkW5 = 840,
    Humbermede = 839,
    LansingWestgate = 815,
    MapleLeaf = 831,
    NewtonbrookEast = 822,
    NewtonbrookWest = 813,
    ParkwoodsDonalda = 819,
    PleasantView = 826,
    Rustic = 832,
    StAndrew = 817,
    Windfields = 817,
    VictoriaVillage = 821,
    Westminster = 812,
    Branson = 812,
    WillowdaleEast = 823,
    WillowdalteWest = 814,
    YorkUniversityHeights = 837,
    Yorkdale = 834,
    GlenPark = 834,
}

export enum NeighbourhoodEtobicoke {
    Alderwood = 791,
    Edenbridge = 793,
    HumberValley = 793,
    ElmsOldRexdale = 807,
    Eringate = 795,
    Centennial = 795,
    WestDeane = 795,
    EtobicokeWestMall = 797,
    HumberHeights = 802,
    Westmount = 802,
    Islington = 798,
    CityCentreWest = 798,
    KingsviewVillage = 800,
    TheWestway = 800,
    KingswaySouth = 799,
    LongBranch = 790,
    MarklandWood = 796,
    Mimico = 788,
    MountOlive = 804,
    Silverstone = 804,
    Jamestown = 804,
    NewToronto = 789,
    PrincessRosethorn = 794,
    RexdaleKipling = 806,
    StonegateQueensway = 792,
    Thistletown = 805,
    BeumondeHeights = 805,
    WestHumber = 803,
    Clairville = 803,
    Willowridge = 801,
    Martingrove = 801,
    Richview = 801,
}

export enum NeighbourhoodScarborough {
    AgincourtNorth = 773,
    AgincourtSouthMalvernWest = 774,
    Bendale = 779,
    BirchcliffeCliffside = 771,
    CentennialScarborough = 784,
    Clairlea = 766,
    Birchmount = 778,
    Cliffcrest = 778,
    DorsetPark = 763,
    EglintonEast = 777,
    Guildwood = 775,
    HighlandCreek = 783,
    Ionview = 765,
    KennedyPark = 764,
    LAmoreaux = 768,
    Malvern = 787,
    Milliken = 772,
    Morningside = 781,
    Oakridge = 770,
    RougeE10 = 782,
    RougeE11 = 786,
    ScarboroughVillage = 776,
    Steeles = 767,
    TamOShanter = 769,
    Sullivan = 769,
    WestHill = 785,
    WexfordMaryvale = 762,
    Woburn = 780,
}

export enum NeighbourhoodDowntown {
    AlexandraPark = 758,
    Annex = 759,
    UofT = 759,
    BayStCorridor = 750,
    Cabbagetown = 741,
    Chinatown = 756,
    ChurchStCorridor = 749,
    CityPlace = 752,
    Corktown = 744,
    DistilleryDistrict = 745,
    FortYork = 761,
    GrangePark = 755,
    KensingtonMarket = 757,
    KingWest = 753,
    MossPark = 743,
    QueenWest = 754,
    RegentPark = 742,
    StJamesTown = 740,
    StLawrence = 746,
    TheCore = 751,
    TheWaterfront = 747,
    YongeAndBloor = 748,
    Yorkville = 760,
}

export enum Locality {
    Toronto = 1,
}

export type Sublocality = SublocalityToronto;

export enum SublocalityToronto {
    Downtown = 14,
    Scarborough = 15,
    Etobicoke = 16,
    NorthYork = 17,
    YorkCrosstown = 18,
    WestEnd = 19,
    EastEnd = 20,
    Midtown = 21,
    EastYork = 22,
}

export enum Precision {
    Narrow = 2,
    Normal = 7,
    Wide = 99,
}

export enum AreaType {
    Locality = "Locality",
}
