const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

   Owner Menu
${hituet+=1} ${prefix}bc 🅞
${hituet+=1} ${prefix}join 🅞
${hituet+=1} ${prefix}shutdown 🅞
${hituet+=1} ${prefix}autodltt 🅞
${hituet+=1} ${prefix}autosticker 🅞
${hituet+=1} ${prefix}setppbot 🅞
${hituet+=1} ${prefix}addprem 🅞
${hituet+=1} ${prefix}delprem 🅞
${hituet+=1} ${prefix}addowner 🅞
${hituet+=1} ${prefix}delowner 🅞
${hituet+=1} ${prefix}addlist 🅞
${hituet+=1} ${prefix}dellist 🅞
${hituet+=1} ${prefix}updatelist 🅞
${hituet+=1} ${prefix}listnya 🅞
${hituet+=1} ${prefix}addvn 🅞
${hituet+=1} ${prefix}delvn 🅞
${hituet+=1} ${prefix}listvn 🅞
${hituet+=1} ${prefix}ban add 🅞
${hituet+=1} ${prefix}ban del 🅞

   Other Menu
${hituet+=1} ${prefix}owner 🅕
${hituet+=1} ${prefix}jadibot 🅟
${hituet+=1} ${prefix}listjadibot 🅟
${hituet+=1} ${prefix}donasi 🅕
${hituet+=1} ${prefix}listpremium 🅕
${hituet+=1} ${prefix}buypremium 🅕
${hituet+=1} ${prefix}jadiowner 🅕
${hituet+=1} ${prefix}sewabot 🅕
${hituet+=1} ${prefix}cekme 🅕
${hituet+=1} ${prefix}obfus 🅕
${hituet+=1} ${prefix}styletext 🅕
${hituet+=1} ${prefix}gttees 🅕
${hituet+=1} ${prefix}tourl 🅕
${hituet+=1} ${prefix}tovn 🅕
${hituet+=1} ${prefix}toaudio 🅕
${hituet+=1} ${prefix}tomp3 🅕
${hituet+=1} ${prefix}toimg 🅕
${hituet+=1} ${prefix}toonce 🅕
${hituet+=1} ${prefix}sticker 🅕
${hituet+=1} ${prefix}smeme 🅕
${hituet+=1} ${prefix}snobg 🅕
${hituet+=1} ${prefix}menfes 🅕
${hituet+=1} ${prefix}leave 🅕
${hituet+=1} ${prefix}ebinary 🅕
${hituet+=1} ${prefix}dbinary 🅕
${hituet+=1} ${prefix}cariresep 🅕
${hituet+=1} ${prefix}bacaresep 🅕
${hituet+=1} ${prefix}ssweb 🅕
${hituet+=1} ${prefix}wasted 🅕
${hituet+=1} ${prefix}comrade 🅕
${hituet+=1} ${prefix}horny 🅕
${hituet+=1} ${prefix}blur 🅕
${hituet+=1} ${prefix}pixelate 🅕
${hituet+=1} ${prefix}simpcard 🅕
${hituet+=1} ${prefix}lolice 🅕
${hituet+=1} ${prefix}gay 🅕
${hituet+=1} ${prefix}jail 🅕
${hituet+=1} ${prefix}quoted 🅕
${hituet+=1} ${prefix}caridoi 🅟
${hituet+=1} ${prefix}cariteman 🅟

   Download Menu
${hituet+=1} ${prefix}tiktokvideo 🅕
${hituet+=1} ${prefix}tiktokaudio 🅕
${hituet+=1} ${prefix}ytsearch 🅕
${hituet+=1} ${prefix}play 🅕
${hituet+=1} ${prefix}mp3 🅕
${hituet+=1} ${prefix}mp4 🅕
${hituet+=1} ${prefix}googles 🅕
${hituet+=1} ${prefix}happymod 🅕

   Bug Menu
${hituet+=1} ${prefix}send 🅞
${hituet+=1} ${prefix}spambugvip 🅞
${hituet+=1} ${prefix}santetpc 🅞
${hituet+=1} ${prefix}santetgc 🅞
${hituet+=1} ${prefix}santetpcparah 🅞
${hituet+=1} ${prefix}santetgcparah 🅞
${hituet+=1} ${prefix}sendbug 🅞
${hituet+=1} ${prefix}senddoc 🅞
${hituet+=1} ${prefix}sendloc 🅞
${hituet+=1} ${prefix}kaystick 🅞
${hituet+=1} ${prefix}kayteks 🅞
${hituet+=1} ${prefix}kayitem 🅞
${hituet+=1} ${prefix}kaylog 🅞
${hituet+=1} ${prefix}kaykontak 🅞
${hituet+=1} ${prefix}kayloc 🅞
${hituet+=1} ${prefix}kaydoc 🅞
${hituet+=1} ${prefix}kayvn 🅞
${hituet+=1} ${prefix}vote 🅞
${hituet+=1} ${prefix}stickgas 🅞
${hituet+=1} ${prefix}itemgas 🅞
${hituet+=1} ${prefix}cataloggas 🅞
${hituet+=1} ${prefix}docgas 🅞
${hituet+=1} ${prefix}kongas 🅞
${hituet+=1} ${prefix}vngas 🅞
${hituet+=1} ${prefix}teksgas 🅞
${hituet+=1} ${prefix}locgas 🅞
${hituet+=1} ${prefix}crash 🅞
${hituet+=1} ${prefix}jagoan 🅞
${hituet+=1} ${prefix}jagoanneon 🅞

   Group Menu
${hituet+=1} ${prefix}antilink 🅖
${hituet+=1} ${prefix}antiwame 🅖
${hituet+=1} ${prefix}add 🅖
${hituet+=1} ${prefix}kick 🅖
${hituet+=1} ${prefix}promote 🅖
${hituet+=1} ${prefix}demote 🅖
${hituet+=1} ${prefix}hidetag 🅖
${hituet+=1} ${prefix}tagall 🅖
${hituet+=1} ${prefix}opentime 🅖
${hituet+=1} ${prefix}closetime 🅖

   Fun Group
