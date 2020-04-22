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
    | NeighbourhoodTorontoEastYork
    | NeighbourhoodTorontoMidtown
    | NeighbourhoodTorontoEastEnd
    | NeighbourhoodTorontoWestEnd
    | NeighbourhoodTorontoYorkCrosstown
    | NeighbourhoodTorontoNorthYork
    | NeighbourhoodTorontoEtobicoke
    | NeighbourhoodTorontoScarborough
    | NeighbourhoodTorontoDowntown
    | NeighbourhoodBrampton
    | NeighbourhoodMississauga
    | NeighbourhoodCaledon
    | NeighbourhoodOakville
    | NeighbourhoodVaughan
    | NeighbourhoodCaledon
    | NeighbourhoodOakville
    | NeighbourhoodBurlington
    | NeighbourhoodHaltonHills
    | NeighbourhoodMilton
    | NeighbourhoodAjax
    | NeighbourhoodWhitby
    | NeighbourhoodPickering
    | NeighbourhoodOshawa
    | NeighbourhoodUxbridge
    | NeighbourhoodClarington
    | NeighbourhoodScugog
    | NeighbourhoodBrock
    | NeighbourhoodMarkham
    | NeighbourhoodWhitchurchStouffville
    | NeighbourhoodNewmarket
    | NeighbourhoodAurora
    | NeighbourhoodRichmondHill
    | NeighbourhoodGeorgina
    | NeighbourhoodEastGwillimbury
    | NeighbourhoodKing;

