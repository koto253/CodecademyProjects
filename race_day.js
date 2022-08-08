let raceNumber = Math.random() * 1000;
raceNumber = Math.floor(raceNumber);

let runner_register_early = true,
    runner_age            = 20;

if (runner_age > 18 && runner_register_early) {
    return raceNumber += 1000;
}

if (runner_age > 18 && runner_register_early) {
    console.log(`The will race at 9:30am and your race number is ${raceNumber}`)
} else if (runner_age > 18 && !runner_register_early) {
    console.log(`The will race at 11:00am and your race number is ${raceNumber}`)
} else if (runner_age < 18) {
    console.log(`The will race at 12:30pm and your race number is ${raceNumber}`)
} else {
    console.log(`go see the register desk`)
}