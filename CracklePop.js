function CracklePop(){
  for (i=1; i<=100; i++) {
    if(i % 5 == 0 && i % 3 == 0){
      console.log('CracklePop');
    }
    else if (i % 5 == 0){
      console.log("Pop");
    }
    else if (i % 3 == 0){
      console.log("Crackle");
    } else {
      console.log(i);
    }
  };
};

CracklePop();
