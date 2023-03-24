// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }


console.log(findMatching(drivers, 'Bobby'))



function fuzzyMatch(drivers,name){
    return drivers.filter(driver => driver[0] === name[0])
}

console.log(fuzzyMatch(drivers,"Bobby"))


function matchName(drivers,name){

    const findMatching= drivers.filter(driver => driver.name === name);

    return findMatching
}
console.log(matchName(drivers,"Bobby"))