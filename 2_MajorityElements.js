let a=[3,3,4,2,4,4,2,4,4]
v=[]
let x=new Set(a)
v.push(...x)
k=[]
m=[]
for (let i=0;i<=v.length;i++){
    let count=0
    for (let j=0;j<a.length;j++){
        if(v[i]==a[j]){
            count=count+1
        }
    }
m.push(count)    
}
kk=[]
for (let i of m){
    if(i>a.length/2){
        kk.push(i)
        
    }
}
if(kk.length==0){
    console.log("NO majority elements")
}else{
    for(let i=0;i<=v.length;i++){
        if(m[i]==kk){
            console.log(v[i])
        }
    }
}