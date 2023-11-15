import Person from "./index"

it("shoud sum", () => {
  const person = new Person()

  expect(person.sayMyName()).toBe("Wesley")
})
