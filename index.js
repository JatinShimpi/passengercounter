//    document.getElementById("count-1").innerText = 5

let countEL = document.getElementById("count-1")

let count = 0

let saveEl = document.getElementById("saveEl")

function increment(){
    count += 1
    countEL.innerText=count
}

function save(){

    let countstr = " "+count +" -"    // here i have added a apece before the count element to get proper indentation but if i use " - "
    saveEl.innerText += countstr      // it still gives indentation as follows== "16- 32- ..."
    count = 0                         // to avoid this we can use " - " with saveEl.textContent
    countEL.innerText = count
}

function clrprev(){
    saveEl.innerText = "previous: "
}

