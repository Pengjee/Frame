一、命名规范
====

1、通用命名方法
----

|命名方法|举例|
|:--|:--|
| Camel命名法 | thisIsAnApple |
| Pascal命名法 | ThisIsAnApple |

注意：在命名时尽量简洁明了，用英文表达（**绝对不能用拼音或者首字母拼写**）
2、各类型命名规范
----

|名称|命名方法| 词汇种类 | 说明 | 举例 | 
|:--|:--|:--|:--|:--|
|局部变量名 | Camel命名法 | 名词 | | fristName
|全局变量名 | Camel命名法 | 名词 | 前缀:g | gFristName |
|参数名 | Camel命名法 | 名词 |  | fristName
| 方法/属性 | Camel命名法 | 名词  | | fristName
| 私有（保护）成员 | Camel命名法 | 名词 | 前缀:_ | _fristName
| **常量名** | 名词 | 下划线+全体大写 | | ADD_METHOD
| **类名** | Pascal命名法 | 名词 | | AtiveDic
| **Bool类型** | Camel命名法 | 名词 | 前缀:is/has |hasChild

3、函数与类的命名
----
Ⅰ.函数

1）使用Pascal命名法
2）前缀为动词，前缀词如下表所示

|动词|含义|举例|
|:--|:--|:--|
| Can | 判断是否可以执行某个权限 | CanLogin |
| Has | 判断是否含有某个值| HasToken | 
| Is  | 判断是否为某个值 | IsShowModel |
|Get| 获取某个值 | GetUserId |
|Set| 设置某个值 | SetCookie |
|Load| 加载某些数据 | LoadList |
|Update| 更新某些数据 | UpdateUserInfo |
|Del| 删除某些数据 | DelMenu |

Ⅱ、类（Class）命名规范
1）使用Pascal命名法
2）名字应该明确表达改类的作用
二、props与state的使用
====

1、Props
-------
定义：大多数组件在定义时就可以通过各种自定义参数来实现组件的定制。

**编程注意事项：**

1.在页面中禁止直接修改props`this.props.name = 'Alen'`。

2.在调用props时尽量使用扩展符。

```
//good
const { name } = this.porps;
console.log(name);
//bad
console.log(this.props.name);
```
    
3.在传递props时，如无必要，不能传递整个props，只需传递props中所需要的属性（在models中的reducers         同理）。
2、State
-------
定义：State是**一个组件**的UI数据模型，是组件渲染时的数据依据。

**编程注意事项：**
1.绝对不要 直接改变 this.state,你可以将它看作是一个不可变得变量（如需改变必须调用setState）
```
//good
this.setState({name:'Lucy'});
    
//bad
this.state.name = 'Lucy';
```
2.setState时异步的，若执行setState后需马上调用，可以使用这些方法转化为同步。（[方法][1]）

3.和渲染无关的状态尽量不要放在 state 中来管理

4.在State更新时，如果更新的值涉及到了state和props，我需要注意在调用setState时不要直接使用this.props和this.state

```
//good 
this.setState((prevState, props) => ({
name: prevState.name + props.increment
}));

//bad
this.setState({name:this.state.name});
```
5.禁止在shouldComponentUpdate或者componentWillUpdate方法中调用setState

6.最好在componentDidMount中调用

3、何时调用哪个？
-------
1.如果数据需要跨组件传输，则放在props中进行传递

2.如果数据只在本组件使用，并且涉及到在render中进行渲染，则放在state中进行处理

3.其余数据可在组件中直接定义。

三、React编码规范
====

1、自我解释
------
尽可能减少代码中的注释。可以通过让变量名更语义化、只注释复杂、潜在逻辑，来减少注释量，同时也提高了可维护性，毕 竟不用总在代码与注释之间同步了。
2、JSX编码
------
1.在JSX中禁止使用if语句进行判定

