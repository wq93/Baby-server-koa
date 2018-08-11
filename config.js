module.exports = {
  port: '3000',
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