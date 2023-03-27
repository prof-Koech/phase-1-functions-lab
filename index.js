// Code your solution in this file!
// function distanceFromHqInBlocks(someValue) {
//     //returns the number of blocks given a value
//     const myDistance=  42;
//     return someValue-myDistance;
    
 

//   }
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    const myDistance=  42;
    if(someValue>myDistance){
        return someValue-myDistance;
    }
    else{
        return 50-myDistance;
    }
  }
  function distanceFromHqInFeet(someValue){
      distanceFromHqInBlocks(someValue);
      const myDistance=  42;
      if(someValue>myDistance){
          return (someValue-myDistance)*264;
      }
      else{
           return 8*264;
      }
  }
function distanceTravelledInFeet(start, destination){
    return  Math.abs((destination-start)*264);

}
function calculatesFarePrice(start, destination){
    const distanceTravelled=destination-start;
    const feetTravelled = Math.abs(distanceTravelled)*264;
    if(feetTravelled<400){
        return 0;
    }
    else if(feetTravelled<2000){
        return ((feetTravelled)-400 )* 0.02;
    }
    else if(feetTravelled<2500){
        return 25;
    }
  else if(feetTravelled>2500){
      return "cannot travel that far"
  }
}
