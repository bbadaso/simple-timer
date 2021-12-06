let count = 1000;
    let alarm = process.argv;
     const timer = () => {
      for (i = 2; i < alarm.length; i++) {
    if (alarm[i] >= 0 && alarm[i] !== NaN) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, count * alarm[i])
    }
  }
};   
timer(alarm); 