const LinkBox = {
    htmlData: `
    <div class="link-area card">
        <div class="card-header">Inphant Api</div>
        <div class="card-body">
            <h5 class="card-title"><i class="fa fa-bookmark-o"></i> PARMA LINK for</h5>
            <span id="api-link-name">Lorem ipsum dolor sit</span>
            <div class="custom-file">
                <!-- <input type="link" class="custom-file-input" id="customFile" readonly="true"/> -->
                <label class="custom-file-label" for="customFile" id="customFile" onclick="Copy('customFile');">https://kidKrishkode.github.io/inphantApi.github.io/main.html?page=ApiPage&test=ok&pid=3</label>
            </div>
            <p class="card-text text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div class="flo">
                <i class="fa fa-whatsapp" title="Share the parma link into WhatsApp" onclick="shareOnWhatsApp();"></i>
                <i class="fa fa-facebook" title="Share the parma link into Facebook" onclick="shareOnFacebook();"></i>
                <i class="fa fa-instagram" title="Share the parma link into Instagram" onclick="shareOnInstagram();"></i>
                <i class="fa fa-linkedin-square" title="Share the parma link into LinkedIn" onclick="shareOnLinkedIn();"></i>
            </div>
        </div>
        <div class="card-footer">
            <div class="btn btn-danger" onclick="deactiveShare();">Close</div>
        </div>
    </div>
    `,
}