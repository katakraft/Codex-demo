const fs = require('fs');

const tasks = JSON.parse(fs.readFileSync('tasks.json', 'utf8'));
let md = '| id | title |\n| --- | --- |\n';
for (const t of tasks) {
  md += `| ${t.id} | ${t.title} |\n`;
}
fs.writeFileSync('tasks.md', md);
