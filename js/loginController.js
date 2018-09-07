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
   var successHandler = function(data){
      if(data.result) {
         console.log('мы залогинились');
      }
   }
   var errorHandler = function(data) {
      if(data.error) {
         console.log(data.error);
      }
   }

   this.compareInfo = function(allUsersInfo) {
      myModel.allUsers = allUsersInfo;
      var finded = false;
      for (let i = 0; i < allUsersInfo.length; i += 1) {
         if (allUsersInfo[i].log == myModel.newPossibleUser.log) {
            finded = true;
            break;
         }
      }
      if (!finded) {
         myModel.allUsers.push(myModel.newPossibleUser);
         networkService.sendLoginInfo(myModel.allUsers, successHandler, errorHandler);
      }
   }
}
