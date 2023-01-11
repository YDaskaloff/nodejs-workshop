const app = require('../app');
const dbInit = require('./database');
const { PORT, HOST } = require('../env');

app.listen(PORT, HOST, () => {
  dbInit();
  console.log('Server is listening');
})
