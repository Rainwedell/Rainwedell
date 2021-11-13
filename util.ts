export class Util {
  /**
   * 15 分
   * 判断一个变量是否是数字类型
   * e.g. isNumber(4) === true, isNumber({ value: 5}) === false, isNumber('0') === false
   * @param value 
   */
  public static isNumber(value: unknown): boolean {
    if(typeof(value)!="number") return false;
    return true;
  }

  /**
   * 15 分
   * 千分位分隔符，用英文逗号隔开。
   * 需要考虑负数、小数，小数部分不需要分隔
   * e.g. formatNumber(-1000000.3232) === '-1,000,000.3232'
   * @param num 
   */
  public static formatNumber(num: number): string {
    // TODO 请在这里补充
    let str:string = String(num);
    let subStr:string;
    let tempStr:string="";
    let end:number = 0;
    //是小数
    if (Math.trunc(num)!=num) {
      //找到小数位置
      end = str.indexOf('.');
    }
    else end = str.length;
    // 判断负数
    if (str[0]=='-') {
      subStr = str.slice(1,end);
    }
    else subStr = str.slice(0,end);
    let Len:number = subStr.length;
    //加分隔符
    for(let cnt:number = 0,pos = 0;cnt <Math.trunc(Len/3);cnt++){
      tempStr += ','+ subStr.substr(-3+pos,3);
      pos-=3;
    }
    //拼接最前端
    subStr = subStr.substr(0,subStr.substr.length % 3)+tempStr;
    //拼接负号和小数
    if (str[0]=='-') {
      str='-'+subStr+str.substr(end,str.length-end);
    }
    else  str=subStr+str.substr(end,str.length-end);
    return str;
  }

  /**
   * 15 分
   * 模板引擎
   * {{ xxx }} 是用于替换的内容
   * e.g. fillText('我是{{ name }}，今年{{ age }}岁', { name: '小明', age: 18 }) === '我是小明，今年18岁'
   * @param template 模板
   * @param data 填充模板的数据
   */
  public static fillText(template: string, data: object): string {
    // TODO 请在这里补充
    // 第二时间学习到的方法 原型链
    return template.replace(/\{\{(.*?)\}\}/g, (match, key) => (data as any)[key.trim()]);
    // 自己的方法
    // let tempStr = template;
    // for (let key in data) {
    //   let re = new RegExp("{{ " + key + " }}", "g");
    //   tempStr = tempStr.replace(re, (data as any)[key]);
    // }
    // return tempStr;
  }
  /**
   * 15 分
   * 判断是否是回文字符串
   * 只考虑字母和数字字符是否符合规则，忽略大小写
   * e.g. isPlalindromeString('A man, a plan, a canal: Panama') === true, isPlalindromeString('abbc') === false
   * @param str 
   */
  public static isPlalindromeString(str: string): /*string8*/boolean {
    // TODO 请在这里补充
    // 统一大小写
    let tempstr = str.toLowerCase();
    // 去掉无关字符
    tempstr = tempstr.replace(/[^a-zA-Z0-9]/g,'');
    // 判断回文
    let strReverse = tempstr.split('').reverse().join('');
    return  tempstr == strReverse ? true : false;
  }

  /**
   * 15 分
   * 向后移动零
   * 给定一个数组 numbers，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
   * e.g. moveZero([0, 2, 0, 14, 8, 0]) === [2, 14, 8, 0, 0, 0]
   * @param numbers 
   * @returns 
   */
  public static moveZero(numbers: number[]): number[] {
    let arr:number[]=[];
    let cnt:number = 0;
    // 提取非零元素
    for(let key of numbers){
      if(key!=0)  arr[cnt++] = key;
    }
    arr.length = numbers.length;
    // 填充 0
    for(;cnt<arr.length;cnt++){
      arr[cnt] = 0;
    }
    return arr;
  }

  /**
   * 25 分
   * 大数相加
   * 只考虑整数，需要考虑负数
   * e.g. addNumber('1000000000000000', '-1000000000000000') === '0
   * @param numstr1 
   * @param numstr2 
   */
  public static addNumber(numstr1: string, numstr2: string): string {
    // TODO 请在这里补充
    let len1:number = numstr1.length;
    let len2:number = numstr2.length;
    let tempStr1:string = numstr1;
    let tempStr2:string = numstr2;
    // 抽取数值位
    if(numstr1[0] === '-'){
      len1--;
      tempStr1 = numstr1.slice(1,numstr1.length);
    }
    if(numstr2[0] === '-'){
      len2--;                                   
      tempStr2 = numstr2.slice(1,numstr2.length);
    }
    // 对齐字符串
    let maxLen:number = len1>len2? len1:len2;
    tempStr1 =tempStr1.padStart(maxLen,'0');
    tempStr2 =tempStr2.padStart(maxLen,'0');
    
    let sum:string = '';
    let t:number = 0;//本位
    let f:number = 0;//进位 借位
    // 符号位相同 大数相加
    if((numstr1[0]!='-'&&numstr2[0]!='-')||(numstr1[0]==='-'&&numstr2[0]==='-')){
      for(let i=maxLen-1 ; i>=0 ; i--){
        t = parseInt(tempStr1[i]) + parseInt(tempStr2[i]) + f;
        f = Math.floor(t/10);
        sum = t%10 + sum;
     }
     if(f == 1){
        sum = "1" + sum;
     }
     if(numstr1[0]==='-'&&numstr2[0]==='-'){
       sum = '-'+ sum;
     }
    }
    // 符号位不同 保证被减数值更大
    else{
      // 先判断两数相等
      if(tempStr2===tempStr1) return '0';
      let isMinus = 0;//判断负数
      if(tempStr1.length<tempStr2.length){
        if(numstr1[0]=='-') isMinus = 0;
        else  isMinus = 1;
        let temp = tempStr2;
        tempStr2 = tempStr1;
        tempStr1 = temp;
        
      }
      else if(tempStr1.length == tempStr2.length){
        for(let i = 0;i<maxLen;i++){
          if(parseInt(tempStr1)==parseInt(tempStr2)){
            continue;
          }
          if(parseInt(tempStr1)>parseInt(tempStr2)){
            if(numstr1[0]=='-') isMinus = 1;
            // else isMinus = 0;
            break;
          }
          if(parseInt(tempStr1)<parseInt(tempStr2)){
            if(numstr1[0]=='-') isMinus = 0;
            else  isMinus = 1;
            let temp = tempStr2;
            tempStr2 = tempStr1;
            tempStr1 = temp;
          }
        }
      }
      
      f = 0;//借位 
      // 大数相减
      for(let i=maxLen-1 ; i>=0 ; i--){
        t = parseInt(tempStr1[i]) - parseInt(tempStr2[i]) - f;
        
        if(t<0){
          sum = (10+t)+sum;
          f = 1;
        }
        else{
          sum = t + sum;
          f = 0;
        }
        // return sum;
      }
      sum = (isMinus ? '-' : '') + sum.replace(/^0+/, '') 
    }   
    return sum;

  }
}