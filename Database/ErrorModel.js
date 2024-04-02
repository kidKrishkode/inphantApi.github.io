const ErrorModel = {
    htmlData: `
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="errorModelLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick="closeTestError();">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" id="errorModelBody"></div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal"onclick="closeTestError();">Close</button>
                <button type="button" class="btn btn-primary"onclick="closeTestError();testPageRoute('${window.location['href']}');">Security Check</button>
            </div>
        </div>
    </div>`,
}