var https = require('https');
var parseString = require('xml2js').parseString;
var fs = require('fs');
// 검색 단어
var keyword = '냉정 아맛나';
// 네이버 Open API 사용
var client_id = 'tY2ofr7ug5SOeHvGdBoZ';
var client_secret  = 'u8DRvoycv4';
var host = 'openapi.naver.com';
var port = 443;
var uri = '/v1/search/blog.xml?query=' + encodeURIComponent(keyword);
var file = 'temp_text.txt';
fs.open(file, 'w', function(err, fd){
	if(err) throw err;
	console.log('file open complete');
});
var options = {
    host: host,
    port: port,
    path: uri,
    method: 'GET',
    headers: {"X-Naver-Client-Id" : client_id, "X-Naver-Client-Secret" : client_secret}
};
var req = https.request(options, function(res) {
    res.setEncoding('utf-8');
    res.on('data', function(chunk){
        result = result + chunk;
    });
    res.on('end', function(){
        parseString(result, function(err, pStr){
            var items = pStr.rss.channel[0].item;
            // 블로그 포스팅 타이틀 & 본문 크롤링
            for (var i in items) {
                console.log("TITLE: " + items[i].title[0]);
                console.log("DESC: " + items[i].description[0]);
                console.log("---------------------------------------------------------------");
            }
            // 크롤링 데이터 텍스트 파일로 저장
            for(var k = 0; k < 10; k++){
                var vvalue = items[k].title[0] + " : " + items[k].description[0];
                fs.appendFileSync('아맛나.txt', vvalue + '\n', 'utf-8', function(error){
                    console.log(k + 'error');
                });
            }
        });
    });
});

req.end();