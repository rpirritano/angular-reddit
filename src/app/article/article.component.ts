import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor() {
    //removed since article is populated by the Input now
   }

   voteUp(): boolean {
     this.article.votesUp();
     return false;
   }

   voteDown(): boolean {
     this.article.voteDown();
     return false;
   }

  ngOnInit() {
  }

}
