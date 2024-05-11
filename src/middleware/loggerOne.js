const loggerOne = (request, response) => {
  console.log("log 1");
  next();
};
module.exports = loggerOne;
