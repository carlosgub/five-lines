const TILE_SIZE = 30;
const FPS = 30;
const SLEEP = 1000 / FPS;

enum RawInput {
  UP, DOWN, LEFT, RIGHT
}

interface Input{
  isRight():Boolean;
  isLeft():Boolean;
  isUp():Boolean;
  isDown():Boolean;
  handle(): void;
}

class Right implements Input{
  isRight(): Boolean {
    return true;
  } 
  isLeft(): Boolean {
    return false;
  }
  isUp(): Boolean {
    return false;
  }
  isDown(): Boolean {
    return false;
  }
  handle(): void {
      moveHorizontal(1);
  }

}

class Left implements Input{
  isRight(): Boolean {
    return false;
  }
  isLeft(): Boolean {
    return true;
  }
  isUp(): Boolean {
    return false;
  }
  isDown(): Boolean {
    return false;
  }
  handle(): void {
      moveHorizontal(-1);
  }
}

class Up implements Input{
  isRight(): Boolean {
    return false;
  }
  isLeft(): Boolean {
    return false;
  }
  isUp(): Boolean {
    return true;
  }
  isDown(): Boolean {
    return false;
  }
  handle(): void {
    moveVertical(-1);
  }
}

class Down implements Input{
  isRight(): Boolean {
    return false;
  }
  isLeft(): Boolean {
    return false;
  }
  isUp(): Boolean {
    return false;
  }
  isDown(): Boolean {
    return true;
  }
  handle(): void {
    moveVertical(1);
  }
}

enum RawTile {
  AIR,
  FLUX,
  UNBREAKABLE,
  PLAYER,
  STONE, FALLING_STONE,
  BOX, FALLING_BOX,
  KEY1, LOCK1,
  KEY2, LOCK2
}

interface Tile{
  isFlux():Boolean;
  isUnbreakable():Boolean;
  isStone():Boolean;
  isAir():Boolean;
  isPlayer():Boolean;
  isFallingStone():Boolean;
  isBox():Boolean;
  isFallingBox():Boolean;
  isKey1():Boolean;
  isKey2():Boolean;
  isLock1():Boolean;
  isLock2():Boolean;
}

class Flux implements Tile{
  isFlux(): Boolean {
    return true;
  }
  isUnbreakable(): Boolean {
    return false;
  }
  isStone(): Boolean {
    return false;
  }
  isAir(): Boolean {
    return false;
  }
  isPlayer(): Boolean {
    return false;
  }
  isFallingStone(): Boolean {
    return false;
  }
  isBox(): Boolean {
    return false;
  }
  isFallingBox(): Boolean {
    return false;
  }
  isKey1(): Boolean {
    return false;
  }
  isKey2(): Boolean {
    return false;
  }
  isLock1(): Boolean {
    return false;
  }
  isLock2(): Boolean {
    return false;
  }
}

class Unbreakable implements Tile{
  isFlux(): Boolean {
    return false;
  }
  isUnbreakable(): Boolean {
    return true;
  }
  isStone(): Boolean {
    return false;
  }
  isAir(): Boolean {
    return false;
  }
  isPlayer(): Boolean {
    return false;
  }
  isFallingStone(): Boolean {
    return false;
  }
  isBox(): Boolean {
    return false;
  }
  isFallingBox(): Boolean {
    return false;
  }
  isKey1(): Boolean {
    return false;
  }
  isKey2(): Boolean {
    return false;
  }
  isLock1(): Boolean {
    return false;
  }
  isLock2(): Boolean {
    return false;
  }
}

class Stone implements Tile{
  isFlux(): Boolean {
    return false;
  }
  isUnbreakable(): Boolean {
    return false;
  }
  isStone(): Boolean {
    return true;
  }
  isAir(): Boolean {
    return false;
  }
  isPlayer(): Boolean {
    return false;
  }
  isFallingStone(): Boolean {
    return false;
  }
  isBox(): Boolean {
    return false;
  }
  isFallingBox(): Boolean {
    return false;
  }
  isKey1(): Boolean {
    return false;
  }
  isKey2(): Boolean {
    return false;
  }
  isLock1(): Boolean {
    return false;
  }
  isLock2(): Boolean {
    return false;
  }
}

