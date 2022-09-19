let output = '';
let currentElement = document.querySelector('cite');
while (currentElement !== null) {
    output += currentElement.tagName;
    if (currentElement.className)
        output += '.' + currentElement.className;
    if (currentElement = currentElement.parentElement)
        output += ' > ';
}
output = output.split(' ').reverse().join(' ').toLowerCase();

console.log(output);