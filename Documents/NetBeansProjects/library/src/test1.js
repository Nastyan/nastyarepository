/**
 * 
 * @author jskonst
 */
function test1() {
    var self = this, model = this.model, form = this;
    
    // TODO : place your code here
    self.aComponent = self.button;
    function button2ActionPerformed(evt) {//GEN-FIRST:event_button2ActionPerformed
        // TODO Добавьте свой код:
         self.aComponent.left =Number(self.tfLeft.text);
        self.aComponent.top = Number(self.tfTop.text);
    }//GEN-LAST:event_button2ActionPerformed
}
