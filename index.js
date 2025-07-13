const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('أهلاً بيك في الصفحة الرئيسية');
  } else if (req.url === '/about') {
    res.end('دي صفحة من نحن');
  } else {
    res.end('الصفحة غير موجودة');
  }
});

server.listen(3000, () => {
  console.log('السيرفر شغال على http://localhost:3000');
});
