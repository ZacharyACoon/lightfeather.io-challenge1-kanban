import sys

args = sys.argv


if len(args) > 1:
    data_file = args[1]
else:
    data_file = None

if len(args) > 2:
    port = args[2]
else:
    port = 23456
