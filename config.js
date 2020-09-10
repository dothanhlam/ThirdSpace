const env = process.env.NODE_ENV  || 'dev'; // 'dev' or 'test'

const dev = {
 app: {
   port: parseInt(process.env.DEV_APP_PORT) || 3000
 },
 db: {
 }
};
const uat = {
 app: {
   port: parseInt(process.env.TEST_APP_PORT) || 3000
 },
 db: {
 }
};

const config = {
 dev,
 uat
};

module.exports = config[env];