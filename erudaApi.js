const softFileName = 'erudaApi';
const softFileExe = 'js';
const softApiPath = [
    `https://kidKrishkode.github.io/softApi.github.io/${softFileName}.${softFileExe}`,      //hosted
    `D:/.vscode/Vs%20programmes/softApi/${softFileName}.${softFileExe}`,                    //local
    `http://127.0.0.1:5500/${softFileName}.${softFileExe}`,                                 //live
    ``,                                                                                     //mobile
];
function add(a, b){
    return a + b;
}
function sub(a, b){
    return a - b;
}
function multi(a, b){
    return a * b;
}
function handleRequest(requestUrl){
    if(linkChecker(requestUrl)){
        const url = new URL(requestUrl);
        const params = url.searchParams;
        const operation = params.get('operation');
        const operand1 = parseFloat(params.get('operand1'));
        const operand2 = parseFloat(params.get('operand2'));
        let result;
        if(operation === 'add'){
            result = add(operand1, operand2);
        }else if(operation === 'sub'){
            result = sub(operand1, operand2);
        }else if(operation === 'multi'){
            result = multi(operand1, operand2);
        }else{
            return{
                error: 'Invalid operation. Supported operations are "add" and "sub".'
            };
        }
        // Return the result
        return{
            result: result,
            time: (new Date).getTime()
        };
    }else{
        console.error("Error 400!\nRequest not perfect!");
    }
}
function message(){
    alert("Hello, my self api, nice to meet you.");
}
// Example usage:
// const requestUrl = 'https://kidKrishkode.github.io/softApi.github.io/erudaApi.js?operation=add&operand1=5&operand2=2';
// const response = handleRequest(requestUrl);
// console.log(response);
function linkChecker(requestUrl){
    //ended:    '?operation=add&operand1=5&operand2=2';
    //hosted:   'https://kidKrishkode.github.io/softApi.github.io/erudaApi.js';
    //local:    'D:\.vscode\Vs%20programmes\myApi\erudaApi.js';
    //live:     'http://127.0.0.1:5500/erudaApi.js';
    //mobile:   '';

    document.body.innerHTML += requestUrl+'<br>';
    const parts = requestUrl.split('?');
    const beforeQuestionMark = parts[0];
    // console.log(beforeQuestionMark);
    for(let i = 0; i < softApiPath.length; i++){
        const regex = new RegExp('^' + softApiPath[i].replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '$');
        if(regex.test(beforeQuestionMark)){
            return true;
        }
    }
    return false;
}
function voiceOver(requestUrl){
    if(linkChecker(requestUrl)){
        const url = new URL(requestUrl);
        const params = url.searchParams;
        const message = params.get('message');
        const messageLang = params.get('lang');
        if(message==''||message==undefined){
            message = "This feature is not available in this version, please try another options";
        }try{
            const speech = new SpeechSynthesisUtterance();
            speech.lang = messageLang==''?'en':messageLang;
            speech.text = message;
            window.speechSynthesis.speak(speech);
        }catch(e){
            alert(message);
            console.log("This device not support audio system");
        }
    }else{
        console.error("Error 400!\nRequest not perfect!");
    }
    return null;
}
