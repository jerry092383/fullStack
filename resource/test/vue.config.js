module.exports = {
    assetsDir: 'assets',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8000'
            }
        }
    }
}