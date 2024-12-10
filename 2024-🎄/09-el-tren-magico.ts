type Space = "·" | "@" | "*" | "o";
type Board = Space[];
type Movement = "U" | "D" | "R" | "L";
type Result = "none" | "crash" | "eat";

function moveTrain(board: Board, mov: Movement): Result {
  const movementMap: { [key in Movement]: [number, number] } = {
    U: [-1, 0],
    D: [1, 0],
    R: [0, 1],
    L: [0, -1],
  };

  let y = board.findIndex((b) => b.includes("@"));
  let x = board[y].indexOf("@");

  const [dy, dx] = movementMap[mov];
  y += dy;
  x += dx;

  return y < 0 || y >= board.length || x < 0 || x >= board[0].length || board[y][x] == "o"
    ? "crash"
    : board[y][x] == "*"
    ? "eat"
    : "none";
}
