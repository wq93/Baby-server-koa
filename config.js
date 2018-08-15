module.exports = {
  port: '3000',
  splitMark: '___wq93Baby___',
  baseImageURL: 'http://localhost:3000/images/',
  async findList(collectionType, keyword) {
    let list = []
    try {
      list = await collectionType.find(keyword)
    } catch (e) {
      list = []
    }
    return list
  }
}