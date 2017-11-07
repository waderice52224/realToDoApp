$(function () {
    $("#addbtn").click(function () {
        addItem();
    });
    // $("#addinput").keyup(function (event) {
    //     if(event.keyCode === 13){
    //         addItem();
    //     }
    // })
});
var titleID = 1;
function addItem() {
    console.log("yo");
    var thelabel = $("#addinput").val();

    if(thelabel !== ""){
        var inputdiv = "<div id='notes-title" + titleID + "' onclick='addNotes()' class='list-titles'>" + thelabel +"<button class='list-titles-button' onclick='deleteItem(this)'></button></div>";
        $(".todocontainer").append(inputdiv);
        $("#addinput").val("");
    }
    titleID++;

}

function deleteItem(element) {
    $(element).parent().remove();
}
noteID = 1;
listItems = 1;
ulIDvar = 1;
var listItemsID = 1;
function addNotes() {
    console.log("yo");
    // var thelabel = $("#addinput").val();



        var notesdiv = "<ul id='ul-id "+ulIDvar+"' class='ul-items' contenteditable= 'true'></ul><button onclick='listItemsFunction()'>done</button></form></div>";
        $(".notes-sec").append(notesdiv);
        // $("#addinput").val("");
        noteID++;


}
function listItemsFunction() {

    var listItemsVar = "<li id='listItems" + listItemsID + "'></li>";
    $("#ul-id"+ulIDvar+"").append(listItemsVar);
    // $("#addinput").val("");
    listItemsID++;
    ulIDvar++;
}



//bug... this function is called by whole input not just the button

// function listItemsFunction() {
//     var listItemsID = 1;
//     var listItemsVar = "<div id='listItems" + listItemsID + "'>"+ document.getElementById("list-items-input" + listItems) + "</div>";
//     $(".notes-sec").append(notesdiv);
//     // $("#addinput").val("");
//     noteID++;
// }


// this is the input adder
// var notesdiv = "<div id='notes" + noteID + "' class='notes-class'><form><input onclick='listItemsFunction()' id='list-items-input" + listItems + "'><button onclick='listItemsFunction()'>done</button></form></div>";
