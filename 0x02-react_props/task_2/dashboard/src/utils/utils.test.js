import { getFullYear, getLatestNotification, getFooterCopy } from "./utils";

test("returns the current year", () => {
    expect(getFullYear()).toBe(2023);
});

test("correct footer copy", () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("returns right notification", () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});