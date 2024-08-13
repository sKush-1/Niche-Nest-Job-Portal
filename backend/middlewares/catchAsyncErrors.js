export const catchAsyncErrors = (theFunction) => {
  return (req, res, next) => {
    console.log(req.body)
    Promise.resolve(theFunction(req, res, next)).catch(next);
  };
};
