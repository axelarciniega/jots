import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { notesController } from "./controllers/notesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: notesController,
    view: /*html*/`
<section class="row">
    <h2>Notes</h2>
    <button data-bs-toggle="collapse" data-bs-target="#noteFormCollapse" class ="button-color col-4">Create Note📝</button>

    <div class="collapse" id="noteFormCollapse">
    <form onsubmit="app.notesController.createNote()" action="">
    <div class="row d-flex justify-content-around">
    <div class="col-3">
            <input required name='title' id="title" minLength="3" maxLength="15"
            type="text"
              class="form-control"
              placeholder="Title"
              aria-label="Title"
              />
          </div>
          <div class="col-2">
          <input required name='noteColor' id="noteColor"
              type="color"
              class="form-control"
              placeholder="color"
              aria-label="color"
              />
              </div>
              
              <div class = "text-end" type = "submit">
              <button type="submit" class = " button-color">Submit!</button>
              </div>
              </div>
              </form>
              </div>
              </section>
              
              <section class = 'row'>
              <div class="col-4" id="note-list" >
              <h2>Notes</h2>
              <p>note name</p>
              <p>time it wa created</p>
              </div>
              
              
              <div class="col-8" id="active-note">
              <!-- <h1>Note Name</h1>
              <p>time it was created</p>
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="For notes area"
              id="floatingTextarea2"
              style="height: 100px"
            ></textarea>
            <label for="floatingTextarea2">note body</label>
          </div>
        </div> -->

        </section>



    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]