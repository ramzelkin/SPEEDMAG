//Controller
function LoginController() {

   var self = this;
   var myModel = null;
   var networkService = new NetworkService();
   this.start = function(model, submit) {
      myModel = model;
      networkService.initController(self);
      if (submit) {//в случае, когда localStorage содержит инфу о логине- view не создается, но логин должен произойти
         submit.addEventListener('click', startClick, false);
      }
   }
   //по клику данные формы валидируются
   var startClick = function() {
      myModel.getLoginAndPassword();
   }
   this.sendToServer = function(loginInfo) {
      myModel.isPasswordError = false;
      myModel.newPossibleUser = loginInfo;
      networkService.getAllUsersInfo();
      myModel.setLoading(true);
   }

   var errorHandler = function(data) {//если в network произошла ошибка
      if(data.error) {
         alert(data.error);
      }
      myModel.setLoading(false);
   }
   //сравниваем нового юзера с теми, что лежат в модели
   this.compareInfo = function(allUsersInfo) {
      myModel.allUsers = allUsersInfo;
      myModel.setLoading(false);
      var findedUser = null;
      for (let i = 0; i < allUsersInfo.length; i += 1) {
         if (allUsersInfo[i].log == myModel.newPossibleUser.log) {//если такой пользователь уже есть на сервере
            findedUser = allUsersInfo[i];
            break;
         }
      }
      if (!findedUser) {//добавляем, если такого нет
         allUsersInfo.push(myModel.newPossibleUser);
         myModel.setLoading(true);
         networkService.sendLoginInfo(allUsersInfo, function(data) {
            myModel.nowUser = myModel.newPossibleUser;
            myModel.newPossibleUser = null;
            myModel.allUsers = allUsersInfo;
            mainController.changeToRoutePage();
         }, errorHandler);
      } else {
         if (findedUser.pwd == myModel.newPossibleUser.pwd) {//проверяем пароли, если такой логин пользователя уже есть
            myModel.nowUser = findedUser;
            myModel.newPossibleUser = null;
            mainController.changeToRoutePage();
         } else {
            myModel.isPasswordError = true;
            myModel.passwordErrorUser();
         }
      }
   }
   this.updateNowUser = function() {
      var user = myModel.nowUser;
      var allUsers = myModel.allUsers.filter(function(item, index, arr){//чтобы информация о пользователе заменялась, а не добавлялась снова
         return item.log != user.log;
      });
      allUsers.push(user);
      networkService.sendLoginInfo(allUsers, function(data){
         myModel.setLoading(true);
         myModel.allUsers = allUsers;
      }, errorHandler);
   }


}
