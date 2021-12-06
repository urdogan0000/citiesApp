const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const townSchema = new Schema({
 
  name: {
    type: String,
    required: true,
  },
  city_id:{
      type:String,
      required:true
  },

});

const Town = mongoose.model("Town", townSchema);

module.exports = Town;
