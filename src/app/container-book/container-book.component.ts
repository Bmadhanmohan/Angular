import { Component } from '@angular/core';

@Component({
  selector: 'app-container-book',
  templateUrl: './container-book.component.html',
  styleUrls: ['./container-book.component.css']
})
export class ContainerBookComponent {
  searchText:string='';

onsearchenterd(searchValue:string){
  this.searchText=searchValue;
 
}
  data=[
    {
      img:'1.png',
      name:'JAVA',
      author:"James Gosling",
      link:"java.pdf",
      pages:127
     
    },
   
    {
      img:'2.png',
      name:'PYTHON',
      author:"Guido van Rossum",
      link:"python.pdf",
      pages:187
     
    },
    {
      img:'3.png',
      name:'JAVASCRIPT',
      author:"Brendan Eich",
      link:"javascript.pdf",
      pages:388
     
    },
   
    {
      img:'4.png',
      name:'TYPESCRIPT',
      author:"Microsoft",
      link:"typescript.pdf",
      pages:25
     
    },
   
    {
      img:'5.png',
      name:'C++',
      author:"Bjarne Stroustrup",
      link:"c++.pdf",
      pages:54
     
    },
   
    {
      img:'6.png',
      name:'CSS',
      author:"W3C",
      link:"css.pdf",
      pages:28
     
    },
   
    {
      img:'7.png',
      name:'C',
      author:"Dennis Ritchie",
      link:"c.pdf",
      pages:124
     
    },
    {
      img:'8.png',
      name:'MYSQL',
      author:"Oracle,Sun Microsystems",
      link:"sql.pdf",
      pages:56
     
    },
    {
      img:'9.png',
      name:'REACT JS',
      author:"Meta and Community",
      link:"react.pdf",
      pages:221
     
    },
    
    {
      img:'10.png',
      name:'ANGULAR JS',
      author:"Google",
      link:"angular.pdf",
      pages:184
     
    },
    {
      img:'11.png',
      name:'HTML',
      author:"WHATWG",
      link:"html.pdf",
      pages:56
     
    }
  ]
}
