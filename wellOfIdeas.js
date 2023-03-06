function well(x){
  let goodIdeas = 0;
  x.forEach(idea => {
    if (idea === "good") {
      goodIdeas++;
    }
    })
    if (goodIdeas === 0) {
      return "Fail!";
    } else if (goodIdeas === 1 || goodIdeas === 2) {
      return "Publish!";
    } else {
      return "I smell a series!";
    }
}
