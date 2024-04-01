let set2 = ["All","Free Api","Premium Api","Data support Api","Fast Api","Voluntiar's Api","Others"];
let currentProduct=0;
let pageList = ["HomePage","ApiPage","DocsPage","AboutPage","HelpPage"];
let aboutList = ["abtn0","abtn1","abtn2"];
let additionalList = ["SearchPage","AccountPage","OpenApiPage"];
let jsonFilePath, userPortfolio;
let stdlibsrc = `&lt; script@ |src="https://kidKrishkode.github.io/inphantApi.github.io/APIs/inphantSTDlib.min.js"n >< /script@ >`;
let vanillaHtmlContent = 
`< html@ |lang="en"n >
    < head@ >
        < meta@ |charset="utf-8"n >
        < meta@ |name="viewport"n |content="width=device-width, initial-scale=1"n >
        < title@ |version="1.0"n >$|title|$< /title@ >
    < /head@ >
    < body@ >
        $|body|$
    < /body@ >
    < !-- link the api plugins in your project (below) -- >
    $|libplugin|$
    $|apiplugin|$
    < !-- link the script file where your request is encoded -- >
    &lt; script@ |src="./main.js"n >< /script@ >
< /html@ >\n`;