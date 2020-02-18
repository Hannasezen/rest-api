const routes = (app) => {

  app.route('/contact')
    .get((req, res, next) => {
      console.log('middleware');
      next();
    }, (req, res, next) => {
      res.send('GET request');
    })
    .post((req, res, next) => {
      res.send('POST request');
    });

  app.route('/contact/:contactId')
    .put((req, res, next) => {
      res.send('PUT request');
    })
    .delete((req, res, next) => {
      res.send('DELETE request');
    });

}

export default routes;