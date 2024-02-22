function productCardMaker(id){
    if(id<=productLib.length&&id>=0){
        let card = productLib[id];
        let tuple = `
        <li class="drop">
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
                    <div class="product-owner">@${card.owner} - ${card.owner=='kidKrishkode'?'Owner':'Others'}</div>
                </div>
                <div class="product-tags"></div>
                <div class="product-component-bottom">
                    <div class="product-info"><i class="fa fa-line-chart"></i>${(card.rating).toFixed(1)}/10</div>
                    <div class="product-info"><i class="fa fa-calendar"></i>${card.modified}</div>
                    <div class="product-info"><i class="fa fa-history"></i>391ms</div>
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
function search_product(data,list){
    let input = document.getElementById(`${data}`).value;
    input=input.toLowerCase();
    let x = document.getElementsByClassName(`${list}`);
    for(i = 0; i<x.length; i++){ 
        if(!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }else{
            x[i].style.display="list-item";       
        }
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