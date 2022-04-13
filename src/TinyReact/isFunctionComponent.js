import isFunction from './isFunction';

export default function isFunctionComponent(virtuaDOM) {
  const type = virtuaDOM.type;
  return type && isFunction(virtuaDOM) && !(type.prototype && type.prototype.render);
}
