/**
 * 
 * @author nastyalobanova
 * @name Accounts
 */

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	// TODO Добавьте свой код:
        accounting.insert();
}//GEN-LAST:event_buttonActionPerformed

function button2ActionPerformed(evt) {//GEN-FIRST:event_button2ActionPerformed
	// TODO Добавьте свой код:
        model.save();
}//GEN-LAST:event_button2ActionPerformed

function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
	// TODO Добавьте свой код:
        if (confirm("Удалить?")) {
            accounting.deleteRow();
        }
}//GEN-LAST:event_button1ActionPerformed
