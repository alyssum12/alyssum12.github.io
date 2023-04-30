const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

//submit의 기본동작 = 페이지 새로고침

const TODOS_KEY = "todos" //localStorage의 key값
let toDos = []; //빈값으로 시작하면 빈값에 계속 덮어씌워짐

function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
}

function deleteTodo(event){ //todo 지우기
    const li = event.target.parentElement; //eventListner가 발동된 target의 부모요소
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //내가 클릭한거 말고 다른것만 남기고 지우기
    saveToDos();
}
// target = 클릭된 HTML element
// 클릭시 event -> target을 줌 -> target의 parent를 찾음 -> 제거

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = `»-♡→ ${newTodo.text}`;

    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //input의 value를 비우기 전의 값을 나타내는 string
    toDoInput.value = ""; //엔터 쳤을때 form 비우기
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj); //배열의 끝에 요소를 추가함
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); //toDo array 불러오기
    toDos = parsedToDos //localStorage에 toDo들이 있으면 toDo에 parsedToDos를 넣어서 전에 있던 toDo들 복원
    parsedToDos.forEach(paintToDo); //forEach = 각각의 item에 대해 sayHello() 싦행
}

//forEach함수는 paintToDo를 parsedToDos 배열의 요소마다 실행
//지우고 싶은 item을 제외하고 새 arry 생성 = filter사용

function sexyFilter(){

} //false를 리턴하면 배열에 포함되지 않음

[1,2,3,4].filter(sexyFilter)
