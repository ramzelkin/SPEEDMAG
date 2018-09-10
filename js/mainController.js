//controller
function MainController() {
   this.loginController = new LoginController();
   var routeController = new RouteController();
   var mainView;
   var mainModel;
   var self = this;

   window.onhashchange=switchToStateFromURLHash;
   var switchToStateFromURLHash = function() {
      var URLHash=window.location.hash;
      var stateStr=URLHash.substr(1);//обрезаем # в uri
      if ( stateStr!="" ) { // если закладка непустая, читаем из неё состояние и отображаем
         var parts=stateStr.split("_")
         mainModel.SPAState={ pagename: parts[0] };
      }
      else
         mainModel.SPAState={pagename:'route'}; // иначе показываем страницу route
      }

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
