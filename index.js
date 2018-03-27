function takeANumber(line, name){
 line.push(name);
 return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(katzDeli){
  if (katzDeli.length == 0){
    return "There is nobody waiting to be served!"
  }
  else{
  var name = katzDeli[0];
  katzDeli.shift();
  
  return `Currently serving ${name}`
  }
}

function currentLine(katzDeli){
  if (katzDeli.length == 0){
    return "The line is currently empty."
  }
  else{
    var currentLinenames = "The Line is currently: ";
    for (let i = 0; i < katzDeli.length; i++){
      currentLinenames = currentLinenames + `${i+1}. ${katzDeli[i]}`;
      if (i ==katzDeli.length){
        currentLinenames = currentLinenames + ", "; 
      }
    }
}
}