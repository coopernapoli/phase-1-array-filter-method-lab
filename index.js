function findMatching(drivers, names) {
    return drivers.filter( 
        driver => driver.toLowerCase()=== names.toLowerCase())
}

function fuzzyMatch(drivers, names) {
    console.log(names)
    return drivers.filter(
        driver => {
            const firstLetterNames =  names.toLowerCase();
           
            const firstLetterDriver = driver.toLowerCase();

            return firstLetterDriver.startsWith(firstLetterNames)
        }
    )
}


// const driverObjectArray =[ {
//     name: "Marin",
//     hometown: "Poway",
// }]


function matchName (driverObjectArray, name) {
    return driverObjectArray.filter(driver => name===driver.name)
}
