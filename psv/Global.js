jQuery(document).ready(function () {
    var _TheArray = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
    ShowScreen(_TheArray);
    $('#Top_btn').bind('touchstart', Top);
    $('#Top_btn').bind('touchend', TopStop);
    $('#Left_btn').bind('touchstart', Left);
    $('#Left_btn').bind('touchend', LeftStop);
    $('#Right_btn').bind('touchstart', Right);
    $('#Right_btn').bind('touchend', RightStop);
    $('#Bottom_btn').bind('touchstart', Bottom);
    $('#Bottom_btn').bind('touchend', BottomStop);
    $('#Change_btn').bind('touchstart', Change);
    $('#Change_btn').bind('touchend', ChangeStop);
});
function SP() {
    //alert("暂停干啥？作弊！");
    TankV1Main();
}
function OnOff() {
    alert("让我如何关机？你没毛病吧？");
}
function Sound() {
    alert("这破东西还需要音乐？");
}
function Reset() {

}
function ShowScreen(array) {
    var Invent = "";
    for (var i = 0; i < array.length; i++)
    {
        for (var j = 0; j < array[i].length; j++) {
            if (i != array.length - 1 && j == array[i].length - 1)
            {
                Invent += "<div class='lastunit " + GetScreenCloth(array[i][j]) + "'></div>"
            }
            else if (i == array.length - 1 && j != array[i].length - 1) {
                Invent += "<div class='botunit " + GetScreenCloth(array[i][j]) + "'></div>"
            }
            else if (i == array.length - 1 && j == array[i].length - 1)
            {
                Invent += "<div class='botlastunit " + GetScreenCloth(array[i][j]) + "'></div>"
            }
            else
            {
                Invent += "<div class='unit " + GetScreenCloth(array[i][j]) + "'></div>"
            }
        }
        Invent += "<div style='clear:both'></div>";
    }
    $("#ShowPart").html(Invent);
}
function GetScreenCloth(Clothvalue) {
    switch(Clothvalue)
    {
        case 1:{
                return "black";
                break;
        }
        case 0: {
            return "white";
            break;
        }
    }
}
var Interval;
var Changeval;
function Top() {
    clearInterval(Interval);
    Interval = setInterval("TankV1MainTop()", MyTankV1.MyTankV1Spead)
}
function TopStop()
{
    clearInterval(Interval);
}
function Left() {
    clearInterval(Interval);
    Interval = setInterval("TankV1MainLeft()", MyTankV1.MyTankV1Spead)
}
function LeftStop() {
    clearInterval(Interval);
}
function Right() {
    clearInterval(Interval);
    Interval = setInterval("TankV1MainRight()", MyTankV1.MyTankV1Spead)
}
function RightStop() {
    clearInterval(Interval);
}
function Bottom() {
    clearInterval(Interval);
    Interval = setInterval("TankV1MainBottom()", MyTankV1.MyTankV1Spead)
}
function BottomStop() {
    clearInterval(Interval);
}
function Change() {
    clearInterval(Changeval);
    Changeval = setInterval("TankV1Change()", MyTankV1.MyTankV1FireSpead)
}
function ChangeStop() {
    clearInterval(Changeval);
}
//取随机数
function rd(n,m){

    var c = m-n+1; 

    return Math.floor(Math.random() * c + n);

}