${hituet+=1} ${prefix}memek 🅖
${hituet+=1} ${prefix}bego 🅖
${hituet+=1} ${prefix}goblok 🅖
${hituet+=1} ${prefix}janda 🅖
${hituet+=1} ${prefix}perawan 🅖
${hituet+=1} ${prefix}babi 🅖
${hituet+=1} ${prefix}tolol 🅖
${hituet+=1} ${prefix}pinter 🅖
${hituet+=1} ${prefix}pintar 🅖
${hituet+=1} ${prefix}asu 🅖
${hituet+=1} ${prefix}bodoh 🅖
${hituet+=1} ${prefix}gay 🅖
${hituet+=1} ${prefix}lesby 🅖
${hituet+=1} ${prefix}bajingan 🅖
${hituet+=1} ${prefix}jancok 🅖
${hituet+=1} ${prefix}anjing 🅖
${hituet+=1} ${prefix}ngentod 🅖
${hituet+=1} ${prefix}ngentot 🅖
${hituet+=1} ${prefix}monyet 🅖
${hituet+=1} ${prefix}mastah 🅖
${hituet+=1} ${prefix}newbie 🅖
${hituet+=1} ${prefix}bangsat 🅖
${hituet+=1} ${prefix}bangke 🅖
${hituet+=1} ${prefix}sange 🅖
${hituet+=1} ${prefix}sangean 🅖
${hituet+=1} ${prefix}dakjal 🅖
${hituet+=1} ${prefix}horny 🅖
${hituet+=1} ${prefix}wibu 🅖
${hituet+=1} ${prefix}puki 🅖
${hituet+=1} ${prefix}peak 🅖
${hituet+=1} ${prefix}pantex 🅖
${hituet+=1} ${prefix}pantek 🅖
${hituet+=1} ${prefix}setan 🅖
${hituet+=1} ${prefix}iblis 🅖
${hituet+=1} ${prefix}cacat 🅖
${hituet+=1} ${prefix}yatim 🅖
${hituet+=1} ${prefix}piatu 🅖
${hituet+=1} ${prefix}goblokcek 🅖
${hituet+=1} ${prefix}jelekcek 🅖
${hituet+=1} ${prefix}gaycek 🅖
${hituet+=1} ${prefix}rate 🅖
${hituet+=1} ${prefix}lesbicek 🅖
${hituet+=1} ${prefix}gantengcek 🅖
${hituet+=1} ${prefix}cantikcek 🅖
${hituet+=1} ${prefix}begocek 🅖
${hituet+=1} ${prefix}suhucek 🅖
${hituet+=1} ${prefix}pintercek 🅖
${hituet+=1} ${prefix}jagocek 🅖
${hituet+=1} ${prefix}nolepcek 🅖
${hituet+=1} ${prefix}babicek 🅖
${hituet+=1} ${prefix}bebancek 🅖
${hituet+=1} ${prefix}baikcek 🅖
${hituet+=1} ${prefix}jahatcek 🅖
${hituet+=1} ${prefix}anjingcek 🅖
${hituet+=1} ${prefix}haramcek 🅖
${hituet+=1} ${prefix}pakboycek 🅖
${hituet+=1} ${prefix}pakgirlcek 🅖
${hituet+=1} ${prefix}sangecek 🅖
${hituet+=1} ${prefix}bapercek 🅖
${hituet+=1} ${prefix}fakboycek 🅖
${hituet+=1} ${prefix}alimcek 🅖
${hituet+=1} ${prefix}suhucek 🅖
${hituet+=1} ${prefix}fakgirlcek 🅖
${hituet+=1} ${prefix}kerencek 🅖
${hituet+=1} ${prefix}wibucek 🅖
${hituet+=1} ${prefix}pasarkascek 🅖
${hituet+=1} ${prefix}kulcek 🅖                
${hituet+=1} ${prefix}cekgoblok 🅖
${hituet+=1} ${prefix}cekjelek 🅖
${hituet+=1} ${prefix}cekgay 🅖                
${hituet+=1} ${prefix}ceklesbi 🅖
${hituet+=1} ${prefix}cekganteng 🅖
${hituet+=1} ${prefix}cekcantik 🅖
${hituet+=1} ${prefix}cekbego 🅖
${hituet+=1} ${prefix}ceksuhu 🅖
${hituet+=1} ${prefix}cekpinter 🅖
${hituet+=1} ${prefix}cekjago 🅖
${hituet+=1} ${prefix}ceknolep 🅖
${hituet+=1} ${prefix}cekbabi 🅖
${hituet+=1} ${prefix}cekbeban 🅖
${hituet+=1} ${prefix}cekbaik 🅖
${hituet+=1} ${prefix}cekjahat 🅖
${hituet+=1} ${prefix}cekanjing 🅖
${hituet+=1} ${prefix}cekharam 🅖
${hituet+=1} ${prefix}cekpakboy 🅖
${hituet+=1} ${prefix}cekpakgirl 🅖
${hituet+=1} ${prefix}ceksange 🅖
${hituet+=1} ${prefix}cekbaper 🅖
${hituet+=1} ${prefix}cekfakboy 🅖
${hituet+=1} ${prefix}cekalim 🅖
${hituet+=1} ${prefix}ceksuhu 🅖
${hituet+=1} ${prefix}cekfakgirl 🅖
${hituet+=1} ${prefix}cekkeren 🅖
${hituet+=1} ${prefix}cekwibu 🅖
${hituet+=1} ${prefix}cekpasarkas 🅖
${hituet+=1} ${prefix}cekkul 🅖
${hituet+=1} ${prefix}cekbapak 🅖

   Random Foto
