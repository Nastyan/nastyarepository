/**
 * 
 * @author nastyalobanova
 * @name TypeOfBooks
 */

function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
	// TODO Добавьте свой код:
        if (confirm("Удалить?")) {
            typeOfBook.deleteRow();
        }
}//GEN-LAST:event_button1ActionPerformed

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	// TODO Добавьте свой код:
        typeOfBook.insert();
}//GEN-LAST:event_buttonActionPerformed

function button2ActionPerformed(evt) {//GEN-FIRST:event_button2ActionPerformed
	// TODO Добавьте свой код:
        model.save();
}//GEN-LAST:event_button2ActionPerformed
