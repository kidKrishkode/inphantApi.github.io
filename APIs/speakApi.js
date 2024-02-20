try{
    if(host != undefined){
        use++;
    }else{
        use--;
    }
}catch(e){
    console.warn("Please at first mention inphantSTDlib.min.js library!");
}
function speakApi_linkChecker(requestUrl){
    try{
        softFileName = 'speakApi';
        softFileExe = 'js';
        inphantApiPath = [
            `https://${host}/inphantApi.github.io/APIs/${softFileName}.${softFileExe}`,         //hosted
            `D:/.vscode/Vs%20programmes/inphantApi/APIs/${softFileName}.${softFileExe}`,        //local
            `http://127.0.0.1:5500/APIs/${softFileName}.${softFileExe}`,                        //live
            ``,                                                                                 //mobile
        ];
    }catch(err){
        console.log("Please make sure you are add inphantSTDlib.min.js library at first?");
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
function speakApi_linkNotPerfect(){
    try{
        if(host!=undefined){
            console.error("Error 400!\nUrlSyntexError: Requested url not perfectly react! (reading 'authKey')\n\tat inphantApi.github.io");
        }
    }catch(e){
        console.error("Error 404!\nFrameWorkError: Library files are not found to compile! (reading 'Files')\n\tat inphantApi.github.io");
    }
}
function voiceToText(signal){
    try{
        if(('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)&&signal){
            const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            recognition.lang = 'en-US';
            recognition.start();
            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                console.log('Speech recognized: ' + transcript);
            };
            recognition.onend = () => {
                console.log('Speech recognition ended');
            };
            recognition.onerror = (event) => {
                console.error('Speech recognition error occurred: ' + event.error);
                return {result: null,time: (new Date).getTime()};
            };
            return {result: true, script: transcript,time: (new Date).getTime()};
        }else{
            console.error('Speech recognition not supported in this browser.');
        }
    }catch(error){
        console.warn("Speech recognition not possible!");
    }
}
function textToVoice(requestUrl){
    const queryString = requestUrl.split('?')[1];
    if(!queryString){
        return false;
    }
    const params = new URLSearchParams(queryString);
    const message = params.has('message') ? params.get('message') : "Ahoy hoy, I am Inphant API, nice to meet you";
    if(!message.trim()){
        return {error: "message information not found in url"};
    }
    const language = params.get('language') || "English";
    let gender = params.get('gender') || "female";
    gender = gender.toLowerCase();
    const voiceParams = {
        text: message,
        lang: language
    };
    if(gender === 'male'){
        voiceParams.gender = 'male';
    }else{
        voiceParams.gender = 'female';
    }
    if('speechSynthesis' in window || 'webkitSpeechSynthesis' in window){
        const utterance = new SpeechSynthesisUtterance(voiceParams.text);
        utterance.lang = voiceParams.lang;
        utterance.voice = speechSynthesis.getVoices().find(voice => voice.name === `${voiceParams.lang} ${voiceParams.gender}`);
        speechSynthesis.speak(utterance);
        return {result: true, time: (new Date).getTime()};
    }else{
        console.warn("Your browser doesn't support speech synthesis.");
        return null;
    }
}
function textToText(requestUrl){
    const url = new URL(requestUrl);
    const params = url.searchParams;
    const message = params.has('message') ? params.get('message') : "Ahoy hoy, I am Inphant API, nice to meet you";
    if(!message.trim()){
        return {error: "message information not found in url"};
    }
    return {result: message, time: (new Date).getTime()};
}
function speechOver(requestUrl){
    if(speakApi_linkChecker(requestUrl)){
        if(extra_params(requestUrl, ['language','gender','message','operation','from','to'])){
            const url = new URL(requestUrl);
            const params = url.searchParams;
            if(params.get('operation') === 'convert'){
                if(params.has('from')&&params.has('to')){
                    if(params.get('from')==='voice'&&params.get('to')==='text'){
                        return voiceToText(true);
                    }else if(params.get('from')==='text'&&params.get('to')==='voice'){
                        return textToVoice(requestUrl);
                    }else if(params.get('from')==='text'&&params.get('to')==='text'){
                        return textToText(requestUrl);
                    }else if(params.get('from')==='voice'&&params.get('to')==='voice'){
                        temp = voiceToText(true);
                        if(temp.result==true){
                            return textToVoice(`https://kidKrishkode.github.io/inphantApi.github.io/APIs/speakApi.js?message=${temp.script}&language=en`);
                        }
                    }else{
                        console.warn("Unwanted convertation not possible");
                    }
                }else{
                    console.warn("Convertations attributs are not present!");
                }
            }else{
                console.error("Error 400!\nUrlSyntexError: Requested url not perfectly react! (reading 'operation')\n\tat inphantApi.github.io");
            }
        }else{
            return null;
        }
    }else{
        speakApi_linkNotPerfect();
    }
}