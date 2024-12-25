function getCompleted(timeWorked: string, totalTime: string): string {
  const [hours, minutes, seconds] = timeWorked.split(":").map(Number);
  let workSec: number = hours * 3600 + minutes * 60 + seconds;

  const [hoursT, minutesT, secoundsT] = totalTime.split(":").map(Number);
  let totalT: number = hoursT * 3600 + minutesT * 60 + secoundsT;

  let percentage: number = (workSec / totalT) * 100;
  let roundedPercentage: number = Math.round(percentage);

  return `${roundedPercentage}%`;
}

/*
¡Santa Claus ya ha repartido todos los regalos! Ahora está revisando los informes de productividad de los elfos. Pero hay un problema: la Product Owner, Mrs. Claus 🧑‍🎄✨, necesita entender rápidamente si los elfos cumplieron con los tiempos estimados. Están haciendo Agile Scream.

Para ayudar a Mrs. Claus, tu tarea es calcular el porcentaje completado de cada tarea y devolverlo redondeado al número entero más cercano. Esto le permitirá planificar mejor para la próxima Navidad y mantener a todos contentos.

Esta es la función que espera:
*/

console.log(getCompleted('01:00:00', '03:00:00')) // 33%
console.log(getCompleted('02:00:00', '04:00:00')) // 50%
console.log(getCompleted('01:00:00', '01:00:00')) // 100%
console.log(getCompleted('00:10:00', '01:00:00')) // 17%
console.log(getCompleted('01:10:10', '03:30:30')) // 33%
console.log(getCompleted('03:30:30', '05:50:50')) // 60%

/*
🎁 Ahora Santa Claus y los elfos merecen un descanso. ¡Esperamos que hayan disfrutado el AdventJS y lo recomienden a sus amigos!
/*