const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

let delete_element = false;
GeolocationCoordinates().forEach(note =>{
    createNote(note.id, note.content)
});
addNoteButton.addEventListener("click", () => addNoteButton());
function getNotes(){
    return JSON.parse(localStorage.getItem("note-ap") || "[]");
}
function saveNotes(notes){
    localStorage.setItem("note-ap", JSON.stringify(notes));
}
function createContainer(){
    const elementdiv = document.createElement("div");
    elementdiv.classList.add("note-container");
    return elementdiv;
}

function createNoteElement(id, content){
    const element = document.createElement("div");
    element.classList.add("note");
    element.value = content;
    element.textContent = content ? content : "Empty Note";
    element.setAttribute("contenteditable", "true")

    element.addEventListener("keydown", () => {
        updateNote(id, element.textContent);
    });
    element.addEventListener('click', (e) => {
        if(element.textContent == "Empty Note"){
            element.textContent = '';
        }
    });
    return element;
}