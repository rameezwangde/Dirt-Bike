const fs = require('fs');

const contextPath = './src/context/LanguageContext.jsx';
let content = fs.readFileSync(contextPath, 'utf8');

const newTranslations = {
  EN: {
    packages_eyebrow: "CHOOSE YOUR RIDE",
    packages_title_1: "PREMIUM",
    packages_title_2: "DESERT",
    packages_title_3: "PACKAGES",
    packages_desc: "From high-speed dirt bikes to rugged dune buggies and powerful quads, we have the perfect machine for your next adventure."
  },
  ES: {
    packages_eyebrow: "ELIGE TU VIAJE",
    packages_title_1: "PAQUETES",
    packages_title_2: "PREMIUM",
    packages_title_3: "DEL DESIERTO",
    packages_desc: "Desde motos de cross de alta velocidad hasta buggies y potentes quads, tenemos la máquina perfecta para tu próxima aventura."
  },
  RU: {
    packages_eyebrow: "ВЫБЕРИТЕ СВОЙ ТРАНСПОРТ",
    packages_title_1: "ПРЕМИАЛЬНЫЕ",
    packages_title_2: "ПАКЕТЫ",
    packages_title_3: "В ПУСТЫНЕ",
    packages_desc: "От скоростных кроссовых мотоциклов до багги и мощных квадроциклов — у нас есть идеальная машина для вашего следующего приключения."
  },
  FR: {
    packages_eyebrow: "CHOISISSEZ VOTRE MONTURE",
    packages_title_1: "FORFAITS",
    packages_title_2: "DÉSERT",
    packages_title_3: "PREMIUM",
    packages_desc: "Des motos de cross à grande vitesse aux buggys et quads puissants, nous avons la machine parfaite pour votre prochaine aventure."
  },
  AR: {
    packages_eyebrow: "اختر رحلتك",
    packages_title_1: "باقات",
    packages_title_2: "صحراوية",
    packages_title_3: "مميزة",
    packages_desc: "من الدراجات الترابية عالية السرعة إلى عربات الكثبان الرملية القوية والدراجات الرباعية، لدينا الآلة المثالية لمغامرتك التالية."
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
