var express = require('express');
var router = express.Router();
const loginCheck = require("../module/loginCheck");
const upload = require("../module/imageUpload");

/*
let arr = [];

// GET method
router.get('/read', (rep, res) => {
  res.status(200).json({
    message: "read success",
  });
})

// POST method
router.post('/create', (req, res) => {
  const { data } = req.body;
  arr.push(data);
  res.status(200).json({
    message: "create success",
    result: arr,
  })
})

// PUT method
router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  arr[id] = data;
  res.status(200).json({
    message: "update success",
    result: arr,
  })
})

// DELETE method
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  arr.splice(id, 1);
  res.status(200).json({
    message: "delete success",
    result: arr,
  })
})
*/

/*
const loginCheck = (req, res, next) => {
  const userLogin = true;
  if (userLogin) {
    next();
  } else {
    res.status(400).json({
      message: "login fail!!",
    });
  }
};

router.get('/', loginCheck, (req, res) => {
  res.status(200).json({
    message: "login success!!",
  });
});
*/

router.get('/', loginCheck, (req, res) => {
  res.status(200).json({
    message: "login success!!",
  });
});

router.post('/upload', upload.single('image'), (req, res) => {
  const file = req.file;
  console.log(file);
  res.status(200).json({
    message: "upload success!!",
  });
});

module.exports = router;
