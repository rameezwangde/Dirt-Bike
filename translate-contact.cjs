const fs = require('fs');

const contextPath = './src/context/LanguageContext.jsx';
let content = fs.readFileSync(contextPath, 'utf8');

const newTranslations = {
  EN: {
    contact_eyebrow_sub: "CONNECT WITH US"
  },
  ES: {
    contact_eyebrow_sub: "CONÉCTATE CON NOSOTROS"
  },
  RU: {
    contact_eyebrow_sub: "СВЯЖИТЕСЬ С НАМИ"
  },
  FR: {
    contact_eyebrow_sub: "CONNECTEZ-VOUS AVEC NOUS"
  },
  AR: {
    contact_eyebrow_sub: "تواصل معنا"
  }
};

for (const lang in newTranslations) {
  const translations = newTranslations[lang];
  let block = '';
  for (const [key, val] of Object.entries(translations)) {
      block += `,\n    ${key}: "${val}"`;
  }
  
  const regex = new RegExp(`(${lang}:\\s*{[\\s\\S]*?)(})`);
  content = content.replace(regex, `$1${block}\n  $2`);
}

fs.writeFileSync(contextPath, content);
