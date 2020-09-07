import unittest


# can also be solved using a std library codec implementation
# apparently this is known as a "caeser" cipher


def cipher(string, shift):
    shifted_string = ""
    for letter in string:
        value = ord(letter)
        value -= shift
        value %= 126
        shifted_string += chr(value)
    return shifted_string


def decipher(string, shift=8):
    return cipher(string, shift)


def encipher(string, shift=8):
    return cipher(string, -shift)


class CipherTests(unittest.TestCase):
    def test_server_specs_example1_decipher(self):
        self.assertEqual(decipher("Gdg$", 3), "Dad!")

    def test_server_specs_example1_encipher(self):
        self.assertEqual(encipher("Dad!", 3), "Gdg$")

    def test_server_specs_example2_max_char_up(self):
        self.assertEqual(ord(decipher("~", -1)), 0)


if __name__ == "__main__":
    unittest.main(exit=False)
