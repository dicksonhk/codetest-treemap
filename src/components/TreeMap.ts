import { r } from "../utils";
export type TreeMapNode = {
  name: string;
  weight: number;
  value: number;
};

export type TreeMapProps = {
  rows: TreeMapNode[];
  col: number;
};

export const TreeMap = ({ rows, col }: TreeMapProps) =>
  r({
    className: "tree-map",
    attributes: {
      style: "--col: 6",
    },
    children: rows.map(({ name, weight, value }) => ({
      className: `tree-map__node ${
        value < 0 ? "tree-map__node--negative" : "tree-map__node--positive"
      }`,
      attributes: {
        style: `--w: ${weight}`,
      },
      children: [
        {
          innerText: name + "",
          className: "tree-map__node__name",
        },
        {
          innerText: Math.round(value * 100 * 1e2) / 1e2 + "%",
          className: "tree-map__node__value",
        },
      ],
    })),
  });
