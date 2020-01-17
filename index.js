const Sakura = require('./src/sakura');

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const skr = new Sakura();
console.info('skr: ', skr.getImg());
// ctx.fillStyle = 'rgba(0,0,0,1)'; // 'rgba(235,108,144,1)';
// ctx.beginPath();
// ctx.moveTo(300, 300);
// ctx.quadraticCurveTo(400, 120, 500, 300);
// ctx.quadraticCurveTo(600, 480, 300, 900);
// ctx.moveTo(300, 300);
// ctx.quadraticCurveTo(200, 120, 100, 300);
// ctx.quadraticCurveTo(0, 480, 300, 900);
// ctx.closePath();
// ctx.fill();

ctx.drawImage(skr.getImg(), 0, 0);

// y = 1.8x - 240