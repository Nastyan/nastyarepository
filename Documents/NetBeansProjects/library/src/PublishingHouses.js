/**
 *  
 * @author nastyalobanova
 * @name PublishingHouses
 */

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	// TODO Добавьте свой код:
        publishingHouse.insert();
}//GEN-LAST:event_buttonActionPerformed

function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
	// TODO Добавьте свой код:
        if (confirm("Удалить?")) {
            publishingHouse.deleteRow();
        }
}//GEN-LAST:event_button1ActionPerformed

function button2ActionPerformed(evt) {//GEN-FIRST:event_button2ActionPerformed
	// TODO Добавьте свой код:
        model.save();
}//GEN-LAST:event_button2ActionPerformed
