// Function to get the number of hours slept on a given day
const getSleepHours = day => {
    switch (day) {
        case ('monday'):
            return 12;
            break;
        case ('tuesday'):
            return 12;
            break;
        case ('wednesday'):
            return 13;
            break;
        case ('thursday'):
            return 14;
            break;
        case ('friday'):
            return 15;
            break;
        case ('saturday'):
            return 6;
            break;
        case ('sunday'):
            return 7;
            break;
    }
}

// return total number of hours slept in the week
const getActualSleepHours = () => // implicit return, no curly braces. if you put them back you get undefined
/*    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday'); */
    7+7+7+7+7+7+7;
// calculate the ideal number of hours
const getIdealSleepHours = (hours) => 
    hours *= 7;

//calculate the sleep debt
const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(9);
    let sleepDebt = Math.abs(idealSleepHours - actualSleepHours);
    if (actualSleepHours === idealSleepHours) {
        console.log('You got just the right amount of sleep.');
    } else if(actualSleepHours > idealSleepHours) {
        console.log(`You\'re sleeping too much. You overslept by ${sleepDebt} hours`);
    } else if(actualSleepHours < idealSleepHours){
        console.log(`You\'re not sleeping enough.You underslept by ${sleepDebt} hours`);
    }
}
// Run program
calculateSleepDebt();