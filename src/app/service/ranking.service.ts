import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class RankingService {
  private heightRank:{range:{min:number,max:number},rank:{rate:number,value:{}}[]};
  private ageRank:{range:{min:number,max:number},rank:{rate:number,value:{}}[]};
  private pillRank:{rank:{rate:number,value:{}}[]};
  private radioRank:{rank:{rate:number,value:{}}[]}
  private optionRank:{rank:{rate:number,value:{}}[]}

  
  @Output() rankingServiceEvent = new EventEmitter<{rank:any,type:any}>();

  constructor() { }
  
  getAgeRankData(){
    return  this.ageRank = {
        range:{
          min:14,
          max:70
        },
        rank:[{
          rate:6,
          value:'14'
        },
        {
          rate:5,
          value:'22'
        },
        {
          rate:4,
          value:'28'
        },
        {
          rate:3,
          value:'35'
        },
        {
          rate:2,
          value:'50'
        },
        {
          rate:1,
          value:'71'
        }
        ]
      }    
  }

  getHeightRankData(){
     return this.heightRank = {
        range:{
          min:140,
          max:210
        },
        rank:[
          {
            rate:2,
            value:'140'
          },
          {
            rate:4,
            value:'156'
          },
          {
            rate:3,
            value:'165'
          },
          {
            rate:6,
            value:'180'
          },
          {
            rate:1,
            value:'211'
          }
        ]
      }    
  }

  getPillRankData() {
   return this.pillRank = {
     rank:[{
       rate:3,
       value:'Gray'
     },
     {
       rate:2,
       value:'Brown'
     },
     {
       rate:6,
       value:'Yellow'
     },
     {
       rate:4,
       value:'Ginger'
     },
     {
       rate:5,
       value:'Bald'
     },
     {
       rate:1,
       value:'Black'
     }
     ]
   }
  }

  getOptionRankData(){
    return this.optionRank = {
      rank:[{
        rate:1,
        value:'Charmful'
      },
      {
        rate:2,
        value:'Aggressive'
      },
      {
        rate:3,
        value:'Chilled'
      },
      {
        rate:4,
        value:'Sexy'
      },
      {
        rate:5,
        value:'Depressed'
      },
      {
        rate:6,
        value:'Motivated'
      },
      {
        rate:7,
        value:'Emotional'
      }
      ]
    }
  }

  getRadioRankData() {
    return this.radioRank = {
      rank:[{
        rate:1,
        value:'Male'
      },
      {
        rate:2,
        value:'Female'
      }
      ]
    }
  }
  
  getRank(data:any,type:string){
    if(type == 'age') {
       let ageData = this.getAgeRankData();
       let ageRateIndex = ageData.rank.findIndex(element => element.value > data );       
       return ageData.rank[ageRateIndex-1].rate;
    }
    else if(type == 'height') {
      let heightData = this.getHeightRankData();
      let heightRateIndex = heightData.rank.findIndex(element => element.value > data);
      return heightData.rank[heightRateIndex-1].rate;
    }

  
  }
  


}
