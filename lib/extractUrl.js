export const extractUrl = (texto) => {
  return texto.match(/\bhttps?:\/\/\S+/gi);
};