export enum NeighbourhoodTorontoEastYork {
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

export enum NeighbourhoodTorontoMidtown {
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

export enum NeighbourhoodTorontoEastEnd {
    BlakeJones = 865,
    EastEndDanforth = 869,
    GreenwoodCoxwell = 866,
    NorthRiverdale = 864,
    SouthRiverdale = 867,
    Leslieville = 867,
    TheBeaches = 870,
    WoodbineCorridor = 868,
}

export enum NeighbourhoodTorontoWestEnd {
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

export enum NeighbourhoodTorontoYorkCrosstown {
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

export enum NeighbourhoodTorontoNorthYork {
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

export enum NeighbourhoodTorontoEtobicoke {
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

export enum NeighbourhoodTorontoScarborough {
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

export enum NeighbourhoodTorontoDowntown {
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

export enum NeighbourhoodMississauga {
    AirportCorporate = 940,
    Applewood = 941,
    CentralErinMills = 942,
    ChurchillMeadows = 943,
    CityCentre = 944,
    Clarkson = 945,
    Cooksville = 946,
    Creditview = 947,
    Dixie = 948,
    EastCredit = 949,
    ErinMills = 950,
    Erindale = 951,
    Fairview = 952,
    Gateway = 953,
    Hurontario = 954,
    Lakeview = 955,
    Lisgar = 956,
    LornePark = 957,
    Malton = 958,
    MavisErindale = 959,
    Meadowvale = 960,
    MeadowvalueBusinessPark = 961,
    MeadowvaleVillage = 962,
    Mineola = 963,
    MississaugaValleys = 964,
    Northeast = 965,
    PortCredit = 966,
    Rathwood = 967,
    Sheridan = 968,
    SheridanPark = 969,
    Southdown = 970,
    Streetsville = 971,
    WesternBusinessPark = 972,
}

export enum NeighbourhoodVaughan {
    BeverleyGlen = 1130,
    Brownridge = 1131,
    Concord = 1127,
    CrestwoodSpingfarmYorkhill = 1134,
    EastWoodbridge = 1121,
    ElderMills = 1116,
    GlenShields = 1128,
    IslingtonWoods = 1117,
    Kleinburg = 1114,
    LakeviewEstates = 1132,
    Maple = 1126,
    Patterson = 1129,
    PineValleyBusinessPark = 1122,
    RuralVaughan = 1125,
    SonomaHeights = 1115,
    SteelesWestIndustrial = 1123,
    Uplands = 1133,
    VaughanCorporateCentre = 1124,
    VaughanGrove = 1119,
    VolloreVillage = 1120,
    WestWoodbridge = 1118,
    WestWoodbridgeIndustrialArea = 1113,
}

export enum NeighbourhoodBrampton {
    AirportRoad = 932,
    Avondale = 923,
    BramEast = 937,
    BramWest = 896,
    BramaleaNorthIndustrial = 927,
    BramaleaRoadSouth = 924,
    BamaleaSouthIndustrial = 928,
    Brampton407Corridor = 915,
    BramptonEast = 910,
    BramptionEastIndustrial = 914,
    BramptonNorth = 909,
    BramptonSouth = 906,
    BramptonWest = 904,
    BramptonWestIndustrial = 920,
    CentralPark = 922,
    ClairvilleConservation = 938,
    CreditValley = 897,
    DowntownBrampton = 905,
    FletchersCreekSouth = 902,
    FletchersCreekVillage = 899,
    FletchersMeadow = 898,
    FletchersWest = 901,
    GoreIndustrialNorth = 931,
    GoreIndustrialSouth = 933,
    GorewayDriveCorridor = 936,
    HeartLake = 911,
    HeartLakeEast = 912,
    HeartLakeWest = 908,
    Highway427 = 939,
    Huttonville = 895,
    Madoc = 913,
    Northgate = 925,
    NorthwestBrampton = 894,
    NorthwestSandalwoodParkway = 903,
    NorthwoodPark = 900,
    ParkwayBeltIndustrialArea = 934,
}

export enum NeighbourhoodCaledon {
    Palgrave = 1235,
    BoltonEast = 1236,
    BoltonWest = 1237,
    BoltonNorth = 1238,
    RuralCaledon = 1239,
}

export enum NeighbourhoodOakville {
    BronteEast = 1029,
    BronteWest = 1026,
    Clearview = 1038,
    CollegePark = 1032,
    Eastlake = 1039,
    GlenAbbey = 1028,
    IroquoisRidgeNorth = 1035,
    IroquoisRidgeSouth = 1036,
    OldOakville = 1033,
    PalermoWest = 1025,
    RiverOaks = 1031,
    RuralOakville = 1030,
    UptownCore = 1034,
    WestOakTrails = 1027,
    WinstonPark = 1037,
}

export enum NeighbourhoodBurlington {
    Alton = 1010,
    Appleby = 1018,
    Bayview = 1000,
    Brant = 1006,
    BrantHills = 1003,
    BrontCreek = 1015,
    Freeman = 1005,
    Grindstone = 999,
    Headon = 1007,
    IndustrialBurlington = 1013,
    LaSalle = 1001,
    Mountainside = 1004,
    Orchard = 1016,
    Palmer = 1008,
    Rose = 1011,
    Roseland = 1009,
    RuralBurlington = 998,
    Shoeacres = 1014,
    Tansley = 1012,
    Tyandaga = 1002,
    Uptown = 1017,
}

export enum NeighbourhoodHaltonHills {
    Acton = 1019,
    Georgetown = 1023,
    GlenWilliams = 1024,
    Limehouse = 1020,
    RuralHaltonHills = 1021,
    Stewarttown = 1022,
}

export enum NeighbourhoodMilton {
    BusinessPark401 = 982,
    Beaty = 994,
    Bowes = 995,
    BronteMeadows = 985,
    Brookville = 974,
    Campbellville = 975,
    Clarke = 993,
    Coates = 990,
    Cobban = 991,
    Dempsey = 992,
    DerryGreenBusinessPark = 996,
    DorsetPark = 339,
    Esquesing = 988,
    Ford = 987,
    Harrison = 980,
    MiltonHeights = 978,
    Moffat = 973,
    MountainView = 983,
    Nassagaweya = 977,
    Nelson = 976,
    OldMilton = 984,
    Scott = 979,
    Timberlea = 989,
    Trafalgar = 997,
    Walker = 981,
    Willmont = 986,
}

export enum NeighbourhoodAjax {
    CentralAjax = 1068,
    CentralEast = 1070,
    CentralWest = 1066,
    NortheastAjax = 1069,
    NorthwestAjax = 1065,
    SouthEast = 1071,
    SouthWest = 1067,
}

export enum NeighbourhoodWhitby {
    BlueGrassMeadows = 1081,
    Brooklin = 1076,
    DowntownWhitby = 1079,
    LyndeCreek = 1074,
    PortWhitby = 1075,
    PringleCreek = 1078,
    RollingAcres = 1080,
    RuralWhitby = 1072,
    TauntonNorth = 1077,
    WhitbyIndustrial = 1082,
    Williamsburg = 1073,
}

export enum NeighbourhoodPickering {
    Amberlea = 1047,
    BayRidges = 1053,
    BrockIndustrial = 1057,
    BrockRidge = 1055,
    DuffinHeights = 1054,
    Dunbarton = 1050,
    Highbush = 1044,
    Liverpool = 1051,
    Rosebank = 1046,
    RougePark = 1043,
    Rougemount = 1045,
    RuralPickering = 1042,
    TownCentre = 1052,
    VillageEast = 1056,
    WestShore = 1049,
    Woodlands = 1048,
}

export enum NeighbourhoodOshawa {
    Beaton = 1102,
    Centennial = 1093,
    CentralOshawa = 1095,
    Columbus = 1085,
    Donevan = 1100,
    Eastdale = 1099,
    Farewell = 1101,
    Kedron = 1096,
    Lakeview = 1226,
    McLaughlin = 1089,
    Northglen = 1088,
    Northwood = 1087,
    ONeill = 1094,
    Pinecrest = 1098,
    Raglan = 1083,
    RuralOshawa = 1084,
    Samac = 1092,
    Stevenson = 1091,
    Taunton = 1097,
    Venier = 1090,
    Windfields = 1086,
}

export enum NeighbourhoodUxbridge {
    RuralUxbridge = 1040,
    Uxbridge = 1041,
}

export enum NeighbourhoodClarington {
    Bowmanville = 1104,
    Courtice = 1103,
    Newcastle = 1107,
    Orono = 1106,
    RuralClarington = 1105,
}

export enum NeighbourhoodScugog {
    PortPerry = 1062,
    RuralScugog = 1063,
    Blackstock = 1064,
}

export enum NeighbourhoodBrock {
    Beaverton = 1058,
    RuralBrock = 1059,
    Sunderland = 1060,
    Cannington = 1061,
}

export enum NeighbourhoodMarkham {
    AileenWillowbrook = 1140,
    AngusGlen = 1151,
    BayviewFairway = 1143,
    BayviewGlen = 1142,
    Berczy = 1155,
    BoxGlove = 1173,
    Bullock = 1160,
    Buttonville = 1152,
    Cachet = 1149,
    Cathedraltown = 1147,
    CedarGrove = 1174,
    Cedarwood = 1172,
    CommerceValley = 1139,
    Cornell = 1166,
    DevilsElbow = 1150,
    GermanMills = 1144,
    Grandview = 1138,
    Greensborough = 1163,
    LangstaffSouth = 1135,
    Legacy = 1170,
    MarkhamVillage = 1165,
    Markville = 1157,
    Middlefield = 1162,
    MillikenMillsEast = 1161,
    MillikenMillsWest = 1154,
    OldMarkhamVillage = 1164,
    Raymerville = 1158,
    RougeFairways = 1171,
    RougeRiverEstates = 1169,
    RoyalOrchard = 1136,
    RuralMarkham = 1146,
    SherwoodAmberglen = 1168,
    Thornhill = 1137,
    Thornlea = 1141,
    Unionville = 1153,
    VictoriaManorJenningsGate = 1148,
    VictoriaSquare = 1145,
    VillageGreenSouthUnionville = 1159,
    VinegarHill = 1167,
    Wismer = 1156,
}

export enum NeighbourhoodWhitchurchStouffville {
    RuralWhitchurchStouffville = 1193,
}

export enum NeighbourhoodNewmarket {
    Armitage = 1209,
    BristolLondon = 1207,
    CentralNewmarket = 1208,
    GlenwayEstates = 1205,
    GorhamCollegeManor = 1211,
    HuronHeightsLeslieValley = 1210,
    NewmarketIndustrialPark = 1213,
    StonehavenWyndham = 1212,
    SummerhillEstates = 1206,
    WoodlandHill = 1204,
}

export enum NeighbourhoodAurora {
    AuroraEstates = 1200,
    AuroraGrove = 1199,
    AuroraHeights = 1195,
    AuroraHighlands = 1196,
    AuroraVillage = 1197,
    BayviewNortheast = 1201,
    BayviewSoutheast = 1203,
    BayviewWellington = 1198,
    HillsOfStAndrew = 1194,
    RuralAurora = 1202,
}

export enum NeighbourhoodRichmondHill {
    BayviewHill = 1189,
    BeaverCreekBusinessPark = 1192,
    Crosby = 1183,
    Devonsleigh = 1182,
    Doncrest = 1190,
    Harding = 1184,
    HeadfordBusinessPark = 1191,
    Jefferson = 1176,
    Langstaff = 1186,
    MillPond = 1178,
    NorthRichvale = 1179,
    OakRidges = 1175,
    OakRidgesLakeWilcox = 1181,
    Observatory = 1185,
    RougeWoods = 1188,
    RuralRichmondHill = 1187,
    SouthRichvalue = 1180,
    Westbrook = 1177,
}

export enum NeighbourhoodGeorgina {
    Baldwin = 1224,
    Belhaven = 1221,
    HistoricLakeshoreCommunities = 1218,
    KeswickNorth = 1219,
    KeswickSouth = 1220,
    Pefferlaw = 1225,
    SuttonJacksonsPoint = 1222,
    Virginia = 1223,
}

export enum NeighbourhoodEastGwillimbury {
    EastGwillimburyNorth = 1241,
    HollandLanding = 1214,
    MtAlbert = 1217,
    Queensville = 1215,
    RuralEastGwillimbury = 1240,
    Sharon = 1216,
}

export enum NeighbourhoodKing {
    KingCity = 1112,
    Nobleton = 1109,
    Pottageville = 1110,
    RuralKing = 1111,
    Schomberg = 1108,
}

export enum Locality {
    Toronto = 1,
    Mississauga = 2,
    Caledon = 3,
    Brampton = 4,
    Milton = 5,
    Burlington = 6,
    HaltonHills = 7,
    Oakville = 8,
    Ajax = 9,
    Whitby = 10,
    Pickering = 11,
    Oshawa = 12,
    Uxbridge = 13,
    Clarington = 14,
    Scugog = 15,
    Brock = 16,
    Markham = 17,
    WhitchurchStouffville = 18,
    Newmarket = 19,
    Vaughan = 20,
    Aurora = 21,
    RichmondHill = 22,
    Georgina = 23,
    EastGwillimbury = 24,
    King = 25,
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
