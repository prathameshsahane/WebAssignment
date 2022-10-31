const showres=(e)=>{
  display(e.target.value);
}
function display(element){
  const filter=countries_data.filter((value)=>{
    if(value.name.startsWith(element)){
      return true;
    }
    return false;
  });

  const parent=document.getElementById('result_table');
  parent.innerHTML="";
  filter.forEach((e)=>{
    const new_row=document.createElement('tr');
    const new_countries=document.createElement('td');
    new_countries.innerHTML=e.name;
    new_row.appendChild(new_countries);
    parent.appendChild(new_row);
  })
}
document.getElementById('search_form').addEventListener('keypress',showres);
