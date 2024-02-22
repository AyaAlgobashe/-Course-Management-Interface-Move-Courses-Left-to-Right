let liElemment  =document.querySelectorAll(".first-child ul li");
let rightLi=document.querySelectorAll(".socend-child ul li");
let ulElement=document.getElementsByTagName("ul")[0];
let lefButt=document.getElementsByTagName("button")[0];
let rightButt=document.getElementsByTagName("button")[1];
let rightUl=document.getElementsByTagName("ul")[1]


// console.log(ulElement.children)
// console.log(liElemment)
// console.log(rightUl)
// console.log(rightButt)

///////////////////////move to right list
for(let i=0;i<liElemment.length;i++){   
    liElemment[i].onclick=function(){
        for(let j=0;j<liElemment.length;j++){
            liElemment[j].classList.remove("higligt")
        }
        liElemment[i].classList.add("higligt")
    
    }
   
}
rightButt.onclick=function(){
    let selectedLi=ulElement.querySelector(".higligt")
    console.log(selectedLi)

    if(selectedLi){
        ulElement.removeChild(selectedLi);
        rightUl.appendChild(selectedLi);
        selectedLi.classList.remove("higligt")
    }
}
//////////////move to left list
for(let i=0;i<rightLi.length;i++){   
    rightLi[i].onclick=function(){
        for(let j=0;j<rightLi.length;j++){
            rightLi[j].classList.remove("higligt")
        }
        rightLi[i].classList.add("higligt")
    
    }
   
}
lefButt.onclick=function(){
    let selectedLi=rightUl.querySelector(".higligt")
    console.log(selectedLi)

    if(selectedLi){
        rightUl.removeChild(selectedLi);
        ulElement.appendChild(selectedLi);
        selectedLi.classList.remove("higligt")
    }
}


let submitButton=document.getElementsByTagName("button")[2]
let inputTrack=document.getElementsByTagName("input")[0];
let ulOpject=document.getElementsByTagName("ul")[0];
submitButton.onclick=function(event)
{

    let liValue=inputTrack.value;
    let newLi=document.createElement("li")
    newLi.innerText=liValue;
    ulOpject.appendChild(newLi)
    

}
