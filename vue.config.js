const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);

const productionPath = '/yourProjectPath';
module.exports = {
    publicPath: IS_PROD ? productionPath : '/',
    assetsDir: 'static'
    // 如果格式不统一编译不过
    // lintOnSave: false
};
