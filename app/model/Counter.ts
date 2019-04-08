interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    const counter = ((start: number) => { console.log(start) }) as Counter;
    counter.interval = 23;
    counter.reset = () => { };
    return counter;
}
