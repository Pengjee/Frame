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
|:--|:--|
|局部变量名 | Camel命名法 | 名词 | fristName
|全局变量名 | Camel命名法 | 名词 | 前缀:g | gFristName
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
|:--|:--|
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
  [1]: https://segmentfault.com/a/1190000015134073
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
2、使用 defaultProps 
------
defaultProps的意思是这个组件没有某个props 的时候，默认一个初始值

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

对所有定义的或者穿入的变量，都进行默认设置或者判定是否为undefined，防止数据未定义时程序报错。

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
