const tempCharacter = {
  standard: 'K',
  metric: '℃',
  imperial: '℉',
};

export const tempToString = (temp, units = 'metric') => {
  return String(temp).concat('', tempCharacter[units]);
};

export const convertKtoC = (k) => {};

export const convertKtoF = (k) => {};
