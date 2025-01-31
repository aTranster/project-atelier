import axios from 'axios';
import config from '/config.js';

//Import whatever functions you want from this file
//API get requests return promises that resolve to your data
//Check the parameter requirements next to each function

const options = {
  headers: {
    'Authorization': `${config.TOKEN}`,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  }
};

// const host = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
const host2 = 'http://ec2-54-241-227-92.us-west-1.compute.amazonaws.com';

/*------------------------ PRODUCTS ------------------------ */
/*------------------------ PRODUCTS ------------------------ */
/*------------------------ PRODUCTS ------------------------ */

const getProducts = (page = 1, count = 5) => {
  return axios.get(host2 + `/products?page=${page}&count=${count}`, options)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

const getProduct = (product_id) => {
  return axios.get(host2 + '/products/' + product_id, options)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

const getStyles = (product_id) => {
  return axios.get(host2 + '/products/' + product_id + '/styles', options)
    .then((res) => res.data.results)
    .catch((err) => console.error(err));
};

const getRelated = (product_id) => {
  return axios.get(host2 + '/products/' + product_id + '/related', options)
    .then((res) => res.data)
    .catch((err) => console.error(err));
}

/*------------------------ REVIEWS ------------------------ */
/*------------------------ REVIEWS ------------------------ */
/*------------------------ REVIEWS ------------------------ */

const getCart = () => {
  return axios.get(host + '/cart', options)
    .then((res) => res.data)
    .catch((err) => console.error(err));
}

const postCart = (sku_id) => {
  return axios.post(host + '/cart', {sku_id}, options)
    .catch((err) => console.error(err))
}

/*------------------------ REVIEWS ------------------------ */
/*------------------------ REVIEWS ------------------------ */
/*------------------------ REVIEWS ------------------------ */

const getReviews = (product_id, page = 1, count = 2, sort = "relevant") => {
  return axios.get(host + `/reviews/?product_id=${product_id}&page=${page}&count=${count}&sort=${sort}`, options)
    .then((res) => res.data.results)
    .catch((err) => console.error(err));
};

const getReviewMetadata = (product_id) => {
  return axios.get(host + `/reviews/meta/?product_id=${product_id}`, options)
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

const postReview = (reviewObject) => {
  return axios.post(host + `/reviews`, reviewObject, options)
    .catch((err) => console.error(err));
};

const putReviewHelpful = (review_id) => {
  return axios.put(host + `/reviews/${review_id}/helpful`, {review_id: review_id}, options)
    .catch((err) => console.error(err));
};

/*------------------------ Questions and Answers ------------------------ */
/*------------------------ Questions and Answers ------------------------ */
/*------------------------ Questions and Answers ------------------------ */

const getQuestions = (product_id, page = 1, count = 5) => {
  return axios.get(host + `/qa/questions/?product_id=${product_id}&page=${page}&count=${count}`, options)
    .then((res) => res.data.results)
    .catch((err) => console.error(err));
};

const getAnswers = (question_id, page = 1, count = 5) => {
  return axios.get(host + `/qa/questions/${question_id}/answers/?page=${page}&count=${count}`, options)
  .then((res) => res.data.results)
  .catch((err) => console.error(err));
};

const postQuestion = (questionObject) => {
  return axios.post(host + `/qa/questions`, questionObject, options)
    .catch((err) => console.error(err));
};

const postAnswer = (question_id, answerObject) => {
  return axios.post(host + `/qa/questions/${question_id}/answers`, answerObject, options)
    .catch((err) => console.error(err));
};

const putQuestionHelpful = (question_id) => {
  return axios.put(host + `/qa/questions/${question_id}/helpful`, {question_id: question_id}, options)
    .catch((err) => console.error(err));
};

const putQuestionReport = (question_id) => {
  return axios.put(host + `/qa/questions/${question_id}/report`, {question_id: question_id}, options)
    .catch((err) => console.error(err));
};

const putAnswerHelpful = (answer_id) => {
  return axios.put(host + `/qa/answers/${answer_id}/helpful`, {answer_id: answer_id}, options)
    .catch((err) => console.error(err));
};

const putAnswerReport = (answer_id) => {
  return axios.put(host + `/qa/answers/${answer_id}/report`, {answer_id: answer_id}, options)
    .catch((err) => console.error(err));
};

const putReviewReport = (review_id) => {
  return axios.put(host + `/reviews/${review_id}/report`, {}, options)
    .then((res) => res)
    .catch((err) => console.error(err));
};

export {getProducts, getProduct, getStyles, getRelated};
export {getCart, postCart};
export {getReviews, getReviewMetadata, postReview, putReviewHelpful, putReviewReport};
export {getQuestions, getAnswers, postQuestion, postAnswer, putQuestionHelpful, putQuestionReport, putAnswerHelpful, putAnswerReport};
