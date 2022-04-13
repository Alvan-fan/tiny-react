import createDOMElement from './createDOMElement';

export default function mountNativeElement(virtuaDOM, container) {
  const newElement = createDOMElement(virtuaDOM);

  // 将转换后的DOM对象放置在页面中
  container.appendChild(newElement);
}
