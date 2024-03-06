let nav = 0;
let pageList = ["HomePage","ApiPage","DocsPage","AboutPage","HelpPage"];
let aboutList = ["abtn0","abtn1","abtn2"];
let additionalList = ["SearchPage","AccountPage","OpenApiPage"];
let cls = 1;
let SrcPg=-1;
let homeVisited=0;
let apiVisited=2000;
let docVisited=0;
let helpVisited=0;
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
        nav=0;
    }
}
function user(){
    const body = document.getElementById("root");
    console.clear();
	setTimeout(() => {
		document.getElementById("loading").style.display = "none";
        linkChecker(0);
        // pageRout(0);
        // currentProductIdentity(3);
	},2000);
    document.getElementById("year").textContent = new Date().getFullYear();
}
function invalid(){
	alert("This features is not open for this version.");
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
        document.getElementById(`p${id}`).style.textDecoration = "underline";
        document.getElementById(`pm${id}`).style.textDecoration = "underline";
        SrcPg=id;
    }catch(e){
        if(SrcPg!=-1){
            document.getElementById(`p${SrcPg}`).style.fontWeight = "bold";
            document.getElementById(`pm${SrcPg}`).style.fontWeight = "bold";
            document.getElementById(`p${SrcPg}`).style.textDecoration = "underline";
            document.getElementById(`pm${SrcPg}`).style.textDecoration = "underline";
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
    }else if(id==7){
        document.getElementById("loading").style.display = "block";
        setTimeout(()=>{
            updateProductView();
        },500);
        setTimeout(()=>{
            document.getElementById("loading").style.display = "none";
        },1000);
    }else{
        console.warn("This rout have not identity!");
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
    dividerPageRout('dividerEnd','middleEnd');
    dualvisionPageRout('api-dualVision-head-code','api-dualVision-body-code');
    CodeRoutBySelect('codeSelecter');
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
    // document.getElementById(additionalList[2]).innerHTML=currentProduct.name;
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