const { createServer } = require('node:http');

// khai báo các tham số : local host và port
const hostname = '127.0.0.1'; // local host có thể gõ localhost:3000
const port = 3000; // port (từ 0 đến 65535)/ thường đặt 8000, 8001, 8002

// method để tạo server
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n hoc nodejs cung voi Hoi Dan ID Eric');
});

//  sau khi tạo server, thì server bắt đầu chạy bằng method listen
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});