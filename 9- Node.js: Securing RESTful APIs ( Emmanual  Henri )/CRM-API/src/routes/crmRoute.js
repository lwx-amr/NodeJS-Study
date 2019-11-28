import { 
  addNewContact, 
  getContacts, 
  getSomeContact, 
  updateContact, 
  deleteContact
} from "../controllers/crmController";

const routes = (app) => {

  app.route('/contact')

    // Get Method
    .get((req, res, next) =>{
      console.log('I\'m triggered');      
      next()
    }, getContacts)

    // Post Method
    .post(addNewContact);
  
  app.route('/contact/:fname')

    //Get method
    .get(getSomeContact)

    // Put Method
    .put(updateContact)

    // Delete Method
    .delete(deleteContact);
};

export default routes;
