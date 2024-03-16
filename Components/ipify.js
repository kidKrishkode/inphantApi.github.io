$(document).ready(()=>{
    $.getJSON("https://api.ipify.org?format=json",
    function (data){
        $("#user-ip").html(data.ip);
    })
});