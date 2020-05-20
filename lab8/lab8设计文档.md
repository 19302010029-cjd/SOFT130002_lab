##Lab8设计文档
####19302010029 蔡建栋
#####Lab8的实现过程
1.任务一、二、三：首先先定义一个图片移动函数animate(offset)，offset为移动距离，用于各个按钮的实现以及自动播放中使用。
通过改变wrap的left的值来实现每一张图片的轮播，当点击next按钮时，wrap就会向左移动600px，从而将下一张图片显示出来，
当点击prev按钮时，wrap就会向右移动600px，从而将上一张图片显示出来。为了实现图片变化的同时右下角的数字标记也会发生变化，
设置了showButton()函数，通过改变数字下标（buttons数组中的元素）的class值（若当前应显示该数字下标，则将该元素的class设为on），
从而实现数字下标样式的变化。在next.onclick和prev.onclick中运用上述的两个函数即可实现任务一。
然后，通过设置play()函数实现自动播放，其中调用了next.onclick(因为自动播放的过程就是不断点击next的过程)，并用setInterval实现切换图片间隔为2s。
还设置了stop()函数来实现自动播放停止（用clearInterval来实现），然后调用这两个函数，通过container.onmouseover=stop;和container.onmouseout=play;
来实现当鼠标移入轮播区域内时，停止自动播放，当鼠标不在轮播区域内时，开始自动播放，从而实现任务二。
为了使点击右下角的任意一个数值，能够切换到对应图片，只需对每一个数字下标添加onclick事件，如果数字下标的class值为on，则直接return，不发生改变；
如果点击了不同的数字下标，则调用showButton()同时计算wrap所需的移动量，计算方法：（当前的数字下标-之前的数字下标）*（-600），再调用animate(offset)，从而实现任务三。<br>
2.任务四：定义一个edit(element)函数,首先先得到当前的td内的内容存储在oldhtml中，然后创建一个新的input文本框newobj，type为text用于输入。
将oldhtml赋给newobj的value使之在文本框中出现，然后为newobj添加光标离开事件，当触发时判断新增元素值是否为空，为空则不修改，并返回原有值，否则修改内容。
然后将td的子节点为空，并添加newobj，再用setSelectionRange（0，0）设置光标位置定位于单元格的首个字符或者汉字前，然后获得光标即可。
最后通过循环将每一非表头的单元格td的onclick事件添加edit(element)函数，从而完成任务四。