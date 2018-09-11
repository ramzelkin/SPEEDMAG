function CategoryService()  {
   var url="http://fe.it-academy.by/AjaxStringStorage2.php";
   var stringName='SvetlovaGoods';
   var myController = null;
   this.initController = function(controller) {
      myController = controller;
   }

   this.sendCategories = function() {
      var updatePassword=Math.random();
      $.ajax({
            url : url, type : 'POST', cache : false, dataType:'json',
            data : { f : 'LOCKGET', n : stringName, p : updatePassword },
            success : function(data) {
               $.ajax( {
                 url : url, type : 'POST', cache : false, dataType:'json',
                 data : { f : 'UPDATE', n : stringName, v : json, p : updatePassword }

               });
            }

      });
   }

   this.getCategories = function() {
      $.ajax(
        {
            url : url, type : 'POST', cache : false, dataType:'json',
            data : { f : 'READ', n : stringName },
            success : function(info) {
               myController.compareInfo(JSON.parse(info.result));
            }
         });
   }

   var json=`
   {
      "categories": [
         {
            "name": "Молочные продукты, яйца",
               "goods": [
                  {
                     "name": "Молоко"
                  },
                  {
                     "name": "Кефир"
                  },
                  {
                     "name": "Сметана"
                  },
                  {
                     "name": "Яйца"
                  },
                  {
                     "name": "Сыр"
                  },
                  {
                     "name": "Творог"
                  },
                  {
                     "name": "Мороженое"
                  }
               ]
         },
         {
            "name": "Хлебобулочные изделия",
               "goods": [
                  {
                     "name": "Хлеб"
                  },
                  {
                     "name": "Батон"
                  },
                  {
                     "name": "Сушки"
                  }
               ]
         },
         {
            "name": "Бакалея",
               "goods": [
                  {
                     "name": "Масло"
                  },
                  {
                     "name": "Мука"
                  },
                  {
                     "name": "Соль"
                  },
                  {
                     "name": "Сахар"
                  },
                  {
                     "name": "Рис"
                  },
                  {
                     "name": "Гречка"
                  },
                  {
                     "name": "Макароны"
                  },
                  {
                    "name": "Майонез"
                 },
                 {
                    "name": "Кетчуп"
                 }
              ]
      },
      {
         "name": "Овощи, фрукты",
            "goods": [
               {
                  "name": "Картошка"
               },
               {
                  "name": "Томат"
               },
               {
                  "name": "Огурец"
               },
               {
                  "name": "Банан"
               },
               {
                  "name": "Киви"
               },
               {
                  "name": "Тыква"
               },
               {
                  "name": "Яблоко"
               },
               {
                 "name": "Апельсин"
              },
              {
                 "name": "Лук"
              }
           ]
        },
        {
           "name": "Соки, чай, кофе",
             "goods": [
                 {
                    "name": "Сок"
                 },
                 {
                    "name": "Чай"
                 },
                 {
                    "name": "Кофе"
                 },
                 {
                    "name": "Какао"
                 },
                 {
                    "name": "Цикорий"
                 },
                 {
                    "name": "Вода"
                 },
                 {
                    "name": "Квас"
                 },
                 {
                   "name": "Безалкогольное пиво"
                },
                {
                   "name": "Энергетические напитки"
                }
             ]
         },
         {
            "name": "Товары для дома",
               "goods": [
                  {
                     "name": "Стиральный порошок"
                  },
                  {
                     "name": "Зубная паста и щетки"
                  },
                  {
                     "name": "Шампунь"
                  },
                  {
                     "name": "Салфетки"
                  },
                  {
                     "name": "Средства для обуви"
                  },
                  {
                     "name": "Туалетная бумага"
                  },
                  {
                     "name": "Фильтры для воды"
                  },
                  {
                    "name": "Мыло"
                 },
                 {
                    "name": "Мешки для мусора"
                 }
              ]
           },
           {
             "name": "Игрушки для детей",
                "goods": [
                   {
                      "name": "Игрушки"
                   }
               ]
            }
      ]
   }
   `;

}
