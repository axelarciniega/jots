import { generateId } from "../utils/GenerateId.js";





export class Notes{
    constructor(data){
        this.id = generateId()
        this.noteTitle = data.noteTitle
        this.noteBody = data.noteBody
        this.noteDate = data.noteDate ? new Date(data.noteDate) : new Date()
    }

    get ListedTemplate(){
        return /*html*/`
        <div class="col-4">
        
          <button onclick="app.notesController.setActive('${this.id}')">${this.noteTitle}</button>
          <p>${this.noteDate.toLocaleDateString()}</p>
        </div>
        
        `
    }

    get ActiveTemplate(){
        return `
         <div class="col-8" id="active-note">
    <h1>${this.noteTitle}</h1>
    <p)">${this.noteDate.toLocaleDateString()}</p>
    <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="For notes area"
              id="floatingTextarea2"
              style="height: 300px"
            >${this.noteBody}</textarea>
            <label for="floatingTextarea2">Notes Below</label>
            <button onclick="app.notesController.saveNote()">Save</button>
          </div>
        </div>
        </div>
        
        `
    }

}