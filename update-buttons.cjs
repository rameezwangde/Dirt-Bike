const fs = require('fs');

const pages = [
  './src/pages/DirtBike.jsx',
  './src/pages/BuggyRental.jsx',
  './src/pages/DesertSafari.jsx',
  './src/pages/QuadBike.jsx'
];

for (const page of pages) {
  if (fs.existsSync(page)) {
    let content = fs.readFileSync(page, 'utf8');
    
    // Replace <button> Book Now </button> with <a> Book Now </a>
    content = content.replace(
      /<button className="bg-\[#cf8144\] hover:bg-\[#b56e36\] text-white py-2\.5 px-6 rounded text-sm font-medium transition-colors w-fit">(\s*)Book Now(\s*)<\/button>/g,
      '<a href="https://wa.me/971504799258" target="_blank" rel="noopener noreferrer" className="bg-[#cf8144] hover:bg-[#b56e36] text-white py-2.5 px-6 rounded text-sm font-medium transition-colors w-fit inline-block">\n                  Book Now\n                </a>'
    );
    
    fs.writeFileSync(page, content);
  }
}
