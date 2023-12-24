// 1496. Path Crossing
type pointType = {
  x: number;
  y: number;
};

function isPathCrossing(path: string): boolean {
  let rs: boolean = false;
  // const validPointTypes = ["S", "N", "E", "W"];
  const result: pointType[] = [
    {
      x: 0,
      y: 0,
    },
  ];
  const length = path.length;
  if (length < 2) {
    return rs;
  }
  for (let i = 0; i < length; i++) {
    const p = path[i];
    const cp = result.slice(-1);
    // if (validPointTypes.includes(p.toUpperCase())) {
    const np = movePath(p, cp[0]);
    result.map((v: pointType) => {
      if (v.x === np.x && v.y === np.y) {
        rs = true;
        return rs;
      }
    });
    result.push(np);
    // } else {
    //   rs = false;
    //   return rs;
    // }
  }
  return rs;
}

function movePath(path: string, point: pointType): pointType {
  console.log(`movePath: ${path} ${point.x} ${point.y}`);
  switch (path) {
    case "N":
      return {
        x: point.x,
        y: point.y + 1,
      };
    case "S":
      return {
        x: point.x,
        y: point.y - 1,
      };
    case "E":
      return {
        x: point.x + 1,
        y: point.y,
      };
    case "W":
      return {
        x: point.x - 1,
        y: point.y,
      };
    default:
      return {
        x: point.x,
        y: point.y,
      };
  }
}

console.log(isPathCrossing("SN"));
