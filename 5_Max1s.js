let a=[[0,1,1,1],[0,0,1,1],[1,1,1,1]]
c=0
v=[]
k=0
for (let i=0;i<=a.length-1;i++){
    for(let j of a[i]){
        if(j=="1"){
            c=c+1
        }
    }
    v.push(c)
    c=0
}
kk=(Math.max(...v))
for (let i=0;i<=v.length;i++){
    if(v[i]==kk){
        console.log(i)
    }
}