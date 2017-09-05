$(document).ready(function () {

    $("#openCatBtn").on("click", function (event) {
        document.getElementById("mySidenav").style.width = "250px";
    });

    $("#closeCatBtn").on("click", function (event) {
        document.getElementById("mySidenav").style.width = "0px";
    });

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
})