import sys
import pathlib

args = sys.argv


if len(args) > 1:
    data_file = args[1]
else:
    data_file = None

