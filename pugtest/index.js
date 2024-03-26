const pug = require('pug');

const template = 'h1 hello wolrd!';

const output = pug.render(template);

console.log(output);
