//Controller
function LoginController() {

   var self = this;
   var myModel = null;
   var networkService = new NetworkService();
   this.start = function(model, submit) {
      myModel = model;
      networkService.initController(self);
      submit.addEventListener('click', self.startClick, false);
   }
   //по клику данные формы валидируются
   this.startClick = function() {
      myModel.getLoginAndPassword();
   }
   this.sendToServer = function(loginInfo) {
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
            myModel.newPossibleUser = null;
            myModel.allUsers = allUsersInfo;
            mainController.changeToRoutePage();

         }, errorHandler);
      } else {
         if (findedUser.pwd == myModel.newPossibleUser.pwd) {
            myModel.newPossibleUser = null;
            mainController.changeToRoutePage();
         } else {
            alert('Вы ввели неверный пароль. Введите правильный пароль или создайте новый аккаунт');
         }
      }
   }

}
