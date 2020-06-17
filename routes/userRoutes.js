const controller = require('../controllers/user.controller');

const routes = (app) => {
    // create is the same as register since we create one user
    app.post('/api/v1/create', controller.create); 
    app.get('/api/v1/readAll', controller.authenticate, controller.readAll);
    app.get('/api/v1/readOne/:id', controller.authenticate, controller.readOne);
    app.put('/api/v1/updateOne/:id', controller.authenticate, controller.updateOne);
    app.delete('/api/v1/deleteOne/:id', controller.authenticate, controller.deleteOne);
    app.post("/api/v1/login", controller.login);
    app.get('/api/v1/logout',controller.authenticate, controller.logout)
    // just use updateOne to reupdate the user with a new task
    app.put('/api/v1/updateInfo/:id', controller.authenticate, controller.updateInfo);
}

module.exports = routes;


// const controller = require('../controllers/user.controller');
// const routes = require('express').Router();

//     // create is the same as register since we create one user
//     routes.route('/api/v1/create').post(controller.create); 
//     routes.route('/api/v1/readAll').get(controller.authenticate, controller.readAll);
//     routes.route('/api/v1/readOne/:id').get(controller.authenticate, controller.readOne);
//     routes.route('/api/v1/updateOne/:id').put(controller.authenticate, controller.updateOne);
//     routes.route('/api/v1/deleteOne/:id').delete(controller.authenticate, controller.deleteOne);
//     routes.route("/api/v1/login").post(controller.login);
//     routes.route('/api/v1/logout').get(controller.authenticate, controller.logout)
//     // just use updateOne to reupdate the user with a new task
//     routes.route('/api/v1/updateInfo/:id').put(controller.authenticate, controller.updateInfo);


// module.exports = routes;