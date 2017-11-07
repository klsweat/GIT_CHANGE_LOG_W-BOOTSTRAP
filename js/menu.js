function getWorkflow(thisID) {
  console.log("clicked");
  console.log(thisID);
  // The code below handles the case where we want to get blog posts for a specific author
  // Looks for a query param in the url for author_id
  var tracker = thisID;
  $.get("/api/"+ tracker, function(data) {
    var mySavedModel = document.getElementById("mySavedModel");
    mySavedModel.value = JSON.stringify(data);
    console.log(data);
    load();
  });

  $.get("/api/trackers/" + tracker, function(tdata){
    
   
  })
}