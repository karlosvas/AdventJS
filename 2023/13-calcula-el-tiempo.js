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

calculateTime(['00:10:00', '01:00:00', '03:30:00'])
// '-02:20:00'

calculateTime(['02:00:00', '05:00:00', '00:30:00'])
// '00:30:00'

calculateTime([
    '00:45:00',
    '00:45:00',
    '00:00:30',
    '00:00:30'
]) // '-05:29:00'