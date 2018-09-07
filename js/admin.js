(function($) {
    "use strict"; // Start of use strict

    // Get a reference to the database service
    var database = firebase.database();

    function _writeUserData(userId, name, menu, purchaseId) {
        firebase.database().ref('purchases/' + purchaseId).set({
          username: name,
          name: name,
          menu: menu,
          purchaseId : purchaseId
        });
    }

    $("#btnPurchase").click(function(){
        console.log("Name: " + $("#purchaseName").val() );
        var dt = new Date();
        var time = "" + dt.getFullYear() + dt.getMonth() + dt.getDate() + dt.getHours() + dt.getMinutes() + dt.getSeconds();
        console.log("Time: " + time );
        console.log("userId: " + time);
        _writeUserData("abc", $("#purchaseName").val(), "라면", time);
    });

})(jQuery); // End of use strict