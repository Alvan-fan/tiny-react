import mountNativeElement from './mountNativeElement';
import isFunction from './isFunction';
import mountComponent from './mountComponent';

export default function mountElment(virtuaDOM, container) {
  if (isFunction(virtuaDOM)) {
    // Component
    mountComponent(virtuaDOM, container);
  } else {
    //NativeElement
    mountNativeElement(virtuaDOM, container);
  }
}
