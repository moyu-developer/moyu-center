/** @name 菜单操作的Tab配置声明 */
export const MENU_TAB_OPTIONS = [
  {
    tab: "我拥有的",
    key: 0
  },
  {
    tab: "我创建的",
    key: 1
  },
  {
    tab: "我加入的",
    key: 2
  },
];

/** @name 修改动作 */
export enum CREATE_ACTION {
  ADD,
  CHANGE,
}

export enum CARD_ACTION {
  DELETE,
  CHANGE,
  SETTING,
  QUERY,
}

export const CREATE_MODAL_TITLE: Record<CREATE_ACTION, string> = {
  0: "新增项目",
  1: "修改项目",
};
