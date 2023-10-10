export interface IMap {
    center: number[],
    zoom: number,
    controls: string[],
}

interface IPhotos {
    id: string,
    bucket: string,
    content: string,
    responseStatus: string
}

export interface Content {
    id: string,
    name: string,
    address: {
        id: number,
        region: string,
        city: string,
        street: string,
        house: string,
        numFlat: number,
        lng: number,
        lat: number
    },
    price: number,
    score: number,
    photos: string,
    isInUserFavorite: boolean
}

export interface Flat {
    address: string
    flatIdList: string[]
    latitude: number
    longitude: number
}

export interface MapSchema {
    item: Flat[],
    flatsListForSidebar: IFlatListSidebar[],
    city: string | null
    coordinates: IMap
    isLoading: boolean,
    error: string,
    hasMore: boolean,
    page: number
    isNewData: boolean
    globalPixelCenter: number[]
    size: number[]
    zoom: number
    isFilterOwn: boolean
    isLoadingNewFlat: boolean
    totalElements: number
    photos: any
}

export interface IMapItem {
    id: number,
    name: string,
    numberOfRooms: number,
    numberOfSingleBeds: number,
    numberOfDoubleBeds: number,
    price: number,
    status: boolean,
    lock: number,
    description: string,
    score: number,
    ratings: [],
    address: {
        name: string
        price: number
        status: boolean
        description: string
        region: string
        city: string
        street: string
        house: string
        lat: number
        lng: number
    },
    photos: [],
    isInClientFavorite: boolean,
    isHasActiveBookings: boolean,
    clientActiveBooking: boolean
}

export interface IFlatListSidebar {
    address: {
        city: string
        description: string
        house: string
        id: string
        lat: number
        lng: number
        numFlat: number
        region: string
        street: string
    }
    avgReviewsScore: number
    id: string
    isInUserFavorite: boolean
    name: string
    numberOfRooms: number
    photoListId: string[]
    price: number
    photos?: string,
    isLoadingPhotos?: boolean,
    errorPhotos?: string
}
