import { AppState } from "../AppState.js"
import { Notes } from "../models/note.js"
import { saveState } from "../utils/Store.js"

function _saveNotes(){
    saveState('notes',AppState.notes)
}

class NotesServices{


    setActive(noteId){
        // console.log('setting active')
let foundNote = AppState.notes.find(note => note.id == noteId)
        AppState.activeNote = foundNote
        console.log(foundNote)
    }

    saveNote(updatedBody){
        console.log('saving')
        let active = AppState.activeNote
        active.noteBody = updatedBody
        AppState.emit('activeNote')

        _saveNotes()
    }

    createNote(formData){
        let newNote = new Notes(formData)
        AppState.notes.push(newNote)
        console.log(newNote)
        AppState.emit('notes')

        AppState.activeNote = newNote
    }


}

export const notesServices = new NotesServices()