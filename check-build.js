const { execSync } = require('child_process');
const fs = require('fs');

try {
  const output = execSync('npx next build', { 
    stdio: 'pipe', 
    encoding: 'utf8',
    cwd: __dirname
  });
  fs.writeFileSync('build-result.txt', 'SUCCESS:\n' + output);
} catch(e) {
  const result = 'EXIT CODE: ' + e.status + '\n\nSTDERR:\n' + (e.stderr || '') + '\n\nSTDOUT:\n' + (e.stdout || '');
  fs.writeFileSync('build-result.txt', result);
}
console.log('Done - check build-result.txt');
