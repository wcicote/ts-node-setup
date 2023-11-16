import Person from "@/Person"

it("shoud sum", () => {
  const person = new Person()

  expect(person.sayHello()).toBe("Hello world!")
})
