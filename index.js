let tasks=[];

let label=[];

let matter=[];


let store=[];


let dates=[];

let type=0;
let i;



function del(i)
{
  tasks.splice(i,1);
    matter.splice(i,1);
dates.splice(i,1);

console.log(i);

    if(type==0)
  {
    all();
  }
  else if(type==1)
  {
    complete();
  }
  else
  {
    incomplete();
  }
}



function mark(i)
{
label[i]=1;
dates[i]=(new Date());
console.log(i);
if(type==0)
  {
    all();
  }
  else if(type==1)
  {
    complete();
  }
  else
  {
    incomplete();
  }

}

function info(i)
{
  document.getElementById("display").innerText=dates[i];
}

function clean()
{
  document.getElementById("display").innerText="";
}


function complete()
{
   type=1;

   document.getElementById("task").innerHTML="<div>";
   for(i=0; i<tasks.length; i++)
   {
    if(label[i]==1)
    {
      let a;
     

      a="<div contenteditable=true height=auto class=title>"+tasks[i]+"</div>";
      a+="<div contenteditable=true class=description>"+matter[i]+"</div>";
     a+="<div onclick=mark("+i+") class=mark>&#10003;"+ "</div>";
     a+="<div onclick=del("+i+") class=delete>x"+"</div>";
    a+="<div onmouseover=info("+i+") onmouseout=clean() class=date>check date"+"</div>";

        document.getElementById("task").innerHTML+="<div class=item>"+a+"</div>"+"<br>";
    }
   }
   document.getElementById("task").innerHTML+="</div>";

}
function incomplete()
{
type=2;

document.getElementById("task").innerHTML="<div>";
for(i=0; i<tasks.length; i++)
{
    document.getElementById("task").innerHTML="<div>";
    for(i=0; i<tasks.length; i++)
    {
     if(label[i]==0)
     {
      let a;
      a="<div contenteditable=true height=auto class=title>"+tasks[i]+"</div>";
      a+="<div contenteditable=true class=description>"+matter[i]+"</div>";
     a+="<div onclick=mark("+i+") class=mark>&#10003;"+ "</div>";
     a+="<div onclick=del("+i+") class=delete>x"+"</div>";
     a+="<div onmouseover=info("+i+") onmouseout=clean() class=date>check date"+"</div>";

        document.getElementById("task").innerHTML+="<div class=item>"+a+"</div>"+"<br>";

     }
     document.getElementById("task").innerHTML+="</div>";
    }
}




}
function all()
{
  console.log("Hxji");
    type=0;
    document.getElementById("task").innerHTML="<div>";
    for(i=0; i<tasks.length; i++)
    {
      let a;
     

      a="<div contenteditable=true height=auto class=title>"+tasks[i]+"</div>";
      a+="<div contenteditable=true class=description>"+matter[i]+"</div>";
     a+="<div onclick=mark("+i+") class=mark>&#10003;"+ "</div>";
     a+="<div onclick=del("+i+") class=delete>x"+"</div>";

        document.getElementById("task").innerHTML+="<div class=item onmouseover=info("+i+") onmouseout=clean()>"+a+"</div>"+"<br>";

    }
    document.getElementById("task").innerHTML+="</div>";
}



function save()
{
   
    let text=document.getElementById("todo").value;
    text=text.trimStart();
    tasks.push(text);
text=document.getElementById("desc").value;
text=text.trimStart();
matter.push(text);
    label.push(0);
    dates.push(new Date());
  if(type==0)
  {
    all();
  }
  else if(type==1)
  {
    complete();
  }
  else
  {
    incomplete();
  }

}

function final()
{
  let x=document.getElementById("type").value;
  if(x=="all")
  {
    all();
  }
  else if(x=="complete")
  {
    complete();
  }
  else
  {
    incomplete();
  }
}