class Air implements Tile{
  isFlux(): Boolean {
    return false;
  }
  isUnbreakable(): Boolean {
    return false;
  }
  isStone(): Boolean {
    return false;
  }
  isAir(): Boolean {
    return true;
  }
  isPlayer(): Boolean {
    return false;
  }
  isFallingStone(): Boolean {
    return false;
  }
  isBox(): Boolean {
    return false;
  }
  isFallingBox(): Boolean {
    return false;
  }
  isKey1(): Boolean {
    return false;
  }
  isKey2(): Boolean {
    return false;
  }
  isLock1(): Boolean {
    return false;
  }
  isLock2(): Boolean {
    return false;
  }
}

class Player implements Tile{
  isFlux(): Boolean {
    return false;
  }
  isUnbreakable(): Boolean {
    return false;
  }
  isStone(): Boolean {
    return false;
  }
  isAir(): Boolean {
    return false;
  }
  isPlayer(): Boolean {
    return true;
  }
  isFallingStone(): Boolean {
    return false;
  }
  isBox(): Boolean {
    return false;
  }
  isFallingBox(): Boolean {
    return false;
  }
  isKey1(): Boolean {
    return false;
  }
  isKey2(): Boolean {
    return false;
  }
  isLock1(): Boolean {
    return false;
  }
  isLock2(): Boolean {
    return false;
  }
}

class FallingStone implements Tile{
  isFlux(): Boolean {
    return false;
  }
  isUnbreakable(): Boolean {
    return false;
  }
  isStone(): Boolean {
    return false;
  }
  isAir(): Boolean {
    return false;
  }
  isPlayer(): Boolean {
    return false;
  }
  isFallingStone(): Boolean {
    return true;
  }
  isBox(): Boolean {
    return false;
  }
  isFallingBox(): Boolean {
    return false;
  }
  isKey1(): Boolean {
    return false;
  }
  isKey2(): Boolean {
    return false;
  }
  isLock1(): Boolean {
    return false;
  }
  isLock2(): Boolean {
    return false;
  }
}

class Box implements Tile{
  isFlux(): Boolean {
    return false;
  }
  isUnbreakable(): Boolean {
    return false;
  }
  isStone(): Boolean {
    return false;
  }
  isAir(): Boolean {
    return false;
  }
  isPlayer(): Boolean {
    return false;
  }
  isFallingStone(): Boolean {
    return false;
  }
  isBox(): Boolean {
    return true;
  }
  isFallingBox(): Boolean {
    return false;
  }
  isKey1(): Boolean {
    return false;
  }
  isKey2(): Boolean {
    return false;
  }
  isLock1(): Boolean {
    return false;
  }
  isLock2(): Boolean {
    return false;
  }
}

class FallingBox implements Tile{
  isFlux(): Boolean {
    return false;
  }
  isUnbreakable(): Boolean {
    return false;
  }
  isStone(): Boolean {
    return false;
  }
  isAir(): Boolean {
    return false;
  }
  isPlayer(): Boolean {
    return false;
  }
  isFallingStone(): Boolean {
    return false;
  }
  isBox(): Boolean {
    return false;
  }
  isFallingBox(): Boolean {
    return true;
  }
  isKey1(): Boolean {
    return false;
  }
  isKey2(): Boolean {
    return false;
  }
  isLock1(): Boolean {
    return false;
  }
  isLock2(): Boolean {
    return false;
  }
}

