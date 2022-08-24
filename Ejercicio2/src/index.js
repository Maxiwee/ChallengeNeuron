const app = require('./app.js');
const { PORT } = require('./config/config.js');
require('./db.js');

app.listen(PORT, () => {
  console.log(`%s Server on port ${PORT}`);
});
