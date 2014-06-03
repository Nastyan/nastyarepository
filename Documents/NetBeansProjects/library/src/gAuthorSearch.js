/**
 * 
 * @author nastyalobanova
 * @name gAuthorSearch
 */

var self = this


function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	// TODO Добавьте свой код:
        self.lastname = "%" + textField.text+"%"
        self.gAuthorsSearch.requery();
}//GEN-LAST:event_buttonActionPerformed

function formWindowOpened(evt) {//GEN-FIRST:event_formWindowOpened
	// TODO Добавьте свой код:
        lastname = "%%";
        self.gAuthorsSearch.requery();
}//GEN-LAST:event_formWindowOpened
