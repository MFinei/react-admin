import { ReqMethodEnum } from './ReqMethodEnum';
/*
 * @Descripttion:
 * @version:
 * @Author: MFine
 * @Date: 2020-09-28 21:45:10
 * @LastEditors: MFine
 * @LastEditTime: 2020-11-02 16:52:10
 */
import { message } from 'antd';
import Axios from 'axios';

export default function ajax<T>(url: string, data: {} = {}, method: ReqMethodEnum = ReqMethodEnum.GET): Promise<T> {
	return new Promise((resolve, rejects) => {
		let promise: Promise<T>;
		switch (method) {
			case ReqMethodEnum.GET:
				promise = Axios.get(url, { params: data });
				break;
			case ReqMethodEnum.POST:
        promise = Axios.post(url, data);
        break;
			default:
				promise = Axios.put(url, data);
				break;
		}
		promise
			.then((response: any) => {
				resolve(response.data);
			})
			.catch((error) => {
				message.error('请求出错：' + error.message);
			});
	});
}
