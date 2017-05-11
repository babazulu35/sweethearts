import { ResultService } from './../../service/result.service';
import { RankingService } from './../../service/ranking.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[RankingService,ResultService]
})
export class MainComponent implements OnInit {
  private ageData:any;
  private heightData:any;
  private pillData:any;
  private radioData:any;
  
  private ageRank:number;
  private heightRank:number;
  private pillRank:number;
  private radioRank:number;
  private finalResult:number;
  private finalRank:number;

  private isLoading:boolean = false;
  private hasResult:boolean = false;

  private avatar:string;
  
  constructor(private rankingService:RankingService, private resultService: ResultService) { 
    this.ageData = rankingService.getAgeRankData(); /* Get From Ranking Service Age Rank Mock Data */
    this.heightData = rankingService.getHeightRankData();  /* Get From Ranking Service Height Rank Mock Data*/
    this.pillData = rankingService.getPillRankData(); /* Get From Ranking Serveice Pill Rank Mock Data */
    this.radioData = rankingService.getRadioRankData(); /* Get From RankingService Radio Rank Mock Data */     
}

  ngOnInit() {
     this.resultService.resultEventEmit.subscribe(result => 
     {
       console.log("Result Service Subscribe",result);
       if(result) {
         this.hasResult = true;
         this.finalResult = result.result;
         this.finalRank = result.rank;
         this.avatar = result.avatar;
       }
     });
  }

  ngOnDestroy() {
    this.resultService.resultEventEmit.unsubscribe();
  }

  actionEvent($event,type:string){
    
    switch(type){
      case 'age' :
        this.ageRank = this.rankingService.getRank($event.range,type); /* Get rate data in the range of what you post */
      break;
      case 'height' :
        this.heightRank = this.rankingService.getRank($event.range,type); /* Get rate data in the range of what you post */
      break;
      case 'radio' :
        this.radioRank = $event.rate; /* Set Rate Data */
      break;
      case 'pill' :
        this.pillRank = $event.rate; /*Set Rate Data */
      break;
    }
    
  }  

  private calculationResult() {
    this.resultService.getResult([this.ageRank,this.heightRank,this.pillRank,this.radioRank]); /* Set All Rate Data To Result Service to Calculating Result */
   
  }
  private again() {
    this.hasResult = false;
  }
  



}
