import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private fb: FormBuilder) {
    this.addnewRow();
  }
  searchText = '';

  items: any = [
    {
      title: 'Test',
      items_containers: [
        {
          title: 'edf',
          items_containers: [
            {
              title: 'pqr',
              items_containers: [],
            },
          ],
        },
      ],
    },
    {
      title: 'Test1',
      items_containers: [
        {
          title: 'edf',
          items_containers: [
            {
              title: 'pqr',
              items_containers: [],
            },
          ],
        },
      ],
    },
    {
      title: 'Interview',
      items_containers: [
        {
          title: 'edf',
          items_containers: [
            {
              title: 'pqrr',
              items_containers: [],
            },
          ],
        },
      ],
    },
  ];

  //testform: FormGroup;
  formData: any = [];
  testform = this.fb.group({
    dynamicForm: this.fb.array([]),
  });

  SetDefaultValues() {}

  get dynamicForm() {
    return this.testform.controls['dynamicForm'] as FormArray;
  }
  addnewRow() {
    const lessonForm = this.fb.group({
      name: ['text', Validators.required],
      addres: ['beginner', Validators.required],
    });

    this.dynamicForm.push(lessonForm);
  }



  interviewquestions() {
    /*
    for (var i=0;i<3;i++){
      setTimeout(() => {
      console.log("i",i);
      },100);
      };
      
      //find the sum of 17
      var arrar=[2,4,5,7,13]
      arrar.map((value1,value2)=>{
      const sum=value1+value2
      if(sum==17){
      console.log(value1 ,value2);
      }
      });
      
      for(let i=0;i<arrar.length;i++){
      for(j=i+1;j<arrar.length;j++){
          var sum=arrar[i]+arrar[j]
          if(sum==17)
          {
          console.log('sum ',sum);
          }
      }
      }
      //copy object or shallowCopy
      
      var obj = { prop1: "raj" };
      var shallowClone ={...obj}; //{ ...obj };
      obj['prop1']='test1';
      console.log("obj",obj,' shallowClone ',shallowClone);
      
      //using assign function to copy object
      
      let obj1 = {
        a: 1,
        b: 2,
      };
      let objCopy = Object.assign({}, obj1);
      
      console.log(objCopy); // result - { a: 1, b: 2 }
      objCopy.b = 89;
      console.log(objCopy); // result - { a: 1, b: 89 }
      console.log(obj1); // result - { a: 1, b: 2 }
      
      //Arrow function  uses
      let a="4"
      var arrow= () => {a=5};
      console.log("a ",a);
      
      //In given array divide into k size  block and check each block x value if exist return yes otherwise no 
      let ar=[3,5, 2, 4, 9, 5, 1, 5, 3, 11, 12, 5,2,3];
      let x = 5;
      const k = 3;
      let output='';
      
      for(let i=0;i<ar.length;i=i+k){
       if(ar[i]==x || ar[i+1]==x || ar[i+2]==x){
       output="yes";
       }else{
       output="No";
       }
      }
      console.log("output",output);
      
      //sort below array with function
      var ar1=[0,1,0,1,1,1,0,0,1];
      var sorted = ar1.sort();
      console.log("sorted array ",sorted);
      //sort array without function
      
       var sumOfArray=ar1.reduce((a, b) => a + b, 0)
       console.log("sum ",sumOfArray);
      
      
      var ar1=[5,16,9];
      var sorted=ar1.sort((a,b)=>{
      return a-b;
      });
      console.log(sorted);
      
      
    
      Jack and Naomi found a big jar with candies that they want to split. Both of them love prime numbers, so they are wondering if the candies can be split so that each kid gets a prime number of candies.
      Given the number of candies n, your task is to help them: return true if the candies can be split as Jack and Naomi want to, and false otherwise.
      Example
      For n = 18, the output should be
      Candies(n) = true.
      It is possible to split 18 as 18 = 7 + 11, since 7 and 11 are both primes.
      
      
      
      
      //3,5,7,11,13,17.....
      function Candies(n){
      if(n>0){
      var listOfPrime=getListOfPrimeNumber(n);
        for(i=0;i<listOfPrime.length;i++){
          for(j=i+1;j<listOfPrime.length;j++)
          if(listOfPrime[i]+listOfPrime[j]==n){
          console.log("split numnber ",listOfPrime[i], listOfPrime[j])
          break;
          return true;
          }
        }
      
      }else{
      return false;
      }
      }
      
      
      var listOfPrime=[];
      function getListOfPrimeNumber(n){
        for(i=2;i<n;i++){
         // let a=i/2;
          if(i%2!=0){
          listOfPrime.push(i);
          }
        
        }
        return listOfPrime
        console.log(listOfPrime);
      }
      
      Candies(18);
       */
  }
}
