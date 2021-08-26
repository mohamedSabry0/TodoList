import './style.css';
import { UI } from './ui';

const mockList = [
  {
    description: 'task 4',
    completed: true,
    index: 4,
  },
  {
    description: 'task 2',
    completed: false,
    index: 2,
  },
  {
    description: 'task 3',
    completed: false,
    index: 3,
  },
];

UI.populateList(mockList);
