import { STATUS, CARD_DATA } from "../constants/action-types";

export function changeActiveStatus(payload) {
  return { type: STATUS, payload };
}

export function addCardData(payload) {
  return { type: CARD_DATA, payload };
}