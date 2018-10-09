import express from 'express';
import TodoData from './todo-data';

const todoExpress = express();
todoExpress.get('/todo', (req, res) => { console.log('get'); TodoData.findAll().then(todos => res.json(todos)).catch((err) => res.status(500).json(err))});
todoExpress.get('/todo/:id', (req, res) => { console.log('hit route'); TodoData.getOne(req.params.id).then(todo => res.json(todo)).catch((err) => res.status(500).json(err))});
todoExpress.post('/todo', (req, res) => TodoData.create(req.body).then(todo => res.json(todo)).catch((err) => res.status(500).json(err)));
todoExpress.delete('/todo/:id', (req, res) => TodoData.delete(req.params.id).then(() => res.sendStatus(200)).catch((err) => res.status(500).json(err)));

// TODO: Implement
todoExpress.put('/todo/:id', (req, res) => TodoData.update(req.params.id, req.body).then(() => res.sendStatus(202)).catch((err) => res.status(500).json(err)));
// changed put to update since it is update on tododata
export default todoExpress;
