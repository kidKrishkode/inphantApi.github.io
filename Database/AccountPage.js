const AccountPage = {
    htmlData:
        `<div class="accountBox">
            <div class="icon"><i class="fa fa-user-circle-o"></i></div>
            <div class="info">
                <form class="container">
                    <div class="form-group">
                        <lable for="user-name">User Name<span onclick="nameEdit();">🖊️</span></lable>
                        <input type="name" class="form-control" id="user-name" placeholder="Guest" aria-describedby="nameHelp" readonly/>
                        <small id="nameHelp" class="form-text text-muted">This is your user name which is visible in this IP only.</small>
                    </div>
                    <div class="form-group">
                        <lable for="user-id">User ID</lable>
                        <input type="text" class="form-control" id="user-id" placeholder="Guest@2401cA22f22K&5r08HW08h03f" aria-describedby="idHelp" readonly/>
                        <small id="idHelp" class="form-text text-muted">This is not your user name or pin or visible in public. This id will be use to identify your activities and register your download records.</small>
                    </div>
                    <div class="form-group">
                        <lable for="user-loc">User Location</lable>
                        <input type="text" class="form-control" id="user-loc" placeholder="22°36',88°21'" aria-describedby="locHelp" readonly/>
                        <small id="locHelp" class="form-text text-muted">This is your current coordinates , this is not visible in public.</small>
                    </div>
                    <div class="form-group">
                        <lable for="user-evt">Event Test Key</lable>
                        <input type="text" class="form-control" id="user-evt" placeholder="IcA22fM1108IA7o99Ao94f274" aria-describedby="evtHelp" readonly/>
                        <small id="evtHelp" class="form-text text-muted">This is test report of your device, system use only, react as one time password for your login.</small>
                    </div>
                    <div class="form-group">
                        <lable for="user-ip">IP Address</lable>
                        <input type="password" class="form-control" id="user-ip" placeholder="2404:1028.59.03.12:80" aria-describedby="ipHelp" readonly/>
                        <small id="ipHelp" class="form-text text-muted">This is test report of your device, system use only, react as one time password for your login.</small>
                    </div>
                    <div class="form-group">
                        <lable for="user-vist">Visit</lable>
                        <input type="number" class="form-control" id="user-vist" placeholder="00" aria-describedby="vistHelp" readonly/>
                        <small id="vistHelp" class="form-text text-muted">This is test report of your device, system use only, react as one time password for your login.</small>
                    </div>
                </form>
            </div>
            <div class="flo"><div class="btn btn-danger" onclick="invalid();" title="Delete my activites from this device">Delete</div><div class="btn btn-success" onclick="downloadCode('AccountPage','Inphant_account(${(new Date).getTime()}).txt');" title="Download my account in txt file">Download</div></div>
            <div class="notice">Read Privacy Statements</div>
        </div>
        <span id="nameEditPopUp">
            <div id="accountName">
                Modified Name
                <input type="search" placeholder="Enter the new name here" id="newaccname" aria-label="search" onkeyup="nameEditCheck('newaccname');">
                <div id="nEeM"></div>
                <div class="btn-holder">
                    <button class="btn btn-danger" onclick="nameEditCancel();">Cancel</button>
                    <button class="btn btn-success" onclick="changeAccName('newaccname');">Change</button>
                </div>
            </div>
        </span>
    `,
}