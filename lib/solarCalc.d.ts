export default class SolarSystem {
    bodies: any;
    RADS: number;
    DEGS: number;
    HOURS: number;
    orbitals: object;
    constructor();
    floor: (x: number) => number;
    mod2pi: (angle: number) => number;
    getDaysJ2000(date?: Date): number;
    trueAnomaly(M: number, e: number): number;
    helioCoordinates(body: any): void;
    geoCoordinates(body: any): void;
    compute(date?: Date): void;
    geocentricCoords(name?: string): {
        name: string;
        ra: any;
        dec: any;
    }[] | {
        name: string;
        ra: any;
        dec: any;
    };
}
