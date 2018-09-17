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
      var stringUser = localStorage.getItem('user');
      if (stringUser != "undefined" && stringUser != null) {
         var user = JSON.parse(stringUser);
         self.loginController.start(mainModel.loginModel);
         self.loginController.sendToServer(user);
         listController.start(mainModel.listModel, self);
      }
   }

   this.changeToRoutePage = function() {
      mainModel.routeModel.start(mainView.routeView);
      mainModel.setModelState({pagename:'route'});
      routeController.start(self, mainModel.routeModel, mainView.routeView.enter, mainView.routeView.addList, mainView.routeView.selectStore, mainView.routeView.logoutButton, mainView.routeView.readyProduct, mainView.routeView.clearListButton, mainView.routeView.highlightDiv);
      mainModel.routeModel.setUser(mainModel.loginModel.nowUser);
      self.updateSelectedCategories();
      // if (mainModel.loginModel.nowUser) {
      //    mainModel.listModel.setSelectedProducts(mainModel.loginModel.nowUser.list);
      //    self.updateSelectedCategories();
      //
      // }
   }
   this.index = function() {
      mainModel.routeModel.start(mainView.routeView);
      mainModel.setModelState({});//чтобы при первой загрузке стр к index.html не добавлялось название закладки
      routeController.start(self, mainModel.routeModel, mainView.routeView.enter, mainView.routeView.addList, mainView.routeView.selectStore, mainView.routeView.logoutButton, mainView.routeView.readyProduct, mainView.routeView.clearListButton, mainView.routeView.highlightDiv);
      mainModel.routeModel.setUser(mainModel.loginModel.nowUser);
   }

   this.changeToListPage = function() {
      if (mainModel.loginModel.nowUser) {
         mainModel.listModel.start(mainView.listView);
         mainModel.setModelState({pagename:'list'});
         listController.start(mainModel.listModel, self, mainView.listView.cross, mainView.listView.selectProduct, mainView.listView.selectProductMenu, mainView.listView.trash, mainView.listView.readyButton);
         if (mainModel.loginModel.nowUser.list) {
            mainModel.listModel.setSelectedProducts(mainModel.loginModel.nowUser.list);
         }
      } else {
         self.initPageLogin();
      }
   }

   this.updateList = function() {
      var listNow = mainModel.listModel.getSelectedProducts();
      mainModel.loginModel.nowUser['list'] = listNow;
      self.loginController.updateNowUser();
      mainModel.routeModel.setUser(mainModel.loginModel.nowUser);
      self.updateSelectedCategories();
      self.changeToRoutePage();
   }
   this.logOut = function() {
      mainModel.loginModel.nowUser = null;
      localStorage.clear();
   }
   this.updateSelectedCategories = function() {
      if (mainModel.loginModel.nowUser) {
         var listNow = mainModel.loginModel.nowUser.list;
         var allCategoriesProduct = mainModel.listModel.getCategoriesAndProduct();
         if (listNow && allCategoriesProduct) {
            var selectedCategories = [];
            for (var i = 0; i < allCategoriesProduct.length; i += 1) {
               var products = allCategoriesProduct[i].goods.filter(function(item, index, arr){
                  for (var j = 0; j < listNow.length; j += 1) {
                     if ((listNow[j].id == item.id) && (!listNow[j].unneeded)) {
                        return true;
                     }
                  }
                  return false;
               });

               if (products.length > 0) {
                  var category = allCategoriesProduct[i];
                  category.goods = products;
                  selectedCategories.push(category);
               }
            }

            var highligh = mainModel.routeModel.getHighlightedCategory();
            if (highligh) {
               routeController.updateHighlight(highligh.id);
            }
            mainModel.routeModel.setSelectedCategories(selectedCategories);
         }
      }
   }
   this.updateUnneededProducts = function() {
      var user = mainModel.routeModel.getUser();
      mainModel.listModel.setSelectedProducts(user.list);
      mainModel.loginModel.nowUser = user;
      self.loginController.updateNowUser();
      self.updateSelectedCategories();
   }

}
