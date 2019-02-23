//CommonJs spec
import _ from 'lodash';
import './style.css';
import './hello.SCSS';
import { area, circumference } from './js/circle';
import abc from './js/cube';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
console.log(area(5), circumference(5))
console.log(abc(3))