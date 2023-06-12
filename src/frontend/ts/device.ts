class Device{
  public id?: number;
  public description: string;
  public name: string;
  public state?: boolean;
  public type: number;
}

enum DeviceType {
  lightbulb_outline = 0,
  window_closed = 1,
  toys_fan = 2,
  tv = 3,
  audiotrack = 4,
  ac_unit = 5,
  outlet = 7,
}
