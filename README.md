## js-toolkit  

*这是一个js日常使用工具集合*



#### 工具一：本地存储工具（localRespository.js）

参数

```javascript
/**
 * 本地存储
 * @param {*存储位置：local/session} target 
 * @param {*操作方式：get/set/remove} mode 
 * @param {*存储key名：自定义} key 
 * @param {*存储的值} value 
 */
```



使用示例：

```javascript
//导入
import { localRespository } from './localRespository.js'

//1、将'小明'存储到localStorage中，key为'userName';
localRespository('local','set','userName','小明');

//2、从localStorage中获取key为'userName'的值;
localRespository('local','get','userName');

//3、从localStorage中抹去key为'userName'的数据;
localRespository('local','remove','userName');
```







#### 工具二：时间戳转换为自定义时间格式工具（formatDate.js）

参数

``` 
/**
 * 时间戳转换为自定义时间格式
 * @param {*需要转换的时间戳} date 
 * @param {*需要转换的目标时间格式：年-yyyy,月-MM，日-dd,时-hh,分-mm,秒-ss} fmt 
 * 
 */
```

使用示例

```
formatDate(当前时间戳，‘yyyy-MM-dd hh:mm:ss’);
```










#### 工具三：16进制颜色码转rgb颜色值（transformColor.js）

参数

``` 
/**
 * @param {*需要转换的16进制颜色码，如：#000000；} color 
 * 
 */
```

使用示例

```
colorToRgb("#FFFFFF");  //rgb(255, 255, 255)
```



> 可在原生JavaScript，Vue，React等框架作为过滤器或方法使用，请使用者自行按照实际需求进行调用

