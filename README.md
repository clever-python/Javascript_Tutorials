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

<p align="center">
    <img src="/assets/file.png">
</p>
> This is how things work while deep copying or shallow copying.

## JAVASCRIPT OBJECT GARBAGE COLLECTION : 
The Objects which have no reference to any other objects or variables are meant to be collected for the garbage to save memory. while garbage collection there is not harm for the cpu performance because this algo is perform during the cpu idle time. The algorithm is **Mark and sweep** , It is highly optimised algorithm. The steps followed by this algorithm to collect garbage objects are follows:

1. Firstly, It marks all the reference of objects, it includes all the nested objects.
2. It marks all the objects with the reference, for all the nested levels.
3. And the umnarked objects are sweeped because there reference are null, we dont need them in our program.

<p align= 'center'>
  <img src = 'https://user-images.githubusercontent.com/100845465/215956250-c4ac7aa0-5351-4fa7-89a0-38a09895d4e4.png'
</p>

## Functions in Objects: 
> We also can add functions as the properties in objects. And these properties are called methods of that object. we now that these methods need to access other properties of that object some **this** keyword came into existence. **this** keyword help us to make our object generic. Here, Generic means that all objects that are make from that object out methods still access those their properties.
#### Example of a generic object:

                       let a = {name: 'sourabh',
                       class: 'bca',
                       fetchData() {
                       return this.name + this.class;
                        }
                       }
                       
                       //this is refering to the current object 
                       let b = a; //copying object with reference
                       a = null;  //clearing reference a 
                       alert(b.name) //it still work beacuse we are using this, this c
                       


> The above snippet is having generic Objects methods which can be used with other duplicate or changed object reference. **this** changes it reference to the current object.

> The value of **this** is evaluated in the run-time. Because the reference of a object may be null or refering to another object. We dont take care **this** will take care of it.

> calling an function with **this** embedded without use object, the value of **this** is *undefined*

> If we are using this in our function, then remember this is mainly done to make a call of that function with the object, beacuse this need to be decided at runtime.

> Even we can change **this** value in the runtime and use different context for **this**. Javascript provides more flexibility. Simply, we can say **this** can be used unbounded.

## Constructor Function : 
> Constructor functions are used for creating dynamic objects and may be implemented in the runtime of out program. Generally, the name of first letter of constructor function is **capital** to show that it is a constructor function. 

### How constructor function works internally:
> **this** inside any constructor function is refering to an empty object. simply, we can say the implicit return of constructor function is **this**, and here, **this** refers to the constructor itself (by default). 

                    function User(name) {
                    // this = {};  (implicitly)

                    // add properties to this
                     this.name = name;
                     this.isAdmin = false;

                    // return this;  (implicitly)
                    }
                    
> if we create any object with help of this constructor, then the this is refered to that object, we can pass properties value inside an object while calling a constructor and adding arguments as parameters.

## Optional chaining : 
> Assume if someone try to fetch a property of a object that does not exist, it may give errors as well as make our program collapsed. In order to check and implement those properties we are using optional chaining. 
he optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.

> In other words, value?.prop:

1. works as value.prop, if value exists,
2. otherwise (when value is undefined/null) it returns undefined.
