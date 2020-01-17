const flipPixels = require('./utils/flipPixels');

module.exports = class Sakura {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = 200;
    this.canvas.height = 280;

    this.init();
  }

  static pBase = { x: 0, y: 0 };

  init() {
    const { ctx, getPosition, quadraticCurveTo, bezierCurveTo } = this;

    const pStart = getPosition(97, 273);
    const pControlA1 = getPosition(97, 256);
    const pControlA2 = getPosition(-45, 161);
    const pEndA = getPosition(53, 38);

    const pControlB1 = getPosition(63, 26);
    const pControlB2 = getPosition(65, 25);
    const pEndB = getPosition(76, 15);

    const pControlC1 = getPosition(80, 11);
    const pControlC2 = getPosition(81, 13);
    const pEndC = getPosition(84, 18);

    const pControlD = getPosition(93, 35);
    const pEndD = getPosition(97, 35);

    const pControlE1 = getPosition(100, 35);
    const pControlE2 = getPosition(100, 29);
    const pEndE = getPosition(105, 16);

    const pControlF = getPosition(109, 9);
    const pEndF = getPosition(111, 13);

    const pControlG1 = getPosition(137, 44);
    const pControlG2 = getPosition(145, 35);
    const pEndG = getPosition(166, 64);

    const pControlH1 = getPosition(221, 166);
    const pControlH2 = getPosition(145, 273);
    const pEndH = pStart;

    ctx.fillStyle = 'rgba(250,182,199,1)';
    ctx.beginPath();
    ctx.moveTo(pStart.x, pStart.y);

    bezierCurveTo(pControlA1, pControlA2, pEndA);
    bezierCurveTo(pControlB1, pControlB2, pEndB);
    bezierCurveTo(pControlC1, pControlC2, pEndC);
    quadraticCurveTo(pControlD, pEndD);
    bezierCurveTo(pControlE1, pControlE2, pEndE);
    quadraticCurveTo(pControlF, pEndF);
    bezierCurveTo(pControlG1, pControlG2, pEndG);
    bezierCurveTo(pControlH1, pControlH2, pEndH);

    ctx.closePath();
    ctx.fill();

    // ctx.restore();
  }

  getPosition = (x = 0, y = 0) => {
    return { x: Sakura.pBase.x + x, y: Sakura.pBase.y + y };
  }

  quadraticCurveTo = (control, end) => {
    this.ctx.quadraticCurveTo(control.x, control.y, end.x, end.y);
  }

  bezierCurveTo = (controlA, controlB, end) => {
    this.ctx.bezierCurveTo(controlA.x, controlA.y, controlB.x, controlB.y, end.x, end.y);
  }

  getImg() {
    return this.canvas;
  }
};