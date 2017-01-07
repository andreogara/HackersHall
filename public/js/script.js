(function () {

    function adduser(e) {
        e.preventDefault();
        e.preventBubble();
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
    }
})();