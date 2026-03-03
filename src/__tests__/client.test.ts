import { describe, it, expect } from "vitest";
import { FlowForgeClient } from "../client";

describe("FlowForgeClient", () => {
  it("creates instance", () => {
    const client = new FlowForgeClient({ apiKey: "test" });
    expect(client).toBeDefined();
  });
});
