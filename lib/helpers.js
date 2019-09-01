export const print = (message) => {
  console.log(message.trim());
}

export const error = (message) => {
  console.error(message.trim());
}

export const formatList = (intro, items) => `${intro}: \n${items.map(item => `* ${item}`).join("\n")}`;
