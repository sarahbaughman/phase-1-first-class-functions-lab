




const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2)
}
//or const returnFirstTwoDrivers = ( ) => {return driver.slice(0,2)}

returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

//

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2)
}

returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

//

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//

const createFareMultiplier = integer => {
    return (fare) => fare*integer
}
const fareDoubler = function (fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = fare=> createFareMultiplier(3)(fare)


const selectDifferentDrivers = (drivers, someFunction) => {
    return someFunction(drivers)
}

