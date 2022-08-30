import { menuSub, menuItem } from "menu";
/**
 * 创建菜单栏数据
 * @returns
 */
export function createData(): menuItem[] {
  let menuData: menuItem[] = new Array(3);
  for (let i: number = 0; i < 3; i++) {
    if (i === 0) {
      menuData[i] = {
        value: i,
        label: "item",
        childrens: new Array<menuSub>(3),
      };
      for (let j: number = 0; j < 20; j++) {
        menuData[i]["childrens"][j] = {
          value: j,
          label: `subm${j}`,
        };
      }
      continue;
    }
    menuData[i] = {
      value: i,
      label: `item${i}`,
      childrens: [],
    };
  }
  return menuData;
}
