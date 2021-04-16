const search = document.getElementById("search")
const person= document.querySelectorAll(".person")
const del=document.querySelectorAll(".fa-trash")

search.addEventListener("keyup", (el) => {
    searchVal = el.target.value.toLowerCase()

    for (i=0;i<person.length;i++) {
        const contactPerson = person[i].getElementsByTagName("a")[0].innerText.toLowerCase()

        if(contactPerson.indexOf(searchVal)>-1){
            person[i].style.display=''
        }else{
            person[i].style.display='none'
        }
    }


    })

    del.forEach(element => {
         element.addEventListener("click",()=>{
            element.parentElement.remove()
         })
    });