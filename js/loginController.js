//Controller
function LoginController() {

   var self = this;
   var myModel = null;
   var networkService = new NetworkService();
   this.start = function(model, submit) {
      myModel = model;
      networkService.initController(self);
      if (submit) {
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
   }

   var errorHandler = function(data) {
      if(data.error) {
         console.log(data.error);
      }
   }
   //сравниваем нового юзера с теми, что лежат в Модели
   this.compareInfo = function(allUsersInfo) {
      myModel.allUsers = allUsersInfo;
      var findedUser = null;
      for (let i = 0; i < allUsersInfo.length; i += 1) {
         if (allUsersInfo[i].log == myModel.newPossibleUser.log) {
            findedUser = allUsersInfo[i];
            break;
         }
      }
      if (!findedUser) {//добавляем, если такого нет
         allUsersInfo.push(myModel.newPossibleUser);
         networkService.sendLoginInfo(allUsersInfo, function(data) {
            myModel.nowUser = myModel.newPossibleUser;
            myModel.newPossibleUser = null;
            myModel.allUsers = allUsersInfo;
            mainController.changeToRoutePage();
         }, errorHandler);
      } else {
         if (findedUser.pwd == myModel.newPossibleUser.pwd) {
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
      var allUsers = myModel.allUsers.filter(function(item, index, arr){
         return item.log != user.log;
      });
      allUsers.push(user);
      networkService.sendLoginInfo(allUsers, function(data){
         myModel.allUsers = allUsers;
      }, errorHandler);
   }


}
