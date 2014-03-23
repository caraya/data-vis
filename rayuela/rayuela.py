#!/usr/local/bin/python
import csv # module that deals with CSV files
print  "{"
print " 'nodes': ["
for i in range (155):
    print "{ 'name':" + str(i) + ", 'link' : '" + str(i+1) + ".html' },"
print "],"
print " 'links': ["
with open("rayuela-chapter-list.csv") as f:
  r = csv.reader(f)
  x = [row for row in r]
  x = x[0]
  while len(x) >= 0:
    try:
      a = int(x[0])-1
      b = int(x[1])-1
      print "{'source':" + str(a) + ", 'target':" + str(b) + "},"
      del x[0]
    except IndexError:
      f.close()
print "]"
print "}"