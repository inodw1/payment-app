import { STATUS } from "../constants/action-types";

export function changeActiveStatus(payload) {
  return { type: STATUS, payload };
}