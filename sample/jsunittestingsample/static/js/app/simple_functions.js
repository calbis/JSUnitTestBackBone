function addThenSub(num1, num2, num3) {
  return (num1 + num2) - num3;
}

function subThenAdd(num1, num2, num3) {
  return (num1 - num2) + num3;
}

function getHtmlFromSampleHTML(callback) {
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.open("GET","/sample",false);
  xmlhttp.send();
  console.log(xmlhttp.responseText);
  callback(xmlhttp.responseText);
}
