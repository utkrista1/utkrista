//array.js
var languages = ['php', 'js', 'python', 'r', 'js'];
console.log('length .>', languages.length)
//console.log('find index >>', languages.indexOf('php'))
//console.log('find index >>', languages.indexOf('abc'))
//console.log('last index of >>',languages.lastIndexOf('js'))
// adding item
//at first
var a =languages.unshift('c++');
console.log('added value is',a);
//at last
languages.push('go') //returns length of array
console.log('languages Now >>',languages)
//remove first from list
var firstItem = languages.shift();
console.log('firstItem >',firstItem);
//last item
var lastItem = languages.pop();
console.log('last item >>',lastItem)
