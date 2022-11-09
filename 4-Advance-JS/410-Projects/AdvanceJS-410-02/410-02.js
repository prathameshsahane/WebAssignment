let apikey="ee63abe3-2030-43d0-9fd0-ed9ff7099e71";
const searchword=(e)=>{
    var result= document.getElementById("result"); 
    e.preventDefault();
    var inp=document.getElementById("input").value;
    if(inp===""){
        alert("Enter Text");
    }
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${inp}?key=${apikey}` )
    .then((data)=>{
        return (data.json());
    },()=>{
        console.log("no")
    })
    .then((data)=>{
        if(data.length===0){
          result.innerText="No suggestions found" ; 
        }
        else if(typeof data[0]==='string'){
            result.innerHTML=`<h4>Did you Mean?<h4>`
            for(var i=0;i<data.length;i++){
               var span= document.createElement("span");
               span.innerHTML=`${i+1}.`+`${data[i]}`+"     ";
               result.appendChild(span);
            }
        }
        else{
           var meaningArray=data[0].shortdef;
           var ol=document.createElement("ol");      
           meaningArray.forEach(element => {
            var li= document.createElement("li"); 
            li.innerHTML=element;
            ol.appendChild(li);
           });
         
           if(result.innerHTML===""){
            result.appendChild(ol);
           }
           else{
            result.innerHTML="";
            result.appendChild(ol);
           }
        }
         
    })
}
document.getElementById("form").addEventListener('submit',searchword);