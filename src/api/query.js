import axios from "axios";

const host = "https://zou8944.com"
// const host = "localhost"

export function fetchBlogList(cid, pageSize, pageNo) {
    let url = host + "/api/blogs?pageSize=" + pageSize + "&pageNo=" + pageNo
    if (cid) {
        url = url + "&cid=" + cid
    }
    return axios.get(url)
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