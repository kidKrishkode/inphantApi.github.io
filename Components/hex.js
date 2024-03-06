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
    console.log("Welome to global search");
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
    // if(link==''||link==undefined){
    //     link='';
    // }else{
    //     link='+'+link;
    // }
    // window.location = `./index.html${link}`;
    alert("test");
}
function linkChecker(m){
    var currentLink = window.location;
    var currentHref = currentLink['href'];
    const afterQuestionMark = currentHref.split('?')[1];
    if(afterQuestionMark==''||afterQuestionMark==undefined){
        testPageRoute(afterQuestionMark);
        pageRout(m);
    }else{
        const url = new URL(currentHref);
        const params = url.searchParams;
        if(params.has('page')){
            if(approximateTest(afterQuestionMark)){
                if(goToPage(params.get('page'))){
                    if(params.has('search')){
                        activeSearchBar(params.get('page'),params.get('search'));
                    }
                    if(params.has('pid')&&params.get('page')==pageList[1]){
                        if(pidJustify(params.get('pid'))){
                            pageRout(7);
                        }else{
                            alert("Sorry, your product not identify.\nEigther it is not present or deleted or link will corapted!");
                        }
                    }
                }else{
                    alert("Sorry page not found");
                    testPageRoute('');
                }
            }else{
                testPageRoute(afterQuestionMark);
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
function approximateTest(link){
    console.log("test is ok");
    return true;
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