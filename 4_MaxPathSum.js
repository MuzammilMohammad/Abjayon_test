function sum(a)
{
    let b = -1;
    for(let i = 0; i < M; i++)
        b = Math.max(b, a[0][i]);
     for(let i = 1; i < N; i++)
    {
        b = -1;
        for(let j = 0; j < M; j++)
        {
            if (j > 0 && j < M - 1)
                a[i][j] += Math.max(a[i - 1][j],
                             Math.max(a[i - 1][j - 1],
                                      a[i - 1][j + 1]));
            else if (j > 0)
                a[i][j] += Math.max(a[i - 1][j],
                                      a[i - 1][j - 1]);
            else if (j < M - 1)
                a[i][j] += Math.max(a[i - 1][j],
                                      a[i - 1][j + 1]);
            b = Math.max(a[i][j], b);
        }
    }
    return b;
}
let a = [[1,2,3],[9,8,7],[4,5,6]]
let N = 3, M = 3;
console.log(sum(a));