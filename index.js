function takeANumber(line, name){
 line.push(name);
 return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(){
  if (katzDeliLine.length = 0){
    return "There is nobody waiting to be served!"
  }
  else{
  var name = katzDeliLine[0];
  katzDeliLine.shift();
  
  return name
  }

  
}