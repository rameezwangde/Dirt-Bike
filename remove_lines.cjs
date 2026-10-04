const fs = require('fs');
const path = require('path');
const dir = 'src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));
let changedFiles = 0;
for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  // Match lines with the orange decorative lines
  const regex = /^\s*<div className=\"w-(?:\[\d+px\]|\d+) h-\[(?:1|2)px\] bg-\[#F97818\](?:\" \/>|\"><\/div>)\s*$/gm;
  if (regex.test(content)) {
    content = content.replace(regex, '');
    fs.writeFileSync(filePath, content);
    changedFiles++;
    console.log('Modified', file);
  }
}
console.log('Total changed:', changedFiles);
