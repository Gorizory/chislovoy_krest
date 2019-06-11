import Board from './Board';

let result: Board;

function backtrack(values: number[], possibleValues: number[]): number {
    if (possibleValues.length === 0) {
        result = new Board(values);
        result.print();
        return result.check() as number;
    }

    let error;

    for (let i = 0; i < possibleValues.length; i++) {
        error = backtrack(values.concat([possibleValues[i]]), possibleValues.filter((pValue, j) => i !== j));
        if (error < values.length) {
            return error;
        }
    }

    if (!result.check()) {
        return error - 1;
    }
}

backtrack([], [1, 2, 3, 4, 5, 6, 7, 8, 9]);