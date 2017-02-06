module.exports = {
  url : process.env.MONGO_AUTH === 1?`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}/${process.env.APP}`:`mongodb://${process.env.MONGO_HOST}/${process.env.APP}`,
  morgan:true,
  port:4041,
};