${hituet+=1} ${prefix}aesthetic 🅟
${hituet+=1} ${prefix}ahegao 🅟
${hituet+=1} ${prefix}akira 🅟
${hituet+=1} ${prefix}akiyama 🅟
${hituet+=1} ${prefix}ana 🅟
${hituet+=1} ${prefix}anjing 🅟
${hituet+=1} ${prefix}art 🅟
${hituet+=1} ${prefix}ass 🅟
${hituet+=1} ${prefix}asuna 🅟
${hituet+=1} ${prefix}ayuzawa 🅟
${hituet+=1} ${prefix}bdsm 🅟
${hituet+=1} ${prefix}boneka 🅟
${hituet+=1} ${prefix}boruto 🅟
${hituet+=1} ${prefix}bts 🅟
${hituet+=1} ${prefix}cecan 🅟
${hituet+=1} ${prefix}chiho 🅟
${hituet+=1} ${prefix}chitoge 🅟
${hituet+=1} ${prefix}cogan 🅟
${hituet+=1} ${prefix}cosplay 🅟
${hituet+=1} ${prefix}cosplayloli 🅟
${hituet+=1} ${prefix}cosplaysagiri 🅟
${hituet+=1} ${prefix}cuckold 🅟
${hituet+=1} ${prefix}cum 🅟
${hituet+=1} ${prefix}cyber 🅟
${hituet+=1} ${prefix}darkjokes 🅟
${hituet+=1} ${prefix}deidara 🅟
${hituet+=1} ${prefix}doraemon 🅟
${hituet+=1} ${prefix}eba 🅟
${hituet+=1} ${prefix}elaina 🅟
${hituet+=1} ${prefix}emilia 🅟
${hituet+=1} ${prefix}ero 🅟
${hituet+=1} ${prefix}erza 🅟
${hituet+=1} ${prefix}exo 🅟
${hituet+=1} ${prefix}femdom 🅟
${hituet+=1} ${prefix}foot 🅟
${hituet+=1} ${prefix}freefire 🅟
${hituet+=1} ${prefix}gamewallpaper 🅟
${hituet+=1} ${prefix}gangbang 🅟
${hituet+=1} ${prefix}gifs 🅟
${hituet+=1} ${prefix}glasses 🅟
${hituet+=1} ${prefix}gremory 🅟
${hituet+=1} ${prefix}hekel 🅟
${hituet+=1} ${prefix}hentai 🅟
${hituet+=1} ${prefix}hestia 🅟
${hituet+=1} ${prefix}hijaber 🅟
${hituet+=1} ${prefix}hinata 🅟
${hituet+=1} ${prefix}husbu 🅟
${hituet+=1} ${prefix}inori 🅟
${hituet+=1} ${prefix}islamic 🅟
${hituet+=1} ${prefix}isuzu 🅟
${hituet+=1} ${prefix}itachi 🅟
${hituet+=1} ${prefix}itori 🅟
${hituet+=1} ${prefix}jahy 🅟
${hituet+=1} ${prefix}jeni 🅟
${hituet+=1} ${prefix}jiso 🅟
${hituet+=1} ${prefix}justina 🅟
${hituet+=1} ${prefix}kaga 🅟
${hituet+=1} ${prefix}kagura 🅟
${hituet+=1} ${prefix}kakasih 🅟
${hituet+=1} ${prefix}kaori 🅟
${hituet+=1} ${prefix}kartun 🅟
${hituet+=1} ${prefix}katakata 🅟
${hituet+=1} ${prefix}keneki 🅟
${hituet+=1} ${prefix}kotori 🅟
${hituet+=1} ${prefix}kpop 🅟
${hituet+=1} ${prefix}kucing 🅟
${hituet+=1} ${prefix}kurumi 🅟
${hituet+=1} ${prefix}lisa 🅟
${hituet+=1} ${prefix}loli 🅟
${hituet+=1} ${prefix}madara 🅟
${hituet+=1} ${prefix}masturbation 🅟
${hituet+=1} ${prefix}megumin 🅟
${hituet+=1} ${prefix}mikasa 🅟
${hituet+=1} ${prefix}mikey 🅟
${hituet+=1} ${prefix}miku 🅟
${hituet+=1} ${prefix}milf 🅟
${hituet+=1} ${prefix}minato 🅟
${hituet+=1} ${prefix}mobil 🅟
${hituet+=1} ${prefix}motor 🅟
${hituet+=1} ${prefix}mountain 🅟
${hituet+=1} ${prefix}naruto 🅟
${hituet+=1} ${prefix}neko 🅟
${hituet+=1} ${prefix}neko2 🅟
${hituet+=1} ${prefix}nekonime 🅟
${hituet+=1} ${prefix}nezuko 🅟
${hituet+=1} ${prefix}onepiece 🅟
${hituet+=1} ${prefix}orgy 🅟
${hituet+=1} ${prefix}panties 🅟
${hituet+=1} ${prefix}pentol 🅟
${hituet+=1} ${prefix}pokemon 🅟
${hituet+=1} ${prefix}profil 🅟
${hituet+=1} ${prefix}programming 🅟
${hituet+=1} ${prefix}pubg 🅟
${hituet+=1} ${prefix}pussy 🅟
${hituet+=1} ${prefix}randblackpink 🅟
${hituet+=1} ${prefix}randomnime 🅟
${hituet+=1} ${prefix}randomnime2 🅟
${hituet+=1} ${prefix}rize 🅟
${hituet+=1} ${prefix}rose 🅟
${hituet+=1} ${prefix}ryujin 🅟
${hituet+=1} ${prefix}sagiri 🅟
${hituet+=1} ${prefix}sakura 🅟
${hituet+=1} ${prefix}sasuke 🅟
${hituet+=1} ${prefix}satanic 🅟
${hituet+=1} ${prefix}shina 🅟
${hituet+=1} ${prefix}shinka 🅟
${hituet+=1} ${prefix}shinomiya 🅟
${hituet+=1} ${prefix}shizuka 🅟
${hituet+=1} ${prefix}shota 🅟
${hituet+=1} ${prefix}tatasurya 🅟
${hituet+=1} ${prefix}technology 🅟
${hituet+=1} ${prefix}tejina 🅟
${hituet+=1} ${prefix}tentacles 🅟
${hituet+=1} ${prefix}thighs 🅟
${hituet+=1} ${prefix}toukachan 🅟
${hituet+=1} ${prefix}tsunade 🅟
${hituet+=1} ${prefix}waifu 🅟
${hituet+=1} ${prefix}wallhp 🅟
${hituet+=1} ${prefix}wallml 🅟
${hituet+=1} ${prefix}wallnime 🅟
${hituet+=1} ${prefix}yotsuba 🅟
${hituet+=1} ${prefix}yuki 🅟
${hituet+=1} ${prefix}yulibocil 🅟
${hituet+=1} ${prefix}yumeko 🅟
${hituet+=1} ${prefix}fox 🅟  
${hituet+=1} ${prefix}dog 🅟  
${hituet+=1} ${prefix}cat 🅟
${hituet+=1} ${prefix}panda 🅟  
${hituet+=1} ${prefix}birb 🅟 
${hituet+=1} ${prefix}koala 🅟

   Text Pro
