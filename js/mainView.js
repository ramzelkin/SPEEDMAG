//view
function MainView() {
   this.loginView = new LoginView();
   this.routeView = new RouteView();
   this.listView = new ListView();
   var myModel;
   var myController;
   var self = this;
   this.start = function(model, controller) {
      myModel = model;
      myController = controller;
   }
   this.update = function() {
      var state = myModel.getModelState();
      if (state.pagename) {//если есть название стр, то url надо менять
         location.hash = state.pagename;
      }
      switch (state.pagename) {
         case 'login':
            self.loginView.start(myModel.loginModel, myController.loginController);
            break;
         case 'route':
            self.routeView.start(myModel.routeModel);
            break;
         case 'list':
            self.listView.start(myModel.listModel, myController.listController);
            break;
         default:
            self.routeView.start(myModel.routeModel);
            break;
      }
   }




}
