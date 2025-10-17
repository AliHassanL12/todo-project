import { createTodo } from "./todo";
import { controller } from './controller.js';
import { listener } from "./domListeners";
import './css/style.css';

controller.init();
listener.attachFixedListeners();
