module.exports = function (imgData) {
  let i, i2, t,
    h = imgData.height,
    w = imgData.width,
    w_2 = w / 2;
  for (let dy = 0; dy < h; dy++) {
    for (let dx = 0; dx < w_2; dx++) {
      i = (dy << 2) * w + (dx << 2)
      i2 = ((dy + 1) << 2) * w - ((dx + 1) << 2)
      for (let p = 0; p < 4; p++) {
        t = imgData.data[i + p]
        imgData.data[i + p] = imgData.data[i2 + p]
        imgData.data[i2 + p] = t
      }
    }
  }
  return imgData;
}