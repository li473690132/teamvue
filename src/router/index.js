import Vue from 'vue'
import Router from 'vue-router'
import articles_list from '@/components/articles_list'
import home_articles from '@/components/home_articles'
import category_articles from '@/components/category_articles'
import right from '@/components/right'
import hot_questions from '@/components/hot_questions'
import content from '@/components/content'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/tolist',
      name: 'articles_list',
      component: articles_list
    },
    
    {
    	path: '/',
      name: 'home_articles',
      component: home_articles
    },
    {
    	path: '/category_articles',
      name: 'category_articles',
      component: category_articles
    },
    {
    	path: '/hot_questions',
      name: 'hot_questions',
      component: hot_questions
    },
    {
    	path: '/content',
      name: 'content',
      component: content
    }
  ]
})
