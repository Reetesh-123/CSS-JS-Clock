function setDate()
{
    const now=new Date();
    const seconds=now.getSeconds();
    const secondDegree=((seconds*360)/60)+90;
    const sec=document.querySelector(".second-hand");
    sec.style.transform=`rotate(${secondDegree}deg)`;

    const minute=now.getMinutes();
    const minDegree=((minute*360)/60)+90;
    const mins=document.querySelector(".min-hand");
    mins.style.transform=`rotate(${minDegree}deg)`;

    var hours=now.getHours();
    if(hours>12)
    {
        hours=hours-12;
    }
    const hourDegree=((hours*360)/12)+90;
    const hrs=document.querySelector(".hour-hand");
    hrs.style.transform=`rotate(${hourDegree}deg)`;
    console.log(now.getHours());
}
setInterval(setDate,1000);