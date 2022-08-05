require("dotenv").config()
const express = require("express")
const routes = require("./routes/news")

const app = express()

app.set("view engine", "ejs")

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("listening to port 3000...")
})

app.use(express.static("public"))

app.use("/", routes)

app.use((req, res) => {
    res.render("404", { pageTitle: "Page Not Found" })
})
