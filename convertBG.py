import math
from PIL import Image

img = Image.open('N.jpg')
img = img.convert("RGBA")
datas = img.getdata()

newData = []
for item in datas:
    if  item[1] > 100 or item[2] > 100:
        newData.append((255, 255, 255, 0))
    else:
        newData.append((244,81,30,255))

img.putdata(newData)
x, y = img.size
x2, y2 = math.floor(x/7.5), math.floor(y/7.5)
img = img.resize((x2,y2),Image.ANTIALIAS)
img.save("N_t.png", "PNG")
