function user(){
    const url = new URL(window.location['href']);
    const params = url.searchParams;
    if(params.has('page')){
        if(approximateTest(`"${new URL(window.location['href'])}"`)==true){
            if(params.has('pid')&&params.get('page')==pageList[1]&&params.get('env')=='true'){
                document.getElementById("testWindow").style.display = "block";
                testInviromentDeploy();
            }else{
                document.getElementById("testWindow").style.display = "none";
                params.set('test','null');
                // alert("Flage 1");
                verify();
            }
        }else{
            if(approximateTest(`"${new URL(window.location['href'])}"`)==false){
                params.set('test','null');
                // alert("Flage 2");
                verify();
            }
        }
    }else{
        document.getElementById("testWindow").style.display = "none";
        // alert("Flage 3");
        verify();
    }
    window.addEventListener("blur", () => {
        if(new URL(window.location['href']).hostname!=''){
            document.title = "Future is wait for you!";
            body.style.opacity = '0.5';
        }
    });
    window.addEventListener("focus", () => {
        if(new URL(window.location['href']).hostname!=''){
            document.title = "Inphant Api";
            body.style.opacity = '1';
        }
    });
}
function mainPage(){
    window.location = './main.html';
}
function pidJustify(pid){
    let loc=0
    for(let j=0; j<productLib.length; j++){
        if(productLib[j].id==pid){
            loc=1;
            return true;
        }
    }
    if(loc==0){
        return false;
    }
}
function testInviromentDeploy(){
    try{
        redirectConsoleToDiv();
    }catch(e){
        console.error(e);
    }
    console.warn("This pannel is not same as DevTool's console pannel");
    changePanel('execute','console');
    terMinal('consoleOutput');
    productCodeLoad();
    htmlCompiler('codeInput');
    ideDeploy('#codeInput','#codeInput-line');
    jsCompiler('codeInputJs');
    ideDeploy('#codeInputJs','#codeInputJs-line');
    setTimeout(()=>{
        runCode();
    },1000);
}
function redirectConsoleToDiv(){
    const consoleOutputDiv = document.getElementById('consoleOutput');
    const originalConsoleLog = console.log;
    const originalConsoleInfo = console.info;
    const originalConsoleWarn = console.warn;
    const originalConsoleError = console.error;

    console.log = function(message) {
        originalConsoleLog.apply(console, arguments);
        consoleOutputDiv.innerHTML += `<span class="bg_log"><i class="fa"></i><span class="mess">${message}</span><span class="rout-link">index.vm:1</span></span>`;
    };

    console.info = function(message) {
        originalConsoleInfo.apply(console, arguments);
        consoleOutputDiv.innerHTML += `<span class="bg_log"><i class="fa"></i><span class="mess">${message}</span><span class="rout-link">index.vm:1</span></span>`;
    };

    console.warn = function(message) {
        originalConsoleWarn.apply(console, arguments);
        consoleOutputDiv.innerHTML += `<span class="bg_warn"><i class="fa fa-warning org"></i><span class="mess">${message}</span><span class="rout-link">index.vm:1</span></span>`;
    };

    console.error = function(message) {
        originalConsoleError.apply(console, arguments);
        consoleOutputDiv.innerHTML += `<span class="bg_error"><i class="fa fa-times-circle"></i><span class="mess">${message}</span><span class="rout-link">index.vm:1</span></span>`;
    };
    consoleOutputDiv.innerHTML = (consoleOutputDiv.innerHTML).replace('                                ','');
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
    // document.exeCommand("copy");
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
    codeStyleRecover(codeElement);
}
function updateLineNumbers(){
    const code = codeElement.innerText;
    const lines = code.split("\n");
    const lineCount = lines.length+1;
    lineNumbers.innerHTML = Array.from({ length: lineCount-1 }, (_, i) => i + 1).join("<br>");
}
function codeStyleRecover(codeElement){
    codeElement.style.fontSize = "87.5%";
    codeElement.style.fontFamily = "monospace";
    codeElement.style.lineHeight = "1.6";
    codeElement.style.color = "#fff";
}
function changePanel(id1,id2){
    document.getElementById(id1+'-head').style.boxShadow = "0px 6px 4px -6px #fff";
    document.getElementById(id1+'-body').style.display = "block";
    document.getElementById(id2+'-head').style.boxShadow = "none";
    document.getElementById(id2+'-body').style.display = "none";
}
function runCode(){
    let htmlcode = ((document.getElementById("codeInput").textContent).replace('<script src="./main.js"></script>',`<script>\n${document.getElementById('codeInputJs').innerText}</script>`)).replace("</head>",`</head><style>body{background: #fff;color: #0c8ff9;padding: 20px;font-family: sans-serif;}p{color: green;}</style>`);
    resetIframeContent();
    let iframe = document.getElementById("exectionOutput");
    let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(htmlcode);
    iframeDoc.close();
    ideDeploy('#codeInput','#codeInput-line');
    ideDeploy('#codeInputJs','#codeInputJs-line');
    document.getElementById("codeInputJs").innerHTML = (document.getElementById("codeInputJs").innerHTML).replaceAll('        ','');
}
function productCodeLoad(){
    let newProduct = productLib[(new URL(window.location['href']).searchParams).get('pid')];
    let vBody = newProduct.vanilla[1]==''||'< !-- programe body -- >'?'< h2@ >Ahoy hoy Universe!< /h2@ > \n\t< p@ >Hi i am Krish, nice to meet you. Can you want to join us?< /p@ >':newProduct.vanilla[1];
    let vlib = newProduct.vanilla[2]==''?stdlibsrc:newProduct.vanilla[2];
    document.getElementById('codeInput').innerHTML=
    (((vanillaHtmlContent.replaceAll('$|title|$',newProduct.vanilla[0])).replaceAll('$|body|$',vBody).replaceAll('$|libplugin|$',vlib)).replaceAll('$|apiplugin|$',`&lt; script@ |src="https://kidKrishkode.github.io/inphantApi.github.io/APIs/${newProduct.apiName}" >< /script@ >`));
    document.getElementById('codeInputJs').innerHTML = newProduct.vanilla[3];
}
function editmode(id){
    if(document.getElementById(id).contentEditable == "false"){
        document.getElementById(id).contentEditable = "true";
        document.getElementById(id).spellcheck = "true";
        document.getElementById(id).textContent = document.getElementById(id).textContent;
    }else{
        alert("Already Edit mode is onn!");
    }
}
function runCancel(){
    let iframe = document.getElementById("exectionOutput");
    let htmlcode = " ";
    let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(htmlcode);
    iframeDoc.close();
    console.clear();
}
function resetLab(){
    document.getElementById('consoleOutput').innerHTML='';
    document.getElementById('codeInput').contentEditable = "false";
    document.getElementById('codeInputJs').contentEditable = "false";
    console.clear();
    testInviromentDeploy();
}
function resetIframeContent(){
    var iframe = document.getElementById('exectionOutput');
    if(iframe){
        iframe.src = 'about:blank';
    }
    console.clear();
}
// document.getElementById('codeInput').addEventListener('input', function(event){
//     var code = event.target.innerText;
//     var caretPosition = getCaretCharacterOffsetWithin(event.target);
//     console.log(caretPosition);
//     if(code.charAt(caretPosition) === '>'){
//         var openingTagIndex = code.lastIndexOf('<', caretPosition - 1);
//         if(openingTagIndex !== -1){
//             var tagName = code.substring(openingTagIndex + 1, caretPosition);
//             var closingTag = '</' + tagName + '>';
//             document.getElementById('codeInput').innerText = code.slice(0, caretPosition+1) + closingTag + code.slice(caretPosition+1);
//             setCaretPosition(event.target, caretPosition + closingTag.length);
//             console.log(event.target.childNodes[0]);
//         }
//     }
// });
function completeTags(){
    // let code = document.getElementById('codeInput').innerText;
    // let target = document.getElementById('codeInput');
    // let caretPosition = getCaretCharacterOffsetWithin(target);
    // if(code.charAt(caretPosition) == '>'){
    //     let openingTagIndex = code.lastIndexOf('<', caretPosition);
    //     if(openingTagIndex !== -1 && code.charAt(openingTagIndex+1) != '/'){
    //         let tagName = code.substring(openingTagIndex + 1, caretPosition);
    //         let closingTag = '</' + tagName + '>';
    //         document.getElementById('codeInput').innerText = code.slice(0, caretPosition+1) + closingTag + code.slice(caretPosition+1);
    //         setCaretPosition(target, caretPosition + closingTag.length);
    //         // console.log(target.childNodes[0]);
    //     }
    // }
}
function getCaretCharacterOffsetWithin(element){
    let caretOffset = 0;
    let doc = element.ownerDocument || element.document;
    let win = doc.defaultView || doc.parentWindow;
    let sel;
    if(typeof win.getSelection != 'undefined'){
        sel = win.getSelection();
        if(sel.rangeCount > 0){
            let range = win.getSelection().getRangeAt(0);
            let preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(element);
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            caretOffset = preCaretRange.toString().length;
        }
    }else if((sel = doc.selection) && sel.type != 'Control'){
        let textRange = sel.createRange();
        let preCaretTextRange = doc.body.createTextRange();
        preCaretTextRange.moveToElementText(element);
        preCaretTextRange.setEndPoint('EndToEnd', textRange);
        caretOffset = preCaretTextRange.text.length;
    }
    return caretOffset;
}
function setCaretPosition(el, position){
    try{
        let range = document.createRange();
        let sel = window.getSelection();
        range.setStart(el.childNodes, position);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
        el.focus();
    }catch(e){
        console.log("Error to modified!");
    }
}
