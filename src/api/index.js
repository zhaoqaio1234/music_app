import Network from './network'

// 获取banner数据
export const getBanner = () => Network.get('banner?type=2')
// 获取推荐歌单
export const getPersonalized = () => Network.get('personalized?limit=6')
// 获取最新专辑
export const getNewAlbum = () => Network.get('album/newest')
// 获取最新音乐
export const getSongList = () => Network.get('personalized/newsong')
// 获取播放列表
export const getPlayList = (data) => Network.get('playlist/detail', data)
// 获取最新专列表
export const getAlbum = (data) => Network.get('album', data)