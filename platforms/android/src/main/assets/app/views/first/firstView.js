var http = require("http");
var frameModule = require("ui/frame");

function pageLoaded(args) {
    var page = args.object;
    http.getJSON("https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://www.buzzfeed.com/index.xml")
        .then(function(res) {
          page.bindingContext = {data:res.responseData.feed.entries};
        }, function(e) {
          console.log(e);
        });
}

function getInfo(args) {
  var navigationEntry = {
    moduleName: "views/second/secondView",
    context: {info:args.view.bindingContext}
  }
  frameModule.topmost().navigate(navigationEntry);
}

exports.pageLoaded = pageLoaded;
exports.getInfo = getInfo;
