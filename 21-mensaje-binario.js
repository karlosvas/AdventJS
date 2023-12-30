function findBalancedSegment(message) {
    let maxSegment = [];
    let maxSegmentLength = 0;

    for (let i = 0; i < message.length; i++) {
        let countZeros = 0, countOnes = 0;
        for (let j = i; j < message.length; j++) {
            message[j] === 0 ? countZeros++ : countOnes++;
            if (countZeros === countOnes && j - i > maxSegmentLength) {
                maxSegment = [i, j];
                maxSegmentLength = j - i + 1;
            }
        }
    }

    return maxSegment;
}

console.log(findBalancedSegment([1, 0, 1, 0])) // [0,3]
console.log(findBalancedSegment([1, 1, 0, 1, 0, 1]))