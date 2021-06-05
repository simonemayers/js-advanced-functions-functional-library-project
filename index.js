const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if(typeof collection === "object") {
        const newCollection = Object.values(collection)
        for(const element of newCollection) {
          callback(element)
        }
      } else {
        callback(collection)
      }
      return collection 
    },

    map: function(collection, callback) {
      const newCollection = []
      if(typeof collection === "object") {
        const objCollection = Object.values(collection)
        for(const element of objCollection){
          // debugger
          newCollection.push(callback(element))
        }
      } else{
        newCollection.push(callback(collection))
      }
      // debugger
      return newCollection
    },

    reduce: function(collection, callback, acc) {
      let total = 0
      if(acc){
       for(const element of collection){
         total += callback(acc, element)
         acc = 0
        }
      } else{
       for(const element of collection){
         total += callback(0, element)
       }
     }
     return total
    },

    find: function(collection, predicate){
      for(let i = 0; i < collection.length; i++){
        if(predicate(collection[i])){
          return collection[i]
        } 
      }
    }, 

    functions: function() {

    },


  }
})()

fi.libraryMethod()
