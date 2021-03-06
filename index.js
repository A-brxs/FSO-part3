const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('build'))
// eslint-disable-next-line no-undef
morgan.token('body', getBody = (request) => {
  return JSON.stringify(request.body)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

const infoMsg = (persons) => {

  return (
    `
      <div>
        <p>There are ${persons} people</p>
        <p>${Date()}</p>
      </div>
      `
  )
}



app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/info', (request, response) => {
  Person
    .countDocuments({})
    .then(p => {
      response.send(infoMsg(p))
    })
})

app.get('/api/persons', (request, response) => {
  Person
    .find({})
    .then(p => {
      response.json(p)
    })
})

app.get('/api/persons/:id', (request, response, next) => {
  Person
    .findById(request.params.id)
    .then(p => {
      if (p) {
        response.json(p)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => {
      console.log('What is this?')
      next(error)
    })

})

app.delete('/api/persons/:id', (request, response, next) => {
  Person
    .findByIdAndRemove(request.params.id)
    .then(response.status(204).end())
    .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {
  const body = request.body
  if (!body.name) {
    return response.status(400).json({
      error: 'Name Missing'
    })
  } else if (!body.number) {
    return response.status(400).json({
      error: 'Number Missing'
    })
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  })
  person
    .save()
    .then(sp => sp.toJSON())
    .then(jsonSp => {
      response.json(jsonSp)
    })
    .catch(error => next(error))

})


app.put('/api/persons/:id', (request,response,next) => {
  const body = request.body
  const person = {
    name: body.name,
    number: body.number
  }
  const opts = {
    runValidators: true, new: true
  }
  Person
    .findByIdAndUpdate(request.params.id, person, opts )
    .then(p => {
      response.json(p)
    })
    .catch(error => next(error))
})


const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)


// this has to be the last loaded middleware.
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})