const ab = b => b * 2;

async function test() {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random > 0.5) {
        resolve("成功" + random);
      } else {
        reject(new Error("失败" + random));
      }
    }, 2000);
  });
  return p;
}

async function test2() {
  const a = await test();
  console.log(a);
}
test2();
function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
sleep(1000);
export { ab };
