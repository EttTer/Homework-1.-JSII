
const Task = (props) => {

    let {done, due, id, name} = props;
return `<div class="todo__tasks">
<div class="task">
<div class="task__body">
  <div class="task__name">${name}</div>
  <div class="task__due">${due}</div>
</div>
<div class="task__done">${done}</div>
</div>`;
};



const renderTasks = (tasks) => {
    const taskElm = document.querySelector(".task");
    taskElm.innerHTML= tasks
    .map((t) => Task(t))
    .join("");
};



/* Vypíšeme všechny pole do konzole

fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
.then((response)=> {
    return response.json();
})
.then((data)=> console.log(data));*/


// Fungující výpis do stránky všech položek seznamu

fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
.then((response)=> {
    return response.json();
})
.then(renderTasks);

//Tohle po kliku vyfiltruje všechny neudělané

let checked = document.querySelector(".todo__filter");
checked.addEventListener("click", (event)=>{
    fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks?done=false')
    .then((response)=> {
        return response.json();
    })
    .then(renderTasks);

});
// A tohle vrátí zpět celý seznam
checked.addEventListener("click", (event)=>{
    fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
    .then((response)=> {
        return response.json();
    })
    .then(renderTasks);

});



//-----dosud všechno OK------

/*let checkbox= document.querySelector(".todo__filter");

checkbox.addEventListener('change', (event) => {

  if (this.checked) {fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks?done=false')
  .then((response)=> {
      return response.json();
  })
  .then(renderTasks);
  
  };
   else {
        fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
        .then((response)=> {
            return response.json();
        })
        .then(renderTasks);
  };
});*/



/*checked.addEventListener("click", (event)=>{ 
 

 fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks?done=false')
.then((response)=> {
    return response.json();
})
.then(renderTasks);

});*/




/*checked.click(()=>{
    fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
    .then((response)=> {
        return response.json();
    })
    .then(renderTasks);

});*/


/*const renderTasks = (tasks) => {
    const taskElm = document.querySelector(".task__done");
    taskElm.innerHTML= tasks
    .map((t) => Task(t))
    .join("");
};


fetch(`https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks?done=false`)
  .then((response) => {
    response.json();
  })
    .then(renderTasks);


  /*  fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread`)
    .then((response) => {
      response.json();
    })
      .then((data) => console.log(data));*/