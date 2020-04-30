

//define the UI variables
const form =document.querySelector('#task-form');
const taskList=document.querySelector('.collection');
const clearBtn=document.querySelector('.clear-task');
const filter=document.querySelector('#filter');
const taskInput=document.querySelector('#task');
const abc;

loadEventListeners();

function loadEventListeners(){

    form.addEventListener('submit',addTask);

    taskList.addEventListener('click', removeTask);

    clearBtn.addEventListener('click',clearTask);

    filter.addEventListener('click',filterTask);

}

function addTask(e)
{
    if(taskInput.value ==='')
    {
        alert("Please add a task");
    }

    //create a new li element
    const li = document.createElement('li');

    //add class
    li.className='collection-item';

    //append a text node to the li element 
    li.appendChild(document.createTextNode(taskInput.value));

    //create a new link element
    const link=document.createElement('a');

    //add a new class
    link.className='delete-item secondary-content';

    //add icon html
    link.innerHTML='<i class="fa fa-remove"></i>';// this is the class of the icon class of the cross which is added to the add list 

    //Append the link to li
    li.appendChild(link);

    //append the li to ul
    taskList.appendChild(li);

    console.log(link);
    taskInput.value=' ';
    e.preventDefault();
}

function removeTask(e)
{
   if(e.target.parentElement.classList.contains('delete-item'))
   {
       if(confirm('are you sure?'))
       {
            e.target.parentElement.parentElement.remove();
       }
   }
}

function clearTask(e)
{
    if(confirm('Do you want to clear the whole task list ?'))
    {
        while(taskList.firstChild)
        {
            taskList.removeChild(taskList.firstChild);
        }
    }
}

function filterTask(e)
{
      const text=e.target.value.toLowerCase();

      document.querySelectorAll('.collection-item').forEach(function(task){
        const item=task.firstChild.textContent;

        if(item.toLowerCase().indexOf(text)!=-1)
        {
            task.style.display='block';
        }
        else
        {
            task.style.display='none';
        }
      });
}
