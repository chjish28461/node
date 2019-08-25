var  data = [
    {
        txt:"JavaScript 变量<br />"+
        "JavaScript 变量是存储数据值的容器。<br />"+
        "在本例中，x、y 和 z 是变量：<br />"+
        "实例<br />"+
        "var x = 7;<br />"+
        "var y = 8;<br />"+
        "var z = x + y;<br />"+
        "从上例中，您可获得：<br />"+
        "x 存储值 7<br />"+
        "y 存储值 8<br />"+
        "z 存储值 15<br />"+
        "类似代数<br />"+
        "在本例中，price1、price2 以及 total 是变量：<br /><br />"+

        "实例<br />"+
        "var price1 = 7;<br />"+
        "var price2 = 8;<br />"+
        "var price2 = 12;<br />"+
        "var total = price1 + price2 + price3;<br />"
    },
    {
        txt:"JavaScript 运算符<br />"+
        "实例向变量赋值，并把它们相加<br />"+
        "向变量赋值，并把它们相加：<br />"+
        "var x = 7;		// 向 x 赋值 5<br />"+
        "var y = 8;		// 向 y 赋值 2<br />"+
        "var z = x + y;<br />"+
        "赋值运算符（=）把值赋给变量。<br />"+
        "赋值<br />"+
        "var x = 15;<br />"
    },
    {
        txt:"字符串值，数值，布尔值，数组，对象。<br />"+
        "JavaScript 数据类型<br />"+
        "JavaScript 变量能够保存多种数据类型：数值、字符串值、数组、对象等等："+
        "var length = 7;                        // 数字<br />"+
        "var lastName = 'Gates';                      // 字符串<br />"+
        "var cars = ['Porsche', 'Volvo', 'BMW'];         // 数组<br />"+
        "var x = {firstName:'Bill', lastName:'Gates'};    // 对象<br />"+
        "数据类型的概念<br />"+
        "在编程过程中，数据类型是重要的概念。<br />"+

        "为了能够操作变量，了解数据类型是很重要的。<br />"+

        "如果没有数据类型，计算机就无法安全地解决这道题：<br />"+

        "var x = 911 + 'Porsche';<br />"+
        "给 'Volvo' 加上 911 有意义吗？这么做会发生错误还是会产生一个结果？"
    },
    {
        txt:"JavaScript 函数是被设计为执行特定任务的代码块。<br />"+
        "JavaScript 函数会在某代码调用它时被执行。<br />"+
        "实例<br />"+
        "function myFunction(p1, p2) {<br />"+
        "    return p1 * p2;              // 该函数返回 p1 和 p2 的乘积<br />"+
        "}<br />"+
        "JavaScript 函数语法<br />"+
        "JavaScript 函数通过 function 关键词进行定义，其后是函数名和括号 ()。<br />"+

        "函数名可包含字母、数字、下划线和美元符号（规则与变量名相同）。<br />"+

        "圆括号可包括由逗号分隔的参数：<br />"+

        "(参数 1, 参数 2, ...)<br />"+
        "由函数执行的代码被放置在花括号中：{}<br />"+

        "function name(参数 1, 参数 2, 参数 3) {<br />"+
        "    要执行的代码<br />"+
        "}"
    },
    {
        txt:"真实生活中的对象、属性和方法<br />"+
        "在真实生活中，汽车是一个对象。<br />"+
        "汽车有诸如车重和颜色等属性，也有诸如启动和停止的方法<br />"+
        "所有汽车都拥有同样的属性，但属性值因车而异。<br />"+
        "所有汽车都拥有相同的方法，但是方法会在不同时间被执行。<br />"+
        "JavaScript 对象<br />"+
        "您之前已经学到，JavaScript 变量是数据值的容器。<br />"+
        "这段代码把一个单一值（porsche）赋给名为 car 的变量：<br />"+
        "var car = 'porsche';"+
        "对象也是变量。但是对象包含很多值。<br />"+
        "这段代码把多个值（porsche, 911, white）赋给名为 car 的变量：<br />"+
        "var car = {type:'porsche', model:'911', color:'white'};"
    },
    {
        txt:"HTML 事件<br />"+
        "HTML 事件可以是浏览器或用户做的某些事情。<br />"+
        "下面是 HTML 事件的一些例子：<br />"+
        "HTML 网页完成加载<br />"+
        "HTML 输入字段被修改<br />"+
        "HTML 按钮被点击<br />"+
        "通常，当事件发生时，用户会希望做某件事。<br />"+
        "JavaScript 允许您在事件被侦测到时执行代码。<br />"+
        "通过 JavaScript 代码，HTML 允许您向 HTML 元素添加事件处理程序。<br />"+
        "使用单引号：<br />"+

        "<element event='一些 JavaScript'><br />"+
        "使用双引号：<br />"+

        "<element event='一些 JavaScript'><br />"+
        "在下面的例子中，onclick 属性（以及代码）被添加到 <button> 元素：<br />"+

        "实例<br />"+
        "<button onclick='document.getElementById('demo').innerHTML=Date()'>现在的时间是？</button>"
    },
]
function $(ele){
    return document.querySelectorAll(ele);
}
function tab(i){
    console.log(i);
    $(".content")[0].innerHTML=data[i].txt;
}
window.onload=function(){
    var li = $("li");
}