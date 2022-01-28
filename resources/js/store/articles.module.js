import Vue from 'vue'

export const state = {
    articles: [],
}

export const actions = {
    ['article_added'](context, data) {
        context.commit('ADD_ARTICLE', data)
    },
    ['article_deleted'](context, data) {
        context.commit('DELETE_ARTICLE', data)
    },
    ['article_updated'](context, data) {
        context.commit('UPDATE_ARTICLE', data)
    },
    ['articles_updated'](context, data) {
        context.commit('UPDATE_ARTICLES', data)
    },
    ['articles_loaded'](context, data) {
        context.commit('UPDATE_ARTICLES', data)
    },
}

export const mutations = {
    ['ADD_ARTICLE']: (state, article) => {
        state.articles.push(article)
    },
    ['DELETE_ARTICLE']: (state, articleId) => {
        let articleIndex = state.articles.findIndex((article) => article.id === articleId)
        if (articleIndex === -1) return
        const tmpArticles = state.articles.splice(articleIndex, 1)
        Vue.set(state.articles, tmpArticles)
    },
    ['UPDATE_ARTICLES']: (state, articles) => {
        state.articles = articles
    },
    ['UPDATE_ARTICLE']: (state, data) => {
        let articleIndex = state.articles.findIndex((article) => article.id === data.id)
        if (articleIndex === -1) return
        const updatedArticle = { ...state.articles[articleIndex], ...data }
        Vue.set(state.articles, articleIndex, updatedArticle)
    },
}

export const getters = {
    ['get_articles'](state) {
        return state.articles
    },
    ['get_article'](state) {
        return (id) => {
            return state.articles.find((article) => article.id === id)
        }
    },
    ['get_available'](state) {
        return state.articles.filter((article) => article.available)
    },
    ['get_unavailable'](state) {
        return state.articles.filter((article) => !article.available)
    },
}

export default {
    state,
    actions,
    mutations,
    getters,
}
