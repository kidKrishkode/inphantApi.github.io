function productCardMaker(id){
    if(id<=productLib.length&&id>=0){
        let card = productLib[id];
        let tuple = `
        <li class="drop" onclick=pageRout(7);currentProductIdentity('${card.id}');>
            <div class="product">
                <div class="product-component-top" style="background: url('${ramdomThumnail()}');background-repeat: no-repeat;background-size: cover;">
                    <div class="product-price">${card.cost==0?'Free':'Premium'}</div>
                </div>
                <div class="product-component-middle">
                    <div class="product-headline">
                        <div class="product-dp"style="background: ${randomDpColor()};">${card.name[0]}</div>
                        <div class="product-head">${card.name}</div>
                    </div>
                    <div class="product-description">${card.description}</div>
                    <div class="product-owner">@${card.owner} - ${card.owner=='kidKrishkode'?'Owner':'Volunteer'}</div>
                </div>
                <div class="product-tags"></div>
                <div class="product-component-bottom">
                    <div class="product-info" title="Rating"><i class="fa fa-line-chart"></i>${(card.rating).toFixed(1)}/10</div>
                    <div class="product-info" title="Modification"><i class="fa fa-calendar"></i>${card.modified}</div>
                    <div class="product-info" title="Responce time"><i class="fa fa-history"></i>391ms</div>
                </div>
            </div>
        </li>`;
        return tuple;
    }else{
        return null;
    }
}
function randomDpColor(){
    return dpColorLib[Math.floor(Math.random()*dpColorLib.length)];
}
function ramdomThumnail(){
    let index = Math.floor(Math.random()*thumbnailRange[1]);
    if(index>=thumbnailRange[0]&&index<=thumbnailRange[1]){
        return `./img/Api-thumbnail0${index<10?'0'+index:index}.png`;
    }else{
        return `./img/Api-thumbnail003.png`;
    }
}
function ProductListMaker(){
    let id = document.getElementById('productList');
    id.innerHTML = '';
    productSwapper();
    for(let i=0; i<productLib.length; i++){
        id.innerHTML += productCardMaker(i);
    }
}
function productSwapper(){
    for(let i=0; i<productLib.length; i++){
        let id = Math.floor(Math.random()*productLib.length);
        let a = productLib[i];
        productLib[i] = productLib[id];
        productLib[id] = a;
    }
}
function currentProductIdentity(id){
    let loc=0;
    for(let i=0; i<productLib.length; i++){
        if(productLib[i].id==id){
            currentProduct=productLib[i];
            i=productLib.length+2;
            loc=1;
        }
    }
    if(loc==0){
        alert("Oops! some error occure to open your api!");
        setTimeout(()=>{
            window.location.reload();
        },500);
    }
}
function search_product(data,list){
    let find=miss=0;
    let input = document.getElementById(`${data}`).value;
    input=input.toLowerCase();
    let x = document.getElementsByClassName(`${list}`);
    for(i = 0; i<x.length; i++){ 
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display="none";
            miss++;
        }else{
            x[i].style.display="list-item";
            find++;
        }
    }
    if(data=='searchSelectList'){
        data='searchData';
    }
    if(miss>find&&find==0&&miss!=0){
        document.getElementById(data+'DOD').style.display="block";
    }else{
        document.getElementById(data+'DOD').style.display="none";
    }
}
function searchbySelect(selectlist,type){
    var selectBox = document.querySelector(`#${selectlist}`);
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if(selectBox.options[selectBox.selectedIndex].value=='All'){
        selectedValue='';
    }
    document.getElementById(`${selectlist}`).value = selectedValue;
    search_product(`${selectlist}`,`${type}`,`${type=='drop'?0:1}`);
    selectBox.innerHTML = `<option>--------Filter Base--------</option>`;
    if(type=='drop'){
        for(let i=0; i<set2.length; i++){
            selectBox.innerHTML += `<option>${set2[i]}</option>`;
        }
    }
}
function search(id){
    if(document.getElementById(id).value!=''){
        document.getElementById('globalSearch').style.display = "block";
        apiProvider();
        pageProvider();
    }else{
        gloSearchOff();
    }
}
function ApiPageWithSearch(searchTopic){
    if(searchTopic=='All'){
        searchTopic='';
    }
    document.getElementById('searchData').value = `${searchTopic}`;
    pageRout(1);
    setTimeout(()=>{
        search_product('searchData','drop');
    },200);
}
function DocsPageWithSearch(searchTopic){
    if(searchTopic=='All'){
        searchTopic='';
    }
    document.getElementById('searchText').value = `${searchTopic}`;
    setTimeout(()=>{
        search_product('searchText','drops');
    },200);
}
function updateLineNumbers(){
    const code = codeElement.innerText;
    const lines = code.split("\n");
    const lineCount = lines.length;
    lineNumbers.innerHTML = Array.from({ length: lineCount-1 }, (_, i) => i + 1).join("<br>");
}
function Rview(id){
	const code = '<pre>'+document.getElementById(id).innerHTML+'</pre>';
	document.getElementById("rewView").innerHTML=code;
	document.querySelector(".rawport").style.display="block";
}
function Rclose(){
	document.getElementById("rewView").innerHTML="";
	document.querySelector(".rawport").style.display="none";
}
function Copy(id){
	copyCode(id);
}
function copyCode(id){
    const textToCopy = document.getElementById(id);
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy.textContent;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    alert("Code has been copied to the clipboard!");
}
function downloadCode(id,name){
    const textToDownload = document.getElementById(id).textContent;
    // const fileName = "downloaded_file.txt";
    const fileName = `${name}`;
    const blob = new Blob([textToDownload], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
}
function codeFeed(){
    alert("Feedback is not possible");
}
let codeElement,lineNumbers;
function ideDeploy(code,line){
    codeElement = document.querySelector(code);
    lineNumbers = document.querySelector(line);
    codeElement.addEventListener("input", updateLineNumbers);
    updateLineNumbers();
}
function validateUserName(input){
    const namePattern = /^[a-zA-Z]+(?: [a-zA-Z]+)*(?: [a-zA-Z]+)?$/;
    if(namePattern.test(input)){
        let keywords = ((input).toLowerCase()).replaceAll(' ','');
        if(input.length >= 3 && input.length <= 25 && !['krishnendumitra','inphantapi','kidkrishkode'].includes(keywords)){
            return true;
        }
    }
    return false;
}
function validateUserEmail(email){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
function helpCommentSend(head,identity,comment,count,rate){
    let name = document.getElementById(identity).value;
    let message = document.getElementById(comment).value;
    let reciver = 'krishnendumitra24@gmail.com';
    if(validateUserName(name)&&checkWordLength(comment,count)){
        window.location = `mailto:${reciver}?&Subject=Comment form visitor in Inphant API.&body=My name: ${name}, Token code: 24w9@jtYh4-${rate!=''?rate:'N8jo*awT5k'}-ofe^d7Qki0, My Message: ${message!=''?message:'__No comments now, only star rating__'}`;
        setTimeout(()=>{
            console.clear();
        },500);
    }else{
        document.getElementById(head).textContent = "Please fill out all fields!";
        console.error("Error: 400! \nsemanticError: Bad request occurred, please fill out all fields\n\t at inphantApi.github.io\n");
    }
}
function checkWordLength(id,count){
    let textarea = document.getElementById(id);
    let text = textarea.value.trim();
    let word = text.length;
    let wordCount = word;
    if(count!=''){
        document.getElementById(count).textContent = wordCount;
    }
    if(wordCount >= 3 && wordCount <= 1000){
        return true;
    }else{
        return false;
    }
}
function feedbackCommentSend(identity,comment,rate){
    let email = document.getElementById(identity).value;
    let message = document.getElementById(comment).value;
    let reciver = 'krishnendumitra24@gmail.com';
    if(validateUserEmail(email)&&checkWordLength(comment,'')){
        window.location = `mailto:${reciver}?&Subject=Feedback form visitor in Inphant API.&body=My contact: ${email}, Token code: 24w9@jtYh4-${rate!=''?rate:'N8jo*awT5k'}-ofe^d7Qki0, My Message: ${message!=''?message:'__No comments now, only star rating__'}`;
        setTimeout(()=>{
            console.clear();
        },500);
    }else{
        console.error("Error: 400! \nsemanticError: Bad request occurred, please fill out all fields\n\t at inphantApi.github.io\n");
        alert("Please maintain the formalities limit");
    }
}
function faqActivate(){
    let answers = document.querySelectorAll(".accordion"); 
    answers.forEach((event) => { 
        event.addEventListener("click", () => { 
            if(event.classList.contains("active")){ 
                event.classList.remove("active"); 
            }else{
                event.classList.add("active"); 
            } 
        }); 
    });
}
function projectPulseRoute(){
    window.location = "https://kidKrishkode.github.io/projectPulse.github.io/";
}
function testPageRoute(link){
    document.getElementById('badLinkHit').style.display = "block";
    if(link==''||link==undefined){
        link='';
    }else{
        const url = new URL(link);
        const params = url.searchParams;
        params.set('test','null');
        link = './index.html'+url.search;
    }
    setTimeout(()=>{
        window.location = link;
    },2000);
}
function linkChecker(m){
    var currentLink = window.location;
    var currentHref = currentLink['href'];
    const afterQuestionMark = currentHref.split('?')[1];
    if(afterQuestionMark==''||afterQuestionMark==undefined){
        testPageRoute(currentHref);
    }else{
        const url = new URL(currentHref);
        const params = url.searchParams;
        if(params.has('page')){
            if(approximateTest(currentHref)){
                if(goToPage(params.get('page'))){
                    if(params.has('search')){
                        activeSearchBar(params.get('page'),params.get('search'));
                    }
                    if(params.has('pid')&&params.get('page')==pageList[1]){
                        if(pidJustify(params.get('pid'))){
                            pageRout(7);
                            if(params.has('lang')){
                                codeLangUpdate(params.get('lang'));
                            }
                            if(params.has('subPage')){
                                subPageUpdate(params.get('subPage'));
                            }
                            if(params.has('env')){
                                if(params.get('env')=='true'){
                                    apiTest();
                                }
                            }
                        }else{
                            alert("Sorry, your product not identify.\nEigther it is not present or deleted or link will corapted!");
                        }
                    }
                    if(params.has('color')){
                        if(params.get('color')=='light'){
                            colorTogule();
                        }
                    }
                }else{
                    alert("Sorry page not found");
                    testPageRoute('');
                }
            }else{
                testPageRoute(currentHref);
            }
        }else{
            document.getElementById('root').innerHTML='';
            alert("Bye bye");
        }
    }
}
function pidJustify(pid){
    let loc=0
    for(let j=0; j<productLib.length; j++){
        if(productLib[j].id==pid){
            currentProductIdentity(pid);
            loc=1;
            return true;
        }
    }
    if(loc==0){
        return false;
    }
}
function goToPage(name){
    if((name*0==0)&&(name<pageList.length)){
        pageRout(name);
        return true;
    }else{
        for(let i=0; i<pageList.length; i++){
            if(name==pageList[i]){
                pageRout(i);
                return true;
            }
        }
        for(let i=0; i<additionalList.length; i++){
            if(name==additionalList[i]){
                pageRout(pageList.length+i);
                return true;
            }
        }
    }
    return false;
}
function activeSearchBar(page,search){
    if(page==pageList[1]||page==pageList[2]){
        if(page==pageList[1]){
            ApiPageWithSearch(search);
        }
        if(page==pageList[2]){
            DocsPageWithSearch(search);
        }
    }else{
        try{
            updateSearchBars(search);
        }catch(e){}
    }
}
function shareOnWhatsApp(){
    let copiedText = "Hi, I am using *Inphant Api* , Please check out this link "+document.getElementById('customFile').innerText;
    let encodedText = encodeURIComponent(copiedText);
    let whatsappShareUrl = `https://wa.me/?text=${encodedText}`;
    window.open(whatsappShareUrl);
}
function shareOnFacebook(){
    let copiedText = "Hi, I am using Inphant Api , Please check out this link "+document.getElementById('customFile').innerText+" #inphantApi #kidKrishkode #FreeApi #Programming";
    let encodedText = encodeURIComponent(copiedText);
    let facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=&quote=${encodedText}`;
    window.open(facebookShareUrl);
}
function shareOnLinkedIn(){
    let copiedText = "Hi, I am using Inphant Api , Please check out this link "+document.getElementById('customFile').innerText+" #inphantApi #kidKrishkode #FreeApi #Programming";
    let encodedText = encodeURIComponent(copiedText);
    let linkedinShareUrl = `https://www.linkedin.com/sharer/sharer.php?u=&quote=${encodedText}`;
    window.open(linkedinShareUrl);
}
function shareOnInstagram(){
    let copiedText = document.getElementById('customFile').innerText;
    let encodedText = encodeURIComponent(copiedText);
    let instagramShareUrl = `https://www.instagram.com/sharing/share-offsite/?url=&summary=${encodedText}`;
    window.open(instagramShareUrl);
}
function getUpdateStatus(dateString){
    const updateDate = new Date(dateString);
    const currentDate = new Date();
    const differenceInMs = currentDate - updateDate;
    const differenceInDays = Math.floor(differenceInMs /(1000 * 60 * 60 * 24));
    let status;
    if(differenceInDays === 0){
        status = "Updated recently";
    }else if(differenceInDays === 1){
        status = "Updated one day ago";
    }else if(differenceInDays === 2){
        status = "Updated two days ago";
    }else if(differenceInDays <= 6){
        status = `Updated ${differenceInDays} days ago`;
    }else if(differenceInDays <= 7){
        status = "Updated one week ago";
    }else if(differenceInDays <= 14){
        status = "Updated two weeks ago";
    }else if(differenceInDays <= 21){
        status = "Updated three weeks ago";
    }else if(differenceInDays <= 28){
        status = "Updated one month ago";
    }else if(differenceInDays <= 365){
        const months = Math.floor(differenceInDays / 30);
        status = `Updated ${months} months ago`;
    }else if(differenceInDays <= 365 * 2){
        status = "Updated one year ago";
    }else if(differenceInDays <= 365 * 5){
        const years = Math.floor(differenceInDays / 365);
        status = `Updated ${years} years ago`;
    }else {
        status = "Updated long time ago";
    }
    return status;
}
function reverseDate(date){
    const parts = date.split("/");
    const mirror = parts.reverse();
    const reorder = mirror.join("/");
    return reorder;
}
// ['media','resources','network','sensors'];
let valid = [["Chrome","Microsoft Internet Explorer","Firefox","Safari"],[109,114,119],["Mobile vision","Desktop vision"],[100,80]];
let SuperCounter=0;
function getBrowserdata(){
    var objappVersion = navigator.appVersion; 
    var browserAgent = navigator.userAgent; 
    var browserName = navigator.appName; 
    var browserVersion = '' + parseFloat(navigator.appVersion); 
    var browserMajorVersion = parseInt(navigator.appVersion, 10); 
    var Offset, OffsetVersion, ix; 
    if((OffsetVersion = browserAgent.indexOf("Chrome")) != -1){ 
        browserName = "Chrome"; 
        browserVersion = browserAgent.substring(OffsetVersion + 7);
    }else if((OffsetVersion = browserAgent.indexOf("MSIE")) != -1){ 
        browserName = "Microsoft Internet Explorer"; 
        browserVersion = browserAgent.substring(OffsetVersion + 5); 
    }else if((OffsetVersion = browserAgent.indexOf("Firefox")) != -1){ 
        browserName = "Firefox"; 
    }else if((OffsetVersion = browserAgent.indexOf("Safari")) != -1){ 
        browserName = "Safari"; 
        browserVersion = browserAgent.substring(OffsetVersion + 7); 
        if((OffsetVersion = browserAgent.indexOf("Version")) != -1) 
            browserVersion = browserAgent.substring(OffsetVersion + 8); 
    }else if((Offset = browserAgent.lastIndexOf(' ') + 1) < (OffsetVersion = browserAgent.lastIndexOf('/'))){ 
        browserName = browserAgent.substring(Offset, OffsetVersion); 
        browserVersion = browserAgent.substring(OffsetVersion + 1); 
        if(browserName.toLowerCase() == browserName.toUpperCase()){ 
            browserName = navigator.appName; 
        } 
    } 
    if((ix = browserVersion.indexOf(";")) != -1) 
        browserVersion = browserVersion.substring(0, ix); 
    if((ix = browserVersion.indexOf(" ")) != -1) 
        browserVersion = browserVersion.substring(0, ix); 
        browserMajorVersion = parseInt('' + browserVersion, 10); 
    if(isNaN(browserMajorVersion)){ 
        browserVersion = '' + parseFloat(navigator.appVersion); 
        browserMajorVersion = parseInt(navigator.appVersion, 10); 
    }
    browserData = [browserName,browserVersion,navigator.appName];
}
function getUserLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition, handleError);
    }else{
        alert("Geolocation is not supported by this browser.Try another one!");
    }
    setTimeout(()=>{
        if(locationData.length==0||locationData[0]==undefined){
            locationData = [-1,-1];
        }
    },1000);
}
function showPosition(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    reverseGeocode(latitude, longitude);
}
function reverseGeocode(latitude, longitude){
    locationData = [`'${latitude.toFixed(2)}'`,`'${longitude.toFixed(2)}'`];
}
function handleError(error){
	setTimeout (()=>{
    switch (error.code){
        case error.PERMISSION_DENIED:
            validError("Browser denied the request for Geolocation.Give permission to verify.");
        break;
        case error.POSITION_UNAVAILABLE:
            validError("Location information is unavailable in your GPS,Fixed it.");
        break;
        case error.TIMEOUT:
            validError("The request to get your location is timed out, Refresh.");
        break;
        case error.UNKNOWN_ERROR:
            validError("An unknown error occurred, Please contact us or try to connect with another device.");
        break;
    }
    },5000);
}
function userSearchProvider(){
    jsonFilePath = './Database/userData.json';
    fetch(jsonFilePath).then(response => {
        if(!response.ok){
            throw new Error('Net response not ok!');
        }
        return response.json();
    }).then(temp => {
        userPortfolio = temp;
    }).catch(err => console.log("Error to fetching user data \n",err));
}
function userSearchSetStyle(){
    if(userPortfolio!=undefined||userPortfolio!=''){
        temp = '<ul>';
        if(userPortfolio.length>0){
            for(let i=0; i<userPortfolio.length; i++){
                let id = Math.floor(Math.random()*userPortfolio.length);
                let a = userPortfolio[i];
                userPortfolio[i] = userPortfolio[id];
                userPortfolio[id] = a;
            }
            for(let i=0; i<userPortfolio.length; i++){
                temp += `
                <li class="user user-port" onclick="openUserPort(${userPortfolio[i].id}); gloSearchOff();">
                    <div class="user-left"><span>${(userPortfolio[i].name[0]).toUpperCase()}</span></div>
                    <div class="user-right">
                        <div class="user-right-upper">${userPortfolio[i].name}</div>
                        <div class="user-right-lower">${userPortfolio[i].post==0?'Owner':'Volunteer'} | ${userPortfolio[i].join}</div>
                    </div>
                </li>`;
            }
        }
        temp += '</ul>';
        document.getElementById('userSearch').innerHTML = temp;
    }else{
        document.getElementById('userSearch').innerHTML = '';
    }
}
function apiProvider(){
    if(productLib.length>0){
        productSwapper();
        let data = '<ul>';
        let card = productLib;
        for(let i=0; i<card.length; i++){
            data += `
            <li class="api api-port" onclick="pageRout(7);currentProductIdentity('${card[i].id}'); gloSearchOff();">
                <div class="api-upper">
                    <div class="api-upper-left"><span style="background: ${randomDpColor()};">${(card[i].name[0]).toUpperCase()}</span></div>
                    <div class="api-upper-right"><span>${card[i].name}</span></div>
                </div>
                <div class="api-middle">
                    <p>${card[i].description}</p>
                </div>
                <div class="api-lower"><div><i class="fa fa-calendar"></i> ${card[i].modified}</div>|<div>${(card[i].cost==0?'Free of cost':'Premium Price')}</div></div>
            </li>`;
        }
        data += '</ul><div class="load" onclick="pageRout(7);">Load More..</div>';
        document.getElementById('apiSearch').innerHTML = data;
    }
}
function pageProvider(){
    if(pageList.length>0){
        let data = '<ul>';
        for(let i=0; i<pageList.length; i++){
            data += `
            <li class="page quicklink" onclick="pageRout(${i}); gloSearchOff();">
                <i class="fa fa-globe"></i>
                ${pageList[i].split('Page')[0]+' Page'}
            </li>`;
        }
        data += '</ul>';
        document.getElementById('pageSearch').innerHTML = data;
    }
}