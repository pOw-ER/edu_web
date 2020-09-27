const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const eMail = document.querySelector('#eMail');
const signIn = document.querySelector('#signIn');
const form = document.querySelector('#formId');
const deleteItem = document.querySelector('.fas fa-times')
const tbody=document.querySelector('#task-list')
const table=document.querySelector('#table-first')

eventListeners();

function eventListeners() {
    form.addEventListener('submit',addNewItem);
    table.addEventListener('click',deleteAnItem);
}



// function addNewItem(e) {
//     console.log(firstName.value +' '+ lastName.value +'>'+ eMail.value);
//     const li= document.createElement('li');
//     li.className='list-group-item list-group-item-secondary'
//     li.appendChild(document.createTextNode(firstName.value+lastName.value+eMail.value))
//     const a = document.createElement('a');
//     a.setAttribute('href','#');
//     a.className='delete-item float-right';
//     a.innerHTML='<i class="fas fa-times"></i>';
//     li.appendChild(a);
//     list.appendChild(li);
//     console.log(li);
//     e.preventDefault;
// }

function addNewItem(e) {
    console.log(firstName.value +' '+ lastName.value + eMail.value);
    const tr=document.createElement('tr');
    const th=document.createElement('th');
    const td=document.createElement('td');
    th.setAttribute('scope','row');
    th.innerText=tbody.childElementCount+1;
    tr.appendChild(th);
    td.innerText=firstName.value;
    tr.appendChild(td);
    const td1=document.createElement('td');
    td1.innerText=lastName.value;
    tr.appendChild(td1);
    const td2=document.createElement('td');
    td2.innerText=eMail.value;
    tr.appendChild(td2);
    const a = document.createElement('a');
    const td3=document.createElement('td');
    a.setAttribute('href','#');
    a.innerHTML='<i class="fas fa-times"></i>';
    td3.appendChild(a);
    tr.appendChild(td3);
    tbody.appendChild(tr);

    e.preventDefault();
}


function deleteAnItem(e) {
    if(e.target.className==='fas fa-times' && confirm('Sind Sie sicher?')){
      e.target.parentElement.parentElement.parentElement.remove();
      console.log(e.target.parentElement.parentElement);
    }
    e.preventDefault();
}
