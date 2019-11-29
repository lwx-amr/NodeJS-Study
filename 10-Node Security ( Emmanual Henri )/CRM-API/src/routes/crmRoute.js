import { 
  addNewContact, 
  getContacts, 
  getSomeContact, 
  updateContact, 
  deleteContact
} from "../controllers/crmController";

import {  
  register,
  login, 
  loginRequired
} from "../controllers/userController";

const routes = (app) => {

  // Contact route
  app.route('/contact')

    // Get Method
    .get((req, res, next) =>{
      console.log('I\'m triggered');      
      next()
    },loginRequired,getContacts)

    // Post Method
    .post(loginRequired, addNewContact);
  
  app.route('/contact/:fname')

    //Get method
    .get(loginRequired, getSomeContact)

    // Put Method
    .put(loginRequired, updateContact)

    // Delete Method
    .delete(loginRequired, deleteContact);

  // Register route
  app.route('/auth/register')
    .post(register);
  
  // Login route
  app.route('/auth/login')
    .post(login);
};

export default routes;
