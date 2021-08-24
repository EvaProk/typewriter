let sentence = "cddcddddddcddddcdcdcdcdcdcdcdcs";

sentence = `${sentence} \n`
  let i = 0; 
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    },i);
    i += 100;
  }
    
