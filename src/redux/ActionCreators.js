import * as ActionTypes from './ActionTypes';
import axios from 'axios';

export const getNews = (topic) => (dispatch) => {

    dispatch(NewsLoading(true));
        return  axios.get('https://gnews.io/api/v3/search?q=' + topic + '&token=0666b9658606f10439c9a1bc2c1f3347')
        .then(response => {
        if (response.statusText === "OK" ) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(News => dispatch(addNews(News.data.articles)))
    .catch(error => dispatch(NewsFailed(error.message)));
    

    
}

export const getTopicNews = (topic) => (dispatch) => {

    dispatch(NewsLoading(true));
        return  axios.get('https://gnews.io/api/v3/topics/' + topic + '?country=in&token=22367f14c1b088d0e01fa54992382d16')
        .then(response => {
        if (response.statusText === "OK" ) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(News => dispatch(addNews(News.data.articles)))
    .catch(error => dispatch(NewsFailed(error.message)));
    

    
}

export const NewsLoading = () => ({
    type: ActionTypes.NEWS_LOADING
});

export const NewsFailed = (errmess) => ({
    type: ActionTypes.NEWS_FAILED,
    payload: errmess
});

export const addNews = (News) => ({
    type: ActionTypes.ADD_NEWS,
    payload: News
});

