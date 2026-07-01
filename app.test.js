const { calcul } = require("./app");

test("calcul(1, 2) doit retourner 3", () => {
  expect(calcul(1, 2)).toBe(3);
});
