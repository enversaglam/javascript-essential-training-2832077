/**
 * Create a Backpack object, populate some HTML to display its properties.
 */
import backpack from "./backpack.js";
import calculator from "./math.js";

const markup = (backpack) => {
  return `
  <div>
    <h3>${backpack.name}</h3>
    <ul>
      <li>Volume: ${backpack.volume}</li>
      <li>Color: ${backpack.color}</li>
      <li>Number of pockets: ${backpack.pocketNum}</li>
      <li>Strap lengths: L: ${backpack.strapLength.left}, R: ${
    backpack.strapLength.right
  } </li>
      <li>Top lid: ${backpack.lidOpen ? "Open" : "Closed"}</li>
    </ul>
  </div>
`;
};

calculator(5, 3, "multiply");

const main = document.createElement("main");
main.innerHTML = markup(backpack);
document.body.appendChild(main);
