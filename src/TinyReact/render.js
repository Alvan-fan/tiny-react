import diff from './diff';

export default function render(virtuaDOM, container, oldDOM) {
  diff(virtuaDOM, container, oldDOM);
}
