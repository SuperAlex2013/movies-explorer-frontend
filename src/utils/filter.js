import { SHORT_DURATION } from './constants';

export const filter = (items, filterProp, searchValue, isChecked) => {
  const foundItems = searchValue
    ? items.filter((item) =>
        RegExp(searchValue, 'i').test(
          filterProp.reduce((acc, val) => {
            return acc + item[val];
          }, '')
        )
      )
    : items;

  return isChecked
    ? foundItems.filter((i) => i.duration <= SHORT_DURATION)
    : foundItems;
};
