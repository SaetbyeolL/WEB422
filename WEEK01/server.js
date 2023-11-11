// Setup
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;
// Or use some other port number that you like better

// Add support for incoming JSON entities
app.use(bodyParser.json());

// Array of strings
let colours = ['Red', 'Green', 'Blue', 'Yellow', 'Aqua', 'Fuschia'];

9
// Deliver the app's home page to browser clients
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// Get all
app.get('/api/items', (req, res) => {
  res.json({ message: 'fetch all items' });
});

// Get one
app.get('/api/items/:itemId', (req, res) => {
  res.json({ message: `get user with identifier: ${req.params.id}` });
});

// Add new
// This route expects a JSON object in the body, e.g. { "firstName": "Peter", "lastName": "McIntyre" }
app.post('/api/items', (req, res) => {
  // MUST return HTTP 201
  res.status(201).json({ message: `added a new item: ${req.body.firstName} ${req.body.lastName}` });
});

// Edit existing
// This route expects a JSON object in the body, e.g. { "id": 123, "firstName": "Peter", "lastName": "McIntyre" }
app.put('/api/items/:id', (req, res) => {
  res.json({
    message: `updated item with identifier: ${req.params.id} to ${req.body.firstName} ${req.body.lastName}`,
  });
});

// Delete item
app.delete('/api/items/:id', (req, res) => {
  res.status(200).json({ message: `deleted user with identifier: ${req.params.id}` });
});

// Resource not found (this should be at the end)
app.use((req, res) => {
  res.status(404).send('Resource not found');
});

// Tell the app to start listening for requests
app.listen(HTTP_PORT, () => {
  console.log('Ready to handle requests on port ' + HTTP_PORT);
});

/////////////////////////////////////////////////



// Extract the item identifier
let itemId = req.params.itemId;
// Make sure it's valid
if (itemId > colours.length) {
  res.status(404).send('Resource not found');
} else {
  res.json(colours[itemId]);
}


// Extract the incoming data from { "colourName": "Purple" }
let newItem = req.body.colourName;
// Add another item to the array
colours.push(newItem);
// Return the result; RFC 7231 tells us that it must return HTTP status 201
res.status(201).json({ message: `added ${newItem} as item identifier ${colours.length}` });
//////////////////////////////////////////////////////////////////////////////

