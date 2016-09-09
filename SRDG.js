function randomBool() {
  var val = Math.floor(Math.random()*2);
  if (val==1) {
    return true;
  } else {
    return false;
  }
}

function randomString(parameter){
  if (typeof parameter == "object") {
    if (Object.keys(parameter).length>2) {
      return parameter[Math.floor(Math.random()*parameter.length)];
    } else if(parameter.strings!=null) {
      var str = parameter.strings[Math.floor(Math.random()*parameter.strings.length)],
        val = parameter.times, string= "";
        for (var i = 0; i < val; i++) { string += str; }
        return string;
    } else {
      var str = Object.keys(parameter)[0],
        val = parameter[Object.keys(parameter)[0]], string = "";
        for (var i = 0; i < val; i++) { string += str; }
        return string;
    }
  } else if (typeof parameter == "number") {
    var possible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", string="";
    for(var i=0;i<parameter;i++){
      string+=possible.charAt(Math.floor(Math.random()*possible.length));
    }
    return string;
  } else {
    string = null;
  }
  return string;
}
function randomNumber(length){
  var possible="123456789", string="";
  for(var i=0;i<length;i++){
    string+=possible.charAt(Math.floor(Math.random()*possible.length));
  }
  return parseInt(string);
}
function randomArray(dataBluePrint){
  var possible="123456789", output=[], string="", val;
  for (var i = 0; i < dataBluePrint.Amount; i++) {
    if (Object.keys(dataBluePrint)[0]=="string") {
      val = randomString(dataBluePrint[Object.keys(dataBluePrint)[0]]);
    } else if (Object.keys(dataBluePrint)[0]=="number") {
      val = randomNumber(dataBluePrint[Object.keys(dataBluePrint)[0]]);
    } else if (Object.keys(dataBluePrint)[0]=="object") {
      val = randomObject(dataBluePrint[Object.keys(dataBluePrint)[0]]);
    } else if (Object.keys(dataBluePrint)[0]=="bool") {
      val = randomBool();
    } else if (Object.keys(dataBluePrint)[0]=="array") {
      val = randomArray(dataBluePrint[Object.keys(dataBluePrint)[0]]);
    } else if(Object.keys(dataBluePrint)[0]=="Amount") {
      if (Object.keys(dataBluePrint)[0]=="string") {
        val = randomString(dataBluePrint[Object.keys(dataBluePrint)[1]]);
      } else if (Object.keys(dataBluePrint)[1]=="number") {
        val = randomNumber(dataBluePrint[Object.keys(dataBluePrint)[1]]);
      } else if (Object.keys(dataBluePrint)[1]=="object") {
        val = randomObject(dataBluePrint[Object.keys(dataBluePrint)[1]]);
      } else if (Object.keys(dataBluePrint)[1]=="bool") {
        val = randomBool();
      } else if (Object.keys(dataBluePrint)[1]=="array") {
        val = randomArray(dataBluePrint[Object.keys(dataBluePrint)[1]]);
      } else {
        val = dataBluePrint;
      }
    }
    output.push(val);
  }
  return output;
}
function randomObject(properties) {
  let obj = {};
  for (var prop in properties) {
    if (properties.hasOwnProperty(prop)) {
      var dataBluePrint = properties[prop], val;
      if (Object.keys(dataBluePrint)[0]=="string") {
        val = randomString(dataBluePrint[Object.keys(dataBluePrint)[0]]);
      } else if (Object.keys(dataBluePrint)[0]=="number") {
        val = randomNumber(dataBluePrint[Object.keys(dataBluePrint)[0]]);
      } else if (Object.keys(dataBluePrint)[0]=="object") {
        val = randomObject(dataBluePrint[Object.keys(dataBluePrint)[0]]);
      } else if (Object.keys(dataBluePrint)[0]=="bool") {
        val = randomBool();
      } else if (Object.keys(dataBluePrint)[0]=="array") {
        val = randomArray(dataBluePrint[Object.keys(dataBluePrint)[0]]);
      } else {
        val = dataBluePrint;
      }
      obj[prop] = val;
    }
  }
  return obj;
}

function randomData(dataBluePrint) {
  if (Object.keys(dataBluePrint)[0]=="string") {
    return randomString(dataBluePrint[Object.keys(dataBluePrint)[0]]);
  } else if (Object.keys(dataBluePrint)[0]=="number") {
    return randomNumber(dataBluePrint[Object.keys(dataBluePrint)[0]]);
  } else if (Object.keys(dataBluePrint)[0]=="object") {
    return randomObject(dataBluePrint[Object.keys(dataBluePrint)[0]]);
  } else if (Object.keys(dataBluePrint)[0]=="bool") {
    val = randomBool();
  } else if (Object.keys(dataBluePrint)[0]=="array") {
    return randomArray(dataBluePrint[Object.keys(dataBluePrint)[0]]);
  }
}

function pushData(element, data, markup) {
  if (typeof element == 'array') {
    for (var i = 0; i < element.length; i++) {
      for (var x = 0; x < data.length; x++) {
        var temp = markup;
        for (var prop in data[x]) {
            var obj = data[w];
            temp = temp.split("[-"+prop+"-]").join(obj[prop]);
        }
        element[i].innerHTML += temp;
      }
    }
  } else {
    for (var x = 0; x < data.length; x++) {
      var temp = markup;
      for (var prop in data[x]) {
          var obj = data[x];
          temp = temp.split("[-"+prop+"-]").join(obj[prop]);
      }
      element.innerHTML += temp;
    }
  }
}
function curateData(data, evaluations) {
    var result = new Array(), check = null;
    for (var i = 0; i < data.length; i++) {
        var row = data[i];
        for (var x = 0; x < evaluations.length; x++) {
          if (eval(evaluations[x].split("object").join("row"))) {
            check = true;
            continue;
          } else {
            check = false;
            break;
          }
        }
        if (check==true) {
          result.push(row);
        }
    }
    if (result.length < 1) {
        return false;
    }
    return result;
}
