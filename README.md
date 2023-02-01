# JAVASCRIPT FUNDAMENTALS : 
### Objects: 
objects in javascript are only **key - value** pairs. Keys refer to 
the properties of that objects and values are those properties value.
These properties and values can be nested and we can make more complex objects
to work according to the situation.
# IMPORTANT POINTS TO REMEMBER OF OBJECTS:
> Objects can not be directly assigned to another variable to make duplicate of that
object. In order to make reference free copies of objects we can use following: 

1. ## Object.assign(target_object, source_object) : 
It copies whole properties of the 
source_object into the target_object without making any reference between the object.
But the problem with this method is that when we copy object it make reference with 
the nested properties of the source object. Simply, we can say it produces a shallow
copy.

2. ## Using spread operator: 
using the spread operator we can copy an object without reference but it will also create same reference with the nested objects properties. It also produces a shallow copy of an object.

3. ## Using structuredClone prototype property of Object:
we can use **Object.structuredClone(ObjName)** and it returns an an duplicate object that we are passing in ObjName. we can store it in another variable. But the main disadvantages of this method is that we can not copy function porperties of an object.

4. ## Using parse and stringify methods on objects :
using the above methods first we can make string of the object and then parse it another object, then store it into another variable now it creates a new copy of the object. we can say it produces a deep copy instead of shallow copy for the nested properties also.

