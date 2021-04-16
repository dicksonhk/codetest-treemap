import "./app.scss";
import { TreeMap } from "./components";

document.getElementById("app").appendChild(
  TreeMap({
    rows: [
      {
        name: "6",
        weight: 6,
        value: 0,
      },
      {
        name: "3",
        weight: 3,
        value: 0,
      },
      {
        name: "3",
        weight: 3,
        value: 0,
      },
      {
        name: "3",
        weight: 3,
        value: 0,
      },
      {
        name: "2",
        weight: 2,
        value: -0.01,
      },
    ],
    col: 6,
  })
);
