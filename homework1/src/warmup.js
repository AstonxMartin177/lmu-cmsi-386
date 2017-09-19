function change (amount) {
  if (amount < 0) {
    throw new RangeError("RangeError: amount cannot be negative");
  }
  const result = [];
  let changeRemaining = amount;
  [25,10,5,1].forEach((coin) => {
    result.push(Math.floor(changeRemaining / coin));
    changeRemaining -= coin * Math.floor(changeRemaining / coin);
  });
  return result;
}
 
function stripQuotes (sentence) {
  for (let i = sentence.length; i >= 0; i--) {
    if(sentence.charAt(i) === "\'" || sentence.charAt(i) === "\""){
      sentence = sentence.substring(0,i) + sentence.substring(i+1);
    }
  }
  return sentence;
}
 
function scramble (sentence) {
  var scrambled = "";
  var lengthOfString = sentence.length;
  for (let i = 0; i < lengthOfString; i++) {
    var rand = Math.floor(Math.random() * sentence.length);
    scrambled += sentence.substring(rand,rand+1);
    sentence = sentence.substring(0,rand) + sentence.substring(rand+1);
  }
}
 
function powers (base, max, p) {
  let i = 0;
  while(Math.pow(base, i) <= max) {
    p(Math.pow(base, i));
    i++;
  }
}
 
function cylinder (spec) {
  let {radius, height} = spec;
  radius = (radius !== undefined)?radius:1;
  height = (height !== undefined)?height:1;
  let volume = () => Math.PI * radius * radius * height;
  let surfaceArea = () => 2 * Math.PI * radius * height
    + 2 * Math.PI * radius * radius;
  let widen = (factor) => { radius *= factor };
  let stretch = (factor) => { height *= factor };
  let toString = () => 'Cylinder with radius ${radius} and height ${height}'
  return Object.freeze({
    get radius() {return radius},
    get height() {return height},
    volume, surfaceArea, widen, stretch, toString });
}

const say = function(a){
  let holder;
  if(a){
    holder = a
    return innerScreaming = function(b){
      if(b){
        holder = holder + " " + b
        return innerScreaming;
      }
      else{
        return holder;
      }
    }
  }
  else{
    return '';
  }
}

function* powersGenerator(base, max){
  let power = 0;
  while(max >= Math.pow(base, power)){
    yield Math.pow(base, power);
    power = power+1;
  }
}

function interleave(){
  let args = Array.prototype.slice.call(arguments),
    givenArray = args.shift(),
    weaveArray = [];
  givenArray.forEach(function(eachName, index){
    weaveArray.push(eachName);
    if(args.length > 0){
      weaveArray.push(args.shift());
    }
  })
  if(args.length > 0){
    return weaveArray.concat(args);
  }
  return weaveArray;
}

function makeCryptoFunctions(key, algorithm){
  const crypto = require('crypto');
	
  const encryptFunction = function(secret){
    const cipher = crypto.createCipher(algorithm, key);
	
    let encrypted = cipher.update(secret, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }
  const decryptFunction = function(encrypted){
    const decipher = crypto.createDecipher(algorithm, key);
		
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }
  return[encryptFunction, decryptFunction];
}

let rp = require('request-promise');

function randomName(spec) {
  let {gender, region} = spec;

  let options = {
    uri: 'http://uinames.com/api/',
    qs: {amount: 1, gender, region},
    json: true,
  };

  return rp(options).then((responseText) => {return responseText.surname+", "+responseText.name});
}

module.exports = {
  change, stripQuotes, scramble, powers, powersGenerator, interleave, randomName, cylinder, say, makeCryptoFunctions
};