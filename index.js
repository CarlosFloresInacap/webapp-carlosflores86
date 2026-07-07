const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('¡Hola! Mi primera Web App en Azure funciona 🎉');
});

app.listen(port, () => {
  console.log(`App escuchando en el puerto ${port}`);
});
