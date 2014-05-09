/**
 * Configuration for MongoDB
 */

var mongodatabasename = process.env.OPENSHIFT_APP_NAME;


exports.mongodb = {
  development: {
    'hostname': process.env.OPENSHIFT_MONGODB_DB_HOST,
    'port': process.env.OPENSHIFT_MONGODB_DB_PORT,
    'username': process.env.OPENSHIFT_MONGODB_DB_USERNAME,
    'password': process.env.OPENSHIFT_MONGODB_DB_PASSWORD,
    'name': '',
    'db': mongodatabasename
  }
}

