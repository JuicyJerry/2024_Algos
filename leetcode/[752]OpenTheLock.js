/**
 * TRY1: Follow
 * DESC: I Can't find how to aproach which solve this problem.
 * Follow shared code to know a way to solving problem.
 */

function openLock(deadends: string[], target: string): number {
    const dead = new Set(deadends);
    const queue: [string, number][] = [["0000", 0]];
    const seen = new Set(["0000"]);

    for (let [curr, turns] of queue) {
        if (curr === target) return turns;
        if (dead.has(curr)) continue;

        for (let next of getNextSteps(curr)) {
            if (seen.has(next)) continue;
            queue.push([next, turns + 1]);
            seen.add(next);
        }
    }

    return -1;
}

function getNextSteps(s: string): string[] {
    let ans: string[] = [];
    for (let i = 0; i < s.length; i++) {
        ans.push(
            s.slice(0, i) + ((+s[i] + 1) % 10).toString() + s.slice(i + 1)
        );
        ans.push(
            s.slice(0, i) + ((+s[i] + 9) % 10).toString() + s.slice(i + 1)
        );
    }

    return ans;
}
