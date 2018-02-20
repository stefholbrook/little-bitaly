const express = require('express')
const path = require('path')
// or render js w/webpack:
// const webpack = require('webpack')
// const config = require('./webpack.config')

const app = express()
const port = 4001
const pathToHtml = path.resolve('index.html')
// const compiler = webpack(config)

app.use(express.static(path.resolve('src')))
// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath
// }))

app.get('*', (req, res) => res.sendFile(pathToHtml))

app.listen(port, () => `Listening on port ${port}`)
