var fs = require('fs');
fs.readFile('아맛나.txt', 'utf8', function(err, data){
  console.log(data);
  n = data.match(/추천/g).length;
  console.log(n);
});
