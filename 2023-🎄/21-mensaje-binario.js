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

findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])
//                         |________|
// posición del segmento:    [2, 5]
// más largo equilibrado
// de 0s y 1s

findBalancedSegment([1, 1, 0])
//                      |__|
//                     [1, 2]

findBalancedSegment([1, 1, 1])
// no hay segmentos equilibrados: []