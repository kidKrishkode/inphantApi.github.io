const HelpPage = {
    htmlData: `
    <div class="searchBox">
        <h2>How can we help you?</h2>
        <div class="searchBar">
            <div class="searchText" title="Search APIs">
                <input type="text" placeholder="Search APIs" id="searchText" onkeyup="search('searchText');">
            </div>
            <div class="searchIcon">
                <i class="fa fa-search"></i>
            </div>
        </div>
    </div>
    <div class="help-component flo">
        <div class="left-help-component">
            <h2 id="help-head">Having any problems?</h2>
            <div class="help-comment-box">
                <form class="query-form">
                    <div class="form-group">
                        <lable for="help-name">Name</lable>
                        <input type="name" class="form-control" id="help-query-name" placeholder="Enter your name here" aria-describedby="nameHelp" required onkeyup="commentNameCheck('help-head','help-query-name');"/>
                        <small id="nameHelp" class="form-text text-muted">The above field serves as a significant element on your profile identify.</small>
                    </div>
                    <div class="form-group">
                        <lable for="help-comment">Comment <div><span id="comment-count">0</span>/1000</div></lable>
                        <textarea class="form-control" id="help-query-comment" placeholder="Enter your comment here" aria-describedby="commentHelp" required onkeyup="commentMessageCheck('help-head','help-query-comment','comment-count');"></textarea>
                        <small id="commentHelp" class="form-text text-muted">The above field serves as a message query from feedback.</small>
                    </div>
                    <div class="form-group">
                        <div class="btn btn-primary" onclick="helpCommentSend('help-head','help-query-name','help-query-comment','comment-count','');"><i class="fa fa-message"></i>Re-direct to SMTP</div>
                    </div>
                </form>
            </div>
        </div>
        <div class="right-help-component">
            <div class="flo">
                <div class="right-help-component-box flo" style="border: 2px solid #00ff09;" onclick="ApiPageWithSearch('Free');">
                    <div class="right-help-component-box-icon" style="color: #00ff09;"><i class="fa fa-bank"></i></div>
                    <div class="right-help-component-box-info">
                        <h5 style="color: #00ff09;">Free api</h5>
                        <p>At inphantApi, we provide free, accessible APIs in simple formats for developers from frontend side.</p>
                    </div>
                </div>
                <div class="right-help-component-box flo" style="border: 2px solid blue;" onclick="invalid();">
                    <div class="right-help-component-box-icon" style="color: blue;"><i class="fa fa-user-secret"></i></div>
                    <div class="right-help-component-box-info">
                        <h5 style="color: blue;">Accounts</h5>
                        <p>At account, we prioritize user security. We swiftly address any potential vulnerabilites to safeguard user info.</p>
                    </div>
                </div>
            </div>
            <div class="flo">
                <div class="right-help-component-box flo" style="border: 2px solid aquamarine;" onclick="projectPulseRoute();">
                    <div class="right-help-component-box-icon" style="color: aquamarine;"><i class="fa fa-trophy"></i></div>
                    <div class="right-help-component-box-info">
                        <h5 style="color: aquamarine;">ProjectPluse</h5>
                        <p>Free, open source projects platform for school, college, research; integrates with Inphant API. Visit soon.</p>
                    </div>
                </div>
                <div class="right-help-component-box flo" style="border: 2px solid orangered;" onclick="ApiPageWithSearch('Volunteer');">
                    <div class="right-help-component-box-icon" style="color: orangered;"><i class="fa fa-group"></i></div>
                    <div class="right-help-component-box-info">
                        <h5 style="color: orangered;">Volunteer</h5>
                        <p>Inphant Api always welcome volunteer contributions; Creat, Share , Use custom APIs effortlessly.</p>
                    </div>
                </div>
            </div>
            <div class="flo">
                <div class="right-help-component-box flo" style="border: 2px solid purple;" onclick="invalid();">
                    <div class="right-help-component-box-icon" style="color: purple;"><i class="fa fa-credit-card"></i></div>
                    <div class="right-help-component-box-info">
                        <h5 style="color: purple;">Purchasing</h5>
                        <p>Purchase premium subscription for unlimited queries per day; Gpay, Paytm, Online transactions supported.</p>
                    </div>
                </div>
                <div class="right-help-component-box flo" style="border: 2px solid gray;" onclick="pageRout(2);">
                    <div class="right-help-component-box-icon" style="color: gray;"><i class="fa fa-book"></i></div>
                    <div class="right-help-component-box-info">
                        <h5 style="color: gray;">User Guides</h5>
                        <p>Access detailed user guid, comprehensive docs, intuitive interface, personal API guides, feedback system.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="faq-help">
        <h2>FAQs</h2>
        <div class="layout">
            <div class="accordion"> 
              <div class="accordion__question"> 
                <p>How to add libary plugin in my project?</p> 
              </div> 
              <div class="accordion__answer"> 
                <p>To facilitate the incorporation of our library files into your project, we have streamlined the process, ensuring 
                simplicity and ease of implementation. Adding the library file link or encoding it within your project structure is 
                as straightforward as inserting a JavaScript link, aligning with industry-standard practices for integrating API 
                plugins. Careful adherence to the prescribed steps, detailed below, is imperative to ensure the seamless functioning 
                of our APIs within your project environment. For more information, visit our 
                <a href="./main.html?page=DocsPage&search=Why Library File Inclusion is Required">Docs</a> page about it.
                </p> 
              </div> 
            </div>
            <div class="accordion"> 
              <div class="accordion__question"> 
                <p>How to add an Api in my web?</p> 
              </div> 
              <div class="accordion__answer"> 
                <p>Utilizing our API is a straightforward process designed to empower developers with seamless access to a diverse 
                range of functionalities. By following a few simple steps, developers can quickly integrate our APIs into their 
                projects and leverage the wealth of data and capabilities they offer. Our intuitive documentation provides comprehensive 
                guidance on API endpoints, parameters, and usage scenarios, ensuring a smooth onboarding experience for developers of all 
                skill levels. For more information, visit our <a href="./main.html?page=DocsPage&search=How to Use Our API">Docs</a> page 
                about it.
                </p> 
              </div> 
            </div>
            <div class="accordion"> 
                <div class="accordion__question"> 
                  <p>How to add my Api here?</p> 
                </div> 
                <div class="accordion__answer"> 
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum repellat aliquid 
                  sequi libero hic enim modi, nostrum consequatur possimus maxime.
                  </p> 
                </div> 
            </div>
            <div class="accordion"> 
                <div class="accordion__question"> 
                  <p>Can i get earned by my Api?</p> 
                </div> 
                <div class="accordion__answer"> 
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum repellat aliquid 
                  sequi libero hic enim modi, nostrum consequatur possimus maxime.
                  </p> 
                </div> 
            </div>
            <div class="accordion"> 
                <div class="accordion__question"> 
                  <p>I don't like this Api utility</p> 
                </div> 
                <div class="accordion__answer"> 
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum repellat aliquid 
                  sequi libero hic enim modi, nostrum consequatur possimus maxime.
                  </p> 
                </div> 
            </div>
            <div class="accordion"> 
                <div class="accordion__question"> 
                  <p>Why api give limited queres per day, what can i do to fix it?</p> 
                </div> 
                <div class="accordion__answer"> 
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum repellat aliquid 
                  sequi libero hic enim modi, nostrum consequatur possimus maxime.
                  </p> 
                </div> 
            </div>
            <div class="accordion"> 
                <div class="accordion__question"> 
                  <p>Can i use this Api in commercial projects?</p> 
                </div> 
                <div class="accordion__answer"> 
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum repellat aliquid 
                  sequi libero hic enim modi, nostrum consequatur possimus maxime.
                  </p> 
                </div> 
            </div>
        </div>
    </div>
    `,
};