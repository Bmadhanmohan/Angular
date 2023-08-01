import { Component } from '@angular/core';

@Component({
  selector: 'app-container-profiles',
  templateUrl: './container-profiles.component.html',
  styleUrls: ['./container-profiles.component.css']
})
export class ContainerProfilesComponent {


searchText:string='';

onsearchenterd(searchValue:string){
  this.searchText=searchValue;
 
}
  
  data=[
    {
      Roll: "187510501",
      Name: "A ALISHA",
      profile: "fe.jpg",
      Company: "KROLL",
      Package: "5.0 Lpa",
      DOB: "01 Jan 2001",
      Gender: "Female"
    },
    {
      Roll: "18751A0502",
      Name: "A S SANGEETHA",
      profile: "fe.jpg",
      Company: "HCL",
      Package: "4.25 Lpa",
      DOB: "01 Jan 2001",
      Gender: "Female"
    },
    {
      Roll: "18751A0503",
      Name: "A SAI GANESH",
      profile: "ma.png",
      Company: "BOSCH",
      Package: "7.5 Lpa",
      DOB: "01 Jan 2001",
      Gender: "Male"
    },
    {
      Roll: "18751A0504",
      Name: "ADAPA SREEJA",
      profile: "fe.jpg",
      Company: "HCL",
      Package: "4.25 Lpa",
      DOB: "01 Jan 2001",
      Gender: "Female"
    },
    {
      Roll: "18751A0505",
      Name: "ADHIKARIMAYAMPARESH SHARMA",
      profile: "ma.png",
      Company: "BOSCH",
      Package: "7.5 Lpa",
      DOB: "01 Jan 2001",
      Gender: "Male"
    },
    {
      Roll: "18751A0506",
      Name: "ALUKUR CHIRANJEEVI",
      profile: "ma.png",
      Company: "NA",
      Package: "NA",
      DOB: "01 Jan 2001",
      Gender: "Male"
    },
    {
      Roll: "18751A0507",
      Name: "B BINDU PRIYA",
      profile: "fe.jpg",
      Company: "VIRTUSA",
      Package: "5.0 Lpa",
      DOB: "18 Nov 2001",
      Gender: "Female"
    },
    {
      Roll: "18751A0508",
      Name: "B CHARITHA",
      profile: "fe.jpg",
      Company: "CAPGEMINI",
      Package: "4.0 Lpa",
      DOB: "01 Jan 2001",
      Gender: "Female"
    },
    {
      Roll: "18751A0509",
      Name: "B DEEPAK",
      profile: "ma.png",
      Company: "NA",
      Package: "NA",
      DOB: "01 Jan 2001",
      Gender: "Male"
    },
    {
      Roll: "18751A0510",
      Name: "B HEMANTH",
      profile: "ma.png",
      Package: "NA",
      DOB: "30 Apr 2001",
      Gender: "Male",
      Company: "NA",
    },
    {
      Roll: "18751A0511",
      Name: "B NITHEESHA",
      profile: "fe.jpg",
      Company: "SOPRASTERIA",
      Package: "6.5 Lpa",
      DOB: "01 Jan 2001",
      Gender: "Female"
    },
    {
      Roll: "18751A0512",
      Name: "BAJANTHRI MADHAN MOHAN",
      profile: "12.jpg",
      Package: "NA",
      DOB: "09 Mar 2001",
      Gender: "Male",
      Company: "NA",
    },
    {
      Roll: "18751A0513",
      Name: "B PAVAN KALYAN",
      profile: "ma.png",
      Company: "BYJUS",
      Package: "5.0 Lpa",
      DOB: "07 Jul 2000",
      Gender: "Male"
    },
    {
      Roll: "18751A0514",
      Name: "C S YOGESH GANDHI",
      profile: "ma.png",
      Package: "NA",
      DOB: "05 Jan 2001",
      Gender: "Male",
      Company: "NA",
    },
    {
      Roll: "18751A0515",
      Name: "C SONALI",
      profile: "fe.jpg",
      Package: "NA",
      DOB: "14 Sep 2000",
      Gender: "Female",
      Company: "NA",
    },
    {
      Roll: "18751A0516",
      Name: "C ROHINI",
      profile: "fe.jpg",
      Company: "CAPGEMINI",
      Package: "4.0 Lpa",
      DOB: "24 Aug 2001",
      Gender: "Female"
    },
    {
      Roll: "18751A0517",
      Name: "CHOPPA KEERTHI",
      profile: "fe.jpg",
      Company: "TCS",
      Package: "3.3 Lpa",
      DOB: "01 Jan 2001",
      Gender: "Female"
    },
    {
      Roll: "18751A0518",
      Name: "D CHANDRU",
      profile: "ma.png",
      Package: "NA",
      DOB: "01 Jan 2001",
      Gender: "Male",
      Company: "NA",
    },
    {
      Roll: "18751A0519",
      Name: "D GAYATHRRY SRE",
      profile: "fe.jpg",
      Package: "NA",
      DOB: "01 Jan 2001",
      Gender: "Female",
      Company: "NA",
    },
    {
      Roll: "18751A0520",
      Name: "D JYOTHI PRASAD",
      profile: "ma.png",
      Company: "MASTERS",
      Package: "NA",
      DOB: "01 Jan 2001",
      Gender: "Male"
    },
    {
      Roll: "18751A0521",
      Name: "D POORNIMA PARINITHA",
      profile: "fe.jpg",
      Package: "NA",
      DOB: "01 Jan 2001",
      Gender: "Female",
      Company: "NA",
    },
    {
      Roll: "18751A0522",
      Name: "DADDALA GEETHIKA CHOWDARY",
      profile: "fe.jpg",
      Company: "TCS",
      Package: "3.3 Lpa",
      DOB: "01 Jan 2001",
      Gender: "Female"
    },
    {
      Roll: "18751A0523",
      Name: "E V HARSHENE",
      profile: "fe.jpg",
      Package: "NA",
      DOB: "20 Jul 2001",
      Gender: "Female",
      Company: "NA",
    },
    {
      Roll: "18751A0524",
      Name: "E V HARSHETHA",
      profile: "fe.jpg",
      Package: "NA",
      DOB: "01 Jan 2001",
      Gender: "Female",
      Company: "NA",
    },
    {
      Roll: "18751A0525",
      Name: "G CHANDHU PRIYA",
      profile: "fe.jpg",
      Company: "HCL",
      Package: "4.25 Lpa",
      DOB: "01 Jan 2001",
      Gender: "Female"
    },
    {
      Roll: "18751A0526",
      Name: "G KIRAN",
      profile: "ma.png",
      Package: "NA",
      DOB: "01 Jan 2001",
      Gender: "Male",
      Company: "NA",
    },
    {
      Roll: "18751A0527",
      Name: "G TRIDEV",
      profile: "ma.png",
      Package: "NA",
      DOB: "24 Dec 2000",
      Gender: "Male",
      Company: "NA",
    },
    {
      Roll: "18751A0528",
      Name: "GAJULA HARSHITHA",
      profile: "fe.jpg",
      Package: "NA",
      DOB: "02 Apr 2001",
      Gender: "Female",
      Company: "NA",
    },
    {
      Roll: "18751A0529",
      Name: "GANGA DEVENDRA",
      profile: "ma.png",
      Package: "NA",
      DOB: "01 Jan 2001",
      Gender: "Male",
      Company: "NA",
    },
    {
      Roll: "18751A0530",
      Name: "GUMMAREDDY SURESH RAKESH",
      profile: "ma.png",
      Package: "NA",
      DOB: "01 Jan 2001",
      Gender: "Male",
      Company: "NA",
    },
    {
      Roll: "18751A0531",
      Name: "GUMMIREDDY SAI JOSHIKA",
      profile: "fe.jpg",
      Company:"MASTERS",
      Package: "NA",
      DOB: "01 Jan 2001",
      Gender: "Female"
    },
    {
      Roll: "18751A0532",
      Name: "JAYARAJ BENITTA",
      profile: "fe.jpg",
      Package: "NA",
      DOB: "29 Apr 2001",
      Gender: "Female",
      Company: "NA",
    },
    {
      Roll: "18751A0533",
      Name: "K BHANU PRAKASH",
      profile: "ma.png",
      Company: "IDFC FIRST BANK",
      Package: "6.5 Lpa",
      DOB: "01 Jan 2001",
      Gender: "Male"
    },
    {
      Roll: "18751A0534",
      Name: "K CHAKITHA",
      profile: "fe.jpg",
      Company: "MASTERS",
      Package: "NA",
      DOB: "01 Jan 2001",
      Gender: "Female"
    },
    {
      Roll: "18751A0536",
      Name: "K HEMANTH",
      profile: "ma.png",
      Company: "ATOS SYNTEL",
      Package: "3.5 Lpa",
      DOB: "30 Apr 2001",
      Gender: "Male"
    },
    {
      Roll: "18751A0537",
      Name: "K MEGHANA SAI",
      profile: "fe.jpg",
      Company: "TCS",
      Package: "3.3 Lpa",
      DOB: "01 Jan 2001",
      Gender: "Female"
    },
    {
      Roll: "18751A0538",
      Name: "K N PAVITHRA",
      profile: "fe.jpg",
      Package: "NA",
      DOB: "01 Jan 2001",
      Gender: "Female",
      Company: "NA",
    },
    {
      Roll: "18751A0539",
      Name: "K SNEHA",
      profile: "fe.jpg",
      Company: "TCS",
      Package: "3.3 Lpa",
      DOB: "01 Jan 2001",
      Gender: "Female"
    },
    {
      Roll: "18751A0540",
      Name: "K THANUJA",
      profile: "fe.jpg",
      Company: "HCL",
      Package: "4.25 Lpa",
      DOB: "30 Sep 2000",
      Gender: "Female"
    },
    {
      Roll: "18751A0541",
      Name: "K V VANITHA",
      profile: "fe.jpg",
      Company: "SOPRASTERIA",
      Package: "6.5 Lpa",
      DOB: "28 Dec 2001",
      Gender: "Female"
    },
    {
      Roll: "18751A0542",
      Name: "K HAREESH KUMAR",
      profile: "ma.png",
      Company: "HCL",
      Package: "4.25 Lpa",
      DOB: "20 Jul 2001",
      Gender: "Male"
    },
    {
      Roll: "18751A0543",
      Name: "KANTAM YOGESH",
      profile: "ma.png",
      Package: "NA",
      DOB: "21 Jan 2001",
      Gender: "Male",
      Company: "NA",
    },
    {
      Roll: "18751A0544",
      Name: "KAVALLI NAVEEN",
      profile: "ma.png",
      Company: "HCL",
      Package: "4.25 Lpa",
      DOB: "25 Mar 2000",
      Gender: "Male"
    },
    {
      Roll: "18751A0545",
      Name: "KEERTHANA CM",
      profile: "fe.jpg",
      Company: "HCL",
      Package: "3.4 Lpa",
      DOB: "07 May 2000",
      Gender: "Female"
    },
    {
      Roll: "18751A0546",
      Name: "KONDURU KEERTHI",
      profile: "fe.jpg",
      Package: "NA",
      DOB: "02 Jun 2001",
      Gender: "Female",
      Company: "NA",
    },
    {
      Roll: "18751A0547",
      Name: "M H PREETHI",
      profile: "fe.jpg",
      Company: "JAX",
      Package: "5.5 Lpa",
      DOB: "01 Jan 2001",
      Gender: "Female"
    },
    {
      Roll: "18751A0548",
      Name: "M LOKESH",
      profile: "ma.png",
      Package: "NA",
      DOB: "01 Jan 2001",
      Gender: "Male",
      Company: "NA",
    },
    {
      Roll: "18751A0549",
      Name: "M NITHESH",
      profile: "ma.png",
      Company: "BOSCH",
      Package: "7.5 Lpa",
      DOB: "01 Jan 2001",
      Gender: "Male"
    },
    {
      Roll: "18751A0550",
      Name: "M PRAVALIKA",
      profile: "fe.jpg",
      Company: "PERSISTANT",
      Package: "7.5 Lpa",
      DOB: "01 Jan 2001",
      Gender: "Female"
    },
    {
      Roll: "18751A0551",
      Name: "M RAVINDRA NAIK",
      profile: "ma.png",
      Company: "HCL",
      Package: "4.25 Lpa",
      DOB: "01 Jan 2001",
      Gender: "Male"
    },
    {
      Roll: "18751A0552",
      Name: "M VIMALA",
      profile: "fe.jpg",
      Package: "NA",
      DOB: "24 Aug 2000",
      Gender: "Female",
      Company: "NA",
    },
    {
      Roll: "18751A0553",
      Name: "M SAI KISHORE",
      profile: "ma.png",
      Package: "NA",
      DOB: "15 Apr 2001",
      Gender: "Male",
      Company: "NA",
    },
    {
      Roll: "18751A0554",
      Name: "MIDDI TANUJA",
      profile: "fe.jpg",
      Company: "HCL",
      Package: "4.25 Lpa",
      DOB: "01 Jan 2001",
      Gender: "Female"
    },
    {
      Roll: "18751A0555",
      Name: "MODEM LOKESWARI",
      profile: "fe.jpg",
      Company: "VIRTUSA",
      Package: "5.0 Lpa",
      DOB: "01 Jan 2001",
      Gender: "Female"
    },
    {
      Roll: "18751A0556",
      Name: "MONESH REDDY P",
      profile: "ma.png",
      Company: "HCL",
      Package: "4.25 Lpa",
      DOB: "01 Jan 2001",
      Gender: "Male"
    },
    {
      Roll: "18751A0557",
      Name: "MUDIREDDY CHAITANYA KUMAR Reddy\n",
      profile: "ma.png",
      Company: "HCL",
      Package: "4.25 Lpa",
      DOB: "26 Jun 2001",
      Gender: "Male"
    },
    {
      Roll: "18751A0558",
      Name: "N RAGAMAI",
      profile: "fe.jpg",
      Package: "NA",
      DOB: "01 Jan 2001",
      Gender: "Female",
      Company: "NA",
    },
    {
      Roll: "18751A05A1",
      Name: "TENEPALLI THARUN\nKUMAR",
      profile: "fe.jpg",
      Company: "COGNIZANT",
      Package: "4.0 Lpa",
      DOB: "01 Jan 2001",
      Gender: "Male"
    }
  ];
 
}  
