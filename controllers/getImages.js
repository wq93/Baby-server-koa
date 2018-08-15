/********************访问数据库的实现方式************************/
const {Images} = require('../db')
module.exports = async (ctx, next) => {
  try {
    let list = await Images.find()
    ctx.body = {
      code: 0,
      data: {
        list,
        msg: list.length ? 'success' : '暂无数据'
      }
    }
  } catch (e) {
    ctx.state = {
      code: -1,
      data: {
        errorInfo: e,
        msg: '失败'
      },
    }
  }
}


/********************直接读取文件夹的实现方式************************/

// const fs = require('fs')
// const path = require('path');//解析需要遍历的文件夹
//
// module.exports = async (ctx, next) => {
//   let filePath = path.resolve('./public/images')
//   let list = []
//   //文件遍历方法
//   let fileDisplay = (filePath) => {
//     //根据文件路径读取文件，返回文件列表
//     return new Promise((resolve, reject) => {
//       fs.readdir(filePath, function (err, files) {
//         if (err) {
//           reject(err)
//         } else {
//           //遍历读取到的文件列表
//           files.forEach(function (filename) {
//             //获取当前文件的绝对路径
//             var filedir = path.join(filePath, filename);
//
//             let imageSaveTime = filename.split('❤')[1].split('.')[0]
//             let imageName = filename.split('❤')[0]
//             let imageURL = `http://localhost:3000/images/${filename}`
//             list.push({
//               imageSaveTime, imageName, imageURL
//             })
//             //根据文件路径获取文件信息，返回一个fs.Stats对象
//             // fs.stat(filedir, function (eror, stats) {
//             //   if (eror) {
//             //     console.warn('获取文件stats失败');
//             //   } else {
//             //     var isFile = stats.isFile();//是文件
//             //     var isDir = stats.isDirectory();//是文件夹
//             //     if (isFile) {
//             //       // 读取文件内容
//             //       //var content = fs.readFileSync(filedir, 'utf-8');
//             //     }
//             //     if (isDir) {
//             //       fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
//             //     }
//             //   }
//             // })
//           })
//           resolve(list)
//         }
//       })
//     })
//
//   }
//   try {
//     //调用文件遍历方法
//     list = await fileDisplay(filePath)
//     // 支持按 添加图片时间段 筛选 , 图片名字查找
//     ctx.body = {
//       code: 0,
//       data: {
//         list,
//         msg: list.length ? '' : '暂无图片数据'
//       }
//     }
//   } catch (e) {
//     ctx.body = {
//       code: -1,
//       data: {
//         msg: '获取图片列表失败'
//       }
//     }
//   }
//
// }