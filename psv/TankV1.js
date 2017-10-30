var MyTankV1;//我的坦克
var MyTankV1Enemys={
    MyTankV1EnemyStartPostion:[[1,1],[1,8],[18,1],[18,8]],
    MyTankV1EnemyStartArm:["top","left","right","bottom"],
    MyTankV1EnemyCount:20,
    MyTankV1EnemySpeed:400,
    MyTankV1EnemyFireSpead:50,
    MyTankV1EnemyInt:-1,//绑定敌人和敌人活动
    MyTankV1EnemyTank:[] //清空敌人数组
}//敌人坦克
function TankV1Main() {
    clearInterval(MyTankV1Enemys.MyTankV1EnemyInt);
    MyTankV1Enemys.MyTankV1EnemyStartPostion=[[1,1],[1,8],[18,1],[18,8]];
    MyTankV1Enemys.MyTankV1EnemyCount=20;
    MyTankV1Enemys.MyTankV1EnemySpeed=400;
    MyTankV1Enemys.MyTankV1EnemyFireSpead=50;
    MyTankV1Enemys.MyTankV1EnemyTank=[]; //清空敌人数组
    MyTankV1= {
        Postion: [8, 4],
        Arm: "top",
        FirePostion: [-1, -1],
        FireSpead: 40,
        TankSpead: 50,
        MyTankOpenFireInt:-1,
    };
    MyTankV1Enemys.MyTankV1EnemyInt=setInterval("TankV1BindEnemy()",MyTankV1Enemys.MyTankV1EnemySpeed);
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
    /*填充敌人坦克*/
    for(var i=0;i<MyTankV1Enemys.MyTankV1EnemyTank.length;i++)
    {
        FaillTankV1obj(MyTankV1Enemys.MyTankV1EnemyTank[i]);
    }
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
///检查内否转上
function TankV1CheckTurnTop(Tank) {
    if(Tank.Arm=="left")
    {

    }
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
function TankV1Change()
{
    MyTankV1Fire(MyTankV1);
}
//我的坦克创建炮弹
function MyTankV1Fire(Tank) {
    if(Tank.FirePostion[0]<0) {
        if(Tank.Arm=="top") {
            if((Tank.Postion[0]-1)>0) {
                Tank.FirePostion[0] = (Tank.Postion[0]-1) - 1;
                Tank.FirePostion[1] = Tank.Postion[1];
                FaillTankV1Array();
                Tank.MyTankOpenFireInt = setInterval("MyTankV1MoveFire('top')", Tank.FireSpead)
            }
        }
        else if(Tank.Arm=="left") {
            if((Tank.Postion[1]-1)>0) {
                Tank.FirePostion[0] = Tank.Postion[0];
                Tank.FirePostion[1] = (Tank.Postion[1]-1)-1;
                FaillTankV1Array();
                Tank.MyTankOpenFireInt = setInterval("MyTankV1MoveFire('left')", Tank.FireSpead)
            }
        }
        else if(Tank.Arm=="right") {
            if((Tank.Postion[1]+1)<9) {
                Tank.FirePostion[0] = Tank.Postion[0];
                Tank.FirePostion[1] = (Tank.Postion[1]+1)+1;
                FaillTankV1Array();
                Tank.MyTankOpenFireInt = setInterval("MyTankV1MoveFire('right')", Tank.FireSpead)
            }
        }
        else if(Tank.Arm=="bottom") {
            if((Tank.Postion[0]+1)<19) {
                Tank.FirePostion[0] = (Tank.Postion[0]+1)+1;
                Tank.FirePostion[1] = Tank.Postion[1];
                FaillTankV1Array();
                Tank.MyTankOpenFireInt = setInterval("MyTankV1MoveFire('bottom')", Tank.FireSpead)
            }
        }
    }
}
//我的坦克炮弹移动
function MyTankV1MoveFire(Arm) {
    if(Arm=="top")
    {
        if(MyTankV1.FirePostion[0]>0)
        {
            MyTankV1.FirePostion[0]=MyTankV1.FirePostion[0]-1;
        }
        else
        {
            clearInterval(MyTankV1.MyTankOpenFireInt);
            MyTankV1.FirePostion[0]=-1;MyTankV1.FirePostion[1]=-1;
        }
    }
    else if(Arm=="left")
    {
        if(MyTankV1.FirePostion[1]>0)
        {
            MyTankV1.FirePostion[1]=MyTankV1.FirePostion[1]-1;
        }
        else
        {
            clearInterval(MyTankV1.MyTankOpenFireInt);
            MyTankV1.FirePostion[0]=-1;MyTankV1.FirePostion[1]=-1;
        }
    }
    else if(Arm=="right")
    {
        if(MyTankV1.FirePostion[1]<9)
        {
            MyTankV1.FirePostion[1]=MyTankV1.FirePostion[1]+1;
        }
        else
        {
            clearInterval(MyTankV1.MyTankOpenFireInt);
            MyTankV1.FirePostion[0]=-1;MyTankV1.FirePostion[1]=-1;
        }
    }
    else if(Arm=="bottom")
    {
        if(MyTankV1.FirePostion[0]<19)
        {
            MyTankV1.FirePostion[0]=MyTankV1.FirePostion[0]+1;
        }
        else
        {
            clearInterval(MyTankV1.MyTankOpenFireInt);
            MyTankV1.FirePostion[0]=-1;MyTankV1.FirePostion[1]=-1;
        }
    }
    FaillTankV1Array();
}
//创建敌人
function TankV1BindEnemy() {
    TankV1CreateEnemy();
    TankV1EnemyMove();
}
function TankV1CreateEnemy() {
    if(MyTankV1Enemys.MyTankV1EnemyTank.length>=4) return;
    var EnemyTank={
        Postion: MyTankV1Enemys.MyTankV1EnemyStartPostion[rd(0,3)], //敌人坦克位置
        Arm: MyTankV1Enemys.MyTankV1EnemyStartArm[rd(0,3)], //敌人坦克瞄准
        FirePostion: [-1, -1],
        FireSpead: MyTankV1Enemys.MyTankV1EnemyFireSpead,
        TankSpead: MyTankV1Enemys.MyTankV1EnemySpeed,
        MyTankOpenFireInt:-1
    };
    //判断这个位置是否有障碍物
    if(EnemyTank.Arm=="top")
    {
        if(_TheArray[EnemyTank.Postion[0]][EnemyTank.Postion[1]]==0 && //身体
            _TheArray[EnemyTank.Postion[0]-1][EnemyTank.Postion[1]]==0 && //炮管
            _TheArray[EnemyTank.Postion[0]][EnemyTank.Postion[1]-1]==0 && //左前
            _TheArray[EnemyTank.Postion[0]][EnemyTank.Postion[1]+1]==0 && //右前
            _TheArray[EnemyTank.Postion[0]+1][EnemyTank.Postion[1]-1]==0 && //左后
            _TheArray[EnemyTank.Postion[0]+1][EnemyTank.Postion[1]+1]==0 //右后
        )
        {
            MyTankV1Enemys.MyTankV1EnemyTank.push(EnemyTank);
        }
    }
    else if(EnemyTank.Arm=="left")
    {
        if(_TheArray[EnemyTank.Postion[0]][EnemyTank.Postion[1]]==0 && //身体
            _TheArray[EnemyTank.Postion[0]][EnemyTank.Postion[1]-1]==0 && //炮管
            _TheArray[EnemyTank.Postion[0]+1][EnemyTank.Postion[1]]==0 && //左前
            _TheArray[EnemyTank.Postion[0]-1][EnemyTank.Postion[1]]==0 && //右前
            _TheArray[EnemyTank.Postion[0]+1][EnemyTank.Postion[1]+1]==0 && //左后
            _TheArray[EnemyTank.Postion[0]-1][EnemyTank.Postion[1]+1]==0 //右后
        )
        {
            MyTankV1Enemys.MyTankV1EnemyTank.push(EnemyTank);
        }
    }
    else if(EnemyTank.Arm=="right")
    {
        if(_TheArray[EnemyTank.Postion[0]][EnemyTank.Postion[1]]==0 && //身体
            _TheArray[EnemyTank.Postion[0]][EnemyTank.Postion[1]+1]==0 && //炮管
            _TheArray[EnemyTank.Postion[0]-1][EnemyTank.Postion[1]]==0 && //左前
            _TheArray[EnemyTank.Postion[0]+1][EnemyTank.Postion[1]]==0 && //右前
            _TheArray[EnemyTank.Postion[0]-1][EnemyTank.Postion[1]-1]==0 && //左后
            _TheArray[EnemyTank.Postion[0]+1][EnemyTank.Postion[1]-1]==0 //右后
        )
        {
            MyTankV1Enemys.MyTankV1EnemyTank.push(EnemyTank);
        }
    }
    else if(EnemyTank.Arm=="bottom")
    {
        if(_TheArray[EnemyTank.Postion[0]][EnemyTank.Postion[1]]==0 && //身体
            _TheArray[EnemyTank.Postion[0]+1][EnemyTank.Postion[1]]==0 && //炮管
            _TheArray[EnemyTank.Postion[0]][EnemyTank.Postion[1]+1]==0 && //左前
            _TheArray[EnemyTank.Postion[0]][EnemyTank.Postion[1]-1]==0 && //右前
            _TheArray[EnemyTank.Postion[0]-1][EnemyTank.Postion[1]+1]==0 && //左后
            _TheArray[EnemyTank.Postion[0]-1][EnemyTank.Postion[1]-1]==0 //右后
        )
        {
            MyTankV1Enemys.MyTankV1EnemyTank.push(EnemyTank);
        }
    }
    FaillTankV1Array();
}
function TankV1EnemyMove() {
    for(var i=0;i<MyTankV1Enemys.MyTankV1EnemyTank.length;i++)
    {
        var num = rd(0,100)
        if(num<=60) //走直线
        {
            if(MyTankV1Enemys.MyTankV1EnemyTank[i].Arm=="top")
            {
                TankV1MoveTop(MyTankV1Enemys.MyTankV1EnemyTank[i])
            }
            else if(MyTankV1Enemys.MyTankV1EnemyTank[i].Arm=="left")
            {
                TankV1MoveLeft(MyTankV1Enemys.MyTankV1EnemyTank[i])
            }
            else if(MyTankV1Enemys.MyTankV1EnemyTank[i].Arm=="right")
            {
                TankV1MoveRight(MyTankV1Enemys.MyTankV1EnemyTank[i])
            }
            else if(MyTankV1Enemys.MyTankV1EnemyTank[i].Arm=="bottom")
            {
                TankV1MoveBottom(MyTankV1Enemys.MyTankV1EnemyTank[i])
            }

        }
        else {  //转弯
            var newarm=MyTankV1Enemys.MyTankV1EnemyStartArm[rd(0,3)];
            if(newarm!=MyTankV1Enemys.MyTankV1EnemyTank[i].Arm)
            {
                if(newarm=="top")
                {
                    TankV1TurnTop(MyTankV1Enemys.MyTankV1EnemyTank[i])
                }
                else if(newarm=="left")
                {
                    TankV1TurnLeft(MyTankV1Enemys.MyTankV1EnemyTank[i])
                }
                else if(newarm=="right")
                {
                    TankV1TurnRight(MyTankV1Enemys.MyTankV1EnemyTank[i])
                }
                else if(newarm=="bottom")
                {
                    TankV1TurnBottom(MyTankV1Enemys.MyTankV1EnemyTank[i])
                }
            }
            else
            {
                if(MyTankV1Enemys.MyTankV1EnemyTank[i].Arm=="top")
                {
                    TankV1MoveTop(MyTankV1Enemys.MyTankV1EnemyTank[i])
                }
                else if(MyTankV1Enemys.MyTankV1EnemyTank[i].Arm=="left")
                {
                    TankV1MoveLeft(MyTankV1Enemys.MyTankV1EnemyTank[i])
                }
                else if(MyTankV1Enemys.MyTankV1EnemyTank[i].Arm=="right")
                {
                    TankV1MoveRight(MyTankV1Enemys.MyTankV1EnemyTank[i])
                }
                else if(MyTankV1Enemys.MyTankV1EnemyTank[i].Arm=="bottom")
                {
                    TankV1MoveBottom(MyTankV1Enemys.MyTankV1EnemyTank[i])
                }
            }
        }
    }
}