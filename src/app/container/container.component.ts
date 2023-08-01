import { Component} from '@angular/core';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  searchText:string='';

  onsearchenterd(searchValue:string){
    this.searchText=searchValue;
  }  
  
data=[
  {
    img:'happydays.jpg',
    name:'Happy Days',
    age:'25',
    lin:'https://www.youtube.com/embed/FTMox3mbWHA'

   
  },
  {
    img:'kirrakparty.jpg',
    name:"Kirrak Party",
    age:'25',
    lin:'https://www.youtube.com/embed/5WhUsTBSNqc'

    
  },
  {
    img:'nenulocal.jpg',
    name:'Nenu Local',
    age:'25',
    lin:'https://www.youtube.com/embed/sqW95LOMrBU'

  
  },
  {
    img:'yemayachesave.jpg',
    name:'ye maya chesave',
    age:'25',
    lin:'https://www.youtube.com/embed/YrmULmZNzDo'

  },
  {
    img:'kerintha.jpg',
    name:'Kerintha',
    lin:'https://www.youtube.com/embed/FpYIv-_GOVI'

  },
  {
    img:'premam.jpg',
    name:'Premam',
    lin:'https://www.youtube.com/embed/wCAhCeeDYRk'

  },
  {
    img:'sir.jpg',
    name:'Sir',
    lin:'https://www.youtube.com/embed/GU7IbSUNLCY'

  },
  {
    img:'ct.jpg',
    name:'Current Theega',
    lin:'https://www.youtube.com/embed/dauXji8Jzaw'

  }
 
  
    
];

   

}
