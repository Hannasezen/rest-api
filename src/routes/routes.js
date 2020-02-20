import { addNewContact,
        getContacts,
        getContactWithId,
        updateContact,
        deleteContact
 } from '../controllers/controller';

const routes = (app) => {

  app.route('/contact')
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContacts)

    // POST endpoint
    .post(addNewContact);

  app.route('/contact/:contactId')
    // GET a specific contact
    .get(getContactWithId)

    // UPDATE a specific contact
    .put(updateContact)

    // DELETE a specific contact
    .delete(deleteContact);

}

export default routes;