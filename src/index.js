import './style.css';
import UI from './ui.js';
import storage from './store.js';
import addRemove from './add_remove.js';

storage.init();
UI.populateList(storage.get(), addRemove.remove);
