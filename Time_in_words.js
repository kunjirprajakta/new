
const arr = [5, 6, 8,5,4,2,1,89]
var arrlen=arr.length
Number(arrlen)
function sort(arr,arrlen){
if(arrlen==0){
    return "yes";
}else if(arr[arrlen-1]>arr[arrlen-2]){
        return 0;
    }
    else{
        return sort(arr,arrlen-1)
    }

}
console.log(sort())


// sortBySwap = (swap) => {
//     // console.log(swap)
//     let temp;
//     temp = arr[swap];
//     arr[swap] = arr[swap + 1]
//     arr[swap + 1] = temp
//     console.log(almostSort(arr));
//     if(almostSort(arr)=="yes"){
//         console.log(`swap ${swap} ${swap+1}`)
//     }else{
//     return 0;
//     }
// }

// reverseArray=(revarr,arrre)=>{
//     //arr.slice(revarr[0],revarr[1]+1).reverse()
//     console.log( arrre.slice(revarr[0],revarr[revarr.length]).reverse())
//     arr.splice(reveresearrayIndex[0],0,arrre)
//     console.log(arr)
// }
// let count = 0
// let reveresearrayIndex=[]
// function almostSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {

//         if (arr[i] < arr[i + 1]) {
//             if (i == arr.length - 2) {
//                 console.log("yes")
//                 return "yes"
//             }
//         } else {
//             count = count + 1
       

//             reveresearrayIndex.push(i)

//         }

//     }
//     if (reveresearrayIndex.length== 1) {
//         console.log(reveresearrayIndex[0])
//         // reverseArray()
//         sortBySwap(i)
//     }else if(reveresearrayIndex.length>1){
//             console.log(reveresearrayIndex)
//         reverseArray(reveresearrayIndex,arr)
        
//     }
// }
// almostSort(arr)

