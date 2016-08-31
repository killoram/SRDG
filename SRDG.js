function randomString(length){
  var possible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", string="";
  for(var i=0;i<length;i++){
    string+=possible.charAt(Math.floor(Math.random()*possible.length));
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
  var possible="123456789", output=[], string="";
  for (var i = 0; i < dataBluePrint.Amount; i++) {
    if (Object.keys(dataBluePrint)[0]=="string") {
      var val = randomString(dataBluePrint[Object.keys(dataBluePrint)[0]]);
    } else if (Object.keys(dataBluePrint)[0]=="number") {
      var val = randomNumber(dataBluePrint[Object.keys(dataBluePrint)[0]]);
    } else if (Object.keys(dataBluePrint)[0]=="object") {
      var val = randomObject(dataBluePrint[Object.keys(dataBluePrint)[0]]);
    } else if (Object.keys(dataBluePrint)[0]=="array") {
      var val = randomArray(dataBluePrint[Object.keys(dataBluePrint)[0]]);
    } else if(Object.keys(dataBluePrint)[0]=="Amount") {
      if (Object.keys(dataBluePrint)[0]=="string") {
        var val = randomString(dataBluePrint[Object.keys(dataBluePrint)[1]]);
      } else if (Object.keys(dataBluePrint)[1]=="number") {
        var val = randomNumber(dataBluePrint[Object.keys(dataBluePrint)[1]]);
      } else if (Object.keys(dataBluePrint)[1]=="object") {
        var val = randomObject(dataBluePrint[Object.keys(dataBluePrint)[1]]);
      } else if (Object.keys(dataBluePrint)[1]=="array") {
        var val = randomArray(dataBluePrint[Object.keys(dataBluePrint)[1]]);
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
      var dataBluePrint = properties[prop];
      if (Object.keys(dataBluePrint)[0]=="string") {
        var val = randomString(dataBluePrint[Object.keys(dataBluePrint)[0]]);
      } else if (Object.keys(dataBluePrint)[0]=="number") {
        var val = randomNumber(dataBluePrint[Object.keys(dataBluePrint)[0]]);
      } else if (Object.keys(dataBluePrint)[0]=="object") {
        var val = randomObject(dataBluePrint[Object.keys(dataBluePrint)[0]]);
      } else if (Object.keys(dataBluePrint)[0]=="array") {
        var val = randomArray(dataBluePrint[Object.keys(dataBluePrint)[0]]);
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
  } else if (Object.keys(dataBluePrint)[0]=="array") {
    return randomArray(dataBluePrint[Object.keys(dataBluePrint)[0]]);
  }
}
