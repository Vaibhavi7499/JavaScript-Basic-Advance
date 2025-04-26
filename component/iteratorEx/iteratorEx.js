/* Iterator is an object that allows sequential access to the elements within
    the collection one at a time. */

    const fruits = ["apple" , "banana" , "mango" , "cherry"];

    const fruitsIterator = fruits[Symbol.iterator]();

    console.log(fruitsIterator.next()) //{value : "apple" , done : false}
    console.log(fruitsIterator.next()) //{value : "banana" , done : false}
    console.log(fruitsIterator.next()) //{value : "mango" , done : false}
    console.log(fruitsIterator.next()) //{value : "cherry" , done : done}