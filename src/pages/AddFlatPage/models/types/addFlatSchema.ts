interface FetchFlatSchema {
    userId?: string,
    name: string,
    addressRequestDTO?: {
        region: string,
        city: string,
        street: string,
        house: string,
        numFlat: number,
        lng: number,
        lat: number
    }
    address?: {
        region: string,
        city: string,
        street: string,
        house: string,
        numFlat: number,
        lng: number,
        lat: number
    },
    scienerLockId?: number,
    lockId?: number,
    numberOfRooms: number,
    price: number,
    description: string,
    photoIds?: string[],
    typeOfFlatId: string,
    typeOfRentalId: string,
    typeOfBuildingId: string,
    flatStatusId?: string,
    floor: number,
    isCombinedBathroom: boolean,
    furniture: boolean,
    balcony: boolean,
    appliances: boolean,
    internetCableTv?: boolean
    internetCableTV?: boolean
    id?: string
    countFlat?: number,
}

interface ITypeAccordion {
    name: string
    value: number
}

interface IFormValue {
    city: string;
    dailyPrice: string;
    description: string;
    flat: string;
    floorNumber: string;
    hasAppliances?: boolean;
    hasBalcony?: boolean;
    hasFurniture?: boolean;
    hasInternetAndCable?: boolean;
    house: string;
    houseType: number;
    isToiletCombined?: boolean;
    lockBindingType: number;
    newFlatName: string;
    propertyType: number;
    rentalType: number;
    roomCount: string;
    street: string;
}

interface CheckboxInputProps {
    name: string;
    className?: string
    onClick?: () => void
}

export type {
    FetchFlatSchema,
    ITypeAccordion,
    IFormValue,
    CheckboxInputProps
}