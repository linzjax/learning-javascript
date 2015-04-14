function CracklePop(){
  for (x=1; x<=100; x++) {
    if(x % 5 == 0 && x % 3 == 0){
      console.log('CracklePop');
    }
    else if (x % 5 == 0){
      console.log("Pop");
    }
    else if (x % 3 == 0){
      console.log("Crackle");
    } else {
      console.log(x);
    }
  };
};

CracklePop();
