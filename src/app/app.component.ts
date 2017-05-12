import { AppModule } from './app.module';
import { ResultService } from './service/result.service';
import { RankingService } from './service/ranking.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { timer} from 'rxjs/Observable/timer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[RankingService,ResultService]
})
export class AppComponent implements OnInit {
  public ageData:any;
  public heightData:any;
  public pillData:any;
  public radioData:any
  public optionData:any;
  
  private ageRank:number;
  private heightRank:number;
  private pillRank:number;
  private radioRank:number;
  private optionRank:number;
  private finalResult:number;
  private finalRank:any;

  private isLoading:boolean = false;
  public hasResult:boolean = false;

  private isValid = [];

  private avatar:string;

  public isDisabled:boolean;

  private timers:Observable<any>;
  private subscription;

  
  constructor(private rankingService:RankingService, private resultService: ResultService) { 
    this.ageData = rankingService.getAgeRankData(); /* Get From Ranking Service Age Rank Mock Data */
    this.heightData = rankingService.getHeightRankData();  /* Get From Ranking Service Height Rank Mock Data*/
    this.pillData = rankingService.getPillRankData(); /* Get From Ranking Serveice Pill Rank Mock Data */
    this.radioData = rankingService.getRadioRankData(); /* Get From RankingService Radio Rank Mock Data */     
    this.optionData = rankingService.getOptionRankData(); /* Get From RankingService Radio Rank Mock Data */     
}

  ngOnInit() {





    this.isDisabled = true;
     this.resultService.resultEventEmit.subscribe(result => 
     {
       console.log("Result Service Subscribe",result);
       if(result) {
         this.hasResult = true;
         this.finalResult = result.result;
         this.finalRank = '';
         this.avatar = result.avatar;

          this.timers = Observable.interval(100).timeInterval().take(result.rank).delay(100);
          this.timers.subscribe( x => { 
            this.finalRank = (x.value + 1) 
          }
          )
       }
     });
  }

  ngOnDestroy() {
    this.resultService.resultEventEmit.unsubscribe();
  }

  actionEvent($event,type:string){
    console.log($event);
    switch(type){
      case 'age' :
        this.ageRank = this.rankingService.getRank($event.range,type); /* Get rate data in the range of what you post */    
        if(this.isValid.indexOf(type) == -1) {
          this.isValid.push(type);
        }
      break;
      case 'height' :
        this.heightRank = this.rankingService.getRank($event.range,type); /* Get rate data in the range of what you post */
        if(this.isValid.indexOf(type) == -1) {
          this.isValid.push(type);
        }
      break;
      case 'radio' :
        this.radioRank = $event.rate; /* Set Rate Data */
        if(this.isValid.indexOf(type) == -1) {
          this.isValid.push(type);
        }
      break;
      case 'pill' :
        this.pillRank = $event.rate; /*Set Rate Data */
        if(this.isValid.indexOf(type) == -1) {
          this.isValid.push(type);
        }
      break;
      case 'select':
        this.optionRank = $event.rate; 
        if(this.isValid.indexOf(type) == -1) {
          this.isValid.push(type);
        }
      break;
    }
    /* If all Fields are filled , then open the button */

    if(this.isValid.length == 5){
      this.isDisabled = false;
    }
    
  }  

  private calculationResult() {
    this.resultService.getResult([this.ageRank,this.heightRank,this.pillRank,this.radioRank,this.optionRank]); /* Set All Rate Data in ResultService to Calculating Result */
   
  }
  private again() {
    this.hasResult = false;
  }
  



}
