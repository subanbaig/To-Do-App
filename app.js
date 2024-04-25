function addToDo(){
    var todo = document.getElementById("taskInput");

    if(todo.value){    
        var liEle = document.createElement('li');
        
        var liTxt = document.createTextNode(todo.value);
        
        liEle.appendChild(liTxt);
        
        var lit = document.getElementById("list");
        
        lit.appendChild(liEle);
        
        var editBtnElemt = document.createElement('button');
        
        var editBtnTxt = document.createTextNode("Edit");

        editBtnElemt.appendChild(editBtnTxt);
        editBtnElemt.setAttribute("class",'edit')
        editBtnElemt.setAttribute("onclick",'editItem(this)')

        liEle.appendChild(editBtnElemt);

        var delBtnElemt = document.createElement('button');

        var delBtnTxt = document.createTextNode("Delete");
        
        delBtnElemt.appendChild(delBtnTxt);
        delBtnElemt.setAttribute("class",'del')
        delBtnElemt.setAttribute("onclick",'deleteItem(this)')
        
        liEle.appendChild(delBtnElemt);
        
        todo.value = "";
    }
    else{
        alert("Please Enter Task!")
    }
}

function deleteAll(){
    var lit = document.getElementById("list");
    lit.innerHTML =" ";
}

function deleteItem(e){
    alert("You sure want to delete this!")
    e.parentNode.remove();
}
function editItem(f){
    var val = f.parentNode.firstChild;
    var editValue = prompt("Enter Edit Value");

    val.nodeValue = editValue;
}