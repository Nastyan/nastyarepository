/**
 * 
 * @author nastyalobanova
 * @name ReaderView
 */

function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
	if (confirm("Удалить?")) {
        qReader.deleteRow();
    }
}//GEN-LAST:event_button1ActionPerformed

function saveActionPerformed(evt) {//GEN-FIRST:event_saveActionPerformed
	// TODO Добавьте свой код:
        model.save();
}//GEN-LAST:event_saveActionPerformed

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	// TODO Добавьте свой код:
        qReader.insert();
}//GEN-LAST:event_buttonActionPerformed

function refresh() {
    model.requery();
}

/**
 * Grid click event handler.
 * @param evt Event object
 */
function grdOwnersMouseClicked(evt) {
    if (evt.clickCount > 1) {
        editOwner();
    }
}
function editOwner() {
    var readerView = new ReaderView();
    readerView.readerID = readerQuery.Reader_ID;
    readerView.showModal(refresh);
}