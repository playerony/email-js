const EmailTemplate = require("email-templates");

const renderTemplate = html => {
  let emailTemplate = new EmailTemplate();

  return emailTemplate
    .render(html)
    .then(response => {
      return response;
    })
    .catch(error => {
      return "There was unexpected problem during generate an email template.";
    });
};

module.exports = renderTemplate;
