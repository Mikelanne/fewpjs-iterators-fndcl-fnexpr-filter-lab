// Code your solution here


function findMatching(drivers, string) {

    let driver = drivers.filter(d => {
     return (d.toLowerCase() === string.toLowerCase());
    });
    if (driver) {
        return driver
    }
}

function fuzzyMatch(drivers, string) {
    
    let driver = drivers.filter(d => {
        return (d.charAt(0) === string.charAt(0))
    });
    if (driver) {
        return driver
    }
}

function matchName(drivers, string) {
    
    let driver = drivers.filter(d => {
        return (d.name === string)
    });
    if (driver) {
        return driver
    }
}