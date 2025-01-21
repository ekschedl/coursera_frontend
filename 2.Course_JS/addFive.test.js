const addFive = require("./addFive"); // Импортируем функцию

test("returns the number plus 5", () => {
  expect(addFive(10)).toBe(15); // Проверяем, что addFive(10) возвращает 15
});
