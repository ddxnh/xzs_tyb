// 数字的格式化
export function formatNum(num){
	return num >= 1e3 && num < 1e4 ? (num/1e3).toFixed(1)+'k' : num >= 1e4? (num/1e4).toFixed(1) + 'w' :num
}
// 年月的格式化
export function formatDate(value,type=0){
	const time = new Date(value)
	let y = time.getFullYear()
	let m = time.getMonth() + 1 
		m = m < 10 ? '0' + m :m
	let d = time.getDate()
		d = d < 10 ? '0' + d : d
	let hh = time.getHours()
		hh = hh < 10 ? '0' + hh : hh
	let mm = time.getMinutes()
		mm = mm < 10 ? '0' + mm : mm
	
	const arr = [
		`${m}-${d}`,
		`${y}-${m}-${d} ${hh}:${mm}`
	]
	return arr[type]
}