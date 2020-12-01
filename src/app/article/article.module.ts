import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from './services/article.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { articleReducer } from './store/article.reducer';
import { ArticleEffects } from './store/article.effects';
import { ArticleComponent } from './components/article/article.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('articles', articleReducer),
    EffectsModule.forFeature([ArticleEffects])
  ],
  declarations: [ArticleComponent, ArticleListComponent, ArticleFormComponent],
  providers: [ArticleService],
  exports: [ArticleComponent, ArticleListComponent, ArticleFormComponent]
})
export class ArticleModule { }
