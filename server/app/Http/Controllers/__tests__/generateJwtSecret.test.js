import Controller from "../Controller.js";
import {describe, expect, test} from '@jest/globals';

describe("generateJwtSecret", () => {
  test('should be string', () => {
    expect(typeof Controller.generateJwtSecret()).toEqual("string");
  });

  test('should not be less than 10 chars', () => {
    expect()
    expect(Controller.generateJwtSecret().length).toBeGreaterThan(10);
  });
})