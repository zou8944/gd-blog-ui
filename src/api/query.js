import axios from "axios";

const host = import.meta.env.VITE_HOST

export function fetchBlogList(cid, pageSize, pageNo) {
    let url = host + "/blogs?pageSize=" + pageSize + "&pageNo=" + pageNo
    if (cid) {
        url = url + "&cid=" + cid
    }
    return axios.get(url)
}

export function fetchBlogDetail(id) {
    return axios.get(host + "/blogs/" + id)
}

export function fetchCategoryList(limit) {
    return axios.get(host + "/categories?limit=" + limit)
}

export function fetchTagList(limit) {
    return axios.get(host + "/tags?limit=" + limit)
}

export function fetchCommentList() {

}

export function fetchAbout() {

}

export function fetchSiteInfo() {
    return axios.get(host + "/info")
}