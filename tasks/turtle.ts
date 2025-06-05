const target = 100;
const up = 50;
const down = 30;

function daysToReachTop(target: number, up: number, down: number): number {
  if (up >= target) return 1;

  return Math.ceil((target - up) / (up - down)) + 1;
}

console.log(daysToReachTop(target, up, down));
