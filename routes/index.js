var resource = require('./resource'); /*
 * GET home page.
 */
 
function index(req, res){
  res.render('index', { title: 'StrongLoop Node' });
};

/**
 * Set up routes
 */
 
module.exports = function(app, options) {
  app.get('/', index);
//  app.get('/api/getMessages', restsmsapi.findAll);
// app.post('/api/handlesms', restsmsapi.saveMessage);
  
  resource.setup(app, options);
  
}
