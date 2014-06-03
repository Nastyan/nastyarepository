/**
 * 
 * @author jskonst
 * @rolesAllowed admin
 */
function test() {
    var self = this, model = this.model, form = this;
    
    // TODO : place your code here
    self.aComponent;
    function componentPanel(){
        
        self.tfLeft.text = self.aComponent.left.toString();
        self.tfTop.text = self.aComponent.top;
//        aComponent.background = 
    }
    

//    form.onWindowOpened = function(){
        
//        self.aComponent = self.textField;
//        Logger.info(self.aComponent.top);
//        Logger.info(self.aComponent.left);
//        componentPanel();
//        
//        var btnTest = new Button("text");
//      self.label3.text = self.principal.name;
//    };

    function button2ActionPerformed(evt) {//GEN-FIRST:event_button2ActionPerformed
        // TODO Добавьте свой код:
         self.aComponent.left =Number(self.tfLeft.text);
        self.aComponent.top = Number(self.tfTop.text);
    }//GEN-LAST:event_button2ActionPerformed

    function formWindowOpened(evt) {//GEN-FIRST:event_formWindowOpened
        // TODO Добавьте свой код:
    }//GEN-LAST:event_formWindowOpened
}
