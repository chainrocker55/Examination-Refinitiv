
const fetch = require("node-fetch");

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const argument = process.argv[2].toLowerCase().trim()


fetch('https://codequiz.azurewebsites.net/',{
    headers: {
        'Cookie': 'hasCookie=true'
      }
   
  }).then(function (response) {
	// The API call was successful!
	return response.text();
}).then(function (html) {

	//Convert the HTML string into a document object
    var dom = new JSDOM(html);
    var table = dom.window.document.getElementsByTagName("tr");
  
    for (i = 1; i < table.length; i++) {
        //console.log(argument);
        //console.log(table[i].cells[0].textContent+" "+table[i].cells[1].textContent);
        //console.log(argument==table[i].cells[0].textContent.toLowerCase().trim());

        if(table[i].cells[0].textContent.toLowerCase().trim() == argument){
            console.log(table[i].cells[1].textContent);
            break;
        }
    
    }
    console.log("Not found!!");
  


}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});