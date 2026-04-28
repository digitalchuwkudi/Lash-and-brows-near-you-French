const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Replacements
const replacements = [
  { regex: /\bbg-white\b(?!(\/| dark:))/g, replace: 'bg-white dark:bg-black' },
  { regex: /\bbg-gray-50\b(?! dark:)/g, replace: 'bg-gray-50 dark:bg-[#111111]' },
  { regex: /\bbg-gray-100\b(?! dark:)/g, replace: 'bg-gray-100 dark:bg-gray-900' },
  { regex: /\btext-gray-900\b(?! dark:)/g, replace: 'text-gray-900 dark:text-white' },
  { regex: /\btext-gray-800\b(?! dark:)/g, replace: 'text-gray-800 dark:text-gray-200' },
  { regex: /\btext-gray-700\b(?! dark:)/g, replace: 'text-gray-700 dark:text-gray-300' },
  { regex: /\btext-gray-600\b(?! dark:)/g, replace: 'text-gray-600 dark:text-gray-400' },
  { regex: /\btext-gray-500\b(?! dark:)/g, replace: 'text-gray-500 dark:text-gray-400' },
  { regex: /\bborder-gray-100\b(?! dark:)/g, replace: 'border-gray-100 dark:border-gray-800' },
  { regex: /\bborder-gray-200\b(?! dark:)/g, replace: 'border-gray-200 dark:border-gray-800' },
  { regex: /\bborder-white\b(?! dark:)/g, replace: 'border-white dark:border-gray-800' },
];

replacements.forEach(({ regex, replace }) => {
  content = content.replace(regex, replace);
});

fs.writeFileSync('src/App.tsx', content);
console.log('Done replacing classes');
