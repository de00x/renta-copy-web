export interface Flats {
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
    ratings: {
            flatId: number,
            id: number,
            review: string,
            score: number,
        }[],
    address: {
        id: number,
        region: string,
        city: string,
        street: string,
        house: string,
        numFlat: number,
        lng: number,
        lat: number,
    },
    photos: {
        bytes: string,
        id: number,
    }[],
    isInClientFavorite: boolean,
    isHasActiveBookings: boolean,
    clientActiveBooking: number,
    select?: boolean,
}
export interface OfferSchema {
    flats: Flats[]
    allSelect: boolean
    isLoading: boolean
    error: string
    countSelectFlats: number
}
