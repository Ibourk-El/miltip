let num=document.getElementById("num")
let numSelect=document.getElementById("select")
let result=document.getElementById("result")
let showData=document.getElementById("history")
let showBtn=document.getElementById("showResult")

let myObject = {};
if (localStorage.length>0) {
  myObject={...JSON.parse(localStorage.getItem("data"))}
  data()
}


showBtn.addEventListener("click", () => {
  if (num.value===""||numSelect.value==="") alert("pleas enter num")
  else {
    let r=(+num.value)*(+numSelect.value)
    result.innerHTML=r
    myObject[`${num.value}*${numSelect.value}`]=r
    localStorage.setItem("data", JSON.stringify(myObject))
    showData.innerHTML+=`<p>${num.value}*${numSelect.value}=${r}</p>`
  }
})

function data() {
  for (let c in myObject) {
  console.log(myObject ,"in text")
    showData.innerHTML+=`<p>${c}=${myObject[c]}</p>`
  }
}







