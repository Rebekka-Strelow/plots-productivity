import { Habit } from "./habit";
import { TodoItem } from "./todo-item";

export interface Plot {
    id: string;
    bezeichnung: string;
    beschreibung: string;

    todos: TodoItem[];
    habits: Habit[];
}
