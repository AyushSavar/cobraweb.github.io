
//Function to fetch data from URL
async function getData(){

    let link='https://www.coursehubiitg.in/api/codingweek/contributions';

    try{
        let response=await fetch(link);
        return await response.json();
    }

    catch(error)
    {
        console.log(error);
    }
}


//Function to render data
async function setData()
{
    let data=await getData();

    //Finding number of people in leaderboard
    var length=0;
    for (let x in data)
    {   
        length=length+1;
    }

    //Creating array of data obtained from fetching
    let a=[];
    for (let i=0;i<length;i++)
    {
        a.push([]);
        a[i].push(parseInt(data[i].points,10));
        a[i].push(data[i].name);
        a[i].push(data[i].avatar);
    }

    //Sorting data by points
    a=a.sort(function(x,y)
    {
        return x[0]-y[0];
    })
    
    
    a.reverse();
    
    //Rendering elements for all people in leaderboard other than top 3
    for (let x=0;x<length-3;x++)
    {
    //To create unique id for all
    var id_suffix=x.toString();
    
    //Each new rectangle has to be below the other so top attribute will change
    let top = 470+114*x;

    //Creating rectangles for each position
    const rect = document.createElement("span");
    rect.setAttribute("id","rect"+id_suffix);
    document.getElementById("div").appendChild(rect);
    document.getElementById("rect"+id_suffix).style.position ='absolute';
    document.getElementById("rect"+id_suffix).style.width = '100%';
    document.getElementById("rect"+id_suffix).style.height='100px';
    document.getElementById("rect"+id_suffix).style.left='0px';
    document.getElementById("rect"+id_suffix).style.background='#D2D4F2';
    document.getElementById("rect"+id_suffix).style.top = top.toString()+'px';
    console.log(document.getElementById("rect"+id_suffix).style);

    //creating circle border for each position
    const bord = document.createElement("span");
    bord.setAttribute("id","bord"+id_suffix);
    document.getElementById("div").appendChild(bord);
    document.getElementById("bord"+id_suffix).style.position ='absolute';
    document.getElementById("bord"+id_suffix).style.width = '80px';
    document.getElementById("bord"+id_suffix).style.height='80px';
    document.getElementById("bord"+id_suffix).style.left='122px';
    document.getElementById("bord"+id_suffix).style.background='#FFFFFF';
    document.getElementById("bord"+id_suffix).style.borderRadius='100%';
    document.getElementById("bord"+id_suffix).style.top = (top+10).toString()+'px';
    console.log(document.getElementById("bord"+id_suffix).style);

    //creating circle for each position
    const circle = document.createElement("span");
    circle.setAttribute("id","circle"+id_suffix);
    document.getElementById("div").appendChild(circle);
    document.getElementById("circle"+id_suffix).style.position ='absolute';
    document.getElementById("circle"+id_suffix).style.width = '74.42px';
    document.getElementById("circle"+id_suffix).style.height='74.42px';
    document.getElementById("circle"+id_suffix).style.left='124.79px';
    document.getElementById("circle"+id_suffix).style.background='#BABEFF';
    document.getElementById("circle"+id_suffix).style.borderRadius='100%';
    document.getElementById("circle"+id_suffix).style.backgroundImage="url('"+a[x+3][2]+"')";
    document.getElementById("circle"+id_suffix).style.backgroundSize="cover";
    document.getElementById("circle"+id_suffix).style.backgroundPosition='center';
    document.getElementById("circle"+id_suffix).style.top = (top+12.79).toString()+'px';
    console.log(document.getElementById("circle"+id_suffix).style);

    //Position text
    const pos = document.createElement("span");
    pos.setAttribute("id","pos"+id_suffix);
    const pos_text = document.createTextNode((x+4).toString());
    pos.appendChild(pos_text);
    document.getElementById("div").appendChild(pos);
    document.getElementById("pos"+id_suffix).style.position ='absolute';
    document.getElementById("pos"+id_suffix).style.width = '23px';
    document.getElementById("pos"+id_suffix).style.height='36px';
    document.getElementById("pos"+id_suffix).style.left='40px';  
    document.getElementById("pos"+id_suffix).style.color='#1E1E1E';
    document.getElementById("pos"+id_suffix).style.fontFamily='Inter';
    document.getElementById("pos"+id_suffix).style.fontStyle='normal';
    document.getElementById("pos"+id_suffix).style.lineHeight='39px';
    document.getElementById("pos"+id_suffix).style.fontWeight='400px';
    document.getElementById("pos"+id_suffix).style.fontSize='32px';
    document.getElementById("pos"+id_suffix).style.top = (top+33).toString()+'px';
    console.log(document.getElementById("pos"+id_suffix).style);

    //Name text
    const name_pos = document.createElement("span");
    name_pos.setAttribute("id","name_pos"+id_suffix);
    const name_text = document.createTextNode(a[x+3][1]);
    name_pos.appendChild(name_text);
    document.getElementById("div").appendChild(name_pos);
    document.getElementById("name_pos"+id_suffix).style.position ='absolute';
    document.getElementById("name_pos"+id_suffix).style.width = '1000px';
    document.getElementById("name_pos"+id_suffix).style.height='36px';
    document.getElementById("name_pos"+id_suffix).style.left='255px';  
    document.getElementById("name_pos"+id_suffix).style.color='#000000';
    document.getElementById("name_pos"+id_suffix).style.fontFamily='Inter';
    document.getElementById("name_pos"+id_suffix).style.fontStyle='normal';
    document.getElementById("name_pos"+id_suffix).style.fontSize='32px';
    document.getElementById("name_pos"+id_suffix).style.fontWeight='400px';
    document.getElementById("name_pos"+id_suffix).style.lineHeight='39px';
    document.getElementById("name_pos"+id_suffix).style.top = (top+33).toString()+'px';
    console.log(document.getElementById("name_pos"+id_suffix).style);

    //Points
    const pnts = document.createElement("span");
    pnts.setAttribute("id","pnts"+id_suffix);
    const pnts_text = document.createTextNode(a[x+3][0]);
    pnts.appendChild(pnts_text);
    document.getElementById("div").appendChild(pnts);
    document.getElementById("pnts"+id_suffix).style.position ='absolute';
    document.getElementById("pnts"+id_suffix).style.width = '100px';
    document.getElementById("pnts"+id_suffix).style.height='19px';
    document.getElementById("pnts"+id_suffix).style.left='1223px';  
    document.getElementById("pnts"+id_suffix).style.color='#000000';
    document.getElementById("pnts"+id_suffix).style.fontFamily='Inter';
    document.getElementById("pnts"+id_suffix).style.fontStyle='normal';
    document.getElementById("pnts"+id_suffix).style.fontSize='32px';
    document.getElementById("pnts"+id_suffix).style.fontWeight='400px';
    document.getElementById("pnts"+id_suffix).style.lineHeight='39px';
    document.getElementById("pnts"+id_suffix).style.top = (top+34).toString()+'px';
    console.log(document.getElementById("pnts"+id_suffix).style);


    //Adding image for first position
    document.getElementById('firstPositionCircle').style.backgroundImage="url('"+a[0][2]+"')";
    document.getElementById('firstPositionCircle').style.backgroundPosition='center';
    document.getElementById('firstPositionCircle').style.backgroundSize="cover";
    //Adding image for second position
    document.getElementById('secondPositionCircle').style.backgroundImage="url('"+a[1][2]+"')";
    document.getElementById('secondPositionCircle').style.backgroundPosition='center';
    document.getElementById('secondPositionCircle').style.backgroundSize="cover";
    //Adding image for third position
    document.getElementById('thirdPositionCircle').style.backgroundImage="url('"+a[2][2]+"')";
    document.getElementById('thirdPositionCircle').style.backgroundPosition='center';
    document.getElementById('thirdPositionCircle').style.backgroundSize="cover";
        
    //Adding names and points for top 3 positions
    document.getElementById('firstPositionName').innerHTML=a[0][1];
    document.getElementById('firstPositionPoints').innerHTML=a[0][0];
    document.getElementById('secondPositionName').innerHTML=a[1][1];
    document.getElementById('secondPositionPoints').innerHTML=a[1][0];
    document.getElementById('thirdPositionName').innerHTML=a[2][1];
    document.getElementById('thirdPositionPoints').innerHTML=a[2][0];
        

    //Window size may differ, hence to make the layout cover the whole window, fetching the width of the full window in pixels
    var pix = document.getElementById("rect"+id_suffix).offsetWidth;

    //Setting width of all components so that the layout is centred
    document.getElementById('line').style.width = pix.toString()+'px';
    document.getElementById('Heading').style.left = (558+pix-1480).toString()+'px';
    document.getElementById('firstPositionCircle').style.left = (610.06+pix-1480).toString()+'px';
    document.getElementById('firstPositionCircleBorder').style.left = (602+pix-1480).toString()+'px';
    document.getElementById('firstPositionIconText').style.left = (710+pix-1480).toString()+'px';
    document.getElementById('firstPositionIcon').style.left = (698+pix-1480).toString()+'px';
    document.getElementById('firstPositionTextBox').style.left = (608.71+pix-1480).toString()+'px';
    document.getElementById('firstPositionName').style.left = (639.6+pix-1480).toString()+'px';
    document.getElementById('firstPositionPoints').style.left = (791.8+pix-1480).toString()+'px';
    document.getElementById('firstPositionDot').style.left = (783+pix-1480).toString()+'px';
    document.getElementById('secondPositionCircle').style.left = (344+pix-1480).toString()+'px';
    document.getElementById('secondPositionCircleBorder').style.left = (338+pix-1480).toString()+'px';
    document.getElementById('secondPositionIconText').style.left = (418+pix-1480).toString()+'px';
    document.getElementById('secondPositionIcon').style.left = (406+pix-1480).toString()+'px';
    document.getElementById('secondPositionTextBox').style.left = (346+pix-1480).toString()+'px';
    document.getElementById('secondPositionName').style.left = (360+pix-1480).toString()+'px';
    document.getElementById('secondPositionPoints').style.left = (465+pix-1480).toString()+'px';
    document.getElementById('secondPositionDot').style.left = (457+pix-1480).toString()+'px';
    document.getElementById('thirdPositionCircle').style.left = (920+pix-1480).toString()+'px';
    document.getElementById('thirdPositionCircleBorder').style.left = (914+pix-1480).toString()+'px';
    document.getElementById('thirdPositionIconText').style.left = (995+pix-1480).toString()+'px';
    document.getElementById('thirdPositionIcon').style.left = (983+pix-1480).toString()+'px';
    document.getElementById('thirdPositionTextBox').style.left = (920+pix-1480).toString()+'px';
    document.getElementById('thirdPositionName').style.left = (943+pix-1480).toString()+'px';
    document.getElementById('thirdPositionPoints').style.left = (1050+pix-1480).toString()+'px';
    document.getElementById('thirdPositionDot').style.left = (1042+pix-1480).toString()+'px';
}


}

setData();