${hituet+=1} ${prefix}candy 🅟 
${hituet+=1} ${prefix}christmas 🅟 
${hituet+=1} ${prefix}3dchristmas 🅟 
${hituet+=1} ${prefix}sparklechristmas 🅟
${hituet+=1} ${prefix}deepsea 🅟 
${hituet+=1} ${prefix}scifi 🅟 
${hituet+=1} ${prefix}rainbow 🅟 
${hituet+=1} ${prefix}waterpipe 🅟 
${hituet+=1} ${prefix}spooky 🅟 
${hituet+=1} ${prefix}pencil 🅟 
${hituet+=1} ${prefix}circuit 🅟 
${hituet+=1} ${prefix}discovery 🅟 
${hituet+=1} ${prefix}metalic 🅟 
${hituet+=1} ${prefix}fiction 🅟 
${hituet+=1} ${prefix}demon 🅟 
${hituet+=1} ${prefix}transformer 🅟 
${hituet+=1} ${prefix}berry 🅟 
${hituet+=1} ${prefix}thunder 🅟 
${hituet+=1} ${prefix}magma 🅟 
${hituet+=1} ${prefix}3dstone 🅟 
${hituet+=1} ${prefix}neonlight 🅟 
${hituet+=1} ${prefix}glitch 🅟 
${hituet+=1} ${prefix}harrypotter 🅟 
${hituet+=1} ${prefix}brokenglass 🅟 
${hituet+=1} ${prefix}papercut 🅟 
${hituet+=1} ${prefix}watercolor 🅟 
${hituet+=1} ${prefix}multicolor 🅟 
${hituet+=1} ${prefix}neondevil 🅟 
${hituet+=1} ${prefix}underwater 🅟 
${hituet+=1} ${prefix}graffitibike 🅟
${hituet+=1} ${prefix}snow 🅟 
${hituet+=1} ${prefix}cloud 🅟 
${hituet+=1} ${prefix}honey 🅟 
${hituet+=1} ${prefix}ice 🅟 
${hituet+=1} ${prefix}fruitjuice 🅟 
${hituet+=1} ${prefix}biscuit 🅟 
${hituet+=1} ${prefix}wood 🅟 
${hituet+=1} ${prefix}chocolate 🅟 
${hituet+=1} ${prefix}strawberry 🅟 
${hituet+=1} ${prefix}matrix 🅟 
${hituet+=1} ${prefix}blood 🅟 
${hituet+=1} ${prefix}dropwater 🅟 
${hituet+=1} ${prefix}toxic 🅟 
${hituet+=1} ${prefix}lava 🅟 
${hituet+=1} ${prefix}rock 🅟 
${hituet+=1} ${prefix}bloodglas 🅟 
${hituet+=1} ${prefix}hallowen 🅟 
${hituet+=1} ${prefix}darkgold 🅟 
${hituet+=1} ${prefix}joker 🅟 
${hituet+=1} ${prefix}wicker 🅟
${hituet+=1} ${prefix}firework 🅟 
${hituet+=1} ${prefix}skeleton 🅟 
${hituet+=1} ${prefix}blackpink 🅟 
${hituet+=1} ${prefix}sand 🅟 
${hituet+=1} ${prefix}glue 🅟 
${hituet+=1} ${prefix}1917 🅟 
${hituet+=1} ${prefix}leaves 🅟

   Photo Oxy
${hituet+=1} ${prefix}shadow 🅟 
${hituet+=1} ${prefix}write 🅟 
${hituet+=1} ${prefix}romantic 🅟 
${hituet+=1} ${prefix}burnpaper 🅟
${hituet+=1} ${prefix}smoke 🅟 
${hituet+=1} ${prefix}narutobanner 🅟 
${hituet+=1} ${prefix}love 🅟 
${hituet+=1} ${prefix}undergrass 🅟
${hituet+=1} ${prefix}doublelove 🅟 
${hituet+=1} ${prefix}coffecup 🅟
${hituet+=1} ${prefix}underwaterocean 🅟
${hituet+=1} ${prefix}smokyneon 🅟
${hituet+=1} ${prefix}starstext 🅟
${hituet+=1} ${prefix}rainboweffect 🅟
${hituet+=1} ${prefix}balloontext 🅟
${hituet+=1} ${prefix}metalliceffect 🅟
${hituet+=1} ${prefix}embroiderytext 🅟
${hituet+=1} ${prefix}flamingtext 🅟
${hituet+=1} ${prefix}stonetext 🅟
${hituet+=1} ${prefix}writeart 🅟
${hituet+=1} ${prefix}summertext 🅟
${hituet+=1} ${prefix}wolfmetaltext 🅟
${hituet+=1} ${prefix}nature3dtext 🅟
${hituet+=1} ${prefix}rosestext 🅟
${hituet+=1} ${prefix}naturetypography 🅟
${hituet+=1} ${prefix}quotesunder 🅟
${hituet+=1} ${prefix}shinetext 🅟

   Ephoto 360
