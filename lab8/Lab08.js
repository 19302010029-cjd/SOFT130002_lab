
/*请在该区域内声明或者获取所要使用的全局变量*/
/********************************************begin************************************/
const container = document.getElementById("container");//获取容器id
let wrap = document.getElementById("wrap");//获取wrap
let buttons = document.getElementById("buttons").getElementsByTagName("span");//获取数字下标
const prev = document.getElementById("prev");//左按钮
const next = document.getElementById("next");//右按钮
let animated = false;
let index = 1;//当前数字下标
let timer;//定时器
let table = document.getElementById("table");
let td=document.getElementsByTagName("td");
/*********************************************end*************************************/



/* 任务一
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击左箭头prev和右箭头next的时候，可以切换到前一张图片和下一张图片。（左右箭头为html中的a标签）
 * ②每切换一张图片，右下角的数字标记对应变化。
 *      如：一开始，第1张图片显示出来，右下角的1-5的数值中，数值1位红色，2-4为绿色，表示当前显示第1张图片。
 *      点击next箭头，图片切换到第2张，同时，右下角红色数值从1切换为2，数值1,3,4,5为绿色。
 * ③当当前图片为第1张时，点击prev箭头，切换到第5张图片，且数值5置为红色。
 * 当当前图片为第5张时，点击next箭头，切换到第1张图片，且数值1置为红色。
 * ④切换图片的过程不要求，可直接切换，也可动画切换，但要求保证一定的切换动画合理性，不能出去明显的衔接不当。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/
function showButton(){
    for(let i=0; i<buttons.length; i++){
        if(buttons[i].className==="on"){
            buttons[i].className="";
            break;//退出循环
        }
    }
    buttons[index-1].className="on";
}
next.onclick=function(){
    index += 1;
    index = index > 5 ? 1 : index;
    showButton();
    if(!animated){
        animate(-600);
    }
};
prev.onclick=function(){
    index-=1;
    index=index < 1 ? 5 : index;
    showButton();
    if(!animated){
        animate(600);
    }
};


/*********************************************end*************************************/



/* 任务二
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①轮播可以自动播放，切换图片间隔为2s，每一次切换的效果与点击next箭头的效果一致。
 * ②当鼠标移入轮播区域内时，停止自动播放。
 * ③当鼠标不在轮播区域内时，开始自动播放。
 * ④页面刚加载完成时，如果鼠标不在轮播区域内，自动开始自动播放；否则，等待直到鼠标移出轮播区域，再进行自动播放。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/
function animate(offset){
    animated=true;// 快速点击时，会出现小圆点和图片不对应的情况，解决方案是当图片处于动画状态时，直接屏蔽掉点击事件
    var newLeft=parseInt(wrap.style.left)+offset;
    function work(){
        if(offset<0&&parseInt(wrap.style.left)>newLeft||(offset>0&&parseInt(wrap.style.left)<newLeft)){
            wrap.style.left=parseInt(wrap.style.left)+offset+'px';
            setTimeout(work,0);
        }else{
            animated=false;
            wrap.style.left=newLeft +"px";
            if(newLeft>-600){
                wrap.style.left=-3000+"px";
            }
            if(newLeft<-3000){
                wrap.style.left=-600+"px";
            }
        }
    }
    work();
}//主要的图片变换方法
function play(){
    timer=setInterval(function(){
        next.onclick();
    },2000);
}
//停止切换
function stop(){
    clearInterval(timer);
}
//鼠标移上去，触发自动切换事件
container.onmouseover=stop;
container.onmouseout=play;
//自动切换
play();


/*********************************************end*************************************/



/* 任务三
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击右下角的任意一个数值，能够切换到对应图片，且相应数值变为红色。
 * ②进行①操作过后，是否自动播放，其规则与上一个任务一致。
 * ③本部分只能使用原生JS。
 */
/********************************************begin************************************/
for(let i=0;i<buttons.length;i++){
    buttons[i].onclick=function(){
        if(this.className==="on"){
                   return;
                }
        let myIndex = parseInt(buttons[i].getAttribute("index"));//获取当前数字下标的index
        let offset = -600 * (myIndex - index); //移动的距离：当前的index-之前的index
        index=myIndex;
        showButton();
        animate(offset);
    }
}



/*********************************************end*************************************/


/*任务四
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击某一非表头的单元格，可以编辑其内容，编辑完毕后点击其他部位，可以在界面上显示修改后的内容。
 * ②点击单元格后，光标自动定位于单元格的首个字符或者汉字前。
 * ③本部分可以使用jQuery，也可以使用原生JS。
 */
/********************************************begin************************************/
function edit(element) {
    var oldhtml = element.innerHTML;
        //如果已经双击过，内容已经存在input，不做任何操作
    if(oldhtml.indexOf('type="text"') > 0){
            return;
        }
    //创建新的input元素
    var newobj = document.createElement("input");
    //为新增元素添加类型
    newobj.type = "text";
    //为新增元素添加value值
    newobj.value = oldhtml;
    //为新增元素添加光标离开事件
    newobj.onblur = function() {
        if(this.value && this.value.trim()!==""){
            element.innerHTML = this.value == oldhtml ? oldhtml : this.value;
        } else {
            element.innerHTML = oldhtml;
        }
    }
    element.innerHTML = "";
    element.appendChild(newobj);
    newobj.setSelectionRange(0, 0);
    newobj.focus();
}
for (let i=0;i<td.length;i++) {
    td[i].onclick = function () {
        edit(td[i]);
    };
}
/*********************************************end*************************************/