/**
 * 
 * @author nastyalobanova
 * @name gSearch
 */
var self = this
function formWindowOpened(evt) {//GEN-FIRST:event_formWindowOpened
	// TODO Добавьте свой код:
        Logger.info("here");
        self.lastname = "%%"
        self.gUserSearch.requery();
}//GEN-LAST:event_formWindowOpened

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	// TODO Добавьте свой код:
        self.lastname = "%" + textField.text+"%"
        self.gUserSearch.requery();
}//GEN-LAST:event_buttonActionPerformed

function textFieldActionPerformed(evt) {//GEN-FIRST:event_textFieldActionPerformed
	// TODO Добавьте свой код:
}//GEN-LAST:event_textFieldActionPerformed
