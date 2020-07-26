import { Todo } from './../models/todo';
import express, { RequestHandler} from 'express';

const TODOS: Todo[] = [

]
export const createTodo: RequestHandler = (req, res, next)=>{
    const text = (req.body as {text: string}).text
    const newTodo = new Todo(Math.random().toString(),text );

    TODOS.push (newTodo);
    res.status(201).json({message: 'Created', todo: newTodo})
}

export const getTodos: RequestHandler = (req, res, next)=>{

    res.status(201).json({  todos: TODOS})
}

export const updateTodos: RequestHandler<{id: string}> = (req, res, next)=>{
    const id =  req.params.id;

    const updatedTExt=  (req.body as {text:string}).text;

    const todoIndex = TODOS.findIndex(todo=> todo.id === id);
    if(todoIndex<0){
        throw new Error('Could not find todo ! ');

    }

    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedTExt);

    res.status(201).json({  todos: TODOS})
}