class Key1 implements Tile{
  isFlux(): Boolean {
    return false;
  }
  isUnbreakable(): Boolean {
    return false;
  }
  isStone(): Boolean {
    return false;
  }
  isAir(): Boolean {
    return false;
  }
  isPlayer(): Boolean {
    return false;
  }
  isFallingStone(): Boolean {
    return false;
  }
  isBox(): Boolean {
    return false;
  }
  isFallingBox(): Boolean {
    return false;
  }
  isKey1(): Boolean {
    return true;
  }
  isKey2(): Boolean {
    return false;
  }
  isLock1(): Boolean {
    return false;
  }
  isLock2(): Boolean {
    return false;
  }
}

class Key2 implements Tile{
  isFlux(): Boolean {
    return false;
  }
  isUnbreakable(): Boolean {
    return false;
  }
  isStone(): Boolean {
    return false;
  }
  isAir(): Boolean {
    return false;
  }
  isPlayer(): Boolean {
    return false;
  }
  isFallingStone(): Boolean {
    return false;
  }
  isBox(): Boolean {
    return false;
  }
  isFallingBox(): Boolean {
    return false;
  }
  isKey1(): Boolean {
    return false;
  }
  isKey2(): Boolean {
    return true;
  }
  isLock1(): Boolean {
    return false;
  }
  isLock2(): Boolean {
    return false;
  }
}

class Lock1 implements Tile{
  isFlux(): Boolean {
    return false;
  }
  isUnbreakable(): Boolean {
    return false;
  }
  isStone(): Boolean {
    return false;
  }
  isAir(): Boolean {
    return false;
  }
  isPlayer(): Boolean {
    return false;
  }
  isFallingStone(): Boolean {
    return false;
  }
  isBox(): Boolean {
    return false;
  }
  isFallingBox(): Boolean {
    return false;
  }
  isKey1(): Boolean {
    return false;
  }
  isKey2(): Boolean {
    return false;
  }
  isLock1(): Boolean {
    return true;
  }
  isLock2(): Boolean {
    return false;
  }
}

class Lock2 implements Tile{
  isFlux(): Boolean {
    return false;
  }
  isUnbreakable(): Boolean {
    return false;
  }
  isStone(): Boolean {
    return false;
  }
  isAir(): Boolean {
    return false;
  }
  isPlayer(): Boolean {
    return false;
  }
  isFallingStone(): Boolean {
    return false;
  }
  isBox(): Boolean {
    return false;
  }
  isFallingBox(): Boolean {
    return false;
  }
  isKey1(): Boolean {
    return false;
  }
  isKey2(): Boolean {
    return false;
  }
  isLock1(): Boolean {
    return false;
  }
  isLock2(): Boolean {
    return true;
  }
}


let playerx = 1;
let playery = 1;
let map: Tile[][] = [
  [2, 2, 2, 2, 2, 2, 2, 2],
  [2, 3, 0, 1, 1, 2, 0, 2],
  [2, 4, 2, 6, 1, 2, 0, 2],
  [2, 8, 4, 1, 1, 2, 0, 2],
  [2, 4, 1, 1, 1, 9, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2],
];

let inputs: Input[] = [];

function removeLock1() {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x].isLock1) {
        map[y][x] = new Air();
      }
    }
  }
}

function removeLock2() {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x].isLock2) {
        map[y][x] = new Air();
      }
    }
  }
}

function moveToTile(newx: number, newy: number) {
  map[playery][playerx] = new Air();
  map[newy][newx] = new Player();
  playerx = newx;
  playery = newy;
}

function moveHorizontal(dx: number) {
  if (map[playery][playerx + dx].isFlux
    || map[playery][playerx + dx].isAir) {
    moveToTile(playerx + dx, playery);
  } else if ((map[playery][playerx + dx].isStone
    || map[playery][playerx + dx].isBox)
    && map[playery][playerx + dx + dx].isAir
    && !map[playery + 1][playerx + dx].isAir) {
    map[playery][playerx + dx + dx] = map[playery][playerx + dx];
    moveToTile(playerx + dx, playery);
  } else if (map[playery][playerx + dx].isKey1) {
    removeLock2();
    moveToTile(playerx + dx, playery);
  } else if (map[playery][playerx + dx].isKey2) {
    removeLock2();
    moveToTile(playerx + dx, playery);
  }
}

