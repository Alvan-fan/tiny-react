import mountElment from './mountElment';

export default function diff(virtuaDOM, container, oldDOM) {
  // 判断oldDOM是否存在
  if (!oldDOM) {
    mountElment(virtuaDOM, container);
  }
}
