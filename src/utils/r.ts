type rAST<T extends HTMLElement> = Partial<
  Omit<T, "attributes" | "children">
> & {
  tag?: string;
  attributes?: Record<string, string>;
  children?: (rAST<T> | Node)[];
};

export const r = <T extends HTMLElement>(ast: rAST<T>): T => {
  const { tag, attributes, children, ...rest } = {
    ...{ tag: "div", attributes: {}, children: [] },
    ...ast,
  };
  const el: T = Object.assign(document.createElement(tag), rest) as any;

  for (const [key, val] of Object.entries(attributes)) {
    el.setAttribute(key, val);
  }

  for (const child of Array.from(children)) {
    el.appendChild(child instanceof Node ? child : r(child));
  }

  return el;
};
