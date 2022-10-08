const app = require('./src/app')
const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>{
    console.log(`The app is running on port ${PORT}`)
})