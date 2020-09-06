import unittest


def decipher(s, shift=8):
    print("here1")
    print(s)
    for letter in s:
        o = ord(letter)
        o -= 8
        print(letter, ord(letter), o)


class DecodeStringTest(unittest.TestCase):
    def test_server_specs_example1(self):
        self.assertEqual(decode_string("Gdg$"), "Dad!")



