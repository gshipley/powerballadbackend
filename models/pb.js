/**
 * smd model
 */

module.exports = function(options) {
  options = options || {};
  var crypto = require('crypto')
  , mongoose = options.mongoose || require('mongoose')
  , Schema = mongoose.Schema;

  var PBSchema = new Schema({
    SongURL : {
      type : String
    },
    SongBand : {
      type : String
    }
  });
  var PowerBallads = mongoose.model("powerballads", PBSchema);

}
