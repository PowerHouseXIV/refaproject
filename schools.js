const search = () =>{
    const searchbox = document.getElementById("search-bar").value.toUpperCase();
    const storeitems = document.getElementById("schools");
    const product = document.querySelectorAll(".school-info");
    const pname = document.getElementsByTagName("h4");

    for(var i=0; 1 < pname.length; i++){
        let match = product[i].getElementsByTagName("h4")[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
    }
}