const baseURL = 'https://tea.qingnian8.com/'
export function request(params){
	let dataObj = params.data || {}
	let headerObj = {
		'content-type': 'application/json'    
	}
	return new Promise((resolve,reject) => {
		wx.request({
		  url:baseURL + params.url,
		  data:dataObj,
		  header:headerObj,
		  method:params.method || "GET",
		  success:res => {
			  if(res.data.errCode != 0){
				  reject(res.data)
				  wx.showToast({
					title: res.data.errMsg,
					mask:true,
					icon:'error'
				  })
				  return;
			  }
			  resolve(res.data)
		  },
		  fail:err => reject(err)
		})
	})
}
