const https = require('https');
const fs = require('fs');

const cssFiles = [
  '/_next/static/css/6f4de93860c6736d.css',
  '/_next/static/css/57c639a8883faf4a.css',
  '/_next/static/css/cc5d5b39f9fe4179.css',
  '/_next/static/css/66cdebca85fd44d2.css',
];

let combined = '';
let count = 0;

cssFiles.forEach(path => {
  https.get('https://realatte.com' + path, res => {
    let d = '';
    res.on('data', c => d += c);
    res.on('end', () => {
      combined += '\n\n/* === ' + path + ' === */\n\n' + d;
      count++;
      if (count === cssFiles.length) {
        fs.writeFileSync('realatte-all.css', combined);
        console.log('Done, total CSS length:', combined.length);
      }
    });
  }).on('error', e => console.log('Error for', path, e.message));
});
