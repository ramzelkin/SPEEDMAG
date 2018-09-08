//VIEW
function LoginView() {

   var self = this;
   var myModel = null;
   var myController = null;
   this.submit;


   this.start = function(model, controller) {
      myModel = model;
      myController = controller;
      drawInput();
      self.submit = $('#submitInput')[0];
   }
   //отрисовка формы валидации
   function drawInput() {
      $('#main').contents().remove(); //перед отрисовкой очищаем экран от старой view
      $('#main').append('<form id="formLoginAndPass">');
      $('#formLoginAndPass').append('<p>Введите логин</p>');
      $('#formLoginAndPass').append('<input type="text" id="loginInput" name="loginInput" value="">');
      $('#formLoginAndPass').append('<p>Введите пароль</p>');
      $('#formLoginAndPass').append('<input type="text"  id="passwordInput" name="passwordInput" value="">');
      $('#formLoginAndPass').append('<input type="submit" id="submitInput">');
      $('#submitInput').button();
      $('#submitInput').button('option','label','войти');

   }
   //забираем введенные пользователем данные
   var getInfo = function(){
      var info = {
         log: $('#loginInput').val(),
         pwd: $('#passwordInput').val()
      };
      return info;
   }

   this.validateView = function() {
      $('#formLoginAndPass').validate({
         rules: myModel.rules,
         messages: myModel.messages,
         errorClass: 'SErrorText',
         submitHandler: function(form) {
            myController.sendToServer(getInfo());
         }
      });
   }
}
