const forms=document.forms["forms"]

let task=document.querySelector("#items")
forms.addEventListener("submit",(e)=>{
    e.preventDefault()
    const vales=document.querySelector("input[type='text'").value
    if (vales != '') {
        let newtask=document.createElement("h3")
        newtask.textContent=vales
        task.appendChild(newtask) 

    }
    
})