``` 
//bad
ShowUserInfo{
    if(isShowUserInfo){
        retrun(
            <div>姓名：张三</div>
        );
    }else{
        return(
            <div>姓名：未填写</div>
        )
    }   
}
//good
ShowUserInfo(){
    return isShowUserInfo : (<div>姓名：张三</div>) ? (<div>姓名：未填写</div>)
}
```
三目运算：条件1?值1或操作1: //如果满足条件1，就返回值1或执行操作1

2.尽量使用单标签

```
//bad
render(){
    return(
    <div>
        ...
        <UserInfo></UserInfo>
        ...
    </div>
    );
}
//good
render(){
    return(
    <div>
        ...
        <UserInfo />
        ...
    </div>
    );
}
```
3.在标签中默认的都是true

```
//bad
<Foo
  hidden={true}
/>

//good
<Foo hidden />
```
4.在map循环时，不要用index作为每个标签的key

```
// bad
{todos.map((todo, index) =>
  <Todo
    {...todo}
    key={index}
  />
)}

// good
{todos.map(todo => (
  <Todo
    {...todo}
    key={todo.id}
  />
))}
```
5.使用ref的回调

```
// bad
<Foo
  ref="myRef"
/>

// good
<Foo
  ref={(ref) => { this.myRef = ref; }}
/>
```
更多JSX规范参见：[更多规范][2]

3、渲染与判断逻辑分开
------
在render中只进行页面的渲染，不作对数据或者逻辑的处理

4、解构
------

```
// bad  
const splitLocale = locale.split('‑');  
const language = splitLocale[0];  
const country = splitLocale[1]; 
// good  
const [language, country] = locale.split('‑');

```

5、变量判定
------

1.对所有定义的或者传入的变量，都进行默认设置或者判定是否为undefined，防止数据未定义时程序报错。

```
// Bad  
onChange(value => console.log(value.name))  
// Dirty  
onChange((value) => {   
    if (!value) {
          value = {}
    }    
    console.log(value.name)  
})  
// Clean  
onChange((value = {}) => console.log(value.name))  
// Clean  
onChange(value => console.log(value?.name))

```
不要信任任何回调函数给你的变量，它们随时可能是 undefined ，使用初始值是个不错的选择，但有的时候初始值没什么意 义，使用 ?. 语法可以安全的访问属性。

2.自定义变量

```
//bad
let newslist = this.props.newslist;
let b = a  // a为数组
//good 
let { newslist = [] } = this.props;
let b = a || [];
```


四、React中常用ES6语法
====
1、let与const
----

1.let、const只能定义之后使用

```
console.log(a); // error
let a = 1;
console.log(b); // undefined
var b = 2;
console.log(c);
const c = 3;   // error
```
2、let与const不能重复定义

```

let a = 1;
const b = 1;
var c = 1;
let a = 2; // Identifier 'a' has already been declared
const b = 2; // Identifier 'a' has already been declared
var c = 2; // 2
```
3、const定义后的变量不可修改

```
var a = 1;
a = 2;  // 2
let b = 1;
b = 2; // 2
console.log(b);
const c = 1;
c = 2; //Assignment to constant variable.
```
从上面这些实例我可以大致的知道const、let、var具体应该应用在那些地方，但是我们会发现let与var几乎没有什么区别，那么为什么我们不能全部都用var呢？
答案是不能的，有var是在全局中申明一个变量，首先这个变量在使用后依然会存在与内存中，而let在函数调用完成过后就会被立即消除，从下面的例子我们可以看出。

```
for (var j = 0; j < 10; j++) {
	// ...
}
console.log(j);  // 10
for (let i = 0; i < 10; i++) {
	// ...
}
console.log(i);  // i is not defined
```
所以慎用var，我们在平常编码过程中，大部分的var都是能被let和const替代的。

2、变量解构
------
1.数组与数组合并

```
let a = [1,2];
let b = [3,4];
//bad
let c = a.concat(b); // [1,2,3,4]
//OR
for(let i = 0 ;i<b.length;i++){
    a.push(b[i]);
}
//good
let c = [...a,...b]; // [1,2,3,4]
```
2.对象与对象合并

