var MyTankV1;//我的坦克
function TankV1Main() {
    MyTankV1= {
        Postion: [8, 4],
        Arm: "top",
        FirePostion: [-1, -1],
        FireSpead: 40,
        TankSpead: 50
    }
    FaillTankV1Array();
}
function FaillTankV1obj(Tank) {
    _TheArray[Tank.Postion[0]][Tank.Postion[1]]=1;
    if(Tank.Arm=="top")
    {
        _TheArray[Tank.Postion[0]-1][Tank.Postion[1]]=1; //头
        _TheArray[Tank.Postion[0]][Tank.Postion[1]-1]=1;  //左前
        _TheArray[Tank.Postion[0]][Tank.Postion[1]+1]=1;  //右前
        _TheArray[Tank.Postion[0]+1][Tank.Postion[1]-1]=1; //左后
        _TheArray[Tank.Postion[0]+1][Tank.Postion[1]+1]=1; //右后
    }
    else if(Tank.Arm=="left")
    {
        _TheArray[Tank.Postion[0]][Tank.Postion[1]-1]=1; //头
        _TheArray[Tank.Postion[0]+1][Tank.Postion[1]]=1; //左前
        _TheArray[Tank.Postion[0]-1][Tank.Postion[1]]=1; //右前
        _TheArray[Tank.Postion[0]+1][Tank.Postion[1]+1]=1; //左后
        _TheArray[Tank.Postion[0]-1][Tank.Postion[1]+1]=1; //右后
    }
    else if(Tank.Arm=="right")
    {
        _TheArray[Tank.Postion[0]][Tank.Postion[1]+1]=1; //头
        _TheArray[Tank.Postion[0]-1][Tank.Postion[1]]=1; //左前
        _TheArray[Tank.Postion[0]+1][Tank.Postion[1]]=1; //右前
        _TheArray[Tank.Postion[0]-1][Tank.Postion[1]-1]=1; //左后
        _TheArray[Tank.Postion[0]+1][Tank.Postion[1]-1]=1; //右后
    }
    else if(Tank.Arm=="bottom")
    {
        _TheArray[Tank.Postion[0]+1][Tank.Postion[1]]=1; //头
        _TheArray[Tank.Postion[0]][Tank.Postion[1]+1]=1; //左前
        _TheArray[Tank.Postion[0]][Tank.Postion[1]-1]=1; //右前
        _TheArray[Tank.Postion[0]-1][Tank.Postion[1]+1]=1; //左后
        _TheArray[Tank.Postion[0]-1][Tank.Postion[1]-1]=1; //右后
    }
    /*填充我的坦克子弹*/
    if(Tank.FirePostion[0]>-1)
    {
        _TheArray[Tank.FirePostion[0]][Tank.FirePostion[1]]=1;
    }
}
function FaillTankV1Array()
{
    Clean(_TheArray);
    /*填充我的坦克*/
    FaillTankV1obj(MyTankV1);

    ShowScreen(_TheArray);
}

//上按钮
function TankV1MainTop() {
    if(MyTankV1.Arm=="top")
    {
        TankV1MoveTop(MyTankV1)
    }
    else
    {
        TankV1TurnTop(MyTankV1)
    }
}
function TankV1TurnTop(Tank) {
    Tank.Arm="top";
    FaillTankV1Array();
}
function TankV1MoveTop(Tank) {
    if(Tank.Postion[0]>1)
    {
        Tank.Postion[0]=Tank.Postion[0]-1;
    }
    FaillTankV1Array();
}
//左按钮
function TankV1MainLeft() {
    if(MyTankV1.Arm=="left")
    {
        TankV1MoveLeft(MyTankV1)
    }
    else
    {
        TankV1TurnLeft(MyTankV1)
    }
}
function TankV1TurnLeft(Tank) {
    Tank.Arm="left";
    FaillTankV1Array();
}
function TankV1MoveLeft(Tank) {
    if(Tank.Postion[1]>1)
    {
        Tank.Postion[1]=Tank.Postion[1]-1;
    }
    FaillTankV1Array();
}
//右按钮
function TankV1MainRight() {
    if(MyTankV1.Arm=="right")
    {
        TankV1MoveRight(MyTankV1)
    }
    else
    {
        TankV1TurnRight(MyTankV1)
    }
}
function TankV1TurnRight(Tank) {
    Tank.Arm="right";
    FaillTankV1Array();
}
function TankV1MoveRight(Tank) {
    if(Tank.Postion[1]<8)
    {
        Tank.Postion[1]=Tank.Postion[1]+1;
    }
    FaillTankV1Array();
}
//下按钮
function TankV1MainBottom() {
    if(MyTankV1.Arm=="bottom")
    {
        TankV1MoveBottom(MyTankV1)
    }
    else
    {
        TankV1TurnBottom(MyTankV1)
    }
}
function TankV1TurnBottom(Tank) {
    Tank.Arm="bottom";
    FaillTankV1Array();
}
function TankV1MoveBottom(Tank) {
    if(Tank.Postion[0]<18)
    {
        Tank.Postion[0]=Tank.Postion[0]+1;
    }
    FaillTankV1Array();
}