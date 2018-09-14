//view
function RouteView() {
   var myModel = null;
   this.enter;
   var self = this;
   this.addlist;
   this.selectStore;

   this.start = function(model) {
         myModel = model;
         draw();
         self.enter = $('#user')[0];
         self.addList = $('#addList')[0];
         this.selectStore = $('#checkStore');
   }

   var draw = function() {
      $('title').text('Быстрые покупки вместе с магазином SpeedMag');
      $('#main').contents().remove();//перед отрисовкой очищаем экран от старой view
      $('#main').append('<div id="forPageRoute"></div>');
      $('#forPageRoute').append('<input type="button" id="user">');
      $('#user').button();
      $('#user').button('option','label','войти');
      $('#forPageRoute').append('<div class="empty"></div>');
      $('#forPageRoute').append('<input type="button" id="addList">');
      $('#addList').button();
      $('#addList').button('option','label','создать список');
      $('#forPageRoute').append('<select id="checkStore">');
      $('#checkStore').append('<option>выбрать магазин</option>');
      $('#checkStore').append('<option>магазин №1</option>');
      $('#checkStore').append('<option>магазин №2</option>');
      $('#checkStore').selectmenu();
      $('#checkStore').selectmenu({ position:{my:'left top',at:'left bottom',collision:'none'} });
      $('#forPageRoute').append('<div id="listAndMap"></div>');
      $('#listAndMap').append('<div id="list"><p id="text_list">Список покупок пуст</p></div>');
      $('#listAndMap').append('<div id="map"><p id="text_map">Карта магазина пуста. Выберите магазин, чтобы отобразить карту</p></div>');
   }
   this.updateUser = function() {
      var user = myModel.getUser();
      if (user) {
         $('#user').button('option','label',user.log);
         $('#user').button('disable');
      } else {
         $('#user').button('option','label','войти');
         $('#user').button('enable');
      }
   }

   this.updateMapStore = function() {
      $('#map').contents().remove();
      switch (myModel.getStore()) {
         case 0:
            $('#map').append('<p id="text_map">Карта магазина пуста. Выберите магазин, чтобы отобразить карту</p>');
            break;
         case 1:
            $('#map').append('<div id="enterStore1" class="divStore1">вход</div>');
            $('#map').append('<div id="cashbox1Store1" class="divStore1">касса 1</div>');
            $('#map').append('<div id="cashbox2Store1" class="divStore1">касса 2</div>');
            $('#map').append('<div id="milkStore1" class="divStore1">молочные продукты</div>');
            $('#map').append('<div id="sausageStore1" class="divStore1">Колбаса и копчености</div>');
            $('#map').append('<div id="cannedStore1" class="divStore1">Консервы</div>');
            $('#map').append('<div id="meatStore1" class="divStore1">Мясо, птица, рыба</div>');
            $('#map').append('<div id="breadStore1" class="divStore1">Хлебобулочные изделия</div>');
            $('#map').append('<div id="bakalStore1" class="divStore1">Бакалея</div>');
            $('#map').append('<div id="fruitStore1" class="divStore1">Фрукты</div>');
            $('#map').append('<div id="vegetablesStore1" class="divStore1">Овощи</div>');
            $('#map').append('<div id="drinksStore1" class="divStore1">Соки, чай, кофе</div>');
            $('#map').append('<div id="childrenStore1" class="divStore1">Детские товары</div>');
            $('#map').append('<div id="forHomeStore1" class="divStore1">Товары для дома</div>');
            $('#map').append('<div id="alcoStore1" class="divStore1">Алкоголь</div>');
            $('#map').append('<div id="exitStore1" class="divStore1">выход</div>');

            break;
         case 2:
         $('#map').append('<div id="enterStore2" class="divStore1">вход</div>');
         $('#map').append('<div id="cashbox1Store2" class="divStore1">касса 1</div>');
         $('#map').append('<div id="cashbox2Store2" class="divStore1">касса 2</div>');
         $('#map').append('<div id="milkStore2" class="divStore1">молочные продукты</div>');
         $('#map').append('<div id="sausageStore2" class="divStore1">Колбаса и копчености</div>');
         $('#map').append('<div id="cannedStore2" class="divStore1">Консервы</div>');
         $('#map').append('<div id="meatStore2" class="divStore1">Мясо, птица, рыба</div>');
         $('#map').append('<div id="breadStore2" class="divStore1">Хлебобулочные изделия</div>');
         $('#map').append('<div id="bakalStore2" class="divStore1">Бакалея</div>');
         $('#map').append('<div id="fruitStore2" class="divStore1">Фрукты</div>');
         $('#map').append('<div id="vegetablesStore2" class="divStore1">Овощи</div>');
         $('#map').append('<div id="drinksStore2" class="divStore1">Соки, чай, кофе</div>');
         $('#map').append('<div id="childrenStore2" class="divStore1">Детские товары</div>');
         $('#map').append('<div id="forHomeStore2" class="divStore1">Товары для дома</div>');
         $('#map').append('<div id="alcoStore2" class="divStore1">Алкоголь</div>');
         $('#map').append('<div id="exitStore2" class="divStore1">выход</div>');
            break;
      }
   }

}
