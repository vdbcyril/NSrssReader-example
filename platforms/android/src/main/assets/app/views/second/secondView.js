var utilityModule = require("utils/utils");
var gotData;

function pageLoaded(args) {
  var page = args.object;
  gotData = page.navigationContext.info;
  page.bindingContext = {passedData:gotData};
}

function openLink() {
  utilityModule.openUrl(gotData.link);
}

exports.pageLoaded = pageLoaded;
exports.openLink = openLink;
