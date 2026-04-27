const https = require('https');
const fs = require('fs');
let chunks = [];
https.get('https://realatte.com', r => {
  r.on('data', c => { chunks.push(c); });
  r.on('end', () => {
    const d = Buffer.concat(chunks).toString('utf8');
    fs.writeFileSync('c:/Users/user/git/funnel-website/realatte-source.html', d);
    console.log('Done, length: ' + d.length);
  });
}); 
