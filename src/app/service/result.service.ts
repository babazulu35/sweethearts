import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class ResultService {
  
  @Output() resultEventEmit = new EventEmitter<any>();

  private resultMockData:any;

  avatarSets:{avatar:string}[];
  
  constructor() { }
  
  avatarSet() {
    return  this.avatarSets = [
        { avatar:'monk'},{avatar:'donk'},{avatar:'duck'},{avatar:'tweet'},{avatar:'dog'},{avatar:'monkey'},{avatar:'elephant'},{avatar:'penguin'}, {avatar:'leo'},
      ]
  }

  calculateResult(data) {
    let total = 0;
    for( var x = 0; x < data.length; x++)
    {
        total += data[x];
    }
    return Math.ceil(total);
}

  resultDataSet(data?:any,calculationLimits?:{min:number,max:number,modus:any}) {
    let mockDataResults = [];
    for(let i = 0; i <= calculationLimits.modus.length;i++)
    {

      if(i == calculationLimits.modus.length)
      {
        let element = {avatar:this.avatarSet()[i].avatar,rank:i + 1,min:calculationLimits.max};
        mockDataResults.push(element);
      }
      else
      {
        let element = {avatar:this.avatarSet()[i].avatar,rank:i + 1,min:calculationLimits.modus[i]};
        mockDataResults.push(element);
      }  
    }

    return mockDataResults;

  }

  getResult(data:any,calculationLimits:{max:number,min:number}){
    console.log(data);
    var modusData = [];
    
    for(var i = 1 ; i <= calculationLimits.max; i++ ) {
      if(i% ( Math.ceil(calculationLimits.max / this.avatarSet().length ) ) == 0) {
        modusData.push(i);
      } 
    }

    let mockData = this.resultDataSet(data,{max:calculationLimits.max,min:calculationLimits.min,modus:modusData});  
    let rankIndex = mockData.map(items => { return items} ).findIndex( value => value.min >= this.calculateResult(data) );
 
    /*Emit Data and Make It Subscriber */
    this.resultEventEmit.emit({
      result: this.calculateResult(data),
      rank: mockData[rankIndex-1].rank,
      avatar: mockData[rankIndex-1].avatar
     
    })

  }

}
