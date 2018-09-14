function CategoryService()  {
   var url="http://fe.it-academy.by/AjaxStringStorage2.php";
   var stringName='SvetlovaGoods';
   var myController = null;
   this.initController = function(controller) {
      myController = controller;
   }

   var sendCategories = function() {
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
            success : function(json) {
               myController.getInfoCategories(JSON.parse(json.result));
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
                     "label": "Молоко"
                  },
                  {
                     "label": "Кефир"
                  },
                  {
                     "label": "Сметана"
                  },
                  {
                     "label": "Яйца"
                  },
                  {
                     "label": "Сыр"
                  },
                  {
                     "label": "Творог"
                  },
                  {
                     "label": "Мороженое"
                  }
               ]
         },
         {
            "name": "Хлебобулочные изделия",
               "goods": [
                  {
                     "label": "Хлеб"
                  },
                  {
                     "label": "Батон"
                  },
                  {
                     "label": "Сушки"
                  }
               ]
         },
         {
            "name": "Бакалея",
               "goods": [
                  {
                     "label": "Масло"
                  },
                  {
                     "label": "Мука"
                  },
                  {
                     "label": "Соль"
                  },
                  {
                     "label": "Сахар"
                  },
                  {
                     "label": "Рис"
                  },
                  {
                     "label": "Гречка"
                  },
                  {
                     "label": "Макароны"
                  },
                  {
                    "label": "Майонез"
                 },
                 {
                    "label": "Кетчуп"
                 }
              ]
      },
      {
         "name": "Овощи, фрукты",
            "goods": [
               {
                  "label": "Картошка"
               },
               {
                  "label": "Томат"
               },
               {
                  "label": "Огурец"
               },
               {
                  "label": "Банан"
               },
               {
                  "label": "Киви"
               },
               {
                  "label": "Тыква"
               },
               {
                  "label": "Яблоко"
               },
               {
                 "label": "Апельсин"
              },
              {
                 "label": "Лук"
              }
           ]
        },
        {
           "name": "Соки, чай, кофе",
             "goods": [
                 {
                    "label": "Сок"
                 },
                 {
                    "label": "Чай"
                 },
                 {
                    "label": "Кофе"
                 },
                 {
                    "label": "Какао"
                 },
                 {
                    "label": "Цикорий"
                 },
                 {
                    "label": "Вода"
                 },
                 {
                    "label": "Квас"
                 },
                 {
                   "label": "Безалкогольное пиво"
                },
                {
                   "label": "Энергетические напитки"
                }
             ]
         },
         {
            "name": "Товары для дома",
               "goods": [
                  {
                     "label": "Стиральный порошок"
                  },
                  {
                     "label": "Зубная паста и щетки"
                  },
                  {
                     "label": "Шампунь"
                  },
                  {
                     "label": "Салфетки"
                  },
                  {
                     "label": "Средства для обуви"
                  },
                  {
                     "label": "Туалетная бумага"
                  },
                  {
                     "label": "Фильтры для воды"
                  },
                  {
                    "label": "Мыло"
                 },
                 {
                    "label": "Мешки для мусора"
                 }
              ]
           },
           {
             "name": "Товары для детей",
                "goods": [
                   {
                      "label": "Игрушки"
                   },
                   {
                      "label": "Подгузники"
                   },
                   {
                      "label": "Детское питание"
                   },
                   {
                      "label": "Соски"
                   }
               ]
            },
            {
               "name": "Алкоголь",
                  "goods": [
                     {
                        "label": "Пиво"
                     },
                     {
                        "label": "Виски"
                     },
                     {
                        "label": "Вино"
                     },
                     {
                        "label": "Мартини"
                     },
                     {
                        "label": "Коньяк"
                     },
                     {
                        "label": "Водка"
                     }
                  ]
            },
            {
               "name": "Консервы",
                  "goods": [
                     {
                        "label": "Горошек"
                     },
                     {
                        "label": "Кукуруза"
                     },
                     {
                        "label": "Тунец"
                     },
                     {
                        "label": "Оливки"
                     },
                     {
                        "label": "Фасоль"
                     },
                     {
                        "label": "Килька"
                     }
                  ]
            },
            {
               "name": "Колбаса и копчености",
                  "goods": [
                     {
                        "label": "Колбаса вареная"
                     },
                     {
                        "label": "Колбаса копченая"
                     },
                     {
                        "label": "Сосиски"
                     },
                     {
                        "label": "Сардельки"
                     },
                     {
                        "label": "Мясо копченое"
                     },
                     {
                        "label": "Рыба копченая"
                     }
                  ]
            },
            {
               "name": "Мясо, птица, рыба",
                  "goods": [
                     {
                        "label": "Свинина"
                     },
                     {
                        "label": "Говядина"
                     },
                     {
                        "label": "Птица"
                     },
                     {
                        "label": "Кролик"
                     },
                     {
                        "label": "Рыба"
                     },
                     {
                        "label": "Баранина"
                     }
                  ]
            }
      ]
   }
   `;

}
