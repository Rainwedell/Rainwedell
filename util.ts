export class Util {
  /**
   * 15 分
   * 判断一个变量是否是数字类型
   * e.g. isNumber(4) === true, isNumber({ value: 5}) === false, isNumber('0') === false
   * @param value 
   */
  public static isNumber(value: unknown): boolean {
    // TODO 请在这里补充
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
    return '';
  }

  /**
   * 15 分
   * 模板引擎
   * {{ xxx }} 是用于替换的内容
   * e.g. fillText('我是{{ name }}，今年{{ age }}岁', { name: '小明', gender: 18 }) === '我是小明，今年18岁'
   * @param template 模板
   * @param data 填充模板的数据
   */
  public static fillText(template: string, data: object): string {
    // TODO 请在这里补充
    return '';
  }

  /**
   * 15 分
   * 判断是否是回文字符串
   * 只考虑字母和数字字符是否符合规则，忽略大小写
   * e.g. isPlalindromeString('A man, a plan, a canal: Panama') === true, isPlalindromeString('abbc') === false
   * @param str 
   */
  public static isPlalindromeString(str: string): boolean {
    // TODO 请在这里补充
    return false;
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
    // TODO 请在这里补充
    return [];
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
    return '0';
  }
}