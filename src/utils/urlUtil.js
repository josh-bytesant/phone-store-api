import url from 'url';

const GetPhoneImageUrl = (req, phoneName) =>
{
    var hostname = req.headers.host; // hostname = 'localhost:8080'
  var pathname = url.parse(req.url).pathname; // pathname = '/MyApp'
  var urlImage = `images/${toLowerCaseName(phoneName)}.png` //http://${hostname}/
  console.log(urlImage);
  return urlImage;
}

const toLowerCaseName = (phone) =>
{
    const whitespaceRegExp = / /g
    return phone.replace(whitespaceRegExp,'_').toLowerCase();
}

export default GetPhoneImageUrl;