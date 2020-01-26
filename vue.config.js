module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/cartoon/" : "/",
    outputDir: 'cartoon',
    lintOnSave: true,
    filenameHashing: true,
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 3000
    }
};
