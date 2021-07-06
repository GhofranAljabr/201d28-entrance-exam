let form=document.getElementById('form');
let table=document.getElementById('table');

function Movie(Name,Image,Release){
    
    this.Name=Name;
    this.Image=Image;
    this.Release=Release;
    Movie.all.push(this);
}
Movie.all=[];


function getDatat(e){
 e.preventDefault;
 let Name= e.target.Name.value;
 let Image=e.target.select.value;
 let Release=e.target.release.value;

 new Movie(Name,Image,Release);
 localStorage.setItem('mov'),JSON.stringify(Movie.all);

 let tr=document.createElement('tr');
 table.appendChild(tr);

 let td1=document.createElement('td');
 tr.appendChild(td1);
 td1.textContent=Name

 let td2=document.createElement('td');
 tr.appendChild(td2);
 td2.textContent=Image

 let td3=document.createElement('td');
 tr.appendChild(td3);
 td3.textContent=Release


}
form.addEventListener(Save,getDatat);


function render (){
    let DOM=JSON.parse(localStorage.getItem('mov'));
     if (DOM) {
        Movie.all=DOM;
        for (let i = 0; i <DOM.length; i++) {
           
            let tr=document.createElement('tr');
            table.appendChild(tr);

            let td1=document.createElement('td');
            tr.appendChild(td1);
           td1.textContent=DOM[i].Name

            let td2=document.createElement('td');
            tr.appendChild(td2);
            td2.textContent=DOM[i].Image

            let td3=document.createElement('td');
            tr.appendChild(td3);
            td3.textContent=DOM[i].Release
        }
     }console.log(DOM);
}
render();



