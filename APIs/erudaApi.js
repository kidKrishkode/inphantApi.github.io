try{
    if(host != undefined){
        use++;
    }else{
        use--;
    }
}catch(e){
    console.warn("Please at first mention inphantSTDlib.min.js library!");
}
function erudaApi_linkChecker(requestUrl){
    try{
        softFileName = 'erudaApi';
        softFileExe = 'js';
        inphantApiPath = [
            `https://${host}/inphantApi.github.io/APIs/${softFileName}.${softFileExe}`,             //hosted
            `D:/.vscode/Vs%20programmes/inphantApi/APIs/${softFileName}.${softFileExe}`,            //local
            `http://127.0.0.1:5500/APIs/${softFileName}.${softFileExe}`,                            //live
            ``,                                                                                     //mobile
        ];
    }catch(err){
        console.log("Please make sure you are add inphantSTDlib.min.js library at first?");
        return null;
    }
    if(requestUrl==''||requestUrl==undefined){
        console.error("Error 404!\nUrlSyntexError: Request url not found! (reading 'url')\n\tat inphantApi.github.io");
        return false;
    }else{
        document.body.innerHTML += requestUrl+'<br>';
        const parts = requestUrl.split('?');
        const beforeQuestionMark = parts[0];
        for(let i = 0; i < inphantApiPath.length; i++){
            const regex = new RegExp('^' + inphantApiPath[i].replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '$');
            if(regex.test(beforeQuestionMark)){
                return true;
            }
        }
        return false;
    }
}
function erudaApi_linkNotPerfect(){
    try{
        if(host!=undefined){
            console.error("Error 400!\nUrlSyntexError: Requested url not perfectly react! (reading 'authKey')\n\tat inphantApi.github.io");
        }
    }catch(e){
        console.error("Error 404!\nFrameWorkError: Library files are not found to compile! (reading 'Files')\n\tat inphantApi.github.io");
    }
}
function add(list){
    let ans=0;
    for(let i=0; i<list.length; i++){
        ans += list[i];
    }
    return ans;
}
function sub(list){
    let ans=list[0];
    for(let i=0; i<list.length; i++){
        if(list[i+1]!=undefined){
            ans -= list[i+1];
        }
    }
    return ans;
}
function multi(list){
    let ans=list[0];
    for(let i=0; i<list.length; i++){
        if(list[i+1]!=undefined){
            ans *= list[i+1];
        }
    }
    return ans;
}
function divi(list){
    let ans=list[0];
    for(let i=0; i<list.length; i++){
        if(list[i+1]!=undefined){
            ans /= list[i+1];
        }
    }
    return ans;
}
function pow(list){
    let ans=list[0];
    for(let i=0; i<list.length; i++){
        if(list[i+1]!=undefined){
            ans = Math.pow(ans,list[i+1]);
        }
    }
    return ans;
}
function fact(value){
    for(let i=value-1; i>1; i--){
        value *= i; 
    }
    return value;
}
function mathCalc(requestUrl){
    if(erudaApi_linkChecker(requestUrl)){
        const url = new URL(requestUrl);
        const params = url.searchParams;
        let list = 0, operation;
        if(params.get('operation')){
            operation = params.get('operation');
        }else{
            return{error: 'No operation found in url'};
        }
        list = mathValueCatch(requestUrl);
        if(list.length>1){
            let result;
            if(operation === 'add'){
                result = add(list);
            }else if(operation === 'sub'){
                result = sub(list);
            }else if(operation === 'multi'){
                result = multi(list);
            }else if(operation === 'divi'){
                result = divi(list);
            }else if(operation === 'pow'){
                result = pow(list);
            }else{
                return{
                    error: 'Invalid operation. Supported operations are considered only.'
                };
            }
            return{
                result: result,
                time: (new Date).getTime()
            };
        }else{
            return list;
        }
    }else{
        erudaApi_linkNotPerfect();
    }
}
function factorial(requestUrl){
    const url = new URL(requestUrl);
    const params = url.searchParams;
    if(erudaApi_linkChecker(requestUrl)){
        if(params.get('operation')){
            console.error("Error 200!\nExtraParamsUrl: Operation not need for this expression! (reading 'url')\n\tat inphantApi.github.io");
        }
        let list = mathValueCatch(requestUrl);
        if(list.length>1){
            let result;
            result = fact(list[0]);
            return{
                result: result,
                time: (new Date).getTime()
            };
        }else{
            return list;
        }
    }else{
        erudaApi_linkNotPerfect();
    }
}
function mathValueCatch(requestUrl){
    const url = new URL(requestUrl);
    const params = url.searchParams;
    let list=0;
    if(!params.get('arr')&&(params.get('operand1')||params.get('value1'))){
        list = [],i=0;
        while(i!=-1){
            if(params.get(`operand${i+1}`)&&!params.get(`value${i+1}`)){
                list[i] = parseFloat(params.get(`operand${i+1}`));
                i++;
            }else if(!params.get(`operand${i+1}`)&&params.get(`value${i+1}`)){
                list[i] = parseFloat(params.get(`value${i+1}`));
                i++;
            }else{
                i=-1;
            }
        }
        if(list.length<1){
            return{
                result: null,
                value: list.length,
                time: (new Date).getTime()
            };
        }
        return list;
    }else if(!params.get('operand1')&&!params.get('value1')){
        list = (params.get('arr')).replaceAll('[','');
        list = (list).replaceAll(']','');
        if(list==''){
            return{
                result: null,
                length: list.length,
                time: (new Date).getTime()
            };
        }
        let a='', b=[];
        for(let i=0; i<list.length+1; i++){
            if(list[i]!=','&&i<list.length){
                a += list[i];
            }else{
                if(parseFloat(a)!=''||parseFloat(a)!=NaN||parseFloat(a)!=undefined){
                    b[b.length] = parseFloat(a);
                    a = '';
                }
            }
        }
        list = b;
        if(list.length<1){
            return{
                result: null,
                length: list.length,
                time: (new Date).getTime()
            };
        }
        return list;
    }else{
        return{error: "Doblue type of entry not valid, choose any one type!",result: null};
    }
}
function voiceOver(requestUrl){
    if(erudaApi_linkChecker(requestUrl)){
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
        erudaApi_linkNotPerfect();
    }
    return null;
}