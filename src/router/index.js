import Vue from 'vue'
import Router from 'vue-router'
import articles_list from '@/components/articles_list'
import home_articles from '@/components/home_articles'
import category_articles from '@/components/category_articles'
import right from '@/components/right'
import search from '@/components/search'
import hot_questions from '@/components/hot_questions'
import content from '@/components/content'
import write_article from '@/components/write_article'
import person from '@/components/person'
import myArticles from '@/components/myArticles'
import myList from '@/components/myList'
import login from '@/components/login'
import register from '@/components/register'

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
    },
    {
	    path: '/write_article',
	    name: 'write_article',
	    component: write_article
    },
    {
	    path: '/person',
	    name: 'person',
	    component: person
    },
    {
	    path: '/myArticles',
	    name: 'myArticles',
	    component: myArticles
    },
    {
	    path: '/myList',
	    name: 'myList',
	    component: myList
    },
    {
	    path: '/login',
	    name: 'login',
	    component: login
    },
    {
	    path: '/register',
	    name: 'register',
	    component: register
    }
    
  ]
})
