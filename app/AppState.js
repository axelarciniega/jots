import { Notes } from "./models/note.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"



class ObservableAppState extends EventEmitter {
  
  /**@type {import ('./models/Value.js').Value[]}*/
values = loadState('values',[Value])



// notes = loadState('notes',[Notes])


  notes = [
    new Notes({
      noteTitle: 'JavaScript',
      noteBody: 'Javascript is quite more challenging then html and css. Once you start doing more with it though, it gets easier.'
    }),
    new Notes({
      noteTitle: 'Basketball',
      noteBody: 'DO NOT forget you have basketball practice this whole week at 5pm.'
    })
  ]
  
  /**@type {import("./models/note.js").Notes|null}*/
    activeNote = null
  
  
  
  
  
  
  page = ''



  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
