import mountElment from './mountElment';
import updateNodeElement from './updateNodeElement';

export default function createDOMElement(virtuaDOM) {
  let newElement = null;

  if (virtuaDOM.type === 'text') {
    // 文本节点
    newElement = document.createTextNode(virtuaDOM.props.textContent);
  } else {
    // 元素节点
    newElement = document.createElement(virtuaDOM.type);
    updateNodeElement(newElement, virtuaDOM);
  }

  // 递归创建子节点
  virtuaDOM.children.forEach((child) => {
    mountElment(child, newElement);
  });
  return newElement;
}
