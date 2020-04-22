##Lab5设计文档
19302010029 蔡建栋<br>
Lab完成过程中的函数相关知识点与解决方案:<br>
(1)问题一：在showWindowHref()中运用indexOf()和substring()两个方法，
先通过url.value.indexOf("name")>=0判断url中是否含有name字符串，再得到name的
位置，若之后还有其他参数，就确定name后第一个&的位置，再通过url_result.value=url.value.substring(position1+5,position2);
截取得到name的参数值，否则直接截取得到name的参数值，若没有名为name的参数，那么Argument value输入框会出现error。<br>
（2）问题二：通过设置timeTest()函数，运用if语句，先判断是否过了整分钟，先用nowminute=new Date().getMinutes();
设置页面加载时的时间的分钟，若程序运行时的分钟数大于页面加载时的时间的分钟，就将flag设置为false，flag是一个标志，记录是否过了整分钟，
还有一个count标志，记录翻倍了几次，只有在flag&&count!==10的情况下才翻倍。之后运用setInterval(timeTest,5000);
来实现每隔五秒运行一次函数直到某一整分钟停止的问题。<br>
（3）问题三：通过设置arrSameStr()函数，其中num1数组记录字符串的每一个字符，
num2数组记录字符串中无重复的字符，count数组记录每一个无重复的字符的个数，count数组和
num2数组的下标互相对应。最后通过比较count数组中各个数的大小来确定出现最多的字符，及其个数。
