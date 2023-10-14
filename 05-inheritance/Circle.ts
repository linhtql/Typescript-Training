import { Shape } from "./Shape";

export class Circle extends Shape {
  private _radius: number;

  constructor(theX: number, theY: number, radius: number) {
    super(theX, theY);
    this._radius = radius;
  }

  public get radius(): number {
    return this._radius;
  }

  public set radius(value: number) {
    this._radius = value;
  }

  getInfo(): string {
    return super.getInfo() + `, radius = ${this._radius}`;
  }
}
