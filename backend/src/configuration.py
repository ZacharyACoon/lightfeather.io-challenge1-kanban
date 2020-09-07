from .cli import data_file, port
from . import cipher
import json

if not data_file:
    raise Exception("Encoded Json Data File Argument Expected")
else:
    with open(data_file, "r") as f:
        data = json.loads(cipher.decipher(f.read()))
