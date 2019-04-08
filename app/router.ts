import { Application } from 'egg';
// import HomeController from './module/home';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  // router.get('/home', HomeController.index());
};
