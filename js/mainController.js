//controller
function MainController() {
   this.loginController = new LoginController();
   var routeController = new RouteController();
   var mainView;
   var mainModel;
   var self = this;

   this.initPageLogin = function() {
      mainModel.loginModel.start(mainView.loginView);
      mainModel.setModelState('login');
      self.loginController.start(mainModel.loginModel, mainView.loginView.submit);
   }

   this.start = function(model, view) {
      mainModel = model;
      mainView = view;
   }

   this.changeToRoutePage = function() {
      mainModel.routeModel.start(mainView.routeView);
      mainModel.setModelState('route');
      routeController.start(self);

   }


}
