function mdm(a, b, c, n)
    {
        a.sort(function(a, b){return a - b});
        b.sort(function(a, b){return a - b});
        c.sort(function(a, b){return a - b});
        let res_min = 0, res_max = 0, res_mid = 0;
        let i = 0, j = 0, k = 0;
        let diff = 2147483647;
        while (i < n && j < n && k < n)
        {
            let sum = a[i] + b[j] + c[k];
            let max = Math.max(Math.max(a[i], b[j]), c[k])
            let min = Math.min(Math.min(a[i], b[j]), c[k]);
            if (min == a[i])
                i++;
            else if (min == b[j])
                j++;
            else
                k++;
            if (diff > (max - min))
            {
                diff = max - min;
                res_max = max;
                res_mid = sum - (max + min);
                res_min = min;
            }
        }
        return(res_max + ", " + res_mid + ", " + res_min);
    }
     let a = [5, 2, 8];
    let b = [10, 7, 12];
    let c = [9, 14, 6];
    let n = a.length;
    console.log(mdm(a, b, c, n));