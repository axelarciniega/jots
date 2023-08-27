import { generateId } from "../utils/GenerateId.js";
import { AppState } from "../AppState.js";




export class Notes{
    constructor(data){
        console.log(data)
        this.id = generateId()
        this.noteTitle = data.noteTitle ? data.noteTitle : data.title    
        this.noteBody = data.noteBody ? data.noteBody : ''
        this.noteDate = data.noteDate ? new Date(data.noteDate) : new Date()
        this.noteColor = data.noteColor ? data.noteColor : data.noteColor
    }

    get ListedTemplate(){
        return /*html*/`
        <div>
        </div>
        <div class="col-4">
        
          <button style="background-color:${this.noteColor}" onclick="app.notesController.setActive('${this.id}')">${this.noteTitle}</button>
          <p>${this.noteDate.toLocaleDateString()}</p>
        </div>
        
        `
    }

    get ActiveTemplate(){
        return `
         <div class="col-8" id="active-note">
    <h1 style="border: 1px solid ${this.noteColor}">${this.noteTitle}</h1>
    <p)">${this.noteDate.toLocaleTimeString()}</p>
    <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="For notes area"
              id="floatingTextarea2"
              style="height: 300px"
            >${this.noteBody}</textarea>
            <label for="floatingTextarea2">Notes Below</label>
            <div class="d-flex justify-content-between">
            <button class="bg-grey" onclick="app.notesController.saveNote()">Save</button>
            <button class="bg-grey" onclick="app.notesController.deleteNote('${this.id}')">Delete Note <i class="mdi mdi-delete"></i></button>
            
            </div>
          </div>
        </div>
        </div>
        
        `
    }

    // get time(){
    //     let date = this.noteDate
    //     return date.toLocaleTimeString('en-us'{})
    // }

}