
/*
    UserId- Guest@{year}01{browser name}{version}{frequency}{location1}K%5r{location2}W{today}h{month}f
                    24            c         A22       f/m       22             08I        08     03
            Guest@2401cA22f22K%5r08HW08h03f
    test-   I{browser name}{version}{frequency}{vision}{internet}{user id}{location}{loacl time String}h
                    c         A22      f/m        D/M     0/1       0/1      08I       A7o99Ao94f274
            IcA22fM1108IA7o99Ao94f274
*/
function user(){
    const body = document.getElementById("root");
    console.clear();
	setTimeout(() => {
		document.getElementById("loading").style.display = "none";
        linkChecker(0);
        // pageRout(8);
	},2000);
    document.getElementById("year").textContent = new Date().getFullYear();
}
function invalid(){
	alert("This features is not open for this version.");
}
function menubar(){
    if(nav==0){
        document.querySelector(".downMenu").style.display="block";
        document.querySelector(".menu-header").style.borderBottomLeftRadius = "0px";
        document.querySelector(".menu-header").style.borderBottomRightRadius = "0px";
        nav=1;
    }else{
        document.querySelector(".downMenu").style.display="none";
        document.querySelector(".menu-header").style.borderBottomLeftRadius = "20px";
        document.querySelector(".menu-header").style.borderBottomRightRadius = "20px";
        gloSearchOff();
        nav=0;
    }
}
function colorTogule(){
	for(let j=0; j<colorLib[cls].collist.length; j++){
		document.documentElement.style.setProperty(colorLib[cls].collist[j][0], colorLib[cls].collist[j][1]);
	}
	if(cls==0){ //dark
        document.getElementById('p5').innerHTML = `<a class="menu-link sunicon" title="Shift to light mode">&#x2600;</a>`;
        document.getElementById('pm5').innerHTML = `<a class="menu-link sunicon">&#x2600;</a>`;
        cls=1;
	}else{ //light
        document.getElementById('p5').innerHTML = `<a class="menu-link moonicon" title="Shift to dark mode">&#x1f319;</a>`;
        document.getElementById('pm5').innerHTML = `<a class="menu-link moonicon">&#x1f319;</a>`;
		cls=0;
	}
}
function pageRout(id){
    PageNull();
    document.getElementById(`${id<pageList.length?pageList[id]:additionalList[id-pageList.length]}`).style.display = "block";
    try{
        document.getElementById(`p${id}`).style.fontWeight = "bold";
        document.getElementById(`pm${id}`).style.fontWeight = "bold";
        if(id!=6){
            document.getElementById(`p${id}`).style.textDecoration = "underline";
            document.getElementById(`pm${id}`).style.textDecoration = "underline";
        }
        SrcPg=id;
    }catch(e){
        if(SrcPg!=-1){
            document.getElementById(`p${SrcPg}`).style.fontWeight = "bold";
            document.getElementById(`pm${SrcPg}`).style.fontWeight = "bold";
            if(SrcPg!=6){
                document.getElementById(`p${SrcPg}`).style.textDecoration = "underline";
                document.getElementById(`pm${SrcPg}`).style.textDecoration = "underline";
            }
        }else{
            console.warn(e);
        }
    }
    if(aboutList.length==3){
    	aboutList.length=4;
        aboutList[3]="abtn3";
    	// aboutRout(0);
    }
    nextProgress(id);
}
function PageNull(){
	for(let i=0; i<pageList.length; i++){
        document.getElementById(`${pageList[i]}`).style.display = "none";
        document.getElementById(`p${i}`).style.fontWeight = "normal";
        document.getElementById(`pm${i}`).style.fontWeight = "normal";
        document.getElementById(`p${i}`).style.textDecoration = "none";
        document.getElementById(`pm${i}`).style.textDecoration = "none";
    }
    for(let i=0; i<additionalList.length; i++){
        try{
            document.getElementById(`${additionalList[i]}`).style.display = "none";
        }catch(e){}
    }
}
function typing(){
    var text = 0;
    setInterval(() => {
        document.getElementById('h40').style.display='none';
        for(i=0; i<5; i++){
            document.getElementById(`h4${i+1}`).style.display='none';    
        }
        document.getElementById(`h4${text+1}`).style.display='block';
        text++;
        if(text>=5){
            text=0;
        }
    },5000);
}
function nextProgress(id){
    if(id==0){
        if(homeVisited==0){
            document.getElementById("loading").style.display = "block";
            setTimeout(()=>{
                document.getElementById(pageList[0]).innerHTML = HomePage.htmlData;
            },200);
            setTimeout(()=>{
                document.getElementById("loading").style.display = "none";
                typing();
            },500);
            homeVisited++;
        }
    }else if(id==1){
        if(apiVisited==2000){
            document.getElementById("loading").style.display = "block";
            document.getElementById(pageList[1]).innerHTML = ApiPage.htmlData;
            ProductListMaker();
        }
        setTimeout(()=>{
            if(apiVisited==2000){
                apiVisited=1;
            }else{
                ProductListMaker();
            }
            document.getElementById("loading").style.display = "none";
        },apiVisited);
    }else if(id==2){
        if(docVisited==0){
            htmlCompiler('libReqExaHtml');
            ideDeploy('.code','.line-numbers');
            htmlCompiler('libInVanillaHtml');
            ideDeploy('#libInVanillaHtml','#libInVanillaHtml-line');
            htmlCompiler('plugSyntHtml');
            ideDeploy('#plugSyntHtml','#plugSyntHtml-line');
            htmlCompiler('plugExaInVanillaHtml');
            ideDeploy('#plugExaInVanillaHtml','#plugExaInVanillaHtml-line');
            jsCompiler('plugExaInVanillaJs');
            ideDeploy('#plugExaInVanillaJs','#plugExaInVanillaJs-line');
            htmlCompiler('libInReactHtml');
            ideDeploy('#libInReactHtml','#libInReactHtml-line');
            htmlCompiler('plugExaInReactHtml');
            ideDeploy('#plugExaInReactHtml','#plugExaInReactHtml-line');
            jsCompiler('plugExaInReactJs');
            ideDeploy('#plugExaInReactJs','#plugExaInReactJs-line');
            jsCompiler('plugInReactJs');
            ideDeploy('#plugInReactJs','#plugInReactJs-line');
            htmlCompiler('libExaAngHtml');
            ideDeploy('#libExaAngHtml','#libExaAngHtml-line');
            htmlCompiler('plugExaAngHtml');
            ideDeploy('#plugExaAngHtml','#plugExaAngHtml-line');
            docVisited++;
        }
    }else if(id==3){
        projectPulseRoute();
    }else if(id==4){
        if(helpVisited==0){
            document.getElementById("loading").style.display = "block";
            setTimeout(()=>{
                document.getElementById(pageList[4]).innerHTML = HelpPage.htmlData;
            },200);
            setTimeout(()=>{
                document.getElementById("loading").style.display = "none";
                faqActivate();
            },500);
            helpVisited++;
        }
    }else if(id==6){
        if(accountVisited==0){
            document.getElementById("loading").style.display = "block";
            setTimeout(()=>{
                document.getElementById("AccountPage").innerHTML = AccountPage.htmlData;
            })
            setTimeout(()=>{
                document.getElementById("loading").style.display = "none";
                document.getElementById('user-loc').value = ((locationData[0].replaceAll("'","")).split('.'))[0]*1+"°"+((locationData[0].replaceAll("'","")).split('.'))[1]*1+"', "+((locationData[1].replaceAll("'","")).split('.'))[0]*1+"°"+((locationData[1].replaceAll("'","")).split('.'))[1]*1+"'";
                document.getElementById('user-evt').value = ((new URL(window.location['href'])).searchParams).get('test');
            },500);
            accountVisited++;
        }
    }else if(id==7){
        document.getElementById("loading").style.display = "block";
        setTimeout(()=>{
            document.getElementById("OpenApiPage").innerHTML = OpenApiPage.htmlData;
        },200);
        setTimeout(()=>{
            updateProductView();
        },500);
        setTimeout(()=>{
            document.getElementById("loading").style.display = "none";
        },1000);
    }else if(id==8){
        document.getElementById("loading").style.display = "block";
        setTimeout(()=>{
            document.getElementById("portfolioPage").innerHTML = PortfolioPage.htmlData;
        },200);
        setTimeout(()=>{
            updatePotfolio();
        },500);
        setTimeout(()=>{
            document.getElementById("loading").style.display = "none";
        },1000);
    }else{
        console.warn("This rout have not any identity!");
    }
    if((new URL(window.location['href'])).host!=''){
        userSearchProvider();
        setTimeout(()=>{
            userSearchSetStyle();
        },1000);
    }
    if(globalVisit==0){
        document.getElementById('globalSearch').innerHTML = GlobalSearch.htmlData;
        globalVisit++;
    }
}
function commentNameCheck(head,id){
	if(document.getElementById(id).value!=''){
		if(validateUserName(document.getElementById(id).value)){
			document.getElementById(id).style.border='3px solid #28a745';
            document.getElementById(head).textContent = "Having any problems?";
        }else{
			document.getElementById(id).style.border='3px solid #dc3545';
		}
	}else{
		document.getElementById(id).style.border='1px solid #ced4da';
	}
}
function commentMessageCheck(head,id,count){
    if(document.getElementById(id).value!=''){
		if(checkWordLength(id,count)){
			document.getElementById(id).style.border='3px solid #28a745';
            document.getElementById(head).textContent = "Having any problems?";
        }else{
			document.getElementById(id).style.border='3px solid #dc3545';
		}
	}else{
		document.getElementById(id).style.border='1px solid #ced4da';
	}
}
function updateProductView(){
    dataSetonProduct();
    dividerPageRout('dividerEnd','middleEnd');
    dualvisionPageRout('api-dualVision-head-code','api-dualVision-body-code');
    CodeRoutBySelect('codeSelecter');
    setTimeout(()=>{
        htmlCompiler('apiInSnipVanillaHtml');
        ideDeploy('#apiInSnipVanillaHtml','#apiInSnipVanillaHtml-line');
        jsCompiler('useInSnipVanillaJs');
        ideDeploy('#useInSnipVanillaJs','#useInSnipVanillaJs-line');
        htmlCompiler('apiInSnipReactHtml');
        ideDeploy('#apiInSnipReactHtml','#apiInSnipReactHtml-line');
        jsCompiler('useInSnipReactJs');
        ideDeploy('#useInSnipReactJs','#useInSnipReactJs-line');
        htmlCompiler('apiInSnipAngularHtml');
        ideDeploy('#apiInSnipAngularHtml','#apiInSnipAngularHtml-line');
        jsCompiler('useInSnipAngularJs');
        ideDeploy('#useInSnipAngularJs','#useInSnipAngularJs-line');
        jvm('useInSnipAndroidJava');
        ideDeploy('#useInSnipAndroidJava','#useInSnipAndroidJava-line');
        terMinal('examInConsoleTerm');
        ideDeploy('#examInConsoleTerm','#examInConsoleTerm-line');
    },200);
}
function referenceIdentify(){
    if(currentProduct.reference!=undefined && currentProduct.reference>0){
        for(let i=0; i<productLib.length; i++){
            if(currentProduct.reference==productLib[i].id){
                referenceProduct = productLib[i].valueOf();
                newProduct = referenceProduct;
                break;
            }
        }
    }else{
        referenceProduct = null;
        newProduct = currentProduct;
    }
}
function dataSetonProduct(){
    referenceIdentify();
    document.querySelector('.header-left-left-componet').innerHTML = `<span style="background: ${randomDpColor()};">${currentProduct.name[0]}</span>`;
    document.getElementById('header-api-name').innerText = currentProduct.name;
    document.getElementById('header-api-cost').innerText = newProduct.cost==0?'Free':'Premium';
    document.getElementById('header-api-owner').innerHTML = `<span onclick="openPortByName('${newProduct.owner}');">By `+newProduct.owner+"</span>";
    document.getElementById('header-api-update').innerText = getUpdateStatus(reverseDate(newProduct.modified));
    document.getElementById('header-api-resource').innerText = "Media";
    document.getElementById('header-api-rating').innerText = newProduct.rating+"/10";
    document.getElementById('header-api-latency').innerText = newProduct.latency+"ms";
    document.getElementById('header-api-service').innerText = newProduct.service+'%';
    document.getElementById('header-api-modification').innerText = newProduct.modified;
    document.getElementById('littleAboutApi').innerText = currentProduct.description==''?newProduct.description:currentProduct.description;
    document.getElementById('api-dualVision-identifier').value = newProduct.apiName;
    reqParamUpdate();
    optParamUpdate();
    agentListUpdate();
    codeSnippetsUpdate();
    document.getElementById('middleAbout').innerHTML = "<p>"+(currentProduct.description==''?newProduct.description:currentProduct.description)+"</p>";
    if(new URL(window.location['href']).hostname!=''){
        document.getElementById('littleytvideo').src=newProduct.tutorials[0];
        if(newProduct.tutorials.length!=0){
            document.querySelector(".mainVideo").style.display="block";
            document.querySelector(".mainVideo").innerHTML=`<iframe src="${newProduct.tutorials[0]}" alt="loading.."></iframe>`;
            if(newProduct.tutorials.length-1!=0&&newProduct.tutorials.length-1<4){
                for(let i=1; i<newProduct.tutorials.length; i++){
                    document.querySelector(`.svideo${i}`).style.display="block";
                    document.querySelector(`.svideo${i}`).innerHTML=`<iframe src="${newProduct.tutorials[i]}" alt="loading.." onclick="videoSwap(${i});" autoplay="false" controls="false"></iframe>`;
                }
            }
        }
    }
}
function reqParamUpdate(){
    document.getElementById('reqParams').innerHTML="";
    temp ="";
    for(let key in newProduct.reqParams){
        temp += `<div class="form-group">
        <label for="api-dualVision-info">${key}</label><ul>`;
        for(let i=0; i<newProduct.reqParams[key].length; i++){
            temp+= `<li><input type="link" class="form-control" value="${newProduct.reqParams[key][i]}"readonly="true"/></li>`;
        }
        temp+=`</ul></div>`;
    }
    document.getElementById('reqParams').innerHTML=temp;
}
function optParamUpdate(){
    document.getElementById('optParams').innerHTML="";
    temp ="";
    for(let key in newProduct.optParams){
        temp += `<div class="form-group">
        <label for="api-dualVision-info">${key}</label><ul>
            <li>
                <input type="link" class="form-control" value="${newProduct.optParams[key][0]}"readonly="true"/>
                <small class="form-text text-muted">${newProduct.optParams[key][1]}</small>
            </li>
        </ul></div>`;
    }
    document.getElementById('optParams').innerHTML=temp;
}
function agentListUpdate(){
    document.getElementById('agentList').innerHTML="";
    temp =`<div class="form-group">
    <label for="api-dualVision-info">Agents Identity</label><ul>`;
    for(let i=0; i<newProduct.listOfAgents.length; i++){
        temp += `
            <li>
                <input type="link" class="form-control" value="${newProduct.listOfAgents[i]}(...)"readonly="true"/>
            </li>`;
    }
    temp += "</ul></div>";
    document.getElementById('agentList').innerHTML=temp;
}
function codeSnippetsUpdate(){
    let vBody = newProduct.vanilla[1]==''?'< !-- programe body -- >':newProduct.vanilla[1];
    let vlib = newProduct.vanilla[2]==''?stdlibsrc:newProduct.vanilla[2];
    document.getElementById('apiInSnipVanillaHtml').innerHTML=
    (((vanillaHtmlContent.replaceAll('$|title|$',newProduct.vanilla[0])).replaceAll('$|body|$',vBody).replaceAll('$|libplugin|$',vlib)).replaceAll('$|apiplugin|$',`&lt; script@ |src="https://kidKrishkode.github.io/inphantApi.github.io/APIs/${newProduct.apiName}" >< /script@ >`));
    document.getElementById('useInSnipVanillaJs').innerHTML=newProduct.vanilla[3];
    document.getElementById('apiInSnipReactHtml').innerHTML=newProduct.react[0];
    document.getElementById('useInSnipReactJs').innerHTML=newProduct.react[1];
    document.getElementById('apiInSnipAngularHtml').innerHTML=newProduct.angular[0];
    document.getElementById('useInSnipAngularJs').innerHTML=newProduct.angular[1];
    document.getElementById('useInSnipAndroidJava').innerHTML=newProduct.android[0];
    document.getElementById('examInConsoleTerm').innerHTML=newProduct.console[0].replaceAll('<|time|>',(new Date).getTime());
}
function videoSwap(id){
    temp = document.querySelector(".mainVideo").innerHTML;
    document.querySelector(".mainVideo").innerHTML = document.querySelector(`.svideo${id}`).innerHTML;
    document.querySelector(`.svideo${id}`).innerHTML = temp;
}
function dividerPageRout(id,page){
    let head = ['dividerEnd','dividerAbout','dividerTutorial'];
    let body = ['middleEnd','middleAbout','middleTutorial'];
    for(let i=0; i<head.length; i++){
        document.getElementById(head[i]).style.borderBottom="none";
        document.getElementById(body[i]).style.display="none";
    }
    document.getElementById(id).style.borderBottom="2px solid var(--ngtxt-color)";
    document.getElementById(page).style.display="block";
}
function shareActivate(id){
    document.getElementById('blbg').innerHTML = LinkBox.htmlData;
    document.getElementById('blbg').style.display = "block";
    currentLinkUpdate(id);
}
function deactiveShare(){
    document.getElementById('blbg').innerHTML = '';
    document.getElementById('blbg').style.display = "none";
}
function currentLinkUpdate(id){
    if(id=='OpenApiPage'){
        document.getElementById('customFile').textContent = `${window.location['origin']}${window.location['pathname']}?page=ApiPage&test=ok&pid=${currentProduct.id}&search=All`;
    }
    if(id=='ApiPage'){
        document.getElementById('customFile').textContent = `${window.location['origin']}${window.location['pathname']}?page=ApiPage&test=ok&search=${document.getElementById('searchData').value||'All'}`;
    }
}
function dualvisionPageRout(id,page){
    let head = ['api-dualVision-head-code','api-dualVision-head-example'];
    let body = ['api-dualVision-body-code','api-dualVision-body-example'];
    for(let i=0; i<head.length; i++){
        document.getElementById(head[i]).style.borderBottom="none";
        document.getElementById(body[i]).style.display="none";
    }
    document.getElementById(id).style.borderBottom="2px solid var(--ngtxt-color)";
    document.getElementById(page).style.display="block";
}
function CodeRoutBySelect(id){
    let Box = ['vanillaBody','angularBody','reactBody','androidBody'];
    let codeBox = (document.getElementById(id).value).toLowerCase();
    for(let i=0; i<Box.length; i++){
        document.getElementById(Box[i]).style.display="none";
    }
    document.getElementById(codeBox+"Body").style.display="block";
}
let rate='';
function starCount(c){
    rate=c;
}
function commentMe(){
    feedbackCommentSend("viewer-email","viewer-message",rate);
    rate = "";
}
function apiTest(){
    alert("Test inviroment not present now, \nuse the plugin in our system.");
}
function codeLangUpdate(name){
    try{
        setTimeout(()=>{
            document.getElementById('codeSelecter').value= `${name}`;
            try{
                CodeRoutBySelect('codeSelecter');
            }catch(e){
                alert("Sorry, define language not understand!");
            }
        },800);
    }catch(e){
        alert("Sorry, language change not permitted!");
    }
}
function subPageUpdate(name){
    setTimeout(()=>{
        if(['End','About','Tutorials'].includes(name)){
            dividerPageRout('divider'+name,'middle'+name);
        }else if(['Code','Example'].includes(name)){
            dualvisionPageRout('api-dualVision-head-'+name.toLowerCase(),'api-dualVision-body-'+name.toLowerCase());
        }else{
            alert("Sorry sub-page not found!");
        }
    },800);
}
function account(){
    pageRout(6);
}
function nameEdit(){
    document.getElementById('blbg').innerHTML = document.getElementById('nameEditPopUp').innerHTML;
    document.getElementById('blbg').style.display = "block";
}
function changeAccName(id){
    if(nameEditCheck(id)){
        invalid();
    }
}
function nameEditCancel(){
    document.getElementById('blbg').innerHTML = '';
    document.getElementById('blbg').style.display = "none";
}
function nameEditCheck(id){
    (document.querySelectorAll('#nEeM')[1]).innerHTML = '';
    let name = (document.querySelectorAll('#'+id)[1]).value;
    if(name==''||name==undefined){
        (document.querySelectorAll('#nEeM')[1]).innerHTML = "Empty string as name is not accepted";
        return false;
    }
    if(!validateUserName(name)){
        (document.querySelectorAll('#nEeM')[1]).innerHTML = "This name not maintain naming grammer";
        return false;
    }else{
        (document.querySelectorAll('#nEeM')[1]).innerHTML = "Good to GO!";
        return true;
    }
}
function gloSearchOff(){
    document.getElementById('globalSearch').style.display = "none";
    document.getElementById('S1').value = '';
    document.getElementById('S2').value = '';
}
function updatePotfolio(){
    openUserPort(0);
}
function openUserPort(id){
    userSearchProvider();
    let currentPortfolio;
    if(userPortfolio!=undefined||userPortfolio!=''){
        for(let i=0; i<userPortfolio.length; i++){
            if(id==userPortfolio[i].id){
                currentPortfolio = userPortfolio[i];
                break;
            }
        }
        if(currentPortfolio.name=='kidKrishkode'){
            document.querySelector(".user-dp").innerHTML = `<img src="./fav-icon/icon-m-o-c.png" alt="loading.."/>`;
        }else{
            document.querySelector(".user-dp").innerHTML = `<span class="btn" style="background: ${randomDpColor()};">${(currentPortfolio.name[0]).toUpperCase()}</span>`;
        }
        document.querySelector(".user-name").innerText = currentPortfolio.name;
        document.querySelector(".user-package").innerHTML = currentPortfolio.package=='Premium'?"<i class='fa fa-check-square-o' style='color: #0c8ff0;'></i>":"<i class='fa fa-certificate' style='color: gray;'></i>";
        document.querySelector(".user-profession").innerText = currentPortfolio.proffesion;
        document.querySelector(".user-join").innerText = currentPortfolio.join;
        document.querySelector(".user-post").innerText = currentPortfolio.post==0?"Owner":"Volunteer";
        portfoliProductListMaker(currentPortfolio.id,currentPortfolio.name);
        document.getElementById("port-contacts").innerHTML = `
            <div class="btn btn-primary" onclick="portfolioMail('${currentPortfolio.email}');"><i class="fa fa-envelope"></i> Contact</div>
            <div class="btn btn-secondary" onclick="portfolioReport('${currentPortfolio.email}');"><i class="fa fa-ban"></i> Report</div>
        `;
    }else{
        if(new URL(window.location['href']).hostname!=''){
            testError(404,"User not found!");
        }
    }
}
function portfoliProductListMaker(id,name){
    temp = '';
    for(let i=0; i<productLib.length; i++){
        if(productLib[i].owner==id || productLib[i].owner==name){
            temp += `
            <li class="api api-port" onclick="pageRout(7);currentProductIdentity('${productLib[i].id}');">
                <div class="api-thumbnail" style="background: url('${ramdomThumnail()}');background-repeat: no-repeat;background-size: cover;"></div>
                <div class="api-upper">${productLib[i].name}</div>
                <div class="api-middle"><p>${productLib[i].description}</p></div>
                <div class="api-lower flw"><div>${productLib[i].modified}</div>|<div>Get It..</div></div>
            </li>
            `;
        }
    }
    if(temp==''||temp==undefined){
        document.querySelector(".portfolio-product-list").innerHTML = "&times; No Contribution Found Yet!";
    }else{
        document.querySelector(".portfolio-product-list").innerHTML = temp;
    }
}
function portfolioMail(reciver){
    window.location = `mailto:${reciver}?&Subject=Query form visitor in Inphant API.&body=`;
}
function portfolioReport(reciver){
    if(reciver!='krishnendumitra24@gmail.com'){
        window.location = `mailto:${reciver},krishnendumitra24@gmail.com?&Subject=Report form visitor in Inphant API.&body=`;
    }else{
        window.location = `mailto:krishnendumitra24@gmail.com?&Subject=Report form visitor in Inphant API.&body=`;
    }
}
function openPortByName(name){
    try{
        userSearchProvider();
    }catch(e){
        alert("Previous process going to faild, Try again!");
    }
    if(userPortfolio!=undefined||userPortfolio!=''){
        for(let i=0; i<userPortfolio.length; i++){
            if(name==userPortfolio[i].name){
                pageRout(8);
                openUserPort(userPortfolio[i].id);
                break;
            }
        }
    }else{
        if(new URL(window.location['href']).hostname!=''){
            testError(404,"User not found!");
        }
    }
}