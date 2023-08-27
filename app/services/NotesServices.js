import { AppState } from "../AppState.js"
import { notesController } from "../controllers/notesController.js"
import { Notes } from "../models/note.js"
import { saveState } from "../utils/Store.js"
import { setHTML } from "../utils/Writer.js"

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
        console.log(updatedBody)
        let active = AppState.activeNote
        active.noteBody = updatedBody
        AppState.emit('activeNote')

        _saveNotes()
    }


    createNote(formData){
        console.log(formData)
        let newNote = new Notes(formData)
        console.log(newNote)
        AppState.notes.push(newNote)
        console.log(newNote)
        AppState.emit('notes')

        AppState.activeNote = newNote
        console.log(AppState)
        _saveNotes()
    }

    deleteNote(noteId){
        let arry = AppState.notes.filter(note=> note.id != noteId)
        console.log(arry)
        AppState.notes = arry
        _saveNotes()
        let active = AppState.activeNote
        setHTML('active-note',active.ActiveTemplate)
    }

}

export const notesServices = new NotesServices()