${hituet+=1} ${prefix}glitchtext 🅟
${hituet+=1} ${prefix}writetext 🅟
${hituet+=1} ${prefix}advancedglow 🅟
${hituet+=1} ${prefix}typographytext 🅟
${hituet+=1} ${prefix}pixelglitch 🅟
${hituet+=1} ${prefix}neonglitch 🅟
${hituet+=1} ${prefix}flagtext 🅟
${hituet+=1} ${prefix}flag3dtext 🅟
${hituet+=1} ${prefix}deletingtext 🅟
${hituet+=1} ${prefix}blackpinkstyle 🅟
${hituet+=1} ${prefix}glowingtext 🅟
${hituet+=1} ${prefix}underwatertext 🅟
${hituet+=1} ${prefix}logomaker 🅟
${hituet+=1} ${prefix}cartoonstyle 🅟
${hituet+=1} ${prefix}papercutstyle 🅟
${hituet+=1} ${prefix}watercolortext 🅟
${hituet+=1} ${prefix}effectclouds 🅟
${hituet+=1} ${prefix}blackpinklogo 🅟
${hituet+=1} ${prefix}gradienttext 🅟
${hituet+=1} ${prefix}summerbeach 🅟
${hituet+=1} ${prefix}luxurygold 🅟
${hituet+=1} ${prefix}multicoloredneon 🅟
${hituet+=1} ${prefix}sandsummer 🅟
${hituet+=1} ${prefix}galaxywallpaper 🅟
${hituet+=1} ${prefix}1917style 🅟
${hituet+=1} ${prefix}makingneon 🅟
${hituet+=1} ${prefix}royaltext 🅟
${hituet+=1} ${prefix}freecreate 🅟
${hituet+=1} ${prefix}galaxystyle 🅟
${hituet+=1} ${prefix}lighteffects 🅟

   Random Cerpen
${hituet+=1} ${prefix}cerpen_sejarah 🅟
${hituet+=1} ${prefix}cerpen_sedih 🅟
${hituet+=1} ${prefix}cerpen_sastra 🅟
${hituet+=1} ${prefix}cerpen_romantis 🅟
${hituet+=1} ${prefix}cerpen_rohani 🅟
${hituet+=1} ${prefix}cerpen_rindu 🅟
${hituet+=1} ${prefix}cerpen_remaja 🅟
${hituet+=1} ${prefix}cerpen_ramadhan 🅟
${hituet+=1} ${prefix}cerpen_petualangan 🅟
${hituet+=1} ${prefix}cerpen_persahabatan 🅟
${hituet+=1} ${prefix}cerpen_perpisahan 🅟
${hituet+=1} ${prefix}cerpen_perjuangan 🅟
${hituet+=1} ${prefix}cerpen_penyesalan 🅟
${hituet+=1} ${prefix}cerpen_pengorbanan 🅟
${hituet+=1} ${prefix}cerpen_pengalaman 🅟
${hituet+=1} ${prefix}cerpen_pendidikan 🅟
${hituet+=1} ${prefix}cerpen_penantian 🅟
${hituet+=1} ${prefix}cerpen_patahhati 🅟
${hituet+=1} ${prefix}cerpen_olahraga 🅟
${hituet+=1} ${prefix}cerpen_nasionalisme 🅟
${hituet+=1} ${prefix}cerpen_nasihat 🅟
${hituet+=1} ${prefix}cerpen_motivasi 🅟
${hituet+=1} ${prefix}cerpen_misteri 🅟
${hituet+=1} ${prefix}cerpen_mengharukan 🅟
${hituet+=1} ${prefix}cerpen_malaysia 🅟
${hituet+=1} ${prefix}cerpen_liburan 🅟
${hituet+=1} ${prefix}cerpen_kristen 🅟
${hituet+=1} ${prefix}cerpen_korea 🅟
${hituet+=1} ${prefix}cerpen_kisahnyata 🅟
${hituet+=1} ${prefix}cerpen_keluarga 🅟
${hituet+=1} ${prefix}cerpen_kehidupan 🅟
${hituet+=1} ${prefix}cerpen_jepang 🅟
${hituet+=1} ${prefix}cerpen_inspiratif 🅟
${hituet+=1} ${prefix}cerpen_gokil 🅟
${hituet+=1} ${prefix}cerpen_galau 🅟
${hituet+=1} ${prefix}cerpen_cintasejati 🅟
${hituet+=1} ${prefix}cerpen_cintasegitiga 🅟
${hituet+=1} ${prefix}cerpen_cintasedih 🅟
${hituet+=1} ${prefix}cerpen_cintaromantis 🅟
${hituet+=1} ${prefix}cerpen_cintapertama 🅟
${hituet+=1} ${prefix}cerpen_cintaislami 🅟
${hituet+=1} ${prefix}cerpen_cinta 🅟
${hituet+=1} ${prefix}cerpen_budaya 🅟
${hituet+=1} ${prefix}cerpen_bahasasunda 🅟
${hituet+=1} ${prefix}cerpen_bahasajawa 🅟
${hituet+=1} ${prefix}cerpen_bahasainggris 🅟
${hituet+=1} ${prefix}cerpen_bahasadaerah 🅟
${hituet+=1} ${prefix}cerpen_anak 🅟

   Random Video
${hituet+=1} ${prefix}asupan 🅟
${hituet+=1} ${prefix}bocil 🅟
${hituet+=1} ${prefix}rikagusriani 🅟
${hituet+=1} ${prefix}hentavid 🅟
${hituet+=1} ${prefix}jjmeryani 🅟

   Stalker Menu
${hituet+=1} ${prefix}igstalk 🅟
${hituet+=1} ${prefix}ffstalk 🅟
${hituet+=1} ${prefix}mlstalk 🅟
${hituet+=1} ${prefix}npmstalk 🅟
${hituet+=1} ${prefix}ghstalk 🅟
`}

global.ownermenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

   Owner Menu
${prefix}bc 🅞
${prefix}join 🅞
${prefix}shutdown 🅞
${prefix}autodltt 🅞
${prefix}autosticker 🅞
${prefix}setppbot 🅞
${prefix}addprem 🅞
${prefix}delprem 🅞
${prefix}addowner 🅞
${prefix}delowner 🅞
${prefix}addlist 🅞
${prefix}dellist 🅞
${prefix}updatelist 🅞
${prefix}listnya 🅞
${prefix}addvn 🅞
${prefix}delvn 🅞
${prefix}listvn 🅞
${prefix}ban add 🅞
${prefix}ban del 🅞
`}

