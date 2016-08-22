import ua from './ua';

export default (key, values = ua) => (
  values.hasOwnProperty(key) ?
    values[key] :
    process.env.NODE_ENV !== 'production' ?
      'EMPTY_PHRASE' :
      ''
);