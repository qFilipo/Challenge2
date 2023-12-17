document.addEventListener('DOMContentLoaded', function(){
    const listItem = document.querySelectorAll(".rate")
    const btnSubmit= document.getElementById("btnSubmit")
    const state2 = document.getElementById("main-container-state2")
    let resultSpan = document.getElementById("result")
    let result=0

    listItem.forEach(function(li){
        li.addEventListener('click', function(){
            reset()
            this.style.backgroundColor = "hsl(25, 97%, 53%)"
            this.style.color = "hsl(0, 0%, 100%)"
            result=this.textContent
            console.log(result)
        })
    })

    function reset(){
        listItem.forEach(li => li.style.backgroundColor = "")
        listItem.forEach(li => li.style.color = "")
    }

 
    btnSubmit.addEventListener('click', function(){
        if (result != 0){
            resultView()
        }
    })

    function resultView(){
        state2.style.zIndex = "1"
        resultSpan.textContent = result
    }
})