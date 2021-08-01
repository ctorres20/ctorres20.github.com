const app = require('./app');

async function main() {
    await app.listen(3500);
    console.log('Server on port 3500');
}

main();

// app.listen(3500, () => console.log('On server port 3500'))