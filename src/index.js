/**
 * Принимает объект, возвращает массив названий свойств. Нельзя пользоваться
 * встроенными статическими методами объекта, используйте цикл
 * @param {Object} object
 * @returns {string[]}
 */
export const keys = (object) => {
  let arrKeys = [];
  for (let key in object) {
    arrKeys.push(key);
  }
  return arrKeys;

};

/**
 * Принимает объект, возвращает массив значений объекта. Также без использования
 * встроенных методов, юзаем цикл
 * @param {Object} object
 * @returns {any[]}
 */
export const values = (object) => {
  let arrValues = [];
  for (let key in object) {
    arrValues.push(object[key]);
  }
  return arrValues;
};

/**
 * Принимаем объект, возвращаем энтри. Все также без методов, используем цикл
 * @param {Object} object
 * @returns {[string, any][]}
 */
export const entries = (object) => {
  let arrEntries = [];
  for (let key in object) {
    arrEntries.push([key, object[key]])
  }
  return arrEntries;
};

/**
 * Тут наоборот, мы должны сделать из энтри объект обратно) Можете погуглить
 * оригинальный метод)
 * @param {[string, any][]} entries
 * @returns {Object}
 */
export const fromEntries = (entries) => {
  let object = {};
  for (let item of entries) {
    object[item[0]] = item[1];
  }
  return object;
};
