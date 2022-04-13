import isFunction from './isFunction';
import isFunctionComponent from './isFunctionComponent';
import mountNativeElement from './mountNativeElement';

export default function mountComponent(virtuaDOM, container) {
  let nextVirtuaDom = null;
  // 判断函数还是类组件
  if (isFunctionComponent(virtuaDOM)) {
    nextVirtuaDom = buildFunctionComponent(virtuaDOM);
  }
  if (isFunction(nextVirtuaDom)) {
    mountComponent(nextVirtuaDom, container);
  } else {
    mountNativeElement(nextVirtuaDom, container);
  }
}

function buildFunctionComponent(virtuaDOM) {
  return virtuaDOM.type(virtuaDOM.props || {});
}
