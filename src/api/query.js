import axios from "axios";

const host = "https://zou8944.com"

export function fetchBlogList(pageSize, pageNo) {
    return axios.get(host + "/api/blogs?pageSize=" + pageSize + "&pageNo=" + pageNo)
}

export function fetchBlogDetail(id) {
    return axios.get(host + "/api/blogs/" + id)
}

export function fetchCategoryList(limit) {
    return axios.get(host + "/api/categories?limit=" + limit)
}

export function fetchTagList(limit) {
    return axios.get(host + "/api/tags?limit=" + limit)
}

export function fetchCommentList() {

}

export function fetchAbout() {

}