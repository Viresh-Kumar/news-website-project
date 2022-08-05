const fetch = require("node-fetch")
const apiKey = process.env.API_KEY

const getHomePage = async (req, res) => {
    const news = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
    )
        .then((response) => response.json())
        .catch((error) => console.log(error))
    res.render("index", { pageTitle: "Home", news: news.articles })
}
const getSearchResults = async (req, res) => {
    const { q, page } = req.query
    const news = await fetch(
        `https://newsapi.org/v2/everything?q=${q}&pageSize=16&page=${page}&apiKey=${apiKey}`
    )
        .then((response) => response.json())
        .catch((error) => console.log(error))

    res.render("search-results", {
        pageTitle: "News Results",
        news: news.articles,
    })
}
const getAboutPage = async (req, res) => {
    res.render("about", { pageTitle: "About" })
}
module.exports = {
    getHomePage,
    getSearchResults,
    getAboutPage,
}
