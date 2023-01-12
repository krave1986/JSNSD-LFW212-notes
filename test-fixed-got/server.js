const fixedGot = require('@krave/fixed-got')

const t0 = performance.now()

setTimeout(() => {
    const t1 = performance.now()
    console.log(t1 - t0);
}, 2000);

async function run() {
    const result = await fixedGot('http://localhost:3000', 1250).json()
    console.log(result);
}

run()