function htmlCompiler(fieldName){
    let frog = document.getElementById(fieldName).innerHTML;
    //console.log(frog);
    frog = frog.replaceAll("&lt; /", "<span class='blu'>&lt;/</span>");
    frog = frog.replaceAll("&lt; ", "<span class='blu'><</span>");
    frog = frog.replaceAll(" &gt;", "<span class='blu'>></span>");
    //html tag name color change
    frog = frog.replaceAll('h1@', "<span class='red'>h1</span>");
    frog = frog.replaceAll('h2@', "<span class='red'>h2</span>");
    frog = frog.replaceAll('h3@', "<span class='red'>h3</span>");
    frog = frog.replaceAll('h4@', "<span class='red'>h4</span>");
    frog = frog.replaceAll('h5@', "<span class='red'>h5</span>");
    frog = frog.replaceAll('h6@', "<span class='red'>h6</span>");
    frog = frog.replaceAll('span@', "<span class='red'>span</span>");
    frog = frog.replaceAll('div@', "<span class='red'>div</span>");
    frog = frog.replaceAll('p@', "<span class='red'>p</span>");
    frog = frog.replaceAll('table@', "<span class='red'>table</span>");
    frog = frog.replaceAll('tr@', "<span class='red'>tr</span>");
    frog = frog.replaceAll('td@', "<span class='red'>td</span>");
    frog = frog.replaceAll('th@', "<span class='red'>th</span>");
    frog = frog.replaceAll('hr@', "<span class='red'>hr</span>");
    frog = frog.replaceAll('header@', "<span class='red'>header</span>");
    frog = frog.replaceAll('footer@', "<span class='red'>footer</span>");
    frog = frog.replaceAll('section@', "<span class='red'>section</span>");
    frog = frog.replaceAll('ul@', "<span class='red'>ul</span>");
    frog = frog.replaceAll('li@', "<span class='red'>li</span>");
    frog = frog.replaceAll('main@', "<span class='red'>main</span>");
    frog = frog.replaceAll('body@', "<span class='red'>body</span>");
    frog = frog.replaceAll('html@', "<span class='red'>html</span>");
    frog = frog.replaceAll('head@', "<span class='red'>head</span>");
    frog = frog.replaceAll('style@', "<span class='red'>style</span>");
    frog = frog.replaceAll('script@', "<span class='red'>script</span>");
    frog = frog.replaceAll('link@', "<span class='red'>link</span>");
    frog = frog.replaceAll('meta@', "<span class='red'>meta</span>");
    frog = frog.replaceAll('title@', "<span class='red'>title</span>");
    frog = frog.replaceAll('img@', "<span class='red'>img</span>");
    frog = frog.replaceAll('audio@', "<span class='red'>audio</span>");
    frog = frog.replaceAll('iframe@', "<span class='red'>iframe</span>");
    frog = frog.replaceAll('button@', "<span class='red'>button</span>");
    //html attributes color change
    frog = frog.replaceAll('classe', "<span class='org'>class</span>");
    frog = frog.replaceAll('|id', "<span class='org'>id</span>");
    frog = frog.replaceAll('|src', "<span class='org'>src</span>");
    frog = frog.replaceAll('|placeholder', "<span class='org'>placeholder</span>");
    frog = frog.replaceAll("|onclick", "<span class='org'>onclick</span>");
    frog = frog.replaceAll("w<span class='org'>id</span>th", "<span class='org'>width</span>");
    frog = frog.replaceAll('|height', "<span class='org'>height</span>");
    frog = frog.replaceAll("<span class='red'>style</span>=", "<span class='org'>style</span>=");
    frog = frog.replaceAll('|alt', "<span class='org'>alt</span>");
    frog = frog.replaceAll('|title=', "<span class='org'>title</span>=");
    frog = frog.replaceAll('|charset', "<span class='org'>charset</span>");
    frog = frog.replaceAll('|http-equiv', "<span class='org'>http-equiv</span>");
    frog = frog.replaceAll('|name=', "<span class='org'>name</span>=");
    frog = frog.replaceAll('|version=', "<span class='org'>version</span>=");
    frog = frog.replaceAll('|content=', "<span class='org'>content</span>=");
    frog = frog.replaceAll('|rel=', "<span class='org'>rel</span>=");
    frog = frog.replaceAll('|href=', "<span class='org'>href</span>=");
    //attributes parameter color change
    frog = frog.replaceAll(`="`, `=<span class='sky'>"`);
    frog = frog.replaceAll(`"n`, `"</span>`);
    frog = frog.replaceAll(`<span class='org'>onclick</span>=<span class='sky'>"`, `<span class='org'>onclick</span>=<span class='sky'>"<span class='grn'>`);
    frog = frog.replaceAll(`();"</span>`, `();</span>"</span>`);
    //commands color change
    frog = frog.replaceAll(`<span class='blu'><</span>!--`, `<span class='gry'>&lt;!--`);
    frog = frog.replaceAll(`--<span class='blu'>></span>`, `--></span>`);
    document.getElementById(fieldName).innerHTML = frog;
}
function cssCompiler(fieldName){
    let frog = document.getElementById(fieldName).innerHTML;
    //console.log(frog);
    //class/id name color change
    frog = frog.replaceAll(`.`, `<span class='org'>.`);
    frog = frog.replaceAll(`#n`, `<span class='org'>#`);
    //innerdata color change
    frog = frog.replaceAll(`{`, `{</span><span class='sky'>`);
    frog = frog.replaceAll(`}`, `</span><span class='org'>}</span>`);
    frog = frog.replaceAll(`;`, `;<span class='sky'>`);
    frog = frog.replaceAll(`:`, `</span>:`);
    frog = frog.replaceAll(`@import`, `<span class='blu'>@import</span>`);
    frog = frog.replaceAll(`url`, `<span class='blu'>url</span>`);
    frog = frog.replaceAll(`@media`, `<span class='blu'>@media</span>`);
    frog = frog.replaceAll(`@keyframe`, `<span class='blu'>@keyframe</span>`);
    //comment color change
    frog = frog.replaceAll(`/*`, `</span><span class='red'>/*`);
    frog = frog.replaceAll(`*/`, `*/</span><span class='sky'>`);
    document.getElementById(fieldName).innerHTML = frog;
}
function jsCompiler(fieldName){
    let frog = document.getElementById(fieldName).innerHTML;
    //console.log(frog);
    frog = frog.replaceAll("s|", `<span class='sky'>`);
    frog = frog.replaceAll("|n", `</span>`);
    frog = frog.replaceAll(`function`, `<span class='blu'>function</span><span class='org'>`);
    frog = frog.replaceAll(`/(`, `</span>(<span class='gry'>`);
    frog = frog.replaceAll(`){`, `</span>){`);
    frog = frog.replaceAll(`var@`, `<span class='prp'>var</span>`);
    frog = frog.replaceAll(`let@`, `<span class='blu'>let</span>`);
    frog = frog.replaceAll(`setTimeout@`, `<span class='blu'>setTimeout</span>`);
    frog = frog.replaceAll(`setInterval@`, `<span class='blu'>setInterval</span>`);
    frog = frog.replaceAll(`void@`, `<span class='blu'>void</span>`);
    frog = frog.replaceAll(`NULL@`, `<span class='blu'>NULL</span>`);
    frog = frog.replaceAll(`null@`, `<span class='blu'>null</span>`);
    frog = frog.replaceAll(`for@`, `<span class='blu'>for</span>`);
    frog = frog.replaceAll(`while@`, `<span class='blu'>while</span>`);
    frog = frog.replaceAll(`do@`, `<span class='blu'>do</span>`);
    frog = frog.replaceAll(`return@`, `<span class='blu'>return</span>`);
    frog = frog.replaceAll(`if@`, `<span class='blu'>if</span>`);
    frog = frog.replaceAll(`else@`, `<span class='blu'>else</span>`);
    frog = frog.replaceAll(`else if@`, `<span class='blu'>else if</span>`);
    frog = frog.replaceAll(`import@`, `<span class='blu'>import</span>`);
    frog = frog.replaceAll(`from@`, `<span class='blu'>from</span>`);
    frog = frog.replaceAll(`=>`, `<span class='blu'>=></span>`);
    frog = frog.replaceAll(`s"`, `<span class='gld'>"`);
    frog = frog.replaceAll(`"n`, `"</span>`);
    frog = frog.replaceAll(`//n`, `</span>`);
    frog = frog.replaceAll(`//`, `<span class='grn'>//`);
    frog = frog.replaceAll(`/*`, `<span class='grn'>/*`);
    frog = frog.replaceAll(`*/`, `*/</span>`);
    frog = frog.replaceAll(`window@`, `<span class='prp'>window</span>`);
    frog = frog.replaceAll(`new@`, `<span class='prp'>new</span>`);
    frog = frog.replaceAll(`Date@`, `<span class='prp'>Date</span>`);
    frog = frog.replaceAll(`Array@`, `<span class='prp'>Array</span>`);
    frog = frog.replaceAll(`|.random`, `.<span class='prp'>random</span>`);
    frog = frog.replaceAll(`Math@`, `<span class='sky'>Math</span>`);
    frog = frog.replaceAll(`|.floor`, `.<span class='sky'>floor</span>`);
    frog = frog.replaceAll(`|.round`, `.<span class='sky'>round</span>`);
    frog = frog.replaceAll(`true@`, `<span class='sky'>true</span>`);
    frog = frog.replaceAll(`false@`, `<span class='sky'>false</span>`);
    frog = frog.replaceAll(`==`, `<span class='sky'>==</span>`);
    frog = frog.replaceAll(`!=`, `<span class='sky'>!=</span>`);
    frog = frog.replaceAll(`&gt;`, `<span class='sky'>&gt;</span>`);
    frog = frog.replaceAll(`&lt;`, `<span class='sky'>&lt;</span>`);
    frog = frog.replaceAll(`+`, `<span class='sky'>+</span>`);
    frog = frog.replaceAll(`-`, `<span class='sky'>-</span>`);
    frog = frog.replaceAll(`classe`, `<span class='sky'>class</span>`);
    frog = frog.replaceAll(`|.getElementById`, `.<span class='sky'>getElementById/span>`);
    frog = frog.replaceAll(`|.querySelector`, `.<span class='sky'>querySelector/span>`);
    frog = frog.replaceAll(`|.querySelectorAll`, `.<span class='sky'>querySelectorAll/span>`);    
    frog = frog.replaceAll(`document@`, `<span class='red'>document</span>`);
    frog = frog.replaceAll(`&amp;&amp;`, `<span class='red'>&&</span>`);
    frog = frog.replaceAll(`||`, `<span class='red'>||</span>`);
    frog = frog.replaceAll("${", `<span class='red'>$</span>{<span class="sky">`);
    frog = frog.replaceAll("}$", `</span>}`);
    frog = frog.replaceAll(`s#|`, `<span class='gld'>&#96;`);
    frog = frog.replaceAll(`|#n`, `&#96;</span>`);
    frog = frog.replaceAll(`/|/`, `//`);
    frog = frog.replaceAll(`f|`, `<span class='org'>`);
    frog = frog.replaceAll(`|f`, `</span>`);
    frog = frog.replaceAll(`|.style`, `.<span class='sky'>style</span>`);
    frog = frog.replaceAll(`|.innerHTML`, `.<span class='sky'>innerHTML</span>`);
    frog = frog.replaceAll(`|.innerText`, `.<span class='sky'>innerText</span>`);
    frog = frog.replaceAll(`|.textContent`, `.<span class='sky'>textContent</span>`);
    frog = frog.replaceAll(`|.src`, `.<span class='sky'>src</span>`);
    frog = frog.replaceAll(`|.herf`, `.<span class='sky'>herf</span>`);
    frog = frog.replaceAll(`pow@`, `.<span class='sky'>pow</span>`);
    frog = frog.replaceAll(`alert@`, `<span class='sky'>alert</span>`);
    frog = frog.replaceAll(`console@`, `<span class='gry'>console</span>`);
    frog = frog.replaceAll(`|.log`, `.<span class='gry'>log</span>`);
    frog = frog.replaceAll(`|.location`, `.<span class='gry'>location</span>`);
    frog = frog.replaceAll(`|.requestAnimationFrame`, `.<span class='gry'>requestAnimationFrame</span>`);
    frog = frog.replaceAll(`|.requestIdleCallback`, `.<span class='gry'>requestIdleCallback</span>`);
    frog = frog.replaceAll(`|.removeEventListener`, `.<span class='gry'>removeEventListener</span>`);
    frog = frog.replaceAll(`|.addEventListener`, `.<span class='gry'>addEventListener</span>`);
    frog = frog.replaceAll(`|.cancelAnimationFrame`, `.<span class='gry'>cancelAnimationFrame</span>`);
    frog = frog.replaceAll(`|.cancelIdleCallback`, `.<span class='gry'>cancelIdleCallback</span>`);
    document.getElementById(fieldName).innerHTML = frog;
}
function phpCompiler(fieldName){
    let frog = document.getElementById(fieldName).innerHTML;
    //console.log(frog);
    //syntex color change
    frog = frog.replaceAll(`&lt; ?php`, `<span class='grn'>&lt;?php</span>`);
    frog = frog.replaceAll(`?&gt;`, `<span class='grn'>?&gt;</span>`);
    frog = frog.replaceAll(`echo`, `<span class='gld'>echo</span>`);
    frog = frog.replaceAll(`mail(`, `<span class='gld'>mail</span>(`);
    frog = frog.replaceAll(`header(`, `<span class='gld'>header</span>(`);
    frog = frog.replaceAll(`s"`, `<span class='org'>"`);
    frog = frog.replaceAll(`"n`, `"</span>`);
    frog = frog.replaceAll(`s'`, `<span class='org'>'`);
    frog = frog.replaceAll(`'n`, `'</span>`);
    frog = frog.replaceAll(`$`, `<span class='blu'>$</span>`);
    frog = frog.replaceAll(`POST`, `<span class='gld'>POST</span>`);
    frog = frog.replaceAll(`if`, `<span class='blu'>if</span>`);
    frog = frog.replaceAll(`else`, `<span class='blu'>else</span>`);
    frog = frog.replaceAll(`else if`, `<span class='blu'>else if</span>`);
    frog = frog.replaceAll(`NULL`, `<span class='blu'>NULL</span>`);
    frog = frog.replaceAll(`!isset`, `<span class='blu'>!isset</span>`);
    frog = frog.replaceAll(`&amp;&amp;`, `<span class='red'>&&</span>`);
    frog = frog.replaceAll(`||`, `<span class='red'>||</span>`);
    frog = frog.replaceAll(`true`, `<span class='prp'>true</span>`);
    frog = frog.replaceAll(`false`, `<span class='prp'>false</span>`);
    frog = frog.replaceAll(`==`, `<span class='prp'>==</span>`);
    frog = frog.replaceAll(`!=`, `<span class='prp'>!=</span>`);
    frog = frog.replaceAll(`+`, `<span class='prp'>+</span>`);
    frog = frog.replaceAll(`-`, `<span class='prp'>-</span>`);
    frog = frog.replaceAll(`*`, `<span class='prp'>*</span>`);
    //comment color change
    frog = frog.replaceAll(`//n`, `</span>`);
    frog = frog.replaceAll(`//`, `<span class='gry'>//`);
    document.getElementById(fieldName).innerHTML = frog;
}
function gcCompiler(fieldName){
	let frog = document.getElementById(fieldName).innerHTML;
    //console.log(frog);
    //header files color change
    frog = frog.replaceAll(`#include`, `<span class='blu'>#include</span>`);
    frog = frog.replaceAll(`include</span>&lt; `, `include</span><span class='org'>&lt;`);
    frog = frog.replaceAll(`.h &gt;`, `.h&gt;</span>`);
    frog = frog.replaceAll(` &gt;@`, `></span>`);
    frog = frog.replaceAll(`using`, `<span class='prp'>using</span>`);
    frog = frog.replaceAll(`namespace`, `<span class='blu'>namespace</span>`);
    frog = frog.replaceAll(`std;`, `<span class='sky'>std</span>;`);
    //resurb word color change
    frog = frog.replaceAll(`int`, `<span class='prp'>int</span>`);
    frog = frog.replaceAll(`void`, `<span class='prp'>void</span>`);
    frog = frog.replaceAll(`float`, `<span class='prp'>float</span>`);
    frog = frog.replaceAll(`double`, `<span class='prp'>double</span>`);
    frog = frog.replaceAll(`long`, `<span class='prp'>long</span>`);
    frog = frog.replaceAll(`bool`, `<span class='prp'>bool</span>`);
    frog = frog.replaceAll(`char`, `<span class='prp'>char</span>`);
    frog = frog.replaceAll(`return`, `<span class='prp'>return</span>`);
    frog = frog.replaceAll(`for(`, `<span class='prp'>for</span>(`);
    frog = frog.replaceAll(`while(`, `<span class='prp'>while</span>(`);
    frog = frog.replaceAll(`do{`, `<span class='prp'>do</span>{`);
    frog = frog.replaceAll(`pr<span class='prp'>int</span>f(`, `<span class='sky'>printf</span>(`);
    frog = frog.replaceAll(`scanf(`, `<span class='sky'>scanf</span>(`);
    frog = frog.replaceAll(`cout`, `<span class='sky'>cout</span>`);
    frog = frog.replaceAll(`cin`, `<span class='sky'>cin</span>`);
    frog = frog.replaceAll(`auto`, `<span class='sky'>auto</span>`);
    frog = frog.replaceAll(`std::`, `<span class='sky'>std</span>::`);
    frog = frog.replaceAll(`else if(`, `<span class='sky'>else if</span>(`);
    frog = frog.replaceAll(`if(`, `<span class='sky'>if</span>(`);
    frog = frog.replaceAll(`else{`, `<span class='sky'>else</span>{`);
    frog = frog.replaceAll(`true`, `<span class='blu'>true</span>`);
    frog = frog.replaceAll(`false`, `<span class='blu'>false</span>`);
    frog = frog.replaceAll(`null`, `<span class='blu'>null</span>`);
    frog = frog.replaceAll(`NULL`, `<span class='blu'>NULL</span>`);
    frog = frog.replaceAll(`malloc`, `<span class='blu'>malloc</span>`);
    frog = frog.replaceAll(`calloc`, `<span class='blu'>calloc</span>`);
    frog = frog.replaceAll(`realloc`, `<span class='blu'>realloc</span>`);
    frog = frog.replaceAll(`unsigned`, `<span class='blu'>unsigned</span>`);
    frog = frog.replaceAll(`EOF`, `<span class='prp'>EOF</span>`);
    frog = frog.replaceAll(`FILE`, `<span class='prp'>FILE</span>`);
    frog = frog.replaceAll(`fopen`, `<span class='sky'>fopen</span>`);
    frog = frog.replaceAll(`fclose`, `<span class='sky'>fclose</span>`);
    frog = frog.replaceAll(`fput`, `<span class='sky'>fput</span>`);
    frog = frog.replaceAll(`fget`, `<span class='sky'>fget</span>`);
    frog = frog.replaceAll(`fprintf`, `<span class='sky'>fprintf</span>`);
    frog = frog.replaceAll(`fscanf`, `<span class='sky'>fscanf</span>`);
    frog = frog.replaceAll(`exit(`, `<span class='blu'>exit</span>(`);
    frog = frog.replaceAll(`break;`, `<span class='blu'>break</span>;`);
    frog = frog.replaceAll(`endl`, `<span class='blu'>endl</span>`);
    //oprators color change
    frog = frog.replaceAll(`&lt; `, `<span class='red'>&lt;</span>`);
    frog = frog.replaceAll(` &gt;`, `<span class='red'>&gt;</span>`);
    frog = frog.replaceAll(`&amp;&amp;`, `<span class='red'>&&</span>`);
    frog = frog.replaceAll(`||`, `<span class='red'>||</span>`);
    frog = frog.replaceAll(`==`, `<span class='red'>==</span>`);
    frog = frog.replaceAll(`!=`, `<span class='red'>!=</span>`);
    frog = frog.replaceAll(`+`, `<span class='red'>+</span>`);
    frog = frog.replaceAll(`-`, `<span class='red'>-</span>`);
    frog = frog.replaceAll(`*`, `<span class='red'>*</span>`);
    frog = frog.replaceAll(`&amp;`, `<span class='blu'>&</span>`);
    //string color change
    frog = frog.replaceAll(`s"`, `<span class='gld'>"`);
    frog = frog.replaceAll(`"n`, `"</span>`);
    frog = frog.replaceAll(`s'`, `<span class='gld'>'`);
    frog = frog.replaceAll(`'n`, `'</span>`);
    //comment color change
    frog = frog.replaceAll(`//n`, `</span>`);
    frog = frog.replaceAll(`//`, `<span class='grn'>//`);
    frog = frog.replaceAll(`<span class='red'>*</span>/`, `*/</span>`);
    frog = frog.replaceAll(`/<span class='red'>*</span>`, `<span class='grn'>/*`);
	document.getElementById(fieldName).innerHTML = frog;
}
function terMinal(fieldName){
	let frog = document.getElementById(fieldName).innerHTML;
	//package manager
	frog = frog.replaceAll(`#az; npm`, `C/myfile/code&gt; <span class='org'>npm</span>`);
	frog = frog.replaceAll(`#az; npx`, `C/myfile/code&gt; <span class='org'>npx</span>`);
	frog = frog.replaceAll(`#az; pip`, `C/myfile/code&gt; <span class='org'>pip</span>`);
	//compiler & executer
	frog = frog.replaceAll(`#az; gcc`, `C/myfile/code&gt; <span class='gld'>gcc</span>`);
	frog = frog.replaceAll(`#az; g++`, `C/myfile/code&gt; <span class='gld'>g++</span>`);
	frog = frog.replaceAll(`#az; gpp`, `C/myfile/code&gt; <span class='gld'>gpp</span>`);
	frog = frog.replaceAll(`#az; ./a.exe`, `C/myfile/code&gt; <span class='gld'>./a.exe</span>`);
	frog = frog.replaceAll(`#az; ./a.out`, `C/myfile/code&gt; <span class='gld'>./a.out</span>`);
	frog = frog.replaceAll(`#az; python`, `C/myfile/code&gt; <span class='gld'>python</span>`);
	frog = frog.replaceAll(`#az; py3`, `C/myfile/code&gt; <span class='gld'>py3</span>`);
	frog = frog.replaceAll(`#az; py`, `C/myfile/code&gt; <span class='gld'>py</span>`);
	frog = frog.replaceAll(`#az; javac`, `C/myfile/code&gt; <span class='gld'>javac</span>`);
	frog = frog.replaceAll(`#az; java`, `C/myfile/code&gt; <span class='gld'>java</span>`);
	frog = frog.replaceAll(`#az; javaml`, `C/myfile/code&gt; <span class='gld'>javaml</span>`);
	//dependencies
	frog = frog.replaceAll(`--save`, `<span class='gry'>--save</span>`);
	frog = frog.replaceAll(`-g`, `<span class='gry'>-g</span>`);
	frog = frog.replaceAll(`-dev`, `<span class='gry'>-dev</span>`);
	//others
    frog = frog.replaceAll(`#az; cls`, `C/myfile/code&gt; <span class='gld'>cls</span>`);
    frog = frog.replaceAll(`#az; cd`, `C/myfile/code&gt; <span class='blu'>cd</span>`);
    frog = frog.replaceAll(`#az; md`, `C/myfile/code&gt; <span class='blu'>md</span>`);
    frog = frog.replaceAll(`#az; error `, `<span class='red'>`);
    frog = frog.replaceAll(`#az; ok `, `<span class='grn'>`);
    frog = frog.replaceAll(`#zz;`, `</span>`);
    frog = frog.replaceAll(`/t;`, `<span class="tab_1x"></span>`);
	document.getElementById(fieldName).innerHTML = frog;
}