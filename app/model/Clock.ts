// interface ClockConstructor {
//     new (hour: number, minute: number);
// }


// interface ClockInterface {
//     tick();
// }

// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//     return new ctor(hour, minute);
// }

// class DigitalClock implements ClockInterface {
//     constructor(h: number, m: number) {}
//     tick() {
//         console.log('beep beep');
//     }
// }

// class AnalogClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick () {
//         console.log('tick tock');
//     }
// }

// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7 , 32);

// interface Shape {
//     color: string;
// }

// interface Square extends Shape {
//     sideLength: number;
// }

// interface PenStroke extends Square {
//     penWidth: number;
// }

// let penStroke = {} as PenStroke;
// penStroke.color = '';
