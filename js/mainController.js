//controller
function MainController() {
   var loginController;
   var mainModel =new MainModel();
   var mainView = new MainView();
   var myModel;
   var self = this;
   this.initPageLogin = function() {
      loginController = new LoginController();
      mainModel.loginModel.start(mainView.loginView);
      mainView.loginView.start(mainModel.loginModel, loginController);
      loginController.start(mainModel.loginModel, mainView.loginView.submit);

   }
   this.start = function(model) {
      myModel = model;
      self.initPageLogin();
   }
}
