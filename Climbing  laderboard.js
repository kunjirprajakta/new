const player=[ 5,89, 6,25, 50, 120 ]

var ranked=[
    100, 100, 50, 40,
     40,  20, 10
  ]
var newrank=[]
var setRank=1;
var order=[]
  for(let i=0;i<ranked.length;i++){
      if(ranked[i]==ranked[i+1])
      {
        newrank.push([ranked[i],setRank])
      }else{
      newrank.push([ranked[i],setRank])
       setRank=setRank+1;
     }
  }
  for(let count=0;count<player.length;count++){
      playerScore=player[count]
      for(let a=0;a<newrank.length;a++){
          if(newrank[a][0]<playerScore)
              {
                 newrank.splice(a,0,[playerScore,newrank[a][1]])
                 order.push(a)
                 for(let d=a+1;d<newrank.length;d++){
                 newrank[d][1]=newrank[d][1]+1
                 console.log(newrank)
              }
     break;          
             }else if(newrank[a][0]==playerScore){
                newrank.splice(a,0,[playerScore,newrank[a][1]])
                order.push(a)
               for(let d=a+1;d<newrank.length;d++){
                newrank[d][1]=newrank[d][1]
                console.log(newrank)
              }
    break;  
             }else if(newrank[a][0]>playerScore&&a==newrank.length-1){
                console.log(newrank[a][0],playerScore)
                newrank.splice(a+1,0,[playerScore,newrank[a][1]])
                order.push(a+1)

      for(let d=a+1;d<newrank.length;d++){
                newrank[d][1]=newrank[d][1]+1
              }
    break;
     }
  }
}
 
  console.log(newrank)
  console.log(order)


//   var newRank=[]
//   let rankone=0;
// for(let i=0;i<player.length;i++)
//   {
// rankone=player[i]
// console.log(rankone)
// let a=0
// for(let j=a;j<ranked.length;j++){
    
//     if(rankone>ranked[j]||rankone==ranked[j]){
//         ranked.splice(j,0,rankone)
//         a=j+1
//         newRank.push(j)
//      break;
//    }
//    else if(rankone<ranked[j]&&j==ranked.length-1){
//     ranked.splice(j+1,0,rankone)
//     newRank.push(j)
//        break;
//    }
    
// }

// }
// console.log(ranked)
// console.log(newRank)