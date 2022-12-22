const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://matiashaapasalmi:${password}@cluster0.tgrehpn.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

//kommentoitu postaus haku harjoitusta varten

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'HTML is Easy',
  date: new Date(),
  important: true,
})

const note2 = new Note({
    content: 'WATAA',
    date: new Date(),
    important: true,
  })

note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})

note2.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
  })


//Haku kommentoituna pois
//Note.find({}).then(result => {
  //  result.forEach(note => {
    //  console.log(note)
    //})
    //mongoose.connection.close()
  //})