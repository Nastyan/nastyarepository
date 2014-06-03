/**
 * 
 * @author nastyalobanova
 * @name gEditUser
 */
var self=this;
function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	// TODO Добавьте свой код:
        self.model.save();
        
}//GEN-LAST:event_buttonActionPerformed

function formWindowOpened(evt) {
    self.qConcreteUser.requery();
}

function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
	// TODO Добавьте свой код:
        self.clone("from edit user");
}//GEN-LAST:event_button1ActionPerformed
