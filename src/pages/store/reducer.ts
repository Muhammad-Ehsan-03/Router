import { decrement, double, increment } from "./action";

export const reducer = (counter: number = 3, action: any) => {
  if (action.type == increment) {
    return (counter = counter + 1);
  }
  if (action.type == decrement) {
    return (counter = counter - 1);
  }
  if (action.type == double) {
    return (counter = counter*2);
  }
  return counter;
};
