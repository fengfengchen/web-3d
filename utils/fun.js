/**
 * 根据css选择器选择dom
 * @param {*} selector css选择器
 * @returns
 */
export function $(selector) {
  return document.querySelector(selector);
}

/**
 * 响应式判断，针对显示设备，
 * 判断canvas的绘制区域是否与其显示的长宽（即CSS设置的大小与其绘制区域可能并不一致）
 * 不一致的情况下，要对渲染器重新设置渲染区域
 * @param {*} renderer three.js的renderer
 * @returns
 */
export function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const pixelRatio = window.devicePixelRatio;
  const width = (canvas.clientWidth * pixelRatio) | 0;
  const height = (canvas.clientHeight * pixelRatio) | 0;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}