function moveVertical(dy: number) {
  if (map[playery + dy][playerx].isFlux
    || map[playery + dy][playerx].isAir) {
    moveToTile(playerx, playery + dy);
  } else if (map[playery + dy][playerx].isKey1) {
    removeLock1();
    moveToTile(playerx, playery + dy);
  } else if (map[playery + dy][playerx].isKey2) {
    removeLock2();
    moveToTile(playerx, playery + dy);
  }
}

function update() {
  handleInputs()
  updateMap()
}

function handleInputs() {
  while (inputs.length > 0) {
    let current = inputs.pop();
    current.handle
  }
}

function updateMap() {
  for (let y = map.length - 1; y >= 0; y--) {
    for (let x = 0; x < map[y].length; x++) {
      updateTile(x, y)
    }
  }
}

function updateTile(x: number, y: number) {
  if ((map[y][x].isStone || map[y][x].isFallingStone)
    && map[y + 1][x].isAir) {
    map[y + 1][x] = new FallingStone();
    map[y][x] = new Air();
  } else if ((map[y][x].isBox || map[y][x].isFallingBox)
    && map[y + 1][x].isAir) {
    map[y + 1][x] = new FallingBox();
    map[y][x] = new Air();
  } else if (map[y][x].isFallingStone) {
    map[y][x] = new Stone();
  } else if (map[y][x].isFallingBox) {
    map[y][x] = new Box();
  }
}

function createGraphics() {
  let canvas = document.getElementById("GameCanvas") as HTMLCanvasElement;
  let g = canvas.getContext("2d");
  g.clearRect(0, 0, canvas.width, canvas.height);
  return g;
}

function draw() {
  let g = createGraphics()
  drawMap(g)
  drawPlayer(g)
}

function drawMap(g: CanvasRenderingContext2D) {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      colorOfTile(g,x,y)
      if (!map[y][x].isAir)
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
  }
}

function colorOfTile(g:CanvasRenderingContext2D,x:number,y:number){
  if (map[y][x].isFlux)
    g.fillStyle = "#ccffcc";
  else if (map[y][x].isUnbreakable)
    g.fillStyle = "#999999";
  else if (map[y][x].isStone || map[y][x].isFallingStone)
    g.fillStyle = "#0000cc";
  else if (map[y][x].isBox || map[y][x].isFallingBox)
    g.fillStyle = "#8b4513";
  else if (map[y][x].isKey1 || map[y][x].isLock1)
    g.fillStyle = "#ffcc00";
  else if (map[y][x].isKey2 || map[y][x].isLock2)
    g.fillStyle = "#00ccff";
}

function drawPlayer(g: CanvasRenderingContext2D) {
  g.fillStyle = "#ff0000";
  g.fillRect(playerx * TILE_SIZE, playery * TILE_SIZE, TILE_SIZE, TILE_SIZE);
}

function gameLoop() {
  let before = Date.now();
  update();
  draw();
  let after = Date.now();
  let frameTime = after - before;
  let sleep = SLEEP - frameTime;
  setTimeout(gameLoop, sleep);
}

window.onload = () => {
  gameLoop();
}

const LEFT_KEY = 37;
const UP_KEY = 38;
const RIGHT_KEY = 39;
const DOWN_KEY = 40;
window.addEventListener("keydown", e => {
  if (e.keyCode === LEFT_KEY || e.key === "a") inputs.push(new Left);
  else if (e.keyCode === UP_KEY || e.key === "w") inputs.push(new Up);
  else if (e.keyCode === RIGHT_KEY || e.key === "d") inputs.push(new Right);
  else if (e.keyCode === DOWN_KEY || e.key === "s") inputs.push(new Down());
});

