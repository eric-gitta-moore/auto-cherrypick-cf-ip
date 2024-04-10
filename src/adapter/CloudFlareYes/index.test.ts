import { describe, expect, test } from "@jest/globals";
import CloudFlareYes from "./index";

describe("CloudFlareYes", () => {
  test("correct request", async () => {
    expect(await CloudFlareYes()).not.toBeNull();
  });
});
