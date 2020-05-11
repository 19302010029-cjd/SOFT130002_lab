const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
var element=document.getElementsByClassName("flex-container justify");
//第一部分
var item1=document.createElement("div");
var p1=document.createElement("h4");
p1.append("Genre : "+works[0].tips);
element[0].appendChild(item1);
item1.className="item";
item1.appendChild(p1);
var section1=document.createElement("div");
section1.className="inner-box";
var fullname1=document.createElement("h3");
fullname1.append(works[0].author);
fullname1.style.display="inline";
var lifetime1=document.createElement("strong");
lifetime1.append("lifetime:"+works[0].lifetime);
lifetime1.style.display="inline";
lifetime1.style.marginLeft="1em";
section1.appendChild(fullname1);
section1.appendChild(lifetime1);
item1.appendChild(section1);
var section2=document.createElement("div");
section2.className="inner-box";
var photo1=document.createElement("h3");
photo1.append("Popular Photos");
section2.appendChild(photo1);
var images1=new Array(works[0].photos.length);
for (let i=0;i<images1.length;i++){
    images1[i]=document.createElement("img");
    images1[i].className="photo";
    images1[i].src=works[0].photos[i];
    section2.appendChild(images1[i]);
}
item1.appendChild(section2);
var button1=document.createElement("button");
button1.append("Visit");
item1.appendChild(button1);
//第二部分
var item2=document.createElement("div");
var p2=document.createElement("h4");
p2.append("Genre : "+works[1].tips);
element[0].appendChild(item2);
item2.className="item";
item2.appendChild(p2);
var section3=document.createElement("div");
section3.className="inner-box";
var fullname2=document.createElement("h3");
fullname2.append(works[1].author);
var lifetime2=document.createElement("strong");
lifetime2.append("lifetime:"+works[1].lifetime);
fullname2.style.display="inline";
lifetime2.style.display="inline";
lifetime2.style.marginLeft="1em";
section3.appendChild(fullname2);
section3.appendChild(lifetime2);
item2.appendChild(section3);
var section4=document.createElement("div");
section4.className="inner-box";
var photo2=document.createElement("h3");
photo2.append("Popular Photos");
section4.appendChild(photo2);
var images2=new Array(works[1].photos.length);
for (let i=0;i<images2.length;i++){
    images2[i]=document.createElement("img");
    images2[i].className="photo";
    images2[i].src=works[1].photos[i];
    section4.appendChild(images2[i]);
}
item2.appendChild(section4);
var button2=document.createElement("button");
button2.append("Visit");
item2.appendChild(button2);
//第三部分
var item3=document.createElement("div");
var p3=document.createElement("h4");
p3.append("Genre : "+works[2].tips);
element[0].appendChild(item3);
item3.className="item";
item3.appendChild(p3);
var section5=document.createElement("div");
section5.className="inner-box";
var fullname3=document.createElement("h3");
fullname3.append(works[2].author);
var lifetime3=document.createElement("strong");
lifetime3.append("lifetime:"+works[2].lifetime);
fullname3.style.display="inline";
lifetime3.style.display="inline";
lifetime3.style.marginLeft="1em";
section5.appendChild(fullname3);
section5.appendChild(lifetime3);
item3.appendChild(section5);
var section6=document.createElement("div");
section6.className="inner-box";
var photo3=document.createElement("h3");
photo3.append("Popular Photos");
section6.appendChild(photo3);
var images3=new Array(works[2].photos.length);
for (let i=0;i<images3.length;i++){
    images3[i]=document.createElement("img");
    images3[i].className="photo";
    images3[i].src=works[2].photos[i];
    section6.appendChild(images3[i]);
}
item3.appendChild(section6);
var button3=document.createElement("button");
button3.append("Visit");
item3.appendChild(button3);
//第四部分
var item4=document.createElement("div");
var p4=document.createElement("h4");
p4.append("Genre : "+works[3].tips);
element[0].appendChild(item4);
item4.className="item";
item4.appendChild(p4);
var section7=document.createElement("div");
section7.className="inner-box";
var fullname4=document.createElement("h3");
fullname4.append(works[3].author);
var lifetime4=document.createElement("strong");
lifetime4.append("lifetime:"+works[3].lifetime);
fullname4.style.display="inline";
lifetime4.style.display="inline";
lifetime4.style.marginLeft="1em";
section7.appendChild(fullname4);
section7.appendChild(lifetime4);
item4.appendChild(section7);
var section8=document.createElement("div");
section8.className="inner-box";
var photo4=document.createElement("h3");
photo4.append("Popular Photos");
section8.appendChild(photo4);
var images4=new Array(works[3].photos.length);
for (let i=0;i<images4.length;i++){
    images4[i]=document.createElement("img");
    images4[i].className="photo";
    images4[i].src=works[3].photos[i];
    section8.appendChild(images4[i]);
}
item4.appendChild(section8);
var button4=document.createElement("button");
button4.append("Visit");
item4.appendChild(button4);