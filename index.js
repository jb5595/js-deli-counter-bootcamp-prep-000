function takeANumber(line, name){
 line.push(name);
 return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(){
  if (katzDeli.length = 0){
    return "There is nobody waiting to be served!"
  }
  else{
  var name = katzDeliLine[0];
  katzDeli.shift();
  
  return name
  }

  
}