let people = [{"id":1,"firstName":"Cthrine","lastName":"Januszkiewicz","gender":"Agender","birthDate":"1996-10-10T06:53:38Z","email":"cjanuszkiewicz0@delicious.com","web":"http://google.pl","creditScore":338,"rating":17.86},
{"id":2,"firstName":"Algernon","lastName":"Antrag","gender":"Male","birthDate":"1992-12-07T05:56:19Z","email":"aantrag1@cam.ac.uk","web":"https://dot.gov","creditScore":742,"rating":17.29},
{"id":3,"firstName":"Garrot","lastName":"Funnell","gender":"Male","birthDate":"1995-09-16T19:11:03Z","email":"gfunnell2@over-blog.com","web":"https://123-reg.co.uk","creditScore":465,"rating":17.92},
{"id":4,"firstName":"Otha","lastName":"Morit","gender":"Female","birthDate":"1993-07-06T02:27:04Z","email":"omorit3@clickbank.net","web":"http://imdb.com","creditScore":570,"rating":13.3},
{"id":5,"firstName":"Thoma","lastName":"Crowden","gender":"Male","birthDate":"1999-01-19T09:55:51Z","email":"tcrowden4@cnn.com","web":"https://gmpg.org","creditScore":208,"rating":3.69},
{"id":6,"firstName":"Almeda","lastName":"Laite","gender":"Female","birthDate":"1996-03-13T00:45:45Z","email":"alaite5@shutterfly.com","web":"http://livejournal.com","creditScore":502,"rating":3.41},
{"id":7,"firstName":"Silvana","lastName":"Leijs","gender":"Female","birthDate":"1995-02-06T18:26:34Z","email":"sleijs6@seattletimes.com","web":"https://webs.com","creditScore":744,"rating":10.57},
{"id":8,"firstName":"Ravid","lastName":"Kerfut","gender":"Male","birthDate":"1996-06-04T22:46:04Z","email":"rkerfut7@dell.com","web":"http://artisteer.com","creditScore":698,"rating":12.39},
{"id":9,"firstName":"Lincoln","lastName":"Ritzman","gender":"Male","birthDate":"1992-04-15T10:58:44Z","email":"lritzman8@ycombinator.com","web":"https://earthlink.net","creditScore":662,"rating":11.34},
{"id":10,"firstName":"Abagail","lastName":"Hayball","gender":"Agender","birthDate":"1997-11-13T04:41:42Z","email":"ahayball9@newyorker.com","web":"http://blogtalkradio.com","creditScore":559,"rating":7.34},
{"id":11,"firstName":"Richardo","lastName":"Bartelot","gender":"Genderfluid","birthDate":"1997-01-26T12:30:52Z","email":"rbartelota@sourceforge.net","web":"http://tripod.com","creditScore":304,"rating":10.42},
{"id":12,"firstName":"Vidovic","lastName":"Skitterel","gender":"Genderfluid","birthDate":"1999-11-07T09:40:00Z","email":"vskitterelb@vinaora.com","web":"http://prweb.com","creditScore":723,"rating":7.56},
{"id":13,"firstName":"Theo","lastName":"Baxster","gender":"Male","birthDate":"1993-12-16T02:03:16Z","email":"tbaxsterc@arstechnica.com","web":"https://archive.org","creditScore":380,"rating":11.57},
{"id":14,"firstName":"Neale","lastName":"Shewsmith","gender":"Male","birthDate":"1993-02-24T14:46:07Z","email":"nshewsmithd@bravesites.com","web":"https://wikispaces.com","creditScore":270,"rating":5.23},
{"id":15,"firstName":"Judith","lastName":"McCambridge","gender":"Female","birthDate":"1999-11-24T19:23:40Z","email":"jmccambridgee@vimeo.com","web":"https://cafepress.com","creditScore":540,"rating":9.6},
{"id":16,"firstName":"De","lastName":"Wardington","gender":"Female","birthDate":"1997-08-03T10:24:29Z","email":"dwardingtonf@blogspot.com","web":"http://youtu.be","creditScore":351,"rating":11.41},
{"id":17,"firstName":"Ulrich","lastName":"Pashan","gender":"Male","birthDate":"1996-06-08T04:12:58Z","email":"upashang@yellowpages.com","web":"https://uol.com.br","creditScore":457,"rating":19.77},
{"id":18,"firstName":"Valerie","lastName":"Hanway","gender":"Female","birthDate":"1997-05-24T04:52:34Z","email":"vhanwayh@dedecms.com","web":"https://hao123.com","creditScore":310,"rating":3.44},
{"id":19,"firstName":"Marris","lastName":"McGaughie","gender":"Female","birthDate":"1999-06-25T14:15:47Z","email":"mmcgaughiei@blogger.com","web":"http://mlb.com","creditScore":798,"rating":13.57},
{"id":20,"firstName":"Wells","lastName":"Maughan","gender":"Male","birthDate":"1999-07-23T00:59:19Z","email":"wmaughanj@baidu.com","web":"https://a8.net","creditScore":349,"rating":17.15},
{"id":21,"firstName":"Lindon","lastName":"Studman","gender":"Male","birthDate":"1994-09-17T02:24:56Z","email":"lstudmank@twitpic.com","web":"http://cocolog-nifty.com","creditScore":624,"rating":17.87},
{"id":22,"firstName":"Hallsy","lastName":"Soutar","gender":"Male","birthDate":"1998-11-21T07:06:33Z","email":"hsoutarl@pinterest.com","web":"https://va.gov","creditScore":402,"rating":2.11},
{"id":23,"firstName":"Augustus","lastName":"Leckie","gender":"Male","birthDate":"1998-02-15T12:22:55Z","email":"aleckiem@jalbum.net","web":"http://census.gov","creditScore":429,"rating":18.44},
{"id":24,"firstName":"Neely","lastName":"Prandy","gender":"Genderfluid","birthDate":"1997-02-09T06:04:36Z","email":"nprandyn@gravatar.com","web":"http://1688.com","creditScore":217,"rating":19.8},
{"id":25,"firstName":"Amara","lastName":"Eyeington","gender":"Female","birthDate":"1992-05-12T20:42:56Z","email":"aeyeingtono@mozilla.com","web":"https://woothemes.com","creditScore":456,"rating":6.25},
{"id":26,"firstName":"Vince","lastName":"Avard","gender":"Polygender","birthDate":"1997-11-03T07:09:15Z","email":"vavardp@cornell.edu","web":"https://topsy.com","creditScore":582,"rating":15.73},
{"id":27,"firstName":"Desmond","lastName":"Marton","gender":"Male","birthDate":"1996-05-19T19:37:21Z","email":"dmartonq@deviantart.com","web":"https://cbslocal.com","creditScore":326,"rating":17.27},
{"id":28,"firstName":"Christina","lastName":"Sharpling","gender":"Female","birthDate":"1996-05-20T15:26:23Z","email":"csharplingr@twitter.com","web":"http://goo.gl","creditScore":671,"rating":12.48},
{"id":29,"firstName":"Aaron","lastName":"Novkovic","gender":"Male","birthDate":"1992-07-10T16:30:46Z","email":"anovkovics@purevolume.com","web":"https://bluehost.com","creditScore":579,"rating":1.4},
{"id":30,"firstName":"Nichol","lastName":"Brando","gender":"Female","birthDate":"1998-12-31T23:57:27Z","email":"nbrandot@tmall.com","web":"http://myspace.com","creditScore":651,"rating":19.12},
{"id":31,"firstName":"Ofelia","lastName":"Buchan","gender":"Female","birthDate":"1995-05-28T16:16:00Z","email":"obuchanu@paypal.com","web":"http://msn.com","creditScore":396,"rating":3.81},
{"id":32,"firstName":"Jyoti","lastName":"Muldowney","gender":"Female","birthDate":"1996-10-07T05:58:17Z","email":"jmuldowneyv@booking.com","web":"https://bluehost.com","creditScore":783,"rating":17.66},
{"id":33,"firstName":"Maximilianus","lastName":"Snoxell","gender":"Male","birthDate":"1996-05-03T11:32:44Z","email":"msnoxellw@sina.com.cn","web":"https://privacy.gov.au","creditScore":441,"rating":18.04},
{"id":34,"firstName":"Willabella","lastName":"Tilney","gender":"Female","birthDate":"1992-08-21T20:20:40Z","email":"wtilneyx@delicious.com","web":"http://ameblo.jp","creditScore":415,"rating":13.76},
{"id":35,"firstName":"Adriena","lastName":"Simonnot","gender":"Female","birthDate":"1998-02-20T11:03:31Z","email":"asimonnoty@engadget.com","web":"http://psu.edu","creditScore":712,"rating":9.62},
{"id":36,"firstName":"Monte","lastName":"Matthensen","gender":"Male","birthDate":"1999-04-29T10:21:06Z","email":"mmatthensenz@prnewswire.com","web":"https://hatena.ne.jp","creditScore":681,"rating":6.28},
{"id":37,"firstName":"Mead","lastName":"Arton","gender":"Male","birthDate":"1996-07-09T06:22:24Z","email":"marton10@un.org","web":"https://princeton.edu","creditScore":287,"rating":15.64},
{"id":38,"firstName":"Harper","lastName":"Kettleson","gender":"Male","birthDate":"1997-09-22T20:34:06Z","email":"hkettleson11@tamu.edu","web":"https://mayoclinic.com","creditScore":623,"rating":13.03},
{"id":39,"firstName":"Meghann","lastName":"Ambroisin","gender":"Female","birthDate":"1998-12-23T19:25:18Z","email":"mambroisin12@cbsnews.com","web":"http://soundcloud.com","creditScore":231,"rating":15.71},
{"id":40,"firstName":"Emilee","lastName":"Bonett","gender":"Female","birthDate":"1997-02-08T07:48:19Z","email":"ebonett13@shareasale.com","web":"https://gov.uk","creditScore":749,"rating":10.96},
{"id":41,"firstName":"Prentiss","lastName":"Bilney","gender":"Male","birthDate":"1993-10-18T06:51:17Z","email":"pbilney14@360.cn","web":"http://irs.gov","creditScore":557,"rating":5.58},
{"id":42,"firstName":"Katey","lastName":"Ruppertz","gender":"Female","birthDate":"1993-07-12T13:41:42Z","email":"kruppertz15@disqus.com","web":"http://unicef.org","creditScore":703,"rating":8.76},
{"id":43,"firstName":"Gasper","lastName":"Smalles","gender":"Male","birthDate":"1995-12-29T11:27:45Z","email":"gsmalles16@sogou.com","web":"http://deviantart.com","creditScore":409,"rating":19.05},
{"id":44,"firstName":"Pryce","lastName":"Goade","gender":"Male","birthDate":"1995-05-24T13:56:30Z","email":"pgoade17@domainmarket.com","web":"http://ebay.com","creditScore":661,"rating":2.83},
{"id":45,"firstName":"Dolly","lastName":"Canavan","gender":"Female","birthDate":"1992-11-30T20:30:53Z","email":"dcanavan18@netscape.com","web":"https://technorati.com","creditScore":329,"rating":10.26},
{"id":46,"firstName":"Ives","lastName":"Lanney","gender":"Male","birthDate":"1999-03-22T22:24:08Z","email":"ilanney19@opensource.org","web":"https://deviantart.com","creditScore":703,"rating":10.22},
{"id":47,"firstName":"Minor","lastName":"Pietrzak","gender":"Genderqueer","birthDate":"1993-07-12T13:07:39Z","email":"mpietrzak1a@miibeian.gov.cn","web":"https://ask.com","creditScore":604,"rating":15.58},
{"id":48,"firstName":"Renata","lastName":"Anersen","gender":"Genderfluid","birthDate":"1997-07-08T22:15:09Z","email":"ranersen1b@g.co","web":"http://google.com.br","creditScore":377,"rating":18.38},
{"id":49,"firstName":"Chen","lastName":"Mulbery","gender":"Male","birthDate":"1998-04-23T11:24:37Z","email":"cmulbery1c@over-blog.com","web":"https://nytimes.com","creditScore":400,"rating":1.69},
{"id":50,"firstName":"Aidan","lastName":"Turfitt","gender":"Female","birthDate":"1993-05-18T10:33:30Z","email":"aturfitt1d@moonfruit.com","web":"http://seesaa.net","creditScore":592,"rating":5.8},
{"id":51,"firstName":"Urbano","lastName":"Saill","gender":"Male","birthDate":"1996-02-26T15:30:47Z","email":"usaill1e@baidu.com","web":"http://google.es","creditScore":373,"rating":12.54},
{"id":52,"firstName":"Roland","lastName":"Dulwich","gender":"Male","birthDate":"1995-06-01T00:53:02Z","email":"rdulwich1f@cnbc.com","web":"https://delicious.com","creditScore":496,"rating":8.7},
{"id":53,"firstName":"Skipton","lastName":"Luten","gender":"Male","birthDate":"1993-06-08T12:09:36Z","email":"sluten1g@google.co.uk","web":"http://w3.org","creditScore":209,"rating":15.18},
{"id":54,"firstName":"Jo","lastName":"Roycroft","gender":"Female","birthDate":"1994-05-24T05:25:24Z","email":"jroycroft1h@admin.ch","web":"http://salon.com","creditScore":433,"rating":17.54},
{"id":55,"firstName":"Marybelle","lastName":"Simyson","gender":"Female","birthDate":"1992-12-28T05:15:52Z","email":"msimyson1i@chron.com","web":"https://dion.ne.jp","creditScore":378,"rating":9.73},
{"id":56,"firstName":"Aland","lastName":"Fermor","gender":"Male","birthDate":"1995-02-01T21:53:37Z","email":"afermor1j@flavors.me","web":"https://pcworld.com","creditScore":704,"rating":8.65},
{"id":57,"firstName":"Nance","lastName":"Panting","gender":"Female","birthDate":"1993-02-22T10:18:41Z","email":"npanting1k@dyndns.org","web":"http://vk.com","creditScore":243,"rating":16.78},
{"id":58,"firstName":"Marget","lastName":"Fashion","gender":"Female","birthDate":"1999-07-03T13:12:40Z","email":"mfashion1l@upenn.edu","web":"https://github.io","creditScore":527,"rating":4.63},
{"id":59,"firstName":"Aimee","lastName":"Emmins","gender":"Female","birthDate":"1996-04-28T15:54:57Z","email":"aemmins1m@dailymail.co.uk","web":"https://homestead.com","creditScore":519,"rating":15.73},
{"id":60,"firstName":"Cordelia","lastName":"Boken","gender":"Female","birthDate":"1995-08-03T21:10:42Z","email":"cboken1n@telegraph.co.uk","web":"http://xing.com","creditScore":200,"rating":1.77},
{"id":61,"firstName":"Land","lastName":"Zouch","gender":"Male","birthDate":"1994-12-25T03:32:09Z","email":"lzouch1o@mozilla.org","web":"http://go.com","creditScore":235,"rating":10.59},
{"id":62,"firstName":"Dalton","lastName":"Dorbon","gender":"Male","birthDate":"1993-12-20T04:37:52Z","email":"ddorbon1p@hp.com","web":"http://flavors.me","creditScore":239,"rating":18.49},
{"id":63,"firstName":"Inge","lastName":"Ponsford","gender":"Female","birthDate":"1997-01-11T16:23:03Z","email":"iponsford1q@hp.com","web":"http://photobucket.com","creditScore":736,"rating":13.59},
{"id":64,"firstName":"Cris","lastName":"Poore","gender":"Female","birthDate":"1999-08-26T21:49:59Z","email":"cpoore1r@walmart.com","web":"https://yale.edu","creditScore":237,"rating":4.46},
{"id":65,"firstName":"Corri","lastName":"Boast","gender":"Female","birthDate":"1999-12-16T05:15:39Z","email":"cboast1s@xinhuanet.com","web":"http://behance.net","creditScore":557,"rating":9.38},
{"id":66,"firstName":"Goldia","lastName":"Fishbourne","gender":"Genderqueer","birthDate":"1998-07-21T12:17:14Z","email":"gfishbourne1t@unesco.org","web":"https://privacy.gov.au","creditScore":363,"rating":12.77},
{"id":67,"firstName":"Aldwin","lastName":"Ridehalgh","gender":"Male","birthDate":"1998-07-12T19:49:49Z","email":"aridehalgh1u@weather.com","web":"http://narod.ru","creditScore":274,"rating":8.57},
{"id":68,"firstName":"Heriberto","lastName":"MacFadyen","gender":"Male","birthDate":"1998-12-28T07:35:23Z","email":"hmacfadyen1v@sciencedaily.com","web":"http://meetup.com","creditScore":785,"rating":6.17},
{"id":69,"firstName":"Allayne","lastName":"Wainwright","gender":"Male","birthDate":"1999-04-28T01:21:38Z","email":"awainwright1w@cisco.com","web":"http://businessinsider.com","creditScore":558,"rating":3.77},
{"id":70,"firstName":"Marylou","lastName":"Itzakson","gender":"Female","birthDate":"1993-07-28T19:33:50Z","email":"mitzakson1x@samsung.com","web":"https://hugedomains.com","creditScore":213,"rating":6.93},
{"id":71,"firstName":"Frederigo","lastName":"Tiebe","gender":"Male","birthDate":"1993-05-01T09:36:22Z","email":"ftiebe1y@biglobe.ne.jp","web":"https://economist.com","creditScore":676,"rating":9.45},
{"id":72,"firstName":"Danna","lastName":"Apfler","gender":"Female","birthDate":"1997-12-05T17:29:08Z","email":"dapfler1z@flavors.me","web":"http://ycombinator.com","creditScore":720,"rating":13.83},
{"id":73,"firstName":"Obadias","lastName":"Moulton","gender":"Male","birthDate":"1994-04-15T16:49:33Z","email":"omoulton20@cdbaby.com","web":"https://sakura.ne.jp","creditScore":788,"rating":8.52},
{"id":74,"firstName":"Bernarr","lastName":"Smurthwaite","gender":"Male","birthDate":"1992-05-18T16:38:01Z","email":"bsmurthwaite21@fema.gov","web":"https://apple.com","creditScore":214,"rating":16.19},
{"id":75,"firstName":"Ginger","lastName":"Boadby","gender":"Male","birthDate":"1992-01-30T01:11:07Z","email":"gboadby22@oakley.com","web":"http://hostgator.com","creditScore":426,"rating":6.18},
{"id":76,"firstName":"Gregoor","lastName":"Hamblington","gender":"Male","birthDate":"1994-06-15T11:52:46Z","email":"ghamblington23@ft.com","web":"http://dedecms.com","creditScore":661,"rating":4.67},
{"id":77,"firstName":"Vail","lastName":"Brito","gender":"Male","birthDate":"1992-04-14T20:32:47Z","email":"vbrito24@feedburner.com","web":"https://posterous.com","creditScore":800,"rating":3.76},
{"id":78,"firstName":"Sheryl","lastName":"Dyte","gender":"Female","birthDate":"1994-06-02T01:41:18Z","email":"sdyte25@yale.edu","web":"http://i2i.jp","creditScore":418,"rating":10.67},
{"id":79,"firstName":"Yalonda","lastName":"Wollrauch","gender":"Female","birthDate":"1994-06-15T18:32:05Z","email":"ywollrauch26@csmonitor.com","web":"https://amazon.co.uk","creditScore":603,"rating":16.17},
{"id":80,"firstName":"Mic","lastName":"Shearwood","gender":"Male","birthDate":"1995-05-07T00:34:11Z","email":"mshearwood27@intel.com","web":"http://nba.com","creditScore":227,"rating":2.58},
{"id":81,"firstName":"Eddy","lastName":"Menure","gender":"Bigender","birthDate":"1995-02-10T17:13:18Z","email":"emenure28@bloomberg.com","web":"https://symantec.com","creditScore":423,"rating":1.65},
{"id":82,"firstName":"Frederic","lastName":"Koch","gender":"Male","birthDate":"1994-04-01T10:16:36Z","email":"fkoch29@elegantthemes.com","web":"http://simplemachines.org","creditScore":494,"rating":18.44},
{"id":83,"firstName":"Ardith","lastName":"McCrachen","gender":"Female","birthDate":"1998-04-10T03:25:41Z","email":"amccrachen2a@networksolutions.com","web":"https://cbslocal.com","creditScore":781,"rating":4.36},
{"id":84,"firstName":"Tomas","lastName":"Berkeley","gender":"Male","birthDate":"1999-12-26T13:29:21Z","email":"tberkeley2b@cpanel.net","web":"https://nsw.gov.au","creditScore":250,"rating":18.01},
{"id":85,"firstName":"Daphene","lastName":"Osbourn","gender":"Female","birthDate":"1995-07-23T02:58:54Z","email":"dosbourn2c@globo.com","web":"https://pagesperso-orange.fr","creditScore":276,"rating":13.24},
{"id":86,"firstName":"Tom","lastName":"Mandrier","gender":"Male","birthDate":"1997-04-02T15:31:07Z","email":"tmandrier2d@cnet.com","web":"http://springer.com","creditScore":372,"rating":3.15},
{"id":87,"firstName":"Baxter","lastName":"Coughlan","gender":"Male","birthDate":"1996-12-13T15:11:58Z","email":"bcoughlan2e@icq.com","web":"https://sfgate.com","creditScore":346,"rating":5.72},
{"id":88,"firstName":"Filberte","lastName":"Greenshields","gender":"Male","birthDate":"1998-05-07T18:39:24Z","email":"fgreenshields2f@blog.com","web":"https://admin.ch","creditScore":638,"rating":3.91},
{"id":89,"firstName":"Boniface","lastName":"Sweeney","gender":"Male","birthDate":"1992-09-07T14:03:36Z","email":"bsweeney2g@pagesperso-orange.fr","web":"http://usatoday.com","creditScore":349,"rating":15.8},
{"id":90,"firstName":"Tremayne","lastName":"Farris","gender":"Male","birthDate":"1993-09-03T18:05:35Z","email":"tfarris2h@blogtalkradio.com","web":"https://answers.com","creditScore":635,"rating":13.12},
{"id":91,"firstName":"Tannie","lastName":"Kamiyama","gender":"Male","birthDate":"1994-03-16T07:35:44Z","email":"tkamiyama2i@over-blog.com","web":"https://google.pl","creditScore":240,"rating":9.62},
{"id":92,"firstName":"Aleda","lastName":"Boulden","gender":"Female","birthDate":"1994-02-06T04:45:59Z","email":"aboulden2j@flickr.com","web":"https://merriam-webster.com","creditScore":417,"rating":2.26},
{"id":93,"firstName":"Alys","lastName":"Hotton","gender":"Female","birthDate":"1992-08-06T16:19:51Z","email":"ahotton2k@dot.gov","web":"http://sogou.com","creditScore":349,"rating":15.98},
{"id":94,"firstName":"Russell","lastName":"Haskur","gender":"Male","birthDate":"1995-09-04T22:54:21Z","email":"rhaskur2l@gov.uk","web":"https://slate.com","creditScore":580,"rating":16.08},
{"id":95,"firstName":"Devy","lastName":"Schukraft","gender":"Polygender","birthDate":"1992-12-17T16:04:34Z","email":"dschukraft2m@acquirethisname.com","web":"https://examiner.com","creditScore":702,"rating":7.87},
{"id":96,"firstName":"Breena","lastName":"Masterman","gender":"Female","birthDate":"1993-11-03T03:56:37Z","email":"bmasterman2n@ucoz.ru","web":"https://theatlantic.com","creditScore":237,"rating":6.43},
{"id":97,"firstName":"Cornie","lastName":"Rikkard","gender":"Female","birthDate":"1995-08-24T10:25:35Z","email":"crikkard2o@spiegel.de","web":"https://360.cn","creditScore":343,"rating":7.17},
{"id":98,"firstName":"Ramonda","lastName":"Gaffey","gender":"Female","birthDate":"1999-04-18T13:05:36Z","email":"rgaffey2p@cisco.com","web":"http://slate.com","creditScore":497,"rating":19.49},
{"id":99,"firstName":"Jude","lastName":"Melpuss","gender":"Male","birthDate":"1993-07-15T03:16:28Z","email":"jmelpuss2q@unesco.org","web":"http://hibu.com","creditScore":759,"rating":7.4},
{"id":100,"firstName":"Nicol","lastName":"O'Fallon","gender":"Male","birthDate":"1995-11-30T03:34:21Z","email":"nofallon2r@last.fm","web":"http://boston.com","creditScore":640,"rating":12.12},
{"id":101,"firstName":"Jasmina","lastName":"Leighfield","gender":"Female","birthDate":"1994-03-04T16:49:10Z","email":"jleighfield2s@mozilla.com","web":"https://apache.org","creditScore":674,"rating":18.89},
{"id":102,"firstName":"Nichole","lastName":"Alvarez","gender":"Bigender","birthDate":"1995-01-31T11:43:11Z","email":"nalvarez2t@photobucket.com","web":"http://bloglines.com","creditScore":777,"rating":5.97},
{"id":103,"firstName":"Granny","lastName":"Bewlay","gender":"Male","birthDate":"1998-08-31T21:58:54Z","email":"gbewlay2u@dedecms.com","web":"http://photobucket.com","creditScore":700,"rating":3.49},
{"id":104,"firstName":"Orlando","lastName":"Martino","gender":"Male","birthDate":"1998-09-27T14:11:54Z","email":"omartino2v@liveinternet.ru","web":"https://mac.com","creditScore":350,"rating":4.29},
{"id":105,"firstName":"Denver","lastName":"Haldane","gender":"Male","birthDate":"1992-02-27T09:53:34Z","email":"dhaldane2w@rakuten.co.jp","web":"https://oakley.com","creditScore":764,"rating":19.13},
{"id":106,"firstName":"Miranda","lastName":"Vela","gender":"Female","birthDate":"1993-01-07T20:04:34Z","email":"mvela2x@e-recht24.de","web":"http://stanford.edu","creditScore":533,"rating":16.08},
{"id":107,"firstName":"Richmound","lastName":"Tellenbrook","gender":"Male","birthDate":"1999-04-02T01:41:44Z","email":"rtellenbrook2y@tamu.edu","web":"https://linkedin.com","creditScore":470,"rating":15.16},
{"id":108,"firstName":"Audrye","lastName":"Dorbon","gender":"Female","birthDate":"1998-03-03T20:20:37Z","email":"adorbon2z@discovery.com","web":"https://hexun.com","creditScore":411,"rating":4.61},
{"id":109,"firstName":"Harwilll","lastName":"Mearing","gender":"Male","birthDate":"1993-01-27T00:39:05Z","email":"hmearing30@independent.co.uk","web":"https://baidu.com","creditScore":599,"rating":3.01},
{"id":110,"firstName":"Barnett","lastName":"Atte-Stone","gender":"Male","birthDate":"1998-01-04T16:58:29Z","email":"battestone31@apple.com","web":"http://youku.com","creditScore":715,"rating":5.27},
{"id":111,"firstName":"Ward","lastName":"Merrgan","gender":"Male","birthDate":"1993-07-11T20:30:06Z","email":"wmerrgan32@issuu.com","web":"http://techcrunch.com","creditScore":221,"rating":7.91},
{"id":112,"firstName":"Marysa","lastName":"Wisham","gender":"Female","birthDate":"1999-02-22T07:39:15Z","email":"mwisham33@oracle.com","web":"https://home.pl","creditScore":331,"rating":7.7},
{"id":113,"firstName":"Gratia","lastName":"Eliez","gender":"Female","birthDate":"1997-10-05T23:15:12Z","email":"geliez34@redcross.org","web":"http://youtu.be","creditScore":420,"rating":15.58},
{"id":114,"firstName":"Evy","lastName":"Janks","gender":"Polygender","birthDate":"1999-11-11T19:42:22Z","email":"ejanks35@multiply.com","web":"http://about.me","creditScore":283,"rating":3.58},
{"id":115,"firstName":"Lenna","lastName":"Milson","gender":"Female","birthDate":"1994-12-04T18:05:16Z","email":"lmilson36@printfriendly.com","web":"http://vistaprint.com","creditScore":767,"rating":3.84},
{"id":116,"firstName":"Maiga","lastName":"Blockwell","gender":"Female","birthDate":"1996-09-27T12:10:25Z","email":"mblockwell37@amazon.de","web":"http://diigo.com","creditScore":285,"rating":14.94},
{"id":117,"firstName":"Dex","lastName":"Silber","gender":"Bigender","birthDate":"1997-05-07T08:05:21Z","email":"dsilber38@arstechnica.com","web":"https://wiley.com","creditScore":757,"rating":18.51},
{"id":118,"firstName":"Allyce","lastName":"Shepstone","gender":"Female","birthDate":"1994-10-04T15:09:46Z","email":"ashepstone39@intel.com","web":"http://wikipedia.org","creditScore":721,"rating":13.04},
{"id":119,"firstName":"Zelma","lastName":"Doughill","gender":"Polygender","birthDate":"1999-06-05T21:41:56Z","email":"zdoughill3a@whitehouse.gov","web":"https://lycos.com","creditScore":536,"rating":11.09},
{"id":120,"firstName":"Florida","lastName":"Eskriet","gender":"Non-binary","birthDate":"1997-07-29T06:49:02Z","email":"feskriet3b@theguardian.com","web":"http://yolasite.com","creditScore":365,"rating":11.27},
{"id":121,"firstName":"Corry","lastName":"Hacquard","gender":"Bigender","birthDate":"1996-08-06T09:05:18Z","email":"chacquard3c@china.com.cn","web":"https://cisco.com","creditScore":473,"rating":9.24},
{"id":122,"firstName":"Langston","lastName":"Huett","gender":"Male","birthDate":"1998-05-29T21:15:06Z","email":"lhuett3d@joomla.org","web":"http://cam.ac.uk","creditScore":217,"rating":3.44},
{"id":123,"firstName":"Corly","lastName":"Altree","gender":"Female","birthDate":"1993-04-08T13:41:01Z","email":"caltree3e@statcounter.com","web":"http://cornell.edu","creditScore":784,"rating":3.13},
{"id":124,"firstName":"Madge","lastName":"Eggleston","gender":"Female","birthDate":"1997-09-19T09:34:46Z","email":"meggleston3f@go.com","web":"http://imageshack.us","creditScore":438,"rating":9.33},
{"id":125,"firstName":"Chrysler","lastName":"Elliston","gender":"Bigender","birthDate":"1994-07-23T16:40:37Z","email":"celliston3g@blinklist.com","web":"https://sbwire.com","creditScore":685,"rating":1.0},
{"id":126,"firstName":"Cassondra","lastName":"Saltmarsh","gender":"Female","birthDate":"1997-12-22T17:16:23Z","email":"csaltmarsh3h@bbc.co.uk","web":"https://qq.com","creditScore":678,"rating":11.52},
{"id":127,"firstName":"Homer","lastName":"Westhead","gender":"Male","birthDate":"1993-03-19T14:07:06Z","email":"hwesthead3i@umn.edu","web":"https://miibeian.gov.cn","creditScore":628,"rating":2.78},
{"id":128,"firstName":"Pembroke","lastName":"Davison","gender":"Male","birthDate":"1999-10-09T03:14:38Z","email":"pdavison3j@oaic.gov.au","web":"http://ucoz.ru","creditScore":208,"rating":12.11},
{"id":129,"firstName":"Marinna","lastName":"Ickovitz","gender":"Female","birthDate":"1994-05-15T13:17:51Z","email":"mickovitz3k@ning.com","web":"https://discuz.net","creditScore":640,"rating":7.94},
{"id":130,"firstName":"Maddi","lastName":"Kiloh","gender":"Genderqueer","birthDate":"1995-12-16T05:45:39Z","email":"mkiloh3l@deliciousdays.com","web":"https://msu.edu","creditScore":266,"rating":18.1},
{"id":131,"firstName":"Josias","lastName":"Minigo","gender":"Male","birthDate":"1994-03-09T23:23:49Z","email":"jminigo3m@hc360.com","web":"https://nih.gov","creditScore":644,"rating":2.41},
{"id":132,"firstName":"Hortense","lastName":"Beenham","gender":"Female","birthDate":"1999-04-29T12:06:17Z","email":"hbeenham3n@nytimes.com","web":"http://cmu.edu","creditScore":508,"rating":2.36},
{"id":133,"firstName":"Freida","lastName":"Howarth","gender":"Female","birthDate":"1996-03-01T09:35:39Z","email":"fhowarth3o@skype.com","web":"https://nytimes.com","creditScore":355,"rating":2.08},
{"id":134,"firstName":"Giulio","lastName":"Brunn","gender":"Male","birthDate":"1992-09-04T21:22:33Z","email":"gbrunn3p@t.co","web":"https://drupal.org","creditScore":704,"rating":15.43},
{"id":135,"firstName":"Vinnie","lastName":"Talmadge","gender":"Female","birthDate":"1999-07-17T16:43:18Z","email":"vtalmadge3q@cocolog-nifty.com","web":"https://mashable.com","creditScore":581,"rating":15.48},
{"id":136,"firstName":"Willi","lastName":"Talloe","gender":"Male","birthDate":"1997-11-08T19:03:48Z","email":"wtalloe3r@army.mil","web":"https://dagondesign.com","creditScore":239,"rating":1.15},
{"id":137,"firstName":"Whitney","lastName":"Raubenheimer","gender":"Male","birthDate":"1995-03-25T22:04:19Z","email":"wraubenheimer3s@comsenz.com","web":"https://hubpages.com","creditScore":526,"rating":4.36},
{"id":138,"firstName":"Goldarina","lastName":"Kyrkeman","gender":"Female","birthDate":"1999-04-12T03:32:07Z","email":"gkyrkeman3t@uiuc.edu","web":"http://slate.com","creditScore":744,"rating":6.72},
{"id":139,"firstName":"Rycca","lastName":"Pettit","gender":"Agender","birthDate":"1994-12-17T16:50:04Z","email":"rpettit3u@cbsnews.com","web":"https://berkeley.edu","creditScore":769,"rating":11.84},
{"id":140,"firstName":"Bridie","lastName":"Strickett","gender":"Female","birthDate":"1998-11-05T04:53:13Z","email":"bstrickett3v@mashable.com","web":"https://wp.com","creditScore":408,"rating":16.07},
{"id":141,"firstName":"Tamarra","lastName":"Coche","gender":"Female","birthDate":"1997-11-09T03:27:02Z","email":"tcoche3w@liveinternet.ru","web":"http://drupal.org","creditScore":339,"rating":4.27},
{"id":142,"firstName":"Willow","lastName":"Zylbermann","gender":"Female","birthDate":"1998-10-18T17:53:08Z","email":"wzylbermann3x@i2i.jp","web":"https://vk.com","creditScore":521,"rating":9.13},
{"id":143,"firstName":"Antone","lastName":"Grandham","gender":"Male","birthDate":"1994-10-21T09:00:06Z","email":"agrandham3y@theglobeandmail.com","web":"https://java.com","creditScore":232,"rating":3.68},
{"id":144,"firstName":"Nadiya","lastName":"Hollyar","gender":"Female","birthDate":"1997-04-19T22:57:30Z","email":"nhollyar3z@army.mil","web":"https://seesaa.net","creditScore":254,"rating":13.9},
{"id":145,"firstName":"Rea","lastName":"Bleeze","gender":"Female","birthDate":"1994-07-18T01:36:27Z","email":"rbleeze40@livejournal.com","web":"http://facebook.com","creditScore":618,"rating":5.22},
{"id":146,"firstName":"Garwin","lastName":"Shenton","gender":"Male","birthDate":"1994-12-18T04:15:21Z","email":"gshenton41@fotki.com","web":"http://opensource.org","creditScore":590,"rating":2.55},
{"id":147,"firstName":"Kingsly","lastName":"Rush","gender":"Agender","birthDate":"1994-03-10T03:14:50Z","email":"krush42@va.gov","web":"http://hugedomains.com","creditScore":452,"rating":17.8},
{"id":148,"firstName":"Cam","lastName":"Brucker","gender":"Female","birthDate":"1995-07-23T08:09:40Z","email":"cbrucker43@berkeley.edu","web":"http://ibm.com","creditScore":783,"rating":16.64},
{"id":149,"firstName":"Gwenette","lastName":"Medendorp","gender":"Female","birthDate":"1997-03-14T10:53:49Z","email":"gmedendorp44@usda.gov","web":"https://arstechnica.com","creditScore":540,"rating":12.39},
{"id":150,"firstName":"Launce","lastName":"Alberts","gender":"Male","birthDate":"1993-07-14T06:53:54Z","email":"lalberts45@marriott.com","web":"https://washingtonpost.com","creditScore":339,"rating":1.4}]


let c = data.map((p) => p);






























