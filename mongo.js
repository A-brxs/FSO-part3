const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url =
  `mongodb+srv://fsodb:${password}@cluster0.kqb8m.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url)


const personSchema = new mongoose.Schema({
  id: Number,
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length == 3 && process.argv[2]) {
    Person
      .find({})
      .then(result => {
        result.forEach(p => {
          console.log(p)
        })
        mongoose.connection.close()
      })   
} else {
    const person = new Person({
        id: Math.floor(Math.random() * 16000),
        name: name,
        number: number,
    })

    person
      .save()
      .then(result => {
        console.log('person saved!')
        mongoose.connection.close()
    })

}    


