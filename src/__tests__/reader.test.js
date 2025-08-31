import read from "../js/reader";
jest.mock("../js/reader.js");

beforeEach(() => {
    jest.resetAllMocks();
});

test("testing resolve", async () => {
    expect.assertions(1);
    read.mockResolvedValue("ArrayBuffer");
    const response = await read();
    expect(response).toBe("ArrayBuffer");
});

test("testing reject", async () => {
    expect.assertions(1);
    read.mockRejectedValue("readError");

    try {
        await read();
    } catch (error) {
        expect(error).toBe("readError");
    }
});


