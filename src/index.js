import { createTodo } from "./todo";
import { createProject } from "./project";
import { controller } from './controller.js';
import './css/style.css';


const defaultProject = createProject('default');
const workingOut = createTodo('Work Powerpoint', 'Need to complete powerpoint assigned by manager', '13/09/2025', 'high', 'Don\'t mess it up lol');

controller.addTodo(defaultProject, workingOut);

controller.displayList(defaultProject);