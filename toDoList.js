$(function () {
    $("#addbtn").click(function () {
        addItem();
    });
});
var titleID = 1;
var counter = 1;
var thelabel = $("#addinput").val();
function addItem() {
    console.log("yo");
    var thelabel = $("#addinput").val();
    window.globalLabel = thelabel;

    if(thelabel !== ""){
        var inputdiv = "<div onclick='specItem()' id='notes-title" + titleID + "' class='list-titles'>" + thelabel +"<div></div><button class='list-titles-button' onclick='deleteItem(this)'></button></div> </div>";
        $(".todocontainer").append(inputdiv);
        $("#addinput").val("");
    }
    titleID++;
    counter++;

}

function deleteItem(element) {
    $(element).parent().remove();
}
function doubledeleteItem(element) {
    $(element).parent().parent().remove();
}
var delButton = "button.delbtn";
var specNote = 1;
function specItem() {
    console.log("yo");
        var thelabel = globalLabel;
        var inputspec = "<div class='created-list-itmes-div'><div class='the-last-div-this-stupid-function-before-i-kill-someone'><div class='thelabel'>" + thelabel +"</div><button class='delbtn' id='delbtnID' onclick='completeItem(this)'></button><div contenteditable='true' id='specNotesID" + specNote + "' class='created-list-itmes' onclick='weirdBoiForClearingText(this)'>List Item</div></div><div contenteditable='false'><button onclick='doubledeleteItem(this)' class='list-titles-button' ></button></div>";
        document.getElementById("adder").innerHTML += inputspec;
        console.log("boi");

    if (counter = 1){
        document.getElementById("jsThing").innerHTML = "<style> #completebox{border-top: 1px solid #aaaaaa;}</style>";
    }
    specNote++;

}
var checkImage2 = "<img src='check-button.jpg' width='30' height='30px'>";
var checkImage = "<style> .delbtn{background-image: url(check-button.jpg); background-position: center; background-size: contain;}\n</style>";
function completeItem(element) {
    document.getElementById("delbtnID").innerHTML = checkImage;
    window.setTimeout(completeItemPartTwo,500,element);
}
function completeItemPartTwo(element) {
    var grandpa = $(element).parent().parent();
    $(grandpa).find('.delbtn').remove();
    $("#completebox").append(grandpa);
}


function editItem(element) {
    var grandpa = $(element).parent().parent();
    $("#editlabelinput").val($(grandpa).find("todoLabel").html());
}
noteID = 1;
listItems = 1;
ulIDvar = 1;
var listItemsID = 1;
var specialCounter = 1;
function weirdBoiForClearingText(element) {
    console.log("fatty");

    if (specialCounter = 1) {
        jQuery(element).text('');

    }
    specialCounter++;
}