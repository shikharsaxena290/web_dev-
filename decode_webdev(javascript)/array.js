// let arr_num=[1,2,3,4,5]
// console.log(arr_num)

// console.log(arr_num[0]) 

// console.log(arr_num.length)
// ------------------------------------------------
// arr = Array(1,2,3,4,5)
// console.log(arr)
// ------------------------------------------------

// empty_arr=Array(5)
// console.log(empty_arr)

// // ----------------------------------------------

// deleting item
// arr=[1,2,3,4,5,6]
// delete arr[2]
// console.log(arr) //creates ambiguity , not prefered

//Q function that take array as an input and return sum of all the element of array

// function arr_sum(arr){
//     sum=0
//     for(i=0;i<arr.length;i++){
//         sum=sum+arr[i]
//     }
//     console.log(sum)
// }
// arr=[1,2,3,4,5]
// arr_sum(arr)

// arr1=[3,4,5,6,7,90]
// arr_sum(arr1)


// iteration using for each loop

// arr=[1,2,3,4,5]

// for(num of arr){
//     console.log(num)
// }

//----------------------------------------------------
//array methods

//1 pop()
// arr = [1,2,3,4,5,6,7]
// console.log(arr)

// console.log(arr.pop())
// console.log(arr)

//2 push()
// arr = [1,2,3,4,5,6,7]
// arr.push(11)
// console.log(arr)

// fruits = ['mango','apple','banana','papaya']

// fruits.pop()
// fruits.push('watermelon')
// console.log(fruits)

//3 shift()
// arr = [5,6,7,8,9] 
// arr.shift()
// console.log(arr)

//4 unshift()
// arr = [5,6,7,8,9] 
// arr.unshift(45)
// console.log(arr)

//5 concatenation 
// arr1 = [2,3,4,5,6]
// arr2 = [7,8,9,1]

// arr = arr1.concat(arr2)
// console.log(arr)


    //2nd way
// arr_new = arr1 + arr2
// console.log(typeof arr_new)
// console.log(arr_new)

//6th join()
// arr1 = [2,3,4,5,6]
// let result = arr1.join()
// console.log(typeof result)
// console.log(result)

//8 slicing
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// arr1 = arr.slice(3,7)
// console.log(arr)
// console.log(arr1)

//9 splice()  doubt
// let arr = [1,2,3,4,5]
// let arr1 = arr.splice(2,2)
// console.log(arr1)
// let arr2 = arr.splice(2,1,12)
// console.log(arr2)

//10 reverse
// arr=[1,2,3,4,5]
// arr.reverse()
// console.log(arr)

//11 sort
// arr = [ 5, 4, 3, 2, 1,7,8,9 ]
// arr.sort()

// console.log(arr)

//sort in descending order
// arr = [ 5, 4, 3, 2, 1,7,8,9 ] 
// arr.sort((a,b)=>b-a) 
// console.log(arr)

//12 tostring 
// arr = [ 5, 4, 3, 2, 1,7,8,9 ] 
// str = arr.toString()
// console.log(str)
// console.log(typeof str)/

//13 flatering of array 
// arr=[[1,2],3,4,5,[6,7,8,9]]
// arr1=arr.flat()
// console.log(arr1)