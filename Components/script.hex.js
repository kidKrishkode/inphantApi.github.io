function user(){
    const url = new URL(window.location['href']);
    const params = url.searchParams;
    if(params.has('page')){
        if(approximateTest(`"${new URL(window.location['href'])}"`)==true){
            if(params.has('pid')&&params.get('page')==pageList[1]&&params.get('env')=='true'){
                document.getElementById("testWindow").style.display = "block";
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