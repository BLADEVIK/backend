const loggerTwo = (request, response) => {
  console.log("log 2");
  next();
};
module.exports = loggerTwo;
