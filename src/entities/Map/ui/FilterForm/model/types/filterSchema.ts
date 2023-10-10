export interface IEstateObject {
    id: string,
    name: string
}

export interface FilterSchema {
    city: string,
    countRooms: number,
    oneRoom: boolean,
    isConveniences: boolean,
    isFurnitures: boolean,
    isBalcony: boolean,
    isAppliances: boolean,
    isInternet: boolean,
    isPhoto: boolean,
    isMyFlat: boolean,
    countOneRoom: number,
    countDoubleRoom: number,
    bookingStart: string,
    bookingEnd: string,
    maxPrice: number,
    minPrice: number,
    isLoading: boolean,
    error: string,
    countFloor: number,
    estateObject: IEstateObject[],
    estateItemId: string
    estateItemName: string
    advertisementType: IEstateObject[],
    advertisementTypeId: string,
    advertisementTypeName: string,
    houseType: IEstateObject[],
    houseTypeId: string,
    houseTypeName: string,
    isLoadingAdvertisement: boolean
    errorAdvertisement: string
    isLoadingEstateObject: boolean,
    errorEstateObject: string,
    isLoadingHouse: boolean,
    errorHouse: string
}

export interface Flat {
    address: string
    flatIdList: string[]
    latitude: number
    longitude: number
}
