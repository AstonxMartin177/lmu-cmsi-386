function change (amount) {
  if (amount < 0) {
    throw new RangeError("RangeError: amount cannot be negative");
  }
  const result = [];
  let givenChange = amount;
  [25,10,5,1].forEach((coin) => {
    result.push(Math.floor(givenChange / coin));
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
  while(Math.pow(base, i) < max) {
    p(Math.pow(base, i));
    i++;
  }
}
 
function cylinder (spec) {
  let {radius, height} = spec;
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
	let w;
	if(a){
		w = a
		return z = function(b){
			if(b){
				w = w + " " + b
				return z;
			}
			else{
        return w;
			}
		}
	}
	else{
		return w;
	}
}

function* powersGenerator(base, max){
  let power = 0;
	while(max > Math.pow(base, power)){
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

function randomName(arg){
	let {region, gender} = arg;
	return $.getJSON("https://uinames.com/api/?amount=1&gender="+gender+"&region="+region+"").then((responseText) => {
		return responseText.surname+", "+responseText.name;
		});
}