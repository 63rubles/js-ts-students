export type LocalSreetType = {
    title: string
}

export type LocalAdressType = {
    number: number
    street: LocalSreetType
}

export type HouseType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: LocalAdressType
}

export type GovernmentStreetType = {
    title: string
}

export type GovernmentAddressType = {
    street: GovernmentStreetType
}

export type GovernmentBuildingType = {
    type: string
    budget: number
    staffCount: number
    address: GovernmentAddressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingType>
    citizensNumber: number
}