const showInfo=(e)=>{
    const element = document.getElementById(e.id);
    let innerElement= element.querySelector('.btn-dropdown-info')
    console.log(innerElement.style.display);
    if(innerElement.style.display==='none' || innerElement.style.display==='')
        innerElement.style.display='block';
    else
        innerElement.style.display='none';
}