import { createTodo, getTodos, updateTodos } from './../controllers/todos';
import {Router} from 'express';

const router= Router();

router.post('/', createTodo);
router.get('/', getTodos);
router.patch('/:id', updateTodos);
router.delete('/:id');


export default router;