const express = require(`express`)
const app = express()
const moment = require(`moment`)
const db = require(`./src/db`)
const { QueryTypes } = require(`sequelize`)
const { SELECT } = require("sequelize/lib/query-types")
const session = require(`express-session`)
const flash = require(`express-flash`)
const port = 3000


app.set(`view engine`, `hbs`)
app.set(`views`, `views`)

// setup untuk bisa mengakses static file
app.use(`/Assets`, express.static(`assets`))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(flash())
app.use(session({
    secret: `bapho`,
    cookie: {
        maxAge: 360000, secure: false, httpOnly: true
    },
    saveUninitialized: true,
    resave: true,
    store: new session.MemoryStore()
}))

const blogs = {}

// routing

app.get(`/index`, renderIndex)
app.get(`/blog`, renderBlog)
app.post(`/blog`, addBlog)
app.get(`/contactform`, renderContactForm)
app.get(`/Contohproject/:blog_id`, renderContohProject)
app.get(`/`, renderHome)
app.get(`/Testimoni`, renderTestimoni)
app.get(`/edit-blog/:blog_id`, renderEditBlog)
app.post(`/edit-blog/:blog_id`, editBlog)
app.get(`/delete-blog/:blog_id`, deleteBlog)
app.post(`/login`, login)
app.get(`/login`, renderLogin)
app.get(`/register`, renderRegister)
app.post("/register", register)



async function renderIndex(req, res) {
    res.render(`index`, {
        data: result,
    })
}
async function renderBlog(req, res) {
    const query = `SELECT * FROM public.blog`
    const result = await db.query(query, {
        type: QueryTypes.SELECT
    })
    res.render(`blog`, {
        data: result,
    })
}
async function addBlog(req, res) {
    try {
        // const user = req.session.user
        console.log(req.body);
        // const now = moment()
        const newBlog = `
        INSERT INTO public.blog(
            title, startdate, enddate, content)
            VALUES ($1, $2, $3, $4);`

        const values = [
            req.body.title,
            req.body.startDate,
            req.body.endDate,
            req.body.inputContent,
        ]

        await db.query(newBlog, {
            type: QueryTypes.INSERT,
            bind: values,
        })
        res.redirect(`/blog`)
    } catch (error) {
        console.log(error);
    }
}
function renderContactForm(req, res) {
    res.render(`contactform`)
}
function renderContohProject(req, res) {
    const id = req.params.blog_id

    const blog = blogs.find(blog => blog.id == id)

    res.render(`Contohproject`, {
        data: blog,
    })
}
function renderHome(req, res) {
    res.render(`home`)
}
function renderTestimoni(req, res) {
    res.render(`testimoni`)
}
async function renderEditBlog(req, res) {
    try {
        const id = req.params.blog_id
        const blog = await db.query(`SELECT * FROM blog WHERE id = ${id}`,
            {
                type: QueryTypes.SELECT
            })

        res.render(`edit-blog`, {
            data: blog[0]
        })
    } catch (error) {
        console.log(error);
    }
}
async function editBlog(req, res) {
    try {
        const id = req.params.blog_id
        // const now = moment()
        const newBlog = {
            title: req.body.title,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            content: req.body.inputContent,
            // createdAt: now.format(`MM-DD-YYYY`),
            // author: "Eros",
        }

        const values = [
            newBlog.title,
            newBlog.startDate,
            newBlog.endDate,
            newBlog.content,
            id
        ]

        const editBlog = `
                UPDATE public.blog SET
                title = $1,
                startDate = $2,
                endDate = $3,
                content = $4
                WHERE id = $5`

        await db.query(editBlog, {
            bind: values
        })
        res.redirect("/blog")
    } catch (error) {
        console.log(error);
    }
}
async function deleteBlog(req, res) {
    const id = req.params.blog_id
    const deleteBlog = `DELETE FROM public.blog
            WHERE id =${id};`
    await db.query(deleteBlog)
    res.redirect(`/blog`)
}
function renderLogin(req, res) {
    res.render(`login`)
}
async function login(req, res) {
    try {
        const query = `
        SELECT * FROM public."user"
        WHERE email = $1 
        AND password = $2`


        const existUser = await db.query(query, {
            type: QueryTypes.SELECT,
            bind: [req.body.email, req.body.password]
        })

        if (existUser.length === 0) {
            req.flash(`error`, `Login Gagal!`)
            return res.redirect(`/login`)
        }

        req.session.user = existUser[0]
        req.session.isLogin = true

        req.flash(`succes`, `Login Sukses!`)
        res.redirect(`/blog`)
    } catch (error) {
        console.log(error);
        res.redirect(`/login`)
    }
}
function renderRegister(req, res) {
    console.log(req.session);

    res.render(`register`, {
        info: req.session.info,
        massage: req.session.message,
    })
}
async function register(req, res) {
    try {

        const query = `
        INSERT INTO public.user
            (fullname, email, password)
        VALUES($1, $2, $3); `
        const values = [
            req.body.fullname,
            req.body.email,
            req.body.password,
        ]
        await db.query(query, {
            type: QueryTypes.INSERT,
            bind: values,
        })

        req.flash(`succes`, `register berjalan`)
        res.redirect("/login")

    } catch (error) {
        console.log(`error`, error);
        res.redirect(`/register`)

    }
}




// end routing

app.listen(port, () => {
    console.log(`Server berjalan di port ${port} `);
})