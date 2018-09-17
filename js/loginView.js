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
      $('title').text("Вход в личный кабинет");
      $('#main').contents().remove(); //перед отрисовкой очищаем экран от старой view
      $('#main').append('<div id="forPageLogin"></div>');
      $('#forPageLogin').append('<form id="formLoginAndPass">');
      $('#formLoginAndPass').append('<p>Введите логин</p>');
      $('#formLoginAndPass').append('<input type="text" id="loginInput" name="loginInput" value="">');
      $('#formLoginAndPass').append('<p>Введите пароль</p>');
      $('#formLoginAndPass').append('<input type="text"  id="passwordInput" name="passwordInput" value="">');
      $('#formLoginAndPass').append('<input type="submit" id="submitInput">');
      $('#submitInput').button();
      $('#submitInput').button('option','label','войти');
      $('#main').append('<div class="spinner"></div>');
      $('.spinner').hide();
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
         rules: myModel.rules, //берем из модели правила
         messages: myModel.messages, //
         errorClass: 'SErrorText',
         submitHandler: function(form) {
            myController.sendToServer(getInfo());//отправляем содержимое input login password
         }
      });
   }
   //выводим текст, если пользователь перепутал пароль (текст в модели)
   this.showErrorPwd = function() {
      alert(myModel.passwordError);
   }

   //анимация загрузки
   this.updateLoader = function() {
      if (myModel.getLoading()) {
         $('#main').contents().hide();
         $('.spinner').show();
      } else {
         $('#main').contents().show();
         $('.spinner').hide();
      }
   }
}
