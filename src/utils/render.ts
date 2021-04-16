export const render = (innerHTML: string) =>
  Object.assign(document.createElement('div'), { innerHTML })
