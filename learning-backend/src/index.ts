import * as bodyParser from 'body-parser'
import express from 'express'

const app = express()

app.use(bodyParser.json())

//  Routes

import class_routes       from './class/class_routes'
import healthz_routes     from './healthz/healthz_routes'

app.use((req, res, next) => {
    //  CORS allowed during development
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");
    next();
})


app.use('/api/class', class_routes)
app.use('/api/healthz', healthz_routes)

const server = app.listen(3000, () =>
  console.log(
    '🚀 Server ready at: http://localhost:3000',
  ),
)