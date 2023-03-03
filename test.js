function bigObjMaker() {
    const bigObj = {};
    return (key, val) => {
        bigObj[key] = val;
        console.log(bigObj);
    };
}
let bigMemoryUser = bigObjMaker();

Array(10000)
    .fill(1)
    .map((x, i) => {
        bigMemoryUser(i, i);
    });