```
let a = {name:'张三'}
let b = {age:32}
//bad
let c = {
    name:a.name,
    age:b.age
}
//good 
let c = {...a,...b};
```
3.对象并入数组
```
let a = [{name:'张三'}];
let b = {name:'Lucy'};
//bad
let c = a.push(b);
//good
let c = [...a,b];
```
4.更改变量名

```
let a = {name:'Lucy',age:32};
//bad
let NAME = a.name;
//good 
let {name:NAME} = a;
```

5.数值互换

```
let a = 1;
let b = 2;
//bad
let t;
t = a;
a = b;
b = t;
//good
[a,b] = [b,a];
```

3、箭头函数
----
请写一个常用的forEach循环

```
let arr = [1,2,3];
//bad 
arr.forEach(function(e){
    console.log(e);
});
//good
arr.forEach((e)=>{
    console.log(e);
});
```
但是我们会发现，其实funtion去写也并没有什么不对的地方，最多也就是多写一点点而已，那为什么ES6需要新增这个箭头函数呢？
最主要的目的就是解决this指针的问题，而this在React的编码过程中会大量的去使用它。
我们知道在ES6中，我们可以创建一个class，如果我们默认在其里面加入一个函数的话，其必须在调用的时候，必须绑定this指针，否则不能访问当前类的实例里面的属性。

```
function Person() {
  this.age = 0;

  setInterval(function growUp() {
    this.age++;
    console.log(this.age); // NaN
  }, 1000);
}
var p = new Person();
```
在ES3/5我们需要穿过function传递需要怎么做呢？

```
function Person() {
  this.age = 0;
  let _this = this;
  setInterval(function growUp() {
    _this.age++;
    console.log(_this.age); // 1 2 3...
  }, 1000);
}
var p = new Person();
```
但是这样写会麻烦，而且有点啰嗦和繁杂，所以我们可以使用es6中的箭头函数


```
function Person() {
  this.age = 0;
  setInterval(()=> {
    this.age++;
    console.log(this.age); // 1 2 3...
  }, 1000);
}
var p = new Person();
```
在React中需要传递this指针也都是通过箭头函数来实现的，当然以前也可以使用bind函数来绑定this，但是这样也是一种吃力不讨好的做法。

4、遍历
----

**注意：在遍历过程中禁止删除、新增**

1.数组遍历

```
let a = [1,2,3,4,5];
//bad
for(let i = 0;i<a.length;i++){
    console.log(a[i]);
}
//good
a.forEach(e=>{
    console.log(e);
})
//OR
a.map(e=>{
    console.log(e);
}); 
```
参考文献：[for][3] 、 [forEach][4] 、 [map][5]

2.对象遍历

```
let a = {name:'Lucy',age:32,sex:'女'};
//bad
for(o in a){
    console.log(a[o]);
}
//good 
for(o in a){
    if(a.hasOwnProperty(o)){
        console.log(a[o]);
    }
}
```
参考文献：[for...in...][6] [for...of...][7]  **注意：二者有巨大区别，慎用**

3.值判断
-----

1.判空

```
if([]){
    console.log('1');
} // 1
if({}){
    console.log('1');
} // 1
if(''){
    console.log('1');
}
```
变量如果不为0，null，undefined，false，都会被处理为true。只要变量有非0的值或是某个对象，数组，非空字符串，都会认为true

2.true || false

```
console.log([] == false); // true
console.log({} == false); // true
console.log('' == false); // false
console.log(0 == false); //true
```
3.typeof类型判断

|类型|结果|
|:--|:--|
| Undefined | "undefined"|
| Null | "object" |
| Boolean| "boolean" |
| Number| "number" |
| String | "string" |
| Symbol |  "symbol" |
| 宿主对象 | Implementation-dependent | 
| 函数对象 | "function" |
| 任何其他对象 | "object" |

参考文献：[typeof][8]


  [1]: https://segmentfault.com/a/1190000015134073
  [2]: https://github.com/airbnb/javascript/tree/master/react
  [3]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for
  [4]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  [5]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  [6]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in
  [7]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of
  [8]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof
