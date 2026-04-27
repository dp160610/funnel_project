const fs = require('fs');
const html = fs.readFileSync('realatte-source.html', 'utf8');
const matches = html.match(/href="(\/_next\/static\/css\/[^"]+\.css)"/g);
console.log(matches ? matches.slice(0, 8).join('\n') : 'none');
