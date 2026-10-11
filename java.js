const searchFun = ()=> {
    let filter = document.querySelector("#input").value.toUpperCase();

    let mytable = document.querySelector("#mytabale");

    let tr = mytable.getElementsByTagName("tr");

    for(index = 0 ; index < tr.length ; index++){
        
        let td = tr[index].getElementsByTagName("td")[0];

        if(td){

            let textvalue = td.textContent || td.innerHTML;

            if(textvalue.toUpperCase().indexOf(filter) > -1){
                tr[index].style.display = "";

            }else{
                tr[index].style.display = "none";
            }
        }
    }
}




