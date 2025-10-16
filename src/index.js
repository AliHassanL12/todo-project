import { createTodo } from "./todo";
import { controller } from './controller.js';
import './css/style.css';


const defaultProject = controller.createNewProject('default');

const workingOut = createTodo('Work Powerpoint', 'Need to complete powerpoint assigned by manager', '13/09/2025', 'high', 'Don\'t mess it up lol');
const studying = createTodo('Study Javascript', 'Need to complete javascript section of the odin project', '13/09/2027', 'low', 'take your time');

controller.addTodo(defaultProject, workingOut);
controller.addTodo(defaultProject, studying);

controller.displayList(defaultProject);