# Goal

A lightweight $.param to be included in your JS.

# Notes

There are some slight differences between $.param and the function provided here.

decodeURI($.param({a: [1,2,3]})) produces a[]=1&a[]=2&a[]=3

decodeURI(serialize({a: [1,2,3]})) produces a[0]=1&a[1]=2&a[2]=3
