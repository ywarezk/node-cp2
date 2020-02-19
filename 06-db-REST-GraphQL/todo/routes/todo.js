/**
 * REST api for the todo table
 */

const express = require("express");
const Todo = require("../models/index").Todo;

const todoRouter = express.Router();

todoRouter.route("/")
    .get(async function(req, res) {
        const todos = await Todo.findAll();
        res.json(todos);
    })
    .post(async function(req, res) {
        try {
            const todo = await Todo.create(req.body);
            res.status(201).json(todo);
        } catch(err) {
            next(err);
        }
    });

// todoRouter.route("/:id")
//     .put()
//     .delete()
//     .patch()

module.exports = todoRouter;