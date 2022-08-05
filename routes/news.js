const express = require("express");
const router = express.Router();

const {
  getHomePage,
  getSearchResults,
  getAboutPage,
} = require("../controller/news");

router.get("/", getHomePage);
router.get("/search", getSearchResults);
router.get("/about", getAboutPage);

module.exports = router;
