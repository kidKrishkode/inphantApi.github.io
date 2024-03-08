const OpenApiPage = {
    htmlData: `
        <div class="header">
            <div class="header-left">
                <div class="header-left-left-componet"><span>l</span></div>
                <div class="header-left-right-componet">
                    <div class="header-left-right-componet-upper">
                        <h3 id="header-api-name">loading...</h3>
                        <div class="cost" id="header-api-cost">loading...</div>
                    </div>
                    <div class="header-left-right-componet-bottom">
                        <span id="header-api-owner">loading...</span> | <span id="header-api-update">loading...</span> | <span id="header-api-resource">loading...</span>
                    </div>
                </div>
            </div>
            <div class="header-rigth">
                <div class="header-rigth-component">
                    <div class="header-rigth-component-upper"><i class="fa fa-line-chart"></i>Popularity</div>
                    <div class="header-rigth-component-bottom" id="header-api-rating">loading...</div>
                </div>
                <div class="header-rigth-component">
                    <div class="header-rigth-component-upper"><i class="fa fa-history"></i>Latency</div>
                    <div class="header-rigth-component-bottom" id="header-api-latency">loading...</div>
                </div>
                <div class="header-rigth-component">
                    <div class="header-rigth-component-upper"><i class="fa fa-trophy"></i>Service Level</div>
                    <div class="header-rigth-component-bottom" id="header-api-service">loading...</div>
                </div>
                <div class="header-rigth-component">
                    <div class="header-rigth-component-upper"><i class="fa fa-calendar"></i>Modification</div>
                    <div class="header-rigth-component-bottom" id="header-api-modification">loading...</div>
                </div>
            </div>
        </div>
        <div class="headerDivider">
            <div class="divider-name">
                <div class="divider-name-component" id="dividerEnd" onclick="dividerPageRout('dividerEnd','middleEnd');">Endpoints</div>
                <div class="divider-name-component" id="dividerAbout" onclick="dividerPageRout('dividerAbout','middleAbout');">About</div>
                <div class="divider-name-component" id="dividerTutorial" onclick="dividerPageRout('dividerTutorial','middleTutorial');">Tutorials</div>
            </div>
        </div>
        <div class="middleBody">
            <div class="middleBody-component"id="middleEnd">
                <div class="littleAbout">
                    <div class="littleAboutApi"id="littleAboutApi">loading...</div>
                    <span class="moreAboutApi" onclick="dividerPageRout('dividerAbout','middleAbout');">Show more.</span>
                </div>
                <div class="api-version form-group">
                    <select class="form-control" disabled="">
                        <option>Version 4.0 (Recommended)</option>
                        <option>Version 2.0</option>
                        <option>Version 1.0</option>
                    </select>
                    <div class="btn btn-primary" onclick="apiTest();"><i class="fa fa-flask"></i> Test</div>
                </div>
                <div class="api-dualVision">
                    <div class="api-dualVision-left">
                        <div class="api-dualVision-left-head">
                            <div>GET</div>
                            <span class="btn btn-primary" onclick="window.open('./main.html?page=DocsPage&test=ok&search=Why Library File Inclusion is Required');"><i class="fa fa-code"></i> Libary Plugins</span>
                        </div>
                        <div class="api-dualVision-left-body">
                            <div class="form-group">
                                <label for="api-dualVision-info">Host Url</label>
                                <input type="link" class="form-control" value="kidKrishkode.github.io/inphantApi.github.io"readonly="true"/>
                            </div>
                            <div class="form-group">
                                <label for="api-dualVision-info">Request Url</label>
                                <input type="link" class="form-control" value="https://{Host Url}/APIs/{Api Identifier}.js?{Request Body}"readonly="true"/>
                            </div>
                            <div class="api-dualVision-left-body-divider">Header Parameter</div>
                            <div class="form-group">
                                <label for="api-dualVision-info">API Identifier</label>
                                <input type="link" class="form-control" value="loading..." id="api-dualVision-identifier" readonly="true"/>
                            </div>
                            <div class="api-dualVision-left-body-divider">Request Body</div>
                            <code>Required Parameters</code>
                            <span id="reqParams">loading...</span>
                            <code>Optional Parameters</code>
                            <span id="optParams">loading...</span>
                            <div class="api-dualVision-left-body-divider">API Key</div>
                            <div class="form-group">
                                <label for="api-dualVision-info">API Url</label>
                                <input type="link" class="form-control" value="{Request Url}&apikey={Your Api Key}"readonly="true"/>
                            </div>
                            <div class="api-dualVision-left-body-divider">List of Agents</div>
                            <span id="agentList">loading...</span>
                        </div>
                    </div>
                    <div class="api-dualVision-right">
                        <div class="api-dualVision-right-head">
                            <div class="api-dualVision-right-head-comonent" id="api-dualVision-head-code" onclick="dualvisionPageRout('api-dualVision-head-code','api-dualVision-body-code');">Code Snippets</div>
                            <div class="api-dualVision-right-head-comonent" id="api-dualVision-head-example" onclick="dualvisionPageRout('api-dualVision-head-example','api-dualVision-body-example');">Example Responce</div>
                        </div>
                        <div class="api-dualVision-right-body"id="api-dualVision-body-code">
                            <div class="form-group">
                                <select class="form-control" id="codeSelecter" onchange="CodeRoutBySelect('codeSelecter');">
                                    <option>Vanilla</option>
                                    <option>React</option>
                                    <option>Angular</option>
                                    <option>Android</option>
                                </select>
                            </div>
                            <div class="code-body">
                                <div class="api-dualVision-right-body-component"id="vanillaBody">
                                    <div class="code-editor">
                                        <ul class="tabs codeheader_html">
                                            <li class="tab" title="File name with extension">./index.html</li>
                                            <li class="tabi"><span onclick="Copy('apiInSnipVanillaHtml');" title="Copy this code">&#128203;</span><span onclick="Rview('apiInSnipVanillaHtml')" title="Raw view of this code" class="word">Raw</span>
                                            <span title="Feedback of this code"onclick="codeFeed();">&#x1F44D;</span><span onclick="downloadCode('apiInSnipVanillaHtml','index.html');" title="Download it in text file">&#x1F4E5;</span></li>
                                        </ul>
                                        <div class="code-wrapper">
                                            <div class="line-numbers" id="apiInSnipVanillaHtml-line"></div>
                                            <pre class="code language-html" contenteditable="false" spellcheck="false" id="apiInSnipVanillaHtml">
                                            </pre>
                                        </div>
                                    </div>
                                    <div class="code-editor">
                                        <ul class="tabs codeheader_Js">
                                            <li class="tab" title="File name with extension">./Api.js</li>
                                            <li class="tabi"><span onclick="Copy('useInSnipVanillaJs');" title="Copy this code">&#128203;</span><span onclick="Rview('useInSnipVanillaJs')" title="Raw view of this code" class="word">Raw</span>
                                            <span title="Feedback of this code"onclick="codeFeed();">&#x1F44D;</span><span onclick="downloadCode('useInSnipVanillaJs','Api.js');" title="Download it in text file">&#x1F4E5;</span></li>
                                        </ul>
                                        <div class="code-wrapper">
                                            <div class="line-numbers" id="useInSnipVanillaJs-line"></div>
                                            <pre class="code language-Js" contenteditable="false" spellcheck="false" id="useInSnipVanillaJs">
                                            </pre>
                                        </div>
                                    </div>
                                    <div class="OthersCode" id="ot1"></div>
                                </div>
                                <div class="api-dualVision-right-body-component"id="reactBody">
                                    <div class="code-editor">
                                        <ul class="tabs codeheader_html">
                                            <li class="tab" title="File name with extension">./Public/index.html</li>
                                            <li class="tabi"><span onclick="Copy('apiInSnipReactHtml');" title="Copy this code">&#128203;</span><span onclick="Rview('apiInSnipReactHtml')" title="Raw view of this code" class="word">Raw</span>
                                            <span title="Feedback of this code"onclick="codeFeed();">&#x1F44D;</span><span onclick="downloadCode('apiInSnipReactHtml','index.html');" title="Download it in text file">&#x1F4E5;</span></li>
                                        </ul>
                                        <div class="code-wrapper">
                                            <div class="line-numbers" id="apiInSnipReactHtml-line"></div>
                                            <pre class="code language-html" contenteditable="false" spellcheck="false" id="apiInSnipReactHtml">
                                            </pre>
                                        </div>
                                    </div>
                                    <div class="code-editor">
                                        <ul class="tabs codeheader_Js">
                                            <li class="tab" title="File name with extension">./Public/Api.js</li>
                                            <li class="tabi"><span onclick="Copy('useInSnipReactJs');" title="Copy this code">&#128203;</span><span onclick="Rview('useInSnipReactJs')" title="Raw view of this code" class="word">Raw</span>
                                            <span title="Feedback of this code"onclick="codeFeed();">&#x1F44D;</span><span onclick="downloadCode('useInSnipReactJs','Api.js');" title="Download it in text file">&#x1F4E5;</span></li>
                                        </ul>
                                        <div class="code-wrapper">
                                            <div class="line-numbers" id="useInSnipReactJs-line"></div>
                                            <pre class="code language-Js" contenteditable="false" spellcheck="false" id="useInSnipReactJs">
                                            </pre>
                                        </div>
                                    </div>
                                    <div class="OthersCode" id="ot2"></div>
                                </div>
                                <div class="api-dualVision-right-body-component"id="angularBody">
                                    <div class="code-editor">
                                        <ul class="tabs codeheader_html">
                                            <li class="tab" title="File name with extension">./src/index.html</li>
                                            <li class="tabi"><span onclick="Copy('apiInSnipAngularHtml');" title="Copy this code">&#128203;</span><span onclick="Rview('apiInSnipAngularHtml')" title="Raw view of this code" class="word">Raw</span>
                                            <span title="Feedback of this code"onclick="codeFeed();">&#x1F44D;</span><span onclick="downloadCode('apiInSnipAngularHtml','index.html');" title="Download it in text file">&#x1F4E5;</span></li>
                                        </ul>
                                        <div class="code-wrapper">
                                            <div class="line-numbers" id="apiInSnipAngularHtml-line"></div>
                                            <pre class="code language-html" contenteditable="false" spellcheck="false" id="apiInSnipAngularHtml">
                                            </pre>
                                        </div>
                                    </div>
                                    <div class="code-editor">
                                        <ul class="tabs codeheader_Js">
                                            <li class="tab" title="File name with extension">./src/Api.js</li>
                                            <li class="tabi"><span onclick="Copy('useInSnipAngularJs');" title="Copy this code">&#128203;</span><span onclick="Rview('useInSnipAngularJs')" title="Raw view of this code" class="word">Raw</span>
                                            <span title="Feedback of this code"onclick="codeFeed();">&#x1F44D;</span><span onclick="downloadCode('useInSnipAngularJs','Api.js');" title="Download it in text file">&#x1F4E5;</span></li>
                                        </ul>
                                        <div class="code-wrapper">
                                            <div class="line-numbers" id="useInSnipAngularJs-line"></div>
                                            <pre class="code language-Js" contenteditable="false" spellcheck="false" id="useInSnipAngularJs">
                                            </pre>
                                        </div>
                                    </div>
                                    <div class="OthersCode" id="ot3"></div>
                                </div>
                                <div class="api-dualVision-right-body-component"id="androidBody">
                                    <div class="code-editor">
                                        <ul class="tabs codeheader_Java">
                                            <li class="tab" title="File name with extension">./main.java</li>
                                            <li class="tabi"><span onclick="Copy('useInSnipAndroidJava');" title="Copy this code">&#128203;</span><span onclick="Rview('useInSnipAndroidJava')" title="Raw view of this code" class="word">Raw</span>
                                            <span title="Feedback of this code"onclick="codeFeed();">&#x1F44D;</span><span onclick="downloadCode('useInSnipAndroidJava','main.java');" title="Download it in text file">&#x1F4E5;</span></li>
                                        </ul>
                                        <div class="code-wrapper">
                                            <div class="line-numbers" id="useInSnipAndroidJava-line"></div>
                                            <pre class="code language-Js" contenteditable="false" spellcheck="false" id="useInSnipAndroidJava">
                                            </pre>
                                        </div>
                                    </div>
                                    <div class="OthersCode" id="ot4"></div>
                                </div>
                            </div>
                        </div>
                        <div class="api-dualVision-right-body"id="api-dualVision-body-example">
                            <div class="code-editor">
                                <ul class="tabs codeheader_terMinal">
                                    <li class="tab" title="File name with extension">Console Pannel</li>
                                    <li class="tabi"><span onclick="Copy('examInConsoleTerm');" title="Copy this code">&#128203;</span><span onclick="Rview('examInConsoleTerm')" title="Raw view of this code" class="word">Raw</span>
                                    <span title="Feedback of this code"onclick="codeFeed();">&#x1F44D;</span><span onclick="downloadCode('examInConsoleTerm','console.txt');" title="Download it in text file">&#x1F4E5;</span></li>
                                </ul>
                                <div class="code-wrapper">
                                    <div class="line-numbers" id="examInConsoleTerm-line"></div>
                                    <pre class="code language-Js" contenteditable="false" spellcheck="false" id="examInConsoleTerm">
                                    </pre>
                                </div>
                            </div>
                            <div class="OthersCode" id="ot5"></div>
                        </div>
                    </div>
                </div>
                <div class="littleTutorial">
                    <p><i class="fa fa-youtube-play"></i> For more information or clear image of this api , visite the Tutorials page via <span onclick="dividerPageRout('dividerTutorial','middleTutorial');">Click</span> here.<br><i class="fa fa-coffee"></i> If you like this api then please buy a cup of milk for us.</p>
                </div>
                <div class="api-feedback">
                    <div class="left-api-feedback">
                        <div class="container col-lg-8">
                            <form>
                                <div class="form-group">
                                    <label for="viewer-rate">Rate</label>
                                    <div class="star-widget" id="viewer-rate">
                                        <input type="radio" name="rate" id="rate-5" aria-describedby="rateHelp" onclick="starCount('p2*fi4Le2dY5');">
                                        <label for="rate-5" class="fa fa-star"></label>
                                        <input type="radio" name="rate" id="rate-4" aria-describedby="rateHelp" onclick="starCount('0d!fGke2si4');">
                                        <label for="rate-4" class="fa fa-star"></label>
                                        <input type="radio" name="rate" id="rate-3" aria-describedby="rateHelp" onclick="starCount('K3nw$Qlf8vb3');">
                                        <label for="rate-3" class="fa fa-star"></label>
                                        <input type="radio" name="rate" id="rate-2" aria-describedby="rateHelp" onclick="starCount('m8#aiT1o4jr2');">
                                        <label for="rate-2" class="fa fa-star"></label>
                                        <input type="radio" name="rate" id="rate-1" aria-describedby="rateHelp" onclick="starCount('63f321gl@dQh1');">
                                        <label for="rate-1" class="fa fa-star"></label>
                                        <header id="viewer-star"></header>
                                    </div>
                                    <small id="rateHelp" class="form-text text-muted">Star Rating is not compulsory with every comments (each star consider as 2 points)</small>
                                </div>
                                <div class="form-group">
                                    <lable for="viewer-email">Email</lable>
                                    <input type="email" class="form-control" id="viewer-email" placeholder="Enter your email id" aria-describedby="emailHelp">
                                    <small id="emailHelp" class="form-text text-muted">This email will not appear with your comment, It's use only send this message</small>
                                </div>
                                <div class="form-group">
                                    <lable for="viewer-message">Message</lable>
                                    <textarea class="form-control" id="viewer-message" row="8" aria-describedby="commentHelp" placeholder="Enter your message here"></textarea>
                                    <small id="commentHelp" class="form-text text-muted">You can mention other APIs using there name or link in this message</small>
                                </div>
                            </form>
                            <div class="btn btn-primary" onclick="commentMe();" title="I agree all terms and conditions..">Re-direct to SMTP</div>
                        </div>
                    </div>
                    <div class="right-api-feedback" onclick="dividerPageRout('dividerTutorial','middleTutorial');">
                        <h4>Visual Support</h4>
                        <iframe src=""alt="loading..."id="littleytvideo"></iframe>
                    </div>
                </div>
            </div>
            <div class="middleBody-component"id="middleAbout">loading...</div>
            <div class="middleBody-component"id="middleTutorial">
                <div class="videoRack container">
                    <div class="mainVideo">
                        <iframe></iframe>
                    </div>
                    <div class="secondaryVideo">
                        <div class="video svideo1">
                            <iframe></iframe>
                        </div>
                        <div class="video svideo2">
                            <iframe></iframe>
                        </div>
                        <div class="video svideo3">
                            <iframe></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="shareApiFloat">
            <div class="btn btn-primary" title="Share this page to your friends" onclick="shareActivate('OpenApiPage');"><i class="fa fa-share"></i></div>
        </div>
    `,
}