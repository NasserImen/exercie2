import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
text =""
listArticle ={
  Titre : "",
  Contenu : "",
  Auteur : "",
  Date : ""
}
  constructor() { }

  ngOnInit(): void {
    this.text = 'Les articles du jour'
  }

}
