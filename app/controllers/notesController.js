import { AppState } from "../AppState.js"
import { notesServices } from "../services/notesServices.js"
import { setHTML } from "../utils/Writer.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
function _drawNotes(){
    console.log('drawing NOTES')
    console.log(AppState)
    let notes = AppState.notes
    let content = ''
    notes.forEach(note => content += note.ListedTemplate)
    setHTML('note-list', content)
}

function _drawActive(){
    console.log('drawing active')
    console.log(AppState.activeNote)
    let active = AppState.activeNote
    setHTML('active-note',active.ActiveTemplate)
}



export class notesController{
    constructor(){
        console.log('Hi from the controller')
        _drawNotes()
        AppState.on('activeNote', _drawActive)
        
    }
    setActive(noteId){
        notesServices.setActive(noteId)
}

    saveNote(){
    
        let textAreaElem = document.querySelector('textarea')
        let updatedBody = textAreaElem.value
        console.log('saving', updatedBody)
        
        notesServices.saveNote(updatedBody)
    }

    createNote(){
        window.event.preventDefault()
        const form = window.event.target
        const formData = getFormData(form)
        console.log('creating')

        // @ts-ignore
        form.reset()

        notesServices.createNote(formData)
        
    }

    async deleteNote(noteId){
        if(await Pop.confirm('Are you want to delete note?')){
            console.log('deleting')
            notesServices.deleteNote(noteId)
        }
    }

}