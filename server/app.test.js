import app from "./app";
import { describe, expect, test } from "@jest/globals";

describe("App", () => {
    test('should be express function', () => {
      expect(typeof app).toEqual('function');
    });

    test('environment should only be test', () => {
      const nodeEnv = process.env.NODE_ENV;
      expect(nodeEnv).not.toBe("development");
      expect(nodeEnv).not.toBe("production");
      expect(nodeEnv).toBe("test");
    });
})