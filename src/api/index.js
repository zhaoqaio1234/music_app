import Network from './network'

// 获取banner数据
export const getBanner = () => Network.get('banner?type=2')