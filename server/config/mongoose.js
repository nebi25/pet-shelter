const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/pets',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('Estabilish a coonection to the server'))
.catch((err)=> console.log('Encountered a error while connecting to the server',err))