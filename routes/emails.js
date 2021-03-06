const express = require("express");
const router = express.Router();
const sendEmail = require("../services/email.service");
const renderTemplate = require("../utils/emailUtils");
const schema = require("../schemas/email.schema");
const validateSchema = require("../utils/jsonValidator");
const responses = require("../utils/responses").responses;

router.post("/", function(req, res, next) {
  const body = req.body;
  const email = body.email;

  if (!email) res.json(responses.failure("Body: Email is not defined."));

  const list = validateSchema(email, schema);

  if (list.length > 0) responses.failure(list);
  else
    renderTemplate(email.html)
      .then(response => {
        email.html = response;

        sendEmail(req.headers.login, req.headers.password, email)
          .then(response => {
            res.json(responses.success(response));
          })
          .catch(error => {
            res.json(responses.failure(error));
          });
      })
      .catch(error => {
        res.json(responses.failure(error));
      });
});

module.exports = router;
