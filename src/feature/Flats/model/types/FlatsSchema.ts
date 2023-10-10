export interface Flats {
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
    numberOfRooms: number,
    price: number,
    description: string,
    typeOfFlatResponseDTO: {
        id: string,
        title: string,
        description: string
    },
    typeOfRentalResponseDTO: {
        id: string,
        title: string,
        description: string
    },
    typeOfBuildingResponseDTO: {
        id: string,
        title: string,
        description: string
    },
    flatStatusResponseDTO: {
        id: string,
        title: string,
        description: string
    },
    floor: number,
    isCombinedBathroom: boolean,
    furniture: boolean,
    balcony: boolean,
    appliances: boolean,
    internetCableTv: boolean,
    scienerLock: {
        id: number,
        lockName: string,
        isLinked: boolean,
        flatId: string
    },
    score: number,
    reviews: [
        {
            id: string,
            dateTime: string,
            score: number,
            comment: string,
            flatId: string,
            reviewerUser: {
                id: string,
                photo: {
                    id: string,
                    bucket: string,
                    content: string,
                    responseStatus: string
                },
                name: string,
                surname: string
            }
        }
    ],
    photos: string,
    isInClientFavorite: boolean,
    clientActiveBooking: {
        start: string,
        end: string
    },
    isHasActiveBookings: boolean
    isHidden: boolean
    select: boolean
    status: boolean
}
export interface FlatsSchema {
    flats: Flats[]
    allSelect: boolean
    isLoading: boolean
    error: string
    countSelectFlats: number
}

export interface IPhotos {
    fileInfoResponseDto: {
        contentType: string
        id: string
        name: string
        size: number
    }
    id: string
    isMain: boolean
    orderId: number
}
