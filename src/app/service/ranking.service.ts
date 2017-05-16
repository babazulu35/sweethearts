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
          value:'70'
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
            rate:5,
            value:'180'
          },
          {
            rate:1,
            value:'210'
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
       value:'White'
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

  getRateValue(data:any,type:string){
    /* Get The Biggest and Smallest Number From Array */
    let rates = [];
    if(type =='max')
    {
      for(let i = 0; i < data.rank.length; i++)
      {
         rates.push(data.rank[i].rate)
      }
      return Math.max.apply(Math,rates);
    }
    else if(type == 'min')
    {
      
      for(let i = 0; i < data.rank.length; i++)
      {
         rates.push(data.rank[i].rate)
      }
      
      return Math.min.apply(Math,rates);      
    }

    
  }
  
  getRatesSum(type:string){
    /* Sums All Max. And Min Rate  to find the calculation limitations */
    let age = this.getRateValue(this.getAgeRankData(),type);
    let height = this.getRateValue(this.getHeightRankData(),type);
    let pill = this.getRateValue(this.getPillRankData(),type);
    let option = this.getRateValue(this.getOptionRankData(),type);
    let radio = this.getRateValue(this.getRadioRankData(),type);
    
    let sum = age + height + pill + option + radio;

    return sum;
    
  }

  
  getRank(data:any,type:string){
    /* Just Usable for Range Slider or similar */
    if(type == 'age') {
       let ageData = this.getAgeRankData();
       let ageRateIndex = ageData.rank.findIndex(element =>  element.value >= data );

       return ageData.rank[ageRateIndex].rate;
    }
    else if(type == 'height') {
      let heightData = this.getHeightRankData();
      let heightRateIndex = heightData.rank.findIndex(element => element.value >= data);
      return heightData.rank[heightRateIndex].rate;
    }

  
  }
  


}
