const log = require("./index")






test('logs message of a given string', () => {
    const spy = jest.fn()
    log(spy("Hi"))
    expect(spy).toHaveBeenCalledWith("Hi")
})
