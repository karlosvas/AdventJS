function calculateTime(deliveries) {
    let totalTime = 0;
    let repart = 7 * 3600000

    for (let date of deliveries) {
        const timeParts = date.split(":");
        const hours = parseInt(timeParts[0])
        const minutes = parseInt(timeParts[1])
        const seconds = parseInt(timeParts[2])
        totalTime += hours * 3600000 + minutes * 60000 + seconds * 1000;
    }
    repart -= totalTime

    if (repart <= 0) {
        const dif = Math.abs(repart, 0)
        let resultTime = new Date(dif)
        return resultTime.toISOString().slice(11, 19)
    } else {
        let resultTime = new Date(repart)
        return repart, "-" + resultTime.toISOString().slice(11, 19)
    }
}

console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00']))
console.log(calculateTime(['02:00:00', '03:00:00', '02:00:00']))