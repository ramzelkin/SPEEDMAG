//network service
function NetworkService() {
   var self = this;
   var url="http://fe.it-academy.by/AjaxStringStorage2.php";
   var stringName='Svetlova';

   this.sendInfo = function(localStorage, successHandler, errorHandler) {
      var updatePassword=Math.random();
      $.ajax({
            url : url, type : 'POST', cache : false, dataType:'json',
            data : { f : 'LOCKGET', n : stringName, p : updatePassword },
            success : function(data) {
               $.ajax( {
                 url : url, type : 'POST', cache : false, dataType:'json',
                 data : { f : 'UPDATE', n : stringName, v : JSON.stringify(localStorage), p : updatePassword },
                 success : successHandler, error : errorHandler
               });
            },
            error : errorHandler
      });
   }



   this.getInfo = function(localStorage, successHandler, errorHandler) {
      $.ajax(
        {
            url : url, type : 'POST', cache : false, dataType:'json',
            data : { f : 'READ', n : stringName },
            success : successHandler, error : errorHandler
         });
   }
}
