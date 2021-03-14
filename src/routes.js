const express = require('express');

const ongController = require('./controllers/OngController');
const incidentController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

const routes = express.Router();

/** Login */
routes.post('/sessions', sessionController.create);

/** ONGs */
routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

/** Incidentes */
routes.get('/incidents', incidentController.index);
routes.post('/incidents',incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

/** Lista de casos de cada ONG */
routes.get('/profile', profileController.index);

module.exports = routes;

