class Control {
    // private state: any;
}

interface SelectAbleControl extends Control {
    select(): void;
}

class Button extends Control implements SelectAbleControl {
    select() {}
}

class TextBox extends Control {
    select() {}
}

// class Image implements SelectAbleControl {
//     select() { }
// }

// class Location {

// }