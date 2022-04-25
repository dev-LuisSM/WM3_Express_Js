// Usando objeto express
const express = require('express')
// App express y puerto por el que se escucha el server
const app = express()
const port = 3000

// push inicial, responderá a la url localhost:3000
app.get('/', (req, res) => {
  res.send('Hello World')
})

// Creando nueva ruta
app.get('/launchx', (req, res) => {
  res.send('Bienvenidos a LaunchX')
})

// Nueva ruta para regresar un objeto
app.get('/explorersInNode', (req, res) => {
  const explorer = {name: 'Explorer', msg: 'Hello World'}
  res.send(explorer)
})

// Para inicializar la app
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})