export const shuffleArray = arr => {
    const array = [...arr];

    for (let i = arr.length - 1; i > 0; i -= 1) {
        const rundomNumber = Math.random() * (i + 1);
        console.log(i,rundomNumber);
    }
};