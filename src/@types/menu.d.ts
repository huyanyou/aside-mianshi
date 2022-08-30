declare module "menu" {
  export interface menuSub {
    value: number;
    label: string;
  }
  export interface menuItem {
    value: number;
    label: string;
    childrens: menuSub[];
  }
  export function createData(): menuItem[];
}
