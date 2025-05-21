const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];

    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
  });

  it("Books names should remain in the same order if equal", () => {
    const input = ["Властелин Колец", "Властелин Колец", "Властелин Колец"];

    const expected = ["Властелин Колец", "Властелин Колец", "Властелин Колец"];

    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
  });

  it("Without params throws exception", () => {
    expect(() => sorting.sortByName()).toThrow(TypeError);
  });
});
