//Reachability---> Reachable values are thoes that are accessible or usable somehow. Guaranteed to be stored in memory.
// Garbage collector deletes thoes that have become unreachable.

let user = {
    name: "ain",

}; // global references the object.. this will not be deleted

user = null; 
console.log(user);  // now this will be removed bcz of no references to object.....it becomes unreachable


// INTERNAL ALGORITHM----MARK AND SWEEP
//STEPS-->
// Takes roots and mark
// visits all references and mark
// all visited object remembered and thoes which are not marked is removed