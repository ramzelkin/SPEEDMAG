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
            "id": 0,
               "goods": [
                  {
                     "label": "Молоко",
                     "id": 0
                  },
                  {
                     "label": "Кефир",
                     "id": 1
                  },
                  {
                     "label": "Сметана",
                     "id": 2
                  },
                  {
                     "label": "Яйца",
                     "id": 3
                  },
                  {
                     "label": "Сыр",
                     "id": 4
                  },
                  {
                     "label": "Творог",
                     "id": 5
                  },
                  {
                     "label": "Мороженое",
                     "id": 6
                  }
               ]
         },
         {
            "name": "Хлебобулочные изделия",
            "id": 1,
               "goods": [
                  {
                     "label": "Хлеб",
                     "id": 7
                  },
                  {
                     "label": "Батон",
                     "id": 157
                  },
                  {
                     "label": "Сушки",
                     "id": 9
                  }
               ]
         },
         {
            "name": "Бакалея",
            "id": 2,
               "goods": [
                  {
                     "label": "Масло",
                     "id": 10
                  },
                  {
                     "label": "Мука",
                     "id": 11
                  },
                  {
                     "label": "Соль",
                     "id": 12
                  },
                  {
                     "label": "Сахар",
                     "id": 13
                  },
                  {
                     "label": "Рис",
                     "id": 14
                  },
                  {
                     "label": "Гречка",
                     "id": 15
                  },
                  {
                     "label": "Макароны",
                     "id": 16
                  },
                  {
                    "label": "Майонез",
                    "id": 17
                 },
                 {
                    "label": "Кетчуп",
                    "id": 18
                 }
              ]
      },
      {
         "name": "Овощи",
         "id": 3,
            "goods": [
               {
                  "label": "Картошка",
                  "id": 19
               },
               {
                  "label": "Томат",
                  "id": 20
               },
               {
                  "label": "Огурец",
                  "id": 21
               },
               {
                  "label": "Кабачок",
                  "id": 22
               },
               {
                  "label": "Баклажан",
                  "id": 23
               },
               {
                  "label": "Тыква",
                  "id": 24
               },
               {
                  "label": "Морковь",
                  "id": 25
               },
               {
                 "label": "Чеснок",
                 "id": 26
              },
              {
                 "label": "Лук",
                 "id": 27
              }
           ]
        },
        {
           "name": "Соки, чай, кофе",
           "id": 4,
             "goods": [
                 {
                    "label": "Сок",
                    "id": 28
                 },
                 {
                    "label": "Чай",
                    "id": 29
                 },
                 {
                    "label": "Кофе",
                    "id": 30
                 },
                 {
                    "label": "Какао",
                    "id": 31
                 },
                 {
                    "label": "Цикорий",
                    "id": 32
                 },
                 {
                    "label": "Вода",
                    "id": 33
                 },
                 {
                    "label": "Квас",
                    "id": 34
                 },
                 {
                   "label": "Безалкогольное пиво",
                   "id": 35
                },
                {
                   "label": "Энергетические напитки",
                   "id": 36
                }
             ]
         },
         {
            "name": "Товары для дома",
            "id": 5,
               "goods": [
                  {
                     "label": "Стиральный порошок",
                     "id": 37
                  },
                  {
                     "label": "Зубная паста и щетки",
                     "id": 38
                  },
                  {
                     "label": "Шампунь",
                     "id": 39
                  },
                  {
                     "label": "Салфетки",
                     "id": 40
                  },
                  {
                     "label": "Средства для обуви",
                     "id": 41
                  },
                  {
                     "label": "Туалетная бумага",
                     "id": 42
                  },
                  {
                     "label": "Фильтры для воды",
                     "id": 43
                  },
                  {
                    "label": "Мыло",
                    "id": 44
                 },
                 {
                    "label": "Мешки для мусора",
                    "id": 45
                 }
              ]
           },
           {
             "name": "Товары для детей",
             "id": 6,
                "goods": [
                   {
                      "label": "Игрушки",
                      "id": 46
                   },
                   {
                      "label": "Подгузники",
                      "id": 47
                   },
                   {
                      "label": "Детское питание",
                      "id": 48
                   },
                   {
                      "label": "Соски",
                      "id": 49
                   }
               ]
            },
            {
               "name": "Алкоголь",
               "id": 7,
                  "goods": [
                     {
                        "label": "Пиво",
                        "id": 50
                     },
                     {
                        "label": "Виски",
                        "id": 51
                     },
                     {
                        "label": "Вино",
                        "id": 52
                     },
                     {
                        "label": "Мартини",
                        "id": 53
                     },
                     {
                        "label": "Коньяк",
                        "id": 54
                     },
                     {
                        "label": "Водка",
                        "id": 55
                     }
                  ]
            },
            {
               "name": "Консервы",
               "id": 8,
                  "goods": [
                     {
                        "label": "Горошек",
                        "id": 56
                     },
                     {
                        "label": "Кукуруза",
                        "id": 57
                     },
                     {
                        "label": "Тунец",
                        "id": 58
                     },
                     {
                        "label": "Оливки",
                        "id": 59
                     },
                     {
                        "label": "Фасоль",
                        "id": 60
                     },
                     {
                        "label": "Килька",
                        "id": 61
                     }
                  ]
            },
            {
               "name": "Колбаса и копчености",
               "id": 9,
                  "goods": [
                     {
                        "label": "Колбаса вареная",
                        "id": 62
                     },
                     {
                        "label": "Колбаса копченая",
                        "id": 63
                     },
                     {
                        "label": "Сосиски",
                        "id": 64
                     },
                     {
                        "label": "Сардельки",
                        "id": 65
                     },
                     {
                        "label": "Мясо копченое",
                        "id": 66
                     },
                     {
                        "label": "Рыба копченая",
                        "id": 67
                     }
                  ]
            },
            {
               "name": "Мясо, птица, рыба",
               "id": 10,
                  "goods": [
                     {
                        "label": "Свинина",
                        "id": 68
                     },
                     {
                        "label": "Говядина",
                        "id": 69
                     },
                     {
                        "label": "Птица",
                        "id": 70
                     },
                     {
                        "label": "Кролик",
                        "id": 71
                     },
                     {
                        "label": "Рыба",
                        "id": 72
                     },
                     {
                        "label": "Баранина",
                        "id": 73
                     }
                  ]
            },
            {
               "name": "Фрукты",
               "id": 11,
                  "goods": [
                     {
                        "label": "Яблоко",
                        "id": 74
                     },
                     {
                        "label": "Киви",
                        "id": 75
                     },
                     {
                        "label": "Апельсин",
                        "id": 76
                     },
                     {
                        "label": "Груша",
                        "id": 77
                     },
                     {
                        "label": "Персик",
                        "id": 78
                     },
                     {
                        "label": "Мандарин",
                        "id": 79
                     }
                  ]
            }
      ]
   }
   `;

}
