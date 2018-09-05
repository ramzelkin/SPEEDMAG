//Controller
function LoginController() {

   var self = this;
   var myModel = null;
   var networkService = new NetworkService();

   this.start = function(model, submit) {
      myModel = model;
      submit.addEventListener('click', self.startClick, false);
   }
   //по клику данные формы валидируются
   this.startClick = function() {
      myModel.getLoginAndPassword();
   }
   this.sendToServer = function(info) {
      networkService.sendInfo(info, successHandler, errorHandler);

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
}
