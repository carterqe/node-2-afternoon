const SERVER_PORT = 3001  
const mc = require('./controllers/messages_controller')
const express = require("express")
const app = express()

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

const port = 3001
app.use(express.json())


app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} you're in`)
)