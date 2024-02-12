try{
    if(host != undefined){
        use++;
    }else{
        use--;
    }
}catch(e){
    console.warn("Please at first mention softSTDlib.min.js library!");
}
function animaleApi_linkChecker(requestUrl){
    try{
        softFileName = 'animaleApi';
        softFileExe = 'js';
        softApiPath = [
            `https://${host}/softApi.github.io/${softFileName}.${softFileExe}`,     //hosted
            `D:/.vscode/Vs%20programmes/softApi/${softFileName}.${softFileExe}`,                   //local
            `http://127.0.0.1:5500/${softFileName}.${softFileExe}`,                                //live
            ``,                                                                                    //mobile
        ];
    }catch(err){
        console.log("Please make sure you are add softSTDlib.min.js library at first?");
    }
    if(requestUrl==''||requestUrl==undefined){
        console.error("Error 404!\nUrlSyntexError: Request url not found! (reading 'url')\n\tat softApi.github.io");
        return false;
    }else{
        document.body.innerHTML += requestUrl+'<br>';
        const parts = requestUrl.split('?');
        const beforeQuestionMark = parts[0];
        for(let i = 0; i < softApiPath.length; i++){
            const regex = new RegExp('^' + softApiPath[i].replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '$');
            if(regex.test(beforeQuestionMark)){
                return true;
            }
        }
        return false;
    }
}
function animaleApi_linkNotPerfect(){
    try{
        if(host!=undefined){
            console.error("Error 400!\nUrlSyntexError: Requested url not perfectly react! (reading 'authKey')\n\tat softApi.github.io");
        }
    }catch(e){
        console.error("Error 404!\nFrameWorkError: Library files are not found to compile! (reading 'Files')\n\tat softApi.github.io");
    }
}
let animaleKingDom, temp=0;
function getRandomAnimale(requestUrl){
    if(animaleApi_linkChecker(requestUrl)){
        const url = new URL(requestUrl);
        const params = url.searchParams;
        let operation, sizeofList, repeat;
        if(AnimaleOperationCheck(requestUrl)==true){
            operation = params.get('operation');
        }else{
            return AnimaleOperationCheck(requestUrl);
        }
        sizeofList = params.get('random')>0?params.get('random'):1;
        if(params.get('repeat')){
            if(params.get('repeat')==='no-repeat'){
                repeat = 1;
            }else if(params.get('repeat')==='repeat'){
                repeat = 0;
            }else{
                console.warn("UnExpected parameter's value hit at softApi.githu.io from clientSide!");
                repeat = 0;
            }
        }else{
            repeat = 0;
        }
        if(animaleKingDom!=undefined){
            var cap = [], i=0, list = [];
            for(const key of Object.keys(animaleKingDom)){
                cap[i] = key;
                i++;
            }
            if(sizeofList<=cap.length){
                for(i=0; i<sizeofList; i++){
                    temp = cap[Math.floor(Math.random()*cap.length)];
                    if(repeat==1){
                        for(let j=0; j<list.length; j++){
                            if(list[j]==temp){
                                i--;
                                repeat = 0;
                                j=list.length+2;
                            }
                        }
                        if(repeat==0){
                            repeat=1;
                        }else{
                            list[i] = temp;
                        }
                    }else{
                        list[i] = temp;
                    }
                }
            }else{
                console.warn("Requirments is to high as expection, please reduce random value");
                return{result: 0, time: (new Date).getTime()};
            }
            return{result: list, time: (new Date).getTime()};
        }else{
            console.log("Please make syntax properly!");
        }
    }else{
        animaleApi_linkNotPerfect();
    }
}
function getAnimaleData(requestUrl){
    if(animaleApi_linkChecker(requestUrl)){
        const url = new URL(requestUrl);
        const params = url.searchParams;
        let operation,name,i=0,j=0;
        if(AnimaleOperationCheck(requestUrl)==true){
            operation = params.get('operation');
        }else{
            return AnimaleOperationCheck(requestUrl);
        }
        if(params.get('name')){
            name = (params.get('name'));
        }else{
            console.error("Error 400!\nUrlSyntexError: Requested url not perfectly react! (reading 'name')\n\tat softApi.github.io");
            return{error: 'Animale name not found!'};
        }
        if(animaleKingDom!=undefined){
            for(const key of Object.keys(animaleKingDom)){
                if((key) == name){
                    for(const value of Object.values(animaleKingDom)){
                        if(i==j){
                            return{result: value, time: (new Date).getTime()};
                        }
                        j++;
                    }
                }
                i++;
            }
            for(const value of Object.values(animaleKingDom)){
                if(value.ScienceName == name){
                    return{result: value, time: (new Date).getTime()};
                }
            }
            return{result: "not found", time: (new Date).getTime()};
        }else{
            console.log("Please make syntax properly!");
        }
    }else{
        animaleApi_linkNotPerfect();
    }
}
function AnimaleOperationCheck(requestUrl){
    const url = new URL(requestUrl);
    const params = url.searchParams;
    if(params.get('operation')){
        if(params.get('operation')==='get'){
            return true;
        }else if(params.get('operation')==='set'||params.get('operation')==='push'){
            return{error: 'Changing data not possible at clientSide!'};
        }else{
            return{error: 'Operation type is not define!'};
        }
    }else{
        return{error: 'No operation found in url'};
    }
}
function RefreshAnimaleData(){
    if(window.location.href=='http://127.0.0.1:5500/index.html'){
        jsonFilePath = `http://127.0.0.1:5500/animaleApi.json`;
    }else{
        jsonFilePath = `https://${host}/softApi.github.io/animaleApi.json`;
    }
    fetch(jsonFilePath).then(response => {
        if(!response.ok){
            throw new Error('Net response not ok!');
        }
        return response.json();
    }).then(temp => {
        animaleKingDom = temp;
    }).catch(err => console.log("Error to fetching animale data \n",err));
}