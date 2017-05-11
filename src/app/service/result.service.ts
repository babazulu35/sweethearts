import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class ResultService {
  
  @Output() resultEventEmit = new EventEmitter<any>();

  private resultMockData:any;
  
  constructor() { }
  
  
  calculateResult(data) {
    let total = 0;
    for( var x = 0; x < data.length; x++)
    {
        total += data[x];
    }
    return Math.ceil(total);
}

  resultDataSet(data:any) {
    return this.resultMockData = [
      {
        rank:1,
        avatar:'monk',
        min:data.length
      },
      {
        rank:2,
        avatar:'donk',
        min: Math.ceil(data.length + 2)
      },
      {
        rank:3,
        avatar:'duck',
        min: Math.ceil(data.length + 4)
      },
      {
        rank:4,
        avatar:'tweet',
        min: Math.ceil(data.length + 6)
      },
      {
        rank:5,
        avatar:'dog',
        min: Math.ceil(data.length + 8)
      },
      {
        rank:6,
        avatar:'monkey',
        min: Math.ceil(data.length + 10)
      },
      {
        rank:7,
        avatar:'elephant',
        min: Math.ceil(data.length + 12)
      },
      {
        rank:8,
        avatar:'penguin',
        min: Math.ceil(data.length * 8)
      },
      {
        rank:9,
        avatar:'leo',
        min: Math.ceil(data.length * 4)
      }
    ]
  }

  getResult(data:any){

    let mockData = this.resultDataSet(data);
    let rankIndex = mockData.findIndex(element => element.min > this.calculateResult(data));  
    
    /*Emit Data and Make It Subscribaler */
    this.resultEventEmit.emit({
      result: this.calculateResult(data),
      rank: mockData[rankIndex].rank,
      avatar: mockData[rankIndex].avatar
    })

  }

}
