'use strict'

const express = require('express')
const { Router } = express
const router = Router()
const model = require("../model")

router.get('/:id', function (req, res, next) {
    model.bicycle.read(req.params.id, (err, result) => {
        if (err) {
            if (err.message === 'not found') {
                next()
            } else {
                next(err)
            }
        } else {
            res.send(result)
        }
    })
})

router.post('/', function (req, res, next) {
    const id = model.bicycle.uid();
    const { data } = req.body;
    model.bicycle.create(id, data, (err) => {
        if (err) {
            next(err);
        } else {
            res.status(201).send({ id });
        }
    })
})

router.post('/:id/update', function (req, res, next) {
    const { id } = req.params;
    const { data } = req.body
    model.bicycle.update(id, data, (err) => {
        if (err) {
            if (err.message === 'not found') {
                next()
            } else {
                next(err)
            }
        } else {
            res.status(204).end();
        }
    })
})

router.put('/:id', function (req, res, next) {
    const { id } = req.params
    const { data } = req.body
    model.bicycle.create(id, data, (err) => {
        if (err) {
            if (err.message === 'resource exists') {
                model.bicycle.update(id, data, (err) => {
                    if (err) {
                        next(err)
                    } else {
                        res.status(204).end()
                    }
                })
            } else {
                next(err)
            }
        } else {
            res.status(201).send({})
        }
    })
})

router.delete('/:id', function (req, res, next) {
    const { id } = req.params
    model.bicycle.del(id, (err) => {
        if (err) {
            if (err.message === 'not found') {
                next()
            } else {
                next(err)
            }
        } else {
            res.status(204).end()
        }
    })
})

module.exports = router