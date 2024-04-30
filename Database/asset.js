let nav = 0;
let cls = 1;
let SrcPg=-1;
let homeVisited=0;
let apiVisited=2000;
let docVisited=0;
let helpVisited=0;
let accountVisited=0;
let globalVisit=0;
let referenceProduct;
let newProduct;
let set2 = ["All","Free Api","Premium Api","Data support Api","Fast Api","Voluntiar's Api","Others"];
let currentProduct=0;
let pageList = ["HomePage","ApiPage","DocsPage","AboutPage","HelpPage"];
let aboutList = ["abtn0","abtn1","abtn2"];
let additionalList = ["SearchPage","AccountPage","OpenApiPage","portfolioPage"];
let ksm=0;
const KrishSlider = [
    {
        id: 5,
        src: "https://kidkrishkode.github.io/ProjectPulse.github.io/img/ksm006.jpg"
    },
    {
        id: 0,
        src: "https://kidkrishkode.github.io/ProjectPulse.github.io/img/ksm001.png"
    },
    {
        id: 1,
        src: "https://kidkrishkode.github.io/ProjectPulse.github.io/img/ksm002.jpg"
    },
    {
        id: 2,
        src: "https://kidkrishkode.github.io/ProjectPulse.github.io/img/ksm003.jpg"
    },
    {
        id: 3,
        src: "https://kidkrishkode.github.io/ProjectPulse.github.io/img/ksm004.jpg"
    },
    {
        id: 4,
        src: "https://kidkrishkode.github.io/ProjectPulse.github.io/img/ksm005.jpg"
    }
];
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