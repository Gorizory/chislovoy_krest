interface IValues {
    c1: number;
    c2: number;
    c4: number;
    c5: number;
    r1: number;
    r2: number;
    r4: number;
    r5: number;
    center: number;
}

export enum ErrorLevels {
    Any = 8,
    Divide = 2,
    Decrese1 = 4,
    Decrese2 = 7,
    Done = -1,
}

class Board {
    private readonly values: IValues;

    constructor(values: number[]) {
        this.values = {
            c1: values[1],
            c2: values[2],
            c4: values[3],
            c5: values[4],
            r1: values[5],
            r2: values[6],
            r4: values[7],
            r5: values[8],
            center: values[0],
        }
    }

    check(): ErrorLevels {
        const {
            c1,
            c2,
            c4,
            c5,
            r1,
            r2,
            r4,
            r5,
            center,
        } = this.values;
        const c12 = c1 / c2;
        const c3 = center;
        const c45 = c4 - c5;
        const r12 = r1 - r2;
        const r34 = center * r4;

        if (c12 % 1 || c12 !== c3) {
            return ErrorLevels.Divide;
        }

        if (c3 !== c45) {
            return ErrorLevels.Decrese1;
        }

        if (r12 !== r34) {
            return ErrorLevels.Decrese2;
        }

        if (r34 !== r5) {
            return ErrorLevels.Any;
        }

        return ErrorLevels.Done;
    }

    print(): void {
        const {
            c1,
            c2,
            c4,
            c5,
            r1,
            r2,
            r4,
            r5,
            center,
        } = this.values;

        const printStr = [];
        printStr.push(`    ${c1}`);
        printStr.push(`    ÷`);
        printStr.push(`    ${c2}`);
        printStr.push(`    =`);
        printStr.push(`${r1}-${r2}=${center}×${r4}=${r5}`);
        printStr.push(`    =`);
        printStr.push(`    ${c4}`);
        printStr.push(`    -`);
        printStr.push(`    ${c5}`);
        printStr.push('');
        printStr.push('');

        console.log(printStr.join('\n'));
    }
}

export default Board;