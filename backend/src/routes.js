const express = require('express');
const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');
const routes = express.Router();



routes.post('/sessions', sessionController.create ); /**Login da ong */
routes.get('/ongs', ongController.index); /**Listagem das ongs */
routes.post('/ongs', ongController.create); /**Criar ongs */
routes.get('/incidents', incidentController.index); /**Listar incidente ou caso */
routes.post('/incidents', incidentController.create); /**Criar um incidente ou caso */
routes.delete('/incidents/:id', incidentController.delete); /**Deleta um caso */
routes.get('/profile', profileController.index); /**Busca casos da ong logada */
module.exports = routes;