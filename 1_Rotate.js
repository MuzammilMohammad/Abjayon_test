let a = [1, 2, 3, 4, 5]
d = 2
n = 5
v = []

function rotate(a) {
    let last = a.pop();
    a.unshift(last);
    v.push(a)
}
for (let i = 0; i <= d; i++) {
    rotate(a)
}
console.log(v[v.length - 1])