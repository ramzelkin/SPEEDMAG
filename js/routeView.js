//view
function RouteView() {
   var myModel = null;
   this.enter;
   var self = this;
   this.addlist;
   this.selectStore;
   this.logoutButton;


   this.start = function(model) {
         myModel = model;
         draw();
         self.enter = $('#user')[0];
         self.addList = $('#addList')[0];
         this.selectStore = $('#checkStore');
         this.logoutButton = $('#logout')[0];
   }

   var draw = function() {
      $('title').text('Быстрые покупки вместе с магазином SpeedMag');
      $('#main').contents().remove();//перед отрисовкой очищаем экран от старой view
      $('#main').append('<div id="forPageRoute"></div>');
      $('#forPageRoute').append('<div id="forLoginAndLogout"></div>');
      $('#forLoginAndLogout').append('<input type="button" id="user">');
      $('#user').button();
      $('#user').button('option','label','войти');
      $('#forLoginAndLogout').append('<a id="logout" href>выйти</a>');
      $('#forPageRoute').append('<input type="button" id="addList">');
      $('#addList').button();
      $('#addList').button('option','label','создать список');
      $('#forPageRoute').append('<select id="checkStore">');
      $('#checkStore').append('<option>выбрать магазин</option>');
      $('#checkStore').append('<option>ул. Калиновского</option>');
      $('#checkStore').append('<option>ул. Восточная</option>');
      $('#checkStore').selectmenu();
      $('#checkStore').selectmenu({ position:{my:'left top',at:'left bottom',collision:'none'} });
      $('#forPageRoute').append('<div id="listAndMap"></div>');
      $('#listAndMap').append('<table id="list"></table>');
      $('#listAndMap').append('<div id="map"><p id="text_map">Карта магазина пуста. Выберите магазин, чтобы отобразить карту</p></div>');
   }
   //вход пользователя
   this.updateUser = function() {
      var user = myModel.getUser();
      if (user) {
         $('#user').button('option','label',user.log);
         $('#user').button('disable');
         $('#logout').button();
         $('#logout').show();
      } else {
         $('#user').button('option','label','войти');
         $('#user').button('enable');
         $('#logout').hide();
      }
      $('#list').contents().remove();
      if (user && user.list && user.list.length > 0) {
         for (var i = 0; i < user.list.length; i += 1) {
            $('#list').append('<tr><td id="'+user.list[i].id+'">'+ user.list[i].label +'</td></tr>');
         }
      }
      else {
         $('#list').append('<p id="text_list">Список покупок пуст</p>');
      }
   }
   //рисуем схемы магазинов
   this.updateMapStore = function() {
      $('#map').contents().remove();
      switch (myModel.getStore()) {
         case 0:
            $('#map').append('<p id="text_map">Карта магазина пуста. Выберите магазин, чтобы отобразить карту</p>');
            break;
         case 1:
            $('#map').append('<div class="divStore1 enterStore1">вход</div>');
            $('#map').append('<div class="divStore1 cashbox1Store1">касса 1</div>');
            $('#map').append('<div class="divStore1 cashbox2Store1">касса 2</div>');
            $('#map').append('<div class="divStore1 milkStore1" id="0">молочные продукты</div>');
            $('#map').append('<div class="divStore1 sausageStore1" id="9">Колбаса и копчености</div>');
            $('#map').append('<div class="divStore1 cannedStore1" id="8">Консервы</div>');
            $('#map').append('<div class="divStore1 meatStore1" id="10">Мясо, птица, рыба</div>');
            $('#map').append('<div class="divStore1 breadStore1" id="1">Хлебобулочные изделия</div>');
            $('#map').append('<div class="divStore1 bakalStore1" id="2">Бакалея</div>');
            $('#map').append('<div class="divStore1 fruitStore1" id="11">Фрукты</div>');
            $('#map').append('<div class="divStore1 vegetablesStore1" id="3">Овощи</div>');
            $('#map').append('<div class="divStore1 drinksStore1" id="4">Соки, чай, кофе</div>');
            $('#map').append('<div class="divStore1 childrenStore1" id="6">Детские товары</div>');
            $('#map').append('<div class="divStore1 forHomeStore1" id="5">Товары для дома</div>');
            $('#map').append('<div class="divStore1 alcoStore1" id="7">Алкоголь</div>');
            $('#map').append('<div class="divStore1 exitStore1">выход</div>');

            break;
         case 2:
         $('#map').append('<div class="divStore1 enterStore2" class="divStore1">вход</div>');
         $('#map').append('<div class="divStore1 cashbox1Store2">касса 1</div>');
         $('#map').append('<div class="divStore1 cashbox2Store2">касса 2</div>');
         $('#map').append('<div class="divStore1 milkStore2" id="0">молочные продукты</div>');
         $('#map').append('<div class="divStore1 sausageStore2" id="9">Колбаса и копчености</div>');
         $('#map').append('<div class="divStore1 cannedStore2" id="8">Консервы</div>');
         $('#map').append('<div class="divStore1 meatStore2" id="10">Мясо, птица, рыба</div>');
         $('#map').append('<div class="divStore1 breadStore2" id="1">Хлебобулочные изделия</div>');
         $('#map').append('<div class="divStore1 bakalStore2" id="2">Бакалея</div>');
         $('#map').append('<div class="divStore1 fruitStore2" id="11">Фрукты</div>');
         $('#map').append('<div class="divStore1 vegetablesStore2" id="3">Овощи</div>');
         $('#map').append('<div class="divStore1 drinksStore2" id="4">Соки, чай, кофе</div>');
         $('#map').append('<div class="divStore1 childrenStore2" id="6">Детские товары</div>');
         $('#map').append('<div class="divStore1 forHomeStore2" id="5">Товары для дома</div>');
         $('#map').append('<div class="divStore1 alcoStore2" id="7">Алкоголь</div>');
         $('#map').append('<div class="divStore1 exitStore2">выход</div>');
            break;
      }
   }

   this.updateSelectedCategories = function() {
      var categories = myModel.getSelectedCategories();
      console.log(categories);
   }

}
