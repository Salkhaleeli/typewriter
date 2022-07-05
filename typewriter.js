const sentence = "hello there from lighthouse labs";
let section = 0
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, section + 100)
};
setTimeout(() => {
  process.stdout.write('\n');
}, 2000);