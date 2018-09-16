//network service
function NetworkService() {
   var self = this;
   var url="http://fe.it-academy.by/AjaxStringStorage2.php";
   var stringName='Svetlova';
   var myController = null;

   this.initController = function(controller) {
      myController = controller;
   }

   this.sendLoginInfo = function(loginInfo, successHandler, errorHandler) {
      var updatePassword=Math.random();
      $.ajax({
            url : url, type : 'POST', cache : false, dataType:'json',
            data : { f : 'LOCKGET', n : stringName, p : updatePassword },
            success : function(data) {
               $.ajax( {
                 url : url, type : 'POST', cache : false, dataType:'json',
                 data : { f : 'UPDATE', n : stringName, v : JSON.stringify(loginInfo), p : updatePassword },
                 success : successHandler, error : errorHandler
               });
            },
            error : errorHandler
      });
   }

   this.getAllUsersInfo = function() {
      $.ajax(
        {
            url : url, type : 'POST', cache : false, dataType:'json',
            data : { f : 'READ', n : stringName },
            success : function(info) {
               myController.compareInfo(JSON.parse(info.result));
            }//,
            // error : errorHandler
         });
   }
}
