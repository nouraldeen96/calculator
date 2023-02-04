const result = document.querySelector(".result")
const equl = document.querySelector(".equl")


equl.addEventListener("click",function (){
    console.log(result.value[result.value.length-2])
    result.value = (eval(result.value))
  
})

function fa(){
    let end=result.value.length-1
    result.value = ((result.value).slice(0,end))
}





