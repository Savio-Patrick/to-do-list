const inputBox= document.getElementById("input-box");
const lic= document.getElementById("list");
function task(){
    if(inputBox.value==''){
        alert("you must write something!")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        lic.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span)

    }
    inputBox.value="";
    save();
}
lic.addEventListener("click",function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("check");
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
    }
},false)

 function save(){
    localStorage.setItem("data",lic.innerHTML);
}
function show(){
    lic.innerHTML=localStorage.getItem("data");
}
show();  