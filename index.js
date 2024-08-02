const express = require(`express`)
const app = express()
const port = 3000



app.set(`view engine`, `hbs`)
app.set(`views`, `views`)

// setup untuk bisa mengakses static file
app.use(`/assets`, express.static(`assets`))

app.use(express.urlencoded({ express: true}))
app.use(express.json())

const blogs = []

// routing

app.get(`/index`,renderIndex)
app.get(`/blog`,renderBlog)
app.post(`/blog`,addBlog)
app.get(`/contactform`,renderContactForm)
app.get(`/Contohproject`,renderContohProject)
app.get(`/home`,renderHome)
app.get(`/Testimoni`,renderTestimoni)

function renderIndex(req, res){
    res.render(`index`)
}
function renderBlog(req, res){
    res.render(`blog`,{
        data : blogs,
    })
    
}
function addBlog(req, res){
    console.log(req.body);
    
    blogs.push(req.body)

    res.redirect(`/blog`) 
}
function renderContactForm(req, res){
    res.render(`contactform`)
}
function renderContohProject(req, res){
    res.render(`contohproject`)
}
function renderHome(req, res){
    res.render(`home`)
}
function renderTestimoni(req, res){
    res.render(`testimoni`)
}

// end routing

app.listen(port , () => {
    console.log(`Server berjalan di port ${port}`);
})