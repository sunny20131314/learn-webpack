/**
 * Created by Sandon on 2017/8/9.
 */
import _ from 'lodash'
import printMe from './print.js'
import write from './write'

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = function () {
    printMe()
    write()
  }
  
  element.appendChild(btn);
  
  return element;
}

document.body.appendChild(component());