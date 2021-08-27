import './style.css';
import UI from './ui.js';
import storage from './store.js';

storage.init();

UI.populateList(storage.get());
