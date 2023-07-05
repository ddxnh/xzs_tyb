import {request} from '../utils/request'

// 导航数据的网络请求
export function navPost(){
	return request({
		url:'/nav/get',
		method:"POST"
	})
}
// 新闻详细信息的网络请求
export function newsPost(data){
	return request({
		url:'/news/get',
		method:'POST',
		data
	})
}
// 新闻列表网络请求
export function newsDetail(data){
	return request({
		url:'/news/detail',
		method:'POST',
		data
	})
}
// 获取产品列表
export function productPost(data){
	return request({
		url:'/product/getlist',
		method:'POST',
		data
	})
}

// 获取产品单个列表
export function productDetail(data){
	return request({
		url:'/product/detail',
		method:'POST',
		data
	})
}