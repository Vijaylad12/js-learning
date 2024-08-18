// let var1=25
// const var2=5
// var var3="my friend ganesha"
// var4="oh my god"
// console.table([var1,var2,var3,var4])
const student={
    name:"vijaykumar gajanan lad",
    age:19,
    rollNo:30,
    id:"2222300049"
}
// it is called as deconstriction of an object ,which is carried out by following code
let {name}=student
// and you can acces the element from the object with that element name ,not need of using (object).element_id
console.log(name);
//and you can also give this element a new name like..eg..let {name:any name you want to give here}=student
//2nd way
let {age:a}=student
console.log(a);
