const ApiPage = {
    htmlData: `
        <div class="searchBox">
            <div class="searchBar">
                <div class="searchSelect">
                    <select id="searchSelectList" onchange="searchbySelect('searchSelectList','drop');"><option>All</option><option>Free Api</option><option>Premium Api</option><option>Data support Api</option><option>Fast Api</option><option>volunteer's Api</option><option>Others</option></select>
                </div>
                <div class="searchText">
                    <input type="text" placeholder="Search Inphant APIs" id="searchData" onkeyup="search_product('searchData','drop');">
                </div>
                <div class="searchIcon">
                    <i class="fa fa-search"></i>
                </div>
            </div>
        </div>
        <ol class="search-product-data" id="productList">
            &times; No data found, internet slow;
        </ol>
        <div class="search-not-found" id="searchDataDOD">
            <div class="error container">
                <i class="fa fa-times-circle-o"></i>
                <h4>Error 404!</h4>
                <h3>Search data not founded in records</h3>
                <p>Your request has been failed because your searching string will not found in the 
                    provided records, try other keys, or check the string is right spealings.
                </p>
            </div>
        </div>
        <div class="addApiFloat">
            <div class="btn btn-primary" onclick="invalid();" title="Add Your APIs here"><i class="fa fa-plus"></i></div>
        </div>
        <div class="shareApiFloat">
            <div class="btn btn-primary" title="Share this page to your friends" onclick="shareActivate('ApiPage');"><i class="fa fa-share"></i></div>
        </div>
    `,
}