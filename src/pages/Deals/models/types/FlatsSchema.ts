export interface Flats {
    id: string,
    name: string,
    address: {
        id: string,
        region: string,
        city: string,
        street: string,
        house: string,
        numFlat: number,
        lng: number,
        lat: number,
        description: string
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
    reviews: {
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
    }[],
    photos?: string,
    isInClientFavorite: boolean,
    clientActiveBooking: {
        start: string,
        end: string
    },
    isHasActiveBookings: boolean
    isHidden: boolean
    select?: boolean
    status?: boolean
    isApartmentOwner: boolean
}

export interface DealsSchema {
    flats: Flats[]
    allSelect: boolean
    isLoading: boolean
    error: string
    countSelectFlats: number
    bookingStatus: IBookingStatus[]
    isLoadingBookingStatus: boolean,
    errorBookingStatus: string,
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

export interface IBookingStatus {
    id: string,
    name: string
}

export interface IDeals {
    totalElements: number,
    totalPages: number,
    size: number,
    content: [
        {
        id: string,
        ownerId: string,
        processInstanceId: string
        }
    ],
    number: number,
    sort: {
        empty: boolean,
        sorted: boolean,
        unsorted: boolean
    },
    first: boolean,
    last: boolean,
    numberOfElements: number,
    pageable: {
        offset: number,
        sort: {
        empty: boolean,
        sorted: boolean,
        unsorted: boolean
        },
        pageNumber: number,
        pageSize: number,
        unpaged: boolean,
        paged: boolean
    },
    empty: boolean
}

export interface IDealById {
    name: string,
    taskId: string,
    dealId: string,
    flatId: string,
    ownerId: string,
    tenantId: string,
    statusId: string,
    rentalStartDate: string,
    rentalEndDate: string,
    numOfResident: number,
}
