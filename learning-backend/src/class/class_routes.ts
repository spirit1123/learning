import express from "express"
import { get, get_all } from "./class_controller"

const api = express.Router()

//  GET

api.get('/get_all', get_all)
api.get('/get/:id', get)

//  POST

//  PUT

//  DELETE

export = api