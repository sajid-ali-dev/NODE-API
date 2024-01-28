const errorMiddleware = (err, req, res, next) => {
  console.log("error middleware");
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.send({
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};

module.exports = errorMiddleware;
