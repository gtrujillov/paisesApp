export interface RESTCountriesResponse {
    name:         Name;
    tld:          string[];
    cca2:         string;
    ccn3:         string;
    cca3:         string;
    cioc?:        string;
    independent:  boolean;
    status:       Status;
    unMember:     boolean;
    currencies:   { [key: string]: Currency };
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages:    Languages;
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms:     Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   string[];
    flags:        CoatOfArms;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs: string[];
    side:  Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export interface Currency {
    name:   string;
    symbol: string;
}

export interface Demonyms {
    eng:  EngClass;
    fra?: EngClass;
}

export interface EngClass {
    f: string;
    m: string;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Languages {
    aym?: string;
    grn?: string;
    que?: string;
    spa?: string;
    ind?: string;
    lit?: string;
    eng?: EngEnum;
    fra?: string;
    nld?: string;
    pap?: string;
    por?: string;
    zho?: string;
    ssw?: string;
    deu?: string;
    aze?: string;
    rus?: string;
    ces?: string;
    slk?: string;
    ben?: string;
    ara?: string;
    fil?: string;
    uzb?: string;
    kaz?: string;
    fas?: string;
    div?: string;
    zdj?: string;
    est?: string;
    kir?: string;
    ber?: string;
    mey?: string;
    bar?: string;
    tet?: string;
    sot?: string;
    nfr?: string;
    crs?: string;
}

export enum EngEnum {
    English = "English",
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex:  string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Saturday = "saturday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
}
