//bugged code
// function correctTail(bod, tail ;
  
//   sub = body.substr(bodylength-(tail.length)
  
//   if sub = tail) ;
//     return true
//   }
//   else 
//     return false

//debugged code
function correctTail(body,tail){
  let sub = body.substr(body.length-(tail.length))
  if (sub === tail){
    return true
  }else{
    return false
  }
}