global.othermenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

   Other Menu
${prefix}owner 🅕
${prefix}jadibot 🅟
${prefix}listjadibot 🅟
${prefix}donasi 🅕
${prefix}listpremium 🅕
${prefix}buypremium 🅕
${prefix}jadiowner 🅕
${prefix}sewabot 🅕
${prefix}cekme 🅕
${prefix}obfus 🅕
${prefix}styletext 🅕
${prefix}gttees 🅕
${prefix}tourl 🅕
${prefix}tovn 🅕
${prefix}toaudio 🅕
${prefix}tomp3 🅕
${prefix}toimg 🅕
${prefix}toonce 🅕
${prefix}sticker 🅕
${prefix}smeme 🅕
${prefix}snobg 🅕
${prefix}menfes 🅕
${prefix}leave 🅕
${prefix}ebinary 🅕
${prefix}dbinary 🅕
${prefix}cariresep 🅕
${prefix}bacaresep 🅕
${prefix}ssweb 🅕
${prefix}wasted 🅕
${prefix}comrade 🅕
${prefix}horny 🅕
${prefix}blur 🅕
${prefix}pixelate 🅕
${prefix}simpcard 🅕
${prefix}lolice 🅕
${prefix}gay 🅕
${prefix}jail 🅕
${prefix}quoted 🅕
${prefix}caridoi 🅟
${prefix}cariteman 🅟
`}

global.downloadmenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

${prefix}tiktokvideo 🅕
${prefix}tiktokaudio 🅕
${prefix}ytsearch 🅕
${prefix}play 🅕
${prefix}ytmp3 🅕
${prefix}ytmp4 🅕
${prefix}googles 🅕
${prefix}happymod 🅕
`}

global.bugmenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

   Bug Menu
${prefix}send 🅞
${prefix}spambugvip 🅞
${prefix}santetpc 🅞
${prefix}santetgc 🅞
${prefix}santetpcparah 🅞
${prefix}santetgcparah 🅞
${prefix}sendbug 🅞
${prefix}senddoc 🅞
${prefix}sendloc 🅞
${prefix}kaystick 🅞
${prefix}kayteks 🅞
${prefix}kayitem 🅞
${prefix}kaylog 🅞
${prefix}kaykontak 🅞
${prefix}kayloc 🅞
${prefix}kaydoc 🅞
${prefix}kayvn 🅞
${prefix}vote 🅞
${prefix}stickgas 🅞
${prefix}itemgas 🅞
${prefix}cataloggas 🅞
${prefix}docgas 🅞
${prefix}kongas 🅞
${prefix}vngas 🅞
${prefix}teksgas 🅞
${prefix}locgas 🅞
${prefix}crash 🅞
${prefix}jagoan 🅞
${prefix}jagoanneon 🅞
`}

global.groupmenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

   Group Menu
${prefix}antilink 🅖
${prefix}antiwame 🅖
${prefix}add 🅖
${prefix}kick 🅖
${prefix}promote 🅖
${prefix}demote 🅖
${prefix}hidetag 🅖
${prefix}tagall 🅖
${prefix}opentime 🅖
${prefix}closetime 🅖
`}

global.funmenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

   Fun Group
${prefix}memek 🅖
${prefix}bego 🅖
${prefix}goblok 🅖
${prefix}janda 🅖
${prefix}perawan 🅖
${prefix}babi 🅖
${prefix}tolol 🅖
${prefix}pinter 🅖
${prefix}pintar 🅖
${prefix}asu 🅖
${prefix}bodoh 🅖
${prefix}gay 🅖
${prefix}lesby 🅖
${prefix}bajingan 🅖
${prefix}jancok 🅖
${prefix}anjing 🅖
${prefix}ngentod 🅖
${prefix}ngentot 🅖
${prefix}monyet 🅖
${prefix}mastah 🅖
${prefix}newbie 🅖
${prefix}bangsat 🅖
${prefix}bangke 🅖
${prefix}sange 🅖
${prefix}sangean 🅖
${prefix}dakjal 🅖
${prefix}horny 🅖
${prefix}wibu 🅖
${prefix}puki 🅖
${prefix}peak 🅖
${prefix}pantex 🅖
${prefix}pantek 🅖
${prefix}setan 🅖
${prefix}iblis 🅖
${prefix}cacat 🅖
${prefix}yatim 🅖
${prefix}piatu 🅖
${prefix}goblokcek 🅖
${prefix}jelekcek 🅖
${prefix}gaycek 🅖
${prefix}rate 🅖
${prefix}lesbicek 🅖
${prefix}gantengcek 🅖
${prefix}cantikcek 🅖
${prefix}begocek 🅖
${prefix}suhucek 🅖
${prefix}pintercek 🅖
${prefix}jagocek 🅖
${prefix}nolepcek 🅖
${prefix}babicek 🅖
${prefix}bebancek 🅖
${prefix}baikcek 🅖
${prefix}jahatcek 🅖
${prefix}anjingcek 🅖
${prefix}haramcek 🅖
${prefix}pakboycek 🅖
${prefix}pakgirlcek 🅖
${prefix}sangecek 🅖
${prefix}bapercek 🅖
${prefix}fakboycek 🅖
${prefix}alimcek 🅖
${prefix}suhucek 🅖
${prefix}fakgirlcek 🅖
${prefix}kerencek 🅖
${prefix}wibucek 🅖
${prefix}pasarkascek 🅖
${prefix}kulcek 🅖                
${prefix}cekgoblok 🅖
${prefix}cekjelek 🅖
${prefix}cekgay 🅖                
${prefix}ceklesbi 🅖
${prefix}cekganteng 🅖
${prefix}cekcantik 🅖
${prefix}cekbego 🅖
${prefix}ceksuhu 🅖
${prefix}cekpinter 🅖
${prefix}cekjago 🅖
${prefix}ceknolep 🅖
${prefix}cekbabi 🅖
${prefix}cekbeban 🅖
${prefix}cekbaik 🅖
${prefix}cekjahat 🅖
${prefix}cekanjing 🅖
${prefix}cekharam 🅖
${prefix}cekpakboy 🅖
${prefix}cekpakgirl 🅖
${prefix}ceksange 🅖
${prefix}cekbaper 🅖
${prefix}cekfakboy 🅖
${prefix}cekalim 🅖
${prefix}ceksuhu 🅖
${prefix}cekfakgirl 🅖
${prefix}cekkeren 🅖
${prefix}cekwibu 🅖
${prefix}cekpasarkas 🅖
${prefix}cekkul 🅖
${prefix}cekbapak 🅖
`}

global.stalkermenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

   Stalker Menu
${prefix}igstalk 🅟
${prefix}ffstalk 🅟
${prefix}mlstalk 🅟
${prefix}npmstalk 🅟
${prefix}ghstalk 🅟
`}

