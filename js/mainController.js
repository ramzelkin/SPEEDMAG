//controller
function MainController() {
   this.loginController = new LoginController();
   var routeController = new RouteController();
   var listController = new ListController();
   var mainView;
   var mainModel;
   var self = this;


   window.onhashchange = function() {
      var URLHash=window.location.hash;
      var stateStr=URLHash.substr(1);//обрезаем # в uri
      if ( stateStr!="" ) { // если закладка непустая, читаем из неё состояние и отображаем
         var parts=stateStr.split("_");
         if (parts[0] != mainModel.getModelState().pagename) {
            switch (parts[0]) {
               case 'login':
                  self.initPageLogin();
                  break;
               case 'route':
                  self.changeToRoutePage();
                  break;
               case 'list':
                  self.changeToListPage();
                  break;
            }
         }
      }
      else {
         self.index(); // иначе показываем страницу route
      }
   }

   this.initPageLogin = function() {
      mainModel.loginModel.start(mainView.loginView);
      mainModel.setModelState({pagename:'login'});
      self.loginController.start(mainModel.loginModel, mainView.loginView.submit);
   }

   this.start = function(model, view) {
      mainModel = model;
      mainView = view;
   }

   this.changeToRoutePage = function() {
      mainModel.routeModel.start(mainView.routeView);
      mainModel.setModelState({pagename:'route'});
      routeController.start(self, mainModel.routeModel, mainView.routeView.enter, mainView.routeView.addList, mainView.routeView.selectStore);
      mainModel.routeModel.setUser(mainModel.loginModel.nowUser);
   }
   this.index = function() {
      mainModel.routeModel.start(mainView.routeView);
      mainModel.setModelState({});//чтобы при первой загрузке стр к index.html не добавлялось название закладки
      routeController.start(self, mainModel.routeModel, mainView.routeView.enter, mainView.routeView.addList, mainView.routeView.selectStore);
      mainModel.routeModel.setUser(mainModel.loginModel.nowUser);
   }

   this.changeToListPage = function() {
      mainModel.listModel.start(mainView.listView);
      mainModel.setModelState({pagename:'list'});
      listController.start(mainModel.listModel, self, mainView.listView.cross, mainView.listView.selectProduct, mainView.listView.selectProductMenu, mainView.listView.trash, mainView.listView.readyButton);
      if (mainModel.loginModel.nowUser.list) {
         mainModel.listModel.setSelectedProducts(mainModel.loginModel.nowUser.list);
      }  
   }

   this.updateList = function() {
      var listNow = mainModel.listModel.getSelectedProducts();
      mainModel.loginModel.nowUser['list'] = listNow;
      self.loginController.updateNowUser();
      mainModel.routeModel.setUser(mainModel.loginModel.nowUser);
      self.changeToRoutePage();
   }



}
