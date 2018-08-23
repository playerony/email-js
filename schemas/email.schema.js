const emailSchema = {
  id: "/EmailSchema",
  properties: {
    from: {
      type: "string"
    },
    to: {
      type: "string",
      format: "email"
    },
    subject: {
      type: "string"
    },
    text: {
      type: "string"
    },
    html: {
      type: "string"
    }
  },
  required: ["from", "to", "html"]
};

module.exports = emailSchema;
