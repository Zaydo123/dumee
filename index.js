const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

const homeController = require('./controllers/HomeController');
const ipController = require('./controllers/IPController');
const getController = require('./controllers/GetController');
const postController = require('./controllers/PostController');
const healthController = require('./controllers/HealthController');

const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));

// Routes
router.get('/get', getController.get);
router.get('/', homeController.index);
router.get('/ip', ipController.getUserIP);
router.get('/ip/:ip/:format?', ipController.getIPDetails);
router.post('/post', postController.post);
router.get('/health', healthController.get);

app.use(router);

app.listen(3000, () => {
    console.log(`Server listening at http://localhost:3000`);
});

module.exports = app;
