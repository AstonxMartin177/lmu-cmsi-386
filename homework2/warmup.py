import re
import math
import random
import requests
from Crypto.Cipher import AES

def change(amount):
    if amount < 0:
        raise ValueError('amount cannot be negative')
    results = []
    remaining = amount
    for coin in [25, 10, 5, 1]:
        dm = divmod(remaining, coin)
        results.append(dm[0])
        remaining = dm[1]
    return tuple(results)

def strip_quotes(sentence):
    return re.sub(r'\'|\"', '', sentence)

def scramble(sentence):
    letters = list(sentence)
    for item_index in range(0, len(letters)-1):
        random_index = random.randint(item_index, len(letters)-1)
        letters[item_index], letters[random_index] = letters[random_index], letters[item_index]
    return ''.join(letters)

def say(word=''):
    if word == '':
        return word
    def whisper(in_word=''):
        if in_word == '':
            return word
        return say('{} {}'.format(word, in_word))
    return whisper

def triples(max):
    result = []
    for c in range(1, max+1):
        for b in range(1, max+1):
            for a in range(1, max+1):
                if c**2 + b**2 == a**2 and c < b and b < a:
                    result.append((c, b, a))
    return result

def powers(base, maximum):
    value, current_power = 1, 1
    while value <= maximum:
        yield value
        value, current_power = base**current_power, current_power+1

def interleave(first_array, *arguments):
    result = []
    for i in range(max(len(first_array), len(arguments))):
        if len(first_array) > i:
            result.append(first_array[i])
        if len(arguments) > i:
            result.append(arguments[i])
    return result

class Cylinder():
    def __init__(self, radius = 1, height = 1):
        self._radius = radius
        self._height = height

    @property
    def radius(self):
        return self._radius
	
    @property
    def height(self):
        return self._height

    @property
    def volume(self):
        return math.pi * self._height * self._radius ** 2

    @property
    def surface_area(self):
        return 2 * math.pi * self._radius * self._height + 2 * math.pi * self._radius ** 2
	
    def widen(self, factor):
        self._radius *= factor

    def stretch(self, factor):
        self._height *= factor

def make_crypto_functions(key,  iv):
    byte_key, byte_iv = bytes(key, "utf-8"), bytes( iv, "utf-8")
    def encrypt(to_encrypt):
        encrypter = AES.new(byte_key, AES.MODE_CBC, byte_iv)
        return encrypter.encrypt(to_encrypt)

    def decrypt(to_decrypt):
        decrypter = AES.new(byte_key, AES.MODE_CBC, byte_iv)
        return decrypter.decrypt(to_decrypt)
    return (encrypt, decrypt)

def random_name(gender, region):
    r = requests.get("http://uinames.com/api/", params={"gender": gender, "region": region, "amount": 1})
    response = r.text
    if response == '{"error":"Invalid gender"}':
      raise ValueError(response)
    surname = ""
    for i in range(response.find('rname":"') + 8, response.find('","g')):
        surname += response[i]
    name = ""
    for i in range(response.find('"name":"') + 8, response.find('","s')):
        name += response[i]
    return surname + ", " + name