import './style.css';
import UI from './ui.js';
import storage from './store.js';
import addRemove from './add_remove.js';
import clearAllCompleted from './remove_all_completed.js';

storage.init();
UI.populateList(storage.get(), addRemove.remove);
const clearCompBtn = document.querySelector('.clear-all');
clearCompBtn.addEventListener('click', () => {
  clearAllCompleted();
  UI.populateList(storage.get(), addRemove.remove);
});
