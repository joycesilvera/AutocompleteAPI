const express = require("express");
const router = express.Router();
const data = require("../addresses");

router.get("/", (req, res) => {
  const filteredUsers = data.filter((address) => {
    const regex = new RegExp(`^${req.query}`, "gi");
    return (
      address.line1.match(regex) ||
      address.city.match(regex) ||
      address.state.match(regex) ||
      address.zip.match(regex)
    );
  });
  res.send(filteredUsers);
});

router.get("/:id", (req, res) => {
  const filteredUsers = data.filter((address) => {
    const regex = new RegExp(`^${req.params.id}`, "gi");
    return (
      address.line1.match(regex) ||
      address.city.match(regex) ||
      address.state.match(regex) ||
      address.zip.match(regex)
    );
  });
  res.send(filteredUsers);
});

module.exports = router;