global.randfotomenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

   Random Foto
${prefix}aesthetic 🅟
${prefix}ahegao 🅟
${prefix}akira 🅟
${prefix}akiyama 🅟
${prefix}ana 🅟
${prefix}anjing 🅟
${prefix}art 🅟
${prefix}ass 🅟
${prefix}asuna 🅟
${prefix}ayuzawa 🅟
${prefix}bdsm 🅟
${prefix}boneka 🅟
${prefix}boruto 🅟
${prefix}bts 🅟
${prefix}cecan 🅟
${prefix}chiho 🅟
${prefix}chitoge 🅟
${prefix}cogan 🅟
${prefix}cosplay 🅟
${prefix}cosplayloli 🅟
${prefix}cosplaysagiri 🅟
${prefix}cuckold 🅟
${prefix}cum 🅟
${prefix}cyber 🅟
${prefix}darkjokes 🅟
${prefix}deidara 🅟
${prefix}doraemon 🅟
${prefix}eba 🅟
${prefix}elaina 🅟
${prefix}emilia 🅟
${prefix}ero 🅟
${prefix}erza 🅟
${prefix}exo 🅟
${prefix}femdom 🅟
${prefix}foot 🅟
${prefix}freefire 🅟
${prefix}gamewallpaper 🅟
${prefix}gangbang 🅟
${prefix}gifs 🅟
${prefix}glasses 🅟
${prefix}gremory 🅟
${prefix}hekel 🅟
${prefix}hentai 🅟
${prefix}hestia 🅟
${prefix}hijaber 🅟
${prefix}hinata 🅟
${prefix}husbu 🅟
${prefix}inori 🅟
${prefix}islamic 🅟
${prefix}isuzu 🅟
${prefix}itachi 🅟
${prefix}itori 🅟
${prefix}jahy 🅟
${prefix}jeni 🅟
${prefix}jiso 🅟
${prefix}justina 🅟
${prefix}kaga 🅟
${prefix}kagura 🅟
${prefix}kakasih 🅟
${prefix}kaori 🅟
${prefix}kartun 🅟
${prefix}katakata 🅟
${prefix}keneki 🅟
${prefix}kotori 🅟
${prefix}kpop 🅟
${prefix}kucing 🅟
${prefix}kurumi 🅟
${prefix}lisa 🅟
${prefix}loli 🅟
${prefix}madara 🅟
${prefix}masturbation 🅟
${prefix}megumin 🅟
${prefix}mikasa 🅟
${prefix}mikey 🅟
${prefix}miku 🅟
${prefix}milf 🅟
${prefix}minato 🅟
${prefix}mobil 🅟
${prefix}motor 🅟
${prefix}mountain 🅟
${prefix}naruto 🅟
${prefix}neko 🅟
${prefix}neko2 🅟
${prefix}nekonime 🅟
${prefix}nezuko 🅟
${prefix}onepiece 🅟
${prefix}orgy 🅟
${prefix}panties 🅟
${prefix}pentol 🅟
${prefix}pokemon 🅟
${prefix}profil 🅟
${prefix}programming 🅟
${prefix}pubg 🅟
${prefix}pussy 🅟
${prefix}randblackpink 🅟
${prefix}randomnime 🅟
${prefix}randomnime2 🅟
${prefix}rize 🅟
${prefix}rose 🅟
${prefix}ryujin 🅟
${prefix}sagiri 🅟
${prefix}sakura 🅟
${prefix}sasuke 🅟
${prefix}satanic 🅟
${prefix}shina 🅟
${prefix}shinka 🅟
${prefix}shinomiya 🅟
${prefix}shizuka 🅟
${prefix}shota 🅟
${prefix}tatasurya 🅟
${prefix}technology 🅟
${prefix}tejina 🅟
${prefix}tentacles 🅟
${prefix}thighs 🅟
${prefix}toukachan 🅟
${prefix}tsunade 🅟
${prefix}waifu 🅟
${prefix}wallhp 🅟
${prefix}wallml 🅟
${prefix}wallnime 🅟
${prefix}yotsuba 🅟
${prefix}yuki 🅟
${prefix}yulibocil 🅟
${prefix}yumeko 🅟
${prefix}fox 🅟  
${prefix}dog 🅟  
${prefix}cat 🅟
${prefix}panda 🅟  
${prefix}birb 🅟 
${prefix}koala 🅟
`}

global.randvideomenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

   Random Video
${prefix}asupan 🅟
${prefix}bocil 🅟
${prefix}rikagusriani 🅟
${prefix}hentavid 🅟
${prefix}jjmeryani 🅟
`}

global.textpromenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

   Text Pro
