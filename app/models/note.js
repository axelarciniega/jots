import { generateId } from "../utils/GenerateId.js";





export class Notes{
    constructor(data){
        this.id = generateId()
        this.noteTitle = data.noteTitle
        this.noteBody = data.noteBody
        this.noteDate = data.noteDate ? new Date(data.noteDate) : new Date()
    }



}