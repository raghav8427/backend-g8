// create a database chitkara and 3 document in it user ,student and faculty with at least 5 data in it 
//user and student should have name ,age,subject and marks and faculty should have name ,age,subject and rating
const user=db.student.insertMany([{
    "name":"Piyush",
    "age":20,
    "subject":"fee",
    "marks:" :99,
},{
    "name":"Aditi",
    "age":19,
    "subject":"bee",
    "marks:" :99,
},{
    "name":"Rahul",
    "age":21,
    "subject":"bee",
    "marks:" :76,
},{
    "name":"Pratham",
    "age":20,
    "subject":"bee",
    "marks:" :94,
},{
    "name":"Rohan",
    "age":20,
    "subject":"bee",
    "marks:" :99,
}])

//task 
// find one with  key
// db.collection.insertOne({date:ISODate()})
// Update

//  TASK

// Update the student of all students in the

// students collection to

//  Datascience

// And Add a new information with all the

//  documents inside the students

// - address as "Chitkara University"


// those student have marks more than 90 add grade a++ to it
// db.collection.updateMany(
//     { "marks": { $gt: 95 } }, // Query to match documents where marks are greater than 95
//     { $set: { "grade": "A++" } } // Update operation to set the grade to "A++"
//   );

//hiii
