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







