import pandas as pd
import random

f = open("index_demo_container.html", "w", encoding="utf-8")
pat = "W:\\REVOKDATA\\images\\"

def make_container(name, sub, link, dl, oldprice, price, imgdir, i) :

    f.write("\n             <a href=\"/games/" + str(i + 1) + "\">")
    f.write("\n             <div class=\"container\">")
    f.write("\n                <img src=\""+ imgdir + "\"")
    f.write("\n                    alt=\"\" class=\"img\">")
    f.write("\n               <div class=\"title\">")
    f.write("\n                    " + name)
    f.write("\n                </div>")
    f.write("\n               <div class=\"oldprice\">")
    f.write("\n                    " + str(oldprice) + ".000 VND")
    f.write("\n               </div>")
    f.write("\n               <div class=\"price\">")
    f.write("\n                    " + str(price) + ".000 VND")
    f.write("\n                </div>")
    f.write("\n                <div class=\"frame\">")   
    f.write("\n                    <button class=\"custom-btn btn-9\"> <a href=\"/games/" + str(i + 1) + "\">Mua Ngay</a></button>")       
    f.write("\n                </div>")    
    f.write("\n             </div>")
    f.write("\n             </a>\n") 

def make_content():

    data = pd.read_excel('game.xlsx')
    name = data['name'].tolist()
    sub = data['sub'].tolist()
    link = data['link'].tolist()
    dl = data['linkdl'].tolist()
    fb = data['linkfb'].tolist()
    old = data['old'].tolist()
    now = data['now'].tolist()
    
    i = 0
    while (i < 60):
        f.write("\n        <div class=\"content\">")
        ok = 0
        while (ok < 4):
            imgdir = "images/" + str(i + 1) + "/" + "hinh1.jpg"
            make_container(name[i], sub[i], link[i], dl[i], old[i], now[i], imgdir, i)
            i += 1
            ok += 1
        f.write("\n        </div>\n\n")

    f.write("\n</body>\n")
    f.write("\n<footer> <h1>G1</h1> </footer>\n")
    f.write("\n</html>")


make_content()

f.close()