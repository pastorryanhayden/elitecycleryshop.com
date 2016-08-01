module.exports = function(value) {
    if (utils.isUndefined(value)) return '';
  if (typeof value === 'string' && /[[]/.test(value)) {
    value = utils.tryParse(value) || [];
  }
  if (utils.isObject(value)) {
    value = Object.keys(value);
  }
return value.length;
}