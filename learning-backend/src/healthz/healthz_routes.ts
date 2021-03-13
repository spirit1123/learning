import express from "express"
import { healthz } from "./healthz_controller";

const api = express.Router()

//  GET

api.get('/healthz', healthz)


export = api