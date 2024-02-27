let nav = 0;
let pageList = ["HomePage","ApiPage","DocsPage","AboutPage","HelpPage"];
let aboutList = ["abtn0","abtn1","abtn2"];
let additionalList = ["SearchPage","AccountPage"];
let cls = 1;
let SrcPg=0;
let apiVisited=2000;
let docVisited=0;
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
	setTimeout(() => {
		document.getElementById("loading").style.display = "none";
        pageRout(0);
	},2000);
    document.getElementById("year").textContent = new Date().getFullYear();
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
    for(let i=0; i<pageList.length; i++){
        document.getElementById(`${pageList[i]}`).style.display = "none";
        document.getElementById(`p${i}`).style.fontWeight = "normal";
        document.getElementById(`pm${i}`).style.fontWeight = "normal";
        document.getElementById(`p${i}`).style.textDecoration = "none";
        document.getElementById(`pm${i}`).style.textDecoration = "none";
    }
    document.getElementById(`${pageList[id]}`).style.display = "block";
    document.getElementById(`p${id}`).style.fontWeight = "bold";
    document.getElementById(`pm${id}`).style.fontWeight = "bold";
    document.getElementById(`p${id}`).style.textDecoration = "underline";
    document.getElementById(`pm${id}`).style.textDecoration = "underline";
    if(aboutList.length==3){
    	aboutList.length=4;
        aboutList[3]="abtn3";
    	// aboutRout(0);
    }
    nextProgress(id);
    SrcPg=0;
}
function PageNull(id){
	for(let i=0; i<pageList.length; i++){
        document.getElementById(`${pageList[i]}`).style.display = "none";
        document.getElementById(`p${i}`).style.fontWeight = "normal";
        document.getElementById(`pm${i}`).style.fontWeight = "normal";
        document.getElementById(`p${i}`).style.textDecoration = "none";
        document.getElementById(`pm${i}`).style.textDecoration = "none";
    }
    for(let i=0; i<additionalList.length; i++){
        document.getElementById(`${additionalList[i]}`).style.display = "none";
    }
    document.getElementById(`${id}`).style.display="block";
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
        typing();
    }else if(id==1){
        if(apiVisited==2000){
            document.getElementById("loading").style.display = "block";
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
            docVisited++;
        }
    }else if(id==3){
        
    }else if(id==4){
        
    }else{
        console.warn("This rout have not identi");
    }
}