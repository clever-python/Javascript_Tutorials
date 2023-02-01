# JAVASCRIPT FUNDAMENTALS : 
### Objects: 
objects in javascript are only **key - value** pairs. Keys refer to 
the properties of that objects and values are those properties value.
These properties and values can be nested and we can make more complex objects
to work according to the situation.
#### IMPORTANT POINTS TO REMEMBER OF OBJECTS:
> Objects can not be directly assigned to another variable to make duplicate of that
object. In order to make reference free copies of objects we can use following: 

> 1. Object.assign(target_object, source_object) : It copies whole properties of the 
source_object into the target_object without making any reference between the object.
But the problem with this method is that when we copy object it make reference with 
the nested properties of the source object. Simply, we can say it produces a shallow
copy.
