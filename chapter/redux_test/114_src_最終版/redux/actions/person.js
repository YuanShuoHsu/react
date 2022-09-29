import { ADD_PERSON } from "../constant";

// 創建增加一個人的 action 動作對象
export const addPerson = (personObj) => ({ type: ADD_PERSON, data: personObj })

