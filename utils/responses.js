const success = function(message) {
  return {
    status: 200,
    response: message,
    error: null
  };
};

const failure = function(message) {
  return {
    status: 500,
    response: null,
    error: message
  };
};

exports.responses = {
  success,
  failure
};
