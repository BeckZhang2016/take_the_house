/**
 * Created by beck.zhang on 6/2/2017.
 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('你认为 Node.js 中文网怎么样？', (answer) => {
  // 对答案进行处理
  console.log(`多谢你的反馈：${answer}`);
  completer(answer)

  rl.close();
});

function completer(line) {
  const completions = '.help .error .exit .quit .q'.split(' ');
  const hits = completions.filter((c) => { return c.indexOf(line) === 0 });
  // 如果没匹配到则展示全部补全
  return [hits.length ? hits : completions, line];
}