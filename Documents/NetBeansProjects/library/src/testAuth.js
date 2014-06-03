/**
 * 
 * @author 
 * @public
 * @rolesAllowed admin test 
 * (user test - 123, admin - masterkey)
 * - определяются группы пользователей, которым можно получить доступ к 
 * данному модулю. Группы и пользователи находятся в MTD_GROUPS и MTD_USERS соотвесвтенно
 */
function testAuth() {
    //пример работы с серверным модулем
    var srv = new ServerModule("testServ"); //загрузка серверного модуля
    var self = this, model = this.model, form = this;

    form.onWindowOpened = function() {
        //при загрузке вызываем метод у серверного модуля
        self.label.text = srv.getName();
    };

    
    function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
        //простой пример работы с распределением прав
//        require("test1", function(){
//            var nWindow = new test();
//            nWindow.show();
//        }, 
//        function(){
//            alert("Нет доступа");
//        }
//        );
        try {
            //доступ к другому модулю имеют только пользователи группы admin
            //если у пользователя нет прав, то произойдет исключение
            var nWindow = new test();
            nWindow.show();
        } catch (ex) {
            //вот здесь нужно пользователю показать, что у него нет прав на выполнение
//            Logger.info(ex);
//            Logger.info("not auth");
            alert("Нет доступа");
        }
    }//GEN-LAST:event_buttonActionPerformed

    function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
        try {
        self.label.text = srv.getRolesTest();
    }catch(ex){
            Logger.info(ex);
            Logger.info("Serv not auth");
    }
    }//GEN-LAST:event_button1ActionPerformed

    function button2ActionPerformed(evt) {//GEN-FIRST:event_button2ActionPerformed
        logout();
    }//GEN-LAST:event_button2ActionPerformed
}