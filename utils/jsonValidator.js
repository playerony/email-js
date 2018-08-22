const Validator = require('jsonschema').Validator;
const v = new Validator();

const validateSchema = function(req, schema) {
    let result = v.validate(req, schema);
    let errors = result.errors;
    let list = [];

    for(let i=0 ; i<errors.length ; i++)
        list.push({
            property: errors[i].property,
            error: errors[i].message
        });

    return list;
};

module.exports = validateSchema;