${prefix}candy 🅟 
${prefix}christmas 🅟 
${prefix}3dchristmas 🅟 
${prefix}sparklechristmas 🅟
${prefix}deepsea 🅟 
${prefix}scifi 🅟 
${prefix}rainbow 🅟 
${prefix}waterpipe 🅟 
${prefix}spooky 🅟 
${prefix}pencil 🅟 
${prefix}circuit 🅟 
${prefix}discovery 🅟 
${prefix}metalic 🅟 
${prefix}fiction 🅟 
${prefix}demon 🅟 
${prefix}transformer 🅟 
${prefix}berry 🅟 
${prefix}thunder 🅟 
${prefix}magma 🅟 
${prefix}3dstone 🅟 
${prefix}neonlight 🅟 
${prefix}glitch 🅟 
${prefix}harrypotter 🅟 
${prefix}brokenglass 🅟 
${prefix}papercut 🅟 
${prefix}watercolor 🅟 
${prefix}multicolor 🅟 
${prefix}neondevil 🅟 
${prefix}underwater 🅟 
${prefix}graffitibike 🅟
${prefix}snow 🅟 
${prefix}cloud 🅟 
${prefix}honey 🅟 
${prefix}ice 🅟 
${prefix}fruitjuice 🅟 
${prefix}biscuit 🅟 
${prefix}wood 🅟 
${prefix}chocolate 🅟 
${prefix}strawberry 🅟 
${prefix}matrix 🅟 
${prefix}blood 🅟 
${prefix}dropwater 🅟 
${prefix}toxic 🅟 
${prefix}lava 🅟 
${prefix}rock 🅟 
${prefix}bloodglas 🅟 
${prefix}hallowen 🅟 
${prefix}darkgold 🅟 
${prefix}joker 🅟 
${prefix}wicker 🅟
${prefix}firework 🅟 
${prefix}skeleton 🅟 
${prefix}blackpink 🅟 
${prefix}sand 🅟 
${prefix}glue 🅟 
${prefix}1917 🅟 
${prefix}leaves 🅟
`}

global.photooxymenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

   Photo Oxy
${prefix}shadow 🅟 
${prefix}write 🅟 
${prefix}romantic 🅟 
${prefix}burnpaper 🅟
${prefix}smoke 🅟 
${prefix}narutobanner 🅟 
${prefix}love 🅟 
${prefix}undergrass 🅟
${prefix}doublelove 🅟 
${prefix}coffecup 🅟
${prefix}underwaterocean 🅟
${prefix}smokyneon 🅟
${prefix}starstext 🅟
${prefix}rainboweffect 🅟
${prefix}balloontext 🅟
${prefix}metalliceffect 🅟
${prefix}embroiderytext 🅟
${prefix}flamingtext 🅟
${prefix}stonetext 🅟
${prefix}writeart 🅟
${prefix}summertext 🅟
${prefix}wolfmetaltext 🅟
${prefix}nature3dtext 🅟
${prefix}rosestext 🅟
${prefix}naturetypography 🅟
${prefix}quotesunder 🅟
${prefix}shinetext 🅟
`}

global.ephoto360menu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

   Ephoto 360
${prefix}glitchtext 🅟
${prefix}writetext 🅟
${prefix}advancedglow 🅟
${prefix}typographytext 🅟
${prefix}pixelglitch 🅟
${prefix}neonglitch 🅟
${prefix}flagtext 🅟
${prefix}flag3dtext 🅟
${prefix}deletingtext 🅟
${prefix}blackpinkstyle 🅟
${prefix}glowingtext 🅟
${prefix}underwatertext 🅟
${prefix}logomaker 🅟
${prefix}cartoonstyle 🅟
${prefix}papercutstyle 🅟
${prefix}watercolortext 🅟
${prefix}effectclouds 🅟
${prefix}blackpinklogo 🅟
${prefix}gradienttext 🅟
${prefix}summerbeach 🅟
${prefix}luxurygold 🅟
${prefix}multicoloredneon 🅟
${prefix}sandsummer 🅟
${prefix}galaxywallpaper 🅟
${prefix}1917style 🅟
${prefix}makingneon 🅟
${prefix}royaltext 🅟
${prefix}freecreate 🅟
${prefix}galaxystyle 🅟
${prefix}lighteffects 🅟
`}

global.cerpenmenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

   Random Cerpen
${prefix}cerpen_sejarah 🅟
${prefix}cerpen_sedih 🅟
${prefix}cerpen_sastra 🅟
${prefix}cerpen_romantis 🅟
${prefix}cerpen_rohani 🅟
${prefix}cerpen_rindu 🅟
${prefix}cerpen_remaja 🅟
${prefix}cerpen_ramadhan 🅟
${prefix}cerpen_petualangan 🅟
${prefix}cerpen_persahabatan 🅟
${prefix}cerpen_perpisahan 🅟
${prefix}cerpen_perjuangan 🅟
${prefix}cerpen_penyesalan 🅟
${prefix}cerpen_pengorbanan 🅟
${prefix}cerpen_pengalaman 🅟
${prefix}cerpen_pendidikan 🅟
${prefix}cerpen_penantian 🅟
${prefix}cerpen_patahhati 🅟
${prefix}cerpen_olahraga 🅟
${prefix}cerpen_nasionalisme 🅟
${prefix}cerpen_nasihat 🅟
${prefix}cerpen_motivasi 🅟
${prefix}cerpen_misteri 🅟
${prefix}cerpen_mengharukan 🅟
${prefix}cerpen_malaysia 🅟
${prefix}cerpen_liburan 🅟
${prefix}cerpen_kristen 🅟
${prefix}cerpen_korea 🅟
${prefix}cerpen_kisahnyata 🅟
${prefix}cerpen_keluarga 🅟
${prefix}cerpen_kehidupan 🅟
${prefix}cerpen_jepang 🅟
${prefix}cerpen_inspiratif 🅟
${prefix}cerpen_gokil 🅟
${prefix}cerpen_galau 🅟
${prefix}cerpen_cintasejati 🅟
${prefix}cerpen_cintasegitiga 🅟
${prefix}cerpen_cintasedih 🅟
${prefix}cerpen_cintaromantis 🅟
${prefix}cerpen_cintapertama 🅟
${prefix}cerpen_cintaislami 🅟
${prefix}cerpen_cinta 🅟
${prefix}cerpen_budaya 🅟
${prefix}cerpen_bahasasunda 🅟
${prefix}cerpen_bahasajawa 🅟
${prefix}cerpen_bahasainggris 🅟
${prefix}cerpen_bahasadaerah 🅟
${prefix}cerpen_anak 🅟
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})