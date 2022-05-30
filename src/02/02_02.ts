export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<string>
    citizensNumber: number
}

type HouseType = {
    buildedAt: number
    repaired: boolean
    address: Array<LocalAdressType>
}

type LocalAdressType = {
    number: number
    street: Array<LocalSreetType>
}

type LocalSreetType = {
    title: string
}