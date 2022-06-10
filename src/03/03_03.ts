import {student, StudentType} from "../02/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02/02_02";

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (s: StudentType) => {
    s.isActive = true;
}

export function doesStudentLiveIn(s: StudentType, cityName: string) {
    return s.adress.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;
}

export function repairHouse(house: HouseType) {
    return house.repaired = true
}

export const toFireStaff = (building: GovernmentBuildingType, staffCountToFire: number) => {
    building.staffCount -= staffCountToFire;
}

export function toHireStaff(building: GovernmentBuildingType, staffCountToHire: number) {
    return building.staffCount += staffCountToHire;
}

export const createMessage = (city: CityType) => {
    return "Hello citizens of " + city.title + " all of you " + city.citizensNumber +" mens"
}