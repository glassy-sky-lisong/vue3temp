const http = require('http')

http.createServer((req, res) => {
  res.write("hello, vue3temp")
  res.end()
})
  .listen(8080)