// pages/line/line.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lineNo: '',
    lineName: '0路',
    isUpDown: '',
    cityCode: '6750',
    stationFirst: '始发站',
    stationLast: '终点站',
    firstTime: '00:00',
    lastTime: '24:00',
    buscount: '0',
    stations: [],
    allinfo: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      lineNo: options.lineNo,
      isUpDown: options.isUpDown
    })
    wx.showLoading({
      title: '加载中',
    })
  },

  getLineInfo: function () {
    // 将全局变量转换为局部变量
    var that = this;
    var lineNo = this.data.lineNo;
    var isUpDown = this.data.isUpDown;
    var cityCode = this.data.cityCode;
    // 发起请求
    wx.request({
      url: 'http://ssgj.cecurs.com:32020/nextbusservice/stationlineinfo/getonelineandstartendinfo ',
      method: 'POST',
      dataType: 'json',
      data: {
        "lineNo": lineNo,
	      "isUpDown": isUpDown,
	      "cityCode": cityCode
      },
      // 如果请求成功(仅网络连通性)
      success: (res) => {
        // 判断API是否返回正常状态
        if (res.data.status == '200') {
          var resultData = res.data.jsonResult;
          var stationsTemp = [];
          // 将站点名字写入数组
          for (var i = 0, len = resultData.linestations.length; i < len; ++i) {
            stationsTemp[i] = resultData.linestations[i].stationName
          }
          // 将获取的信息写入全局变量
          that.setData({
            lineName: resultData.lineInfo.lineName,
            stationFirst: resultData.lineInfo.stationFirst,
            stationLast: resultData.lineInfo.stationLast,
            firstTime: resultData.lineInfo.firstTime,
            lastTime: resultData.lineInfo.lastTime,
            stations: stationsTemp
          })
          that.getRunningInfo();
        } else {
          // 如果API返回异常状态
          wx.showToast({
            title: '请求异常',
            icon: 'none',
          })
        }
      },
      // 如果请求失败(网络连通性)
      fail: function({errMsg}) {
        wx.showToast({
          title: '网络错误',
          icon: 'none',
        })
      }
    })
  },

  getRunningInfo: function () {
    // 将全局变量转换为局部变量
    var that = this;
    var lineNo = this.data.lineNo;
    var isUpDown = this.data.isUpDown;
    var cityCode = this.data.cityCode;
    // 发起请求
    wx.request({
      url: 'http://ssgj.cecurs.com:32020/nextbusservice/stationlineinfo/getrunningbusesbyline',
      method: 'POST',
      dataType: 'json',
      data: {
        "lineNo": lineNo,
	      "isUpDown": isUpDown,
	      "cityCode": cityCode
      },
      // 如果请求成功(仅网络连通性)
      success: (res) => {
        // 判断API是否返回正常状态
        if (res.data.status == '200') {
          var resultData = res.data.jsonResult;
          var runninginfoTemp = new Array();
          // 将运行信息写入
          for (var i = 0, len = resultData.length; i < len; ++i) {
            if (runninginfoTemp.hasOwnProperty(resultData[i].labelNo)) {
              runninginfoTemp[resultData[i].labelNo] = runninginfoTemp[resultData[i].labelNo] + 1
            } else {
              runninginfoTemp[resultData[i].labelNo] = 1
            }
          }
          // 把所有数据写进这个变量中
          var allinfoTemp = []
          for (var i = 0, len = this.data.stations.length; i < len; ++i){
            if (runninginfoTemp.hasOwnProperty(i+1)) {
                allinfoTemp.push({'labelNo': i+1, 'stationName': this.data.stations[i], 'busCount': runninginfoTemp[i+1]})
            } else {
              allinfoTemp.push({'labelNo': i+1, 'stationName': this.data.stations[i], 'busCount': 0})
            }
          }
          // 单个站点车辆最多显示5个前端需要
          for (var i = 0, len = allinfoTemp.length; i < len; ++i){
            if (allinfoTemp[i].busCount > 5) {
              allinfoTemp[i].busCount = 5
            }
          }
          that.setData({
            buscount: resultData.length,
            allinfo: allinfoTemp
          })
          // 设置标题
          wx.setNavigationBarTitle({
            title: this.data.lineName + "（共" + this.data.buscount + "辆车）",
          })
          // 关闭加载动画
          wx.hideLoading({})
        } else {
          // 如果API返回异常状态
          wx.showToast({
            title: '请求异常',
            icon: 'none',
          })
        }
      },
      // 如果请求失败(网络连通性)
      fail: function({errMsg}) {
        wx.showToast({
          title: '网络错误',
          icon: 'none',
        })
      }
    })
  },

  switch_line: function(){
    wx.showLoading({
      title: '加载中',
    })
    var lineNoTemp = this.data.lineNo
    switch (lineNoTemp) {
      case '311':
        lineNoTemp = '312';
        break;
      case '312':
        lineNoTemp = '311';
        break;
      case '301':
        lineNoTemp = '302';
        break;
      case '302':
        lineNoTemp = '301';
        break;
      case '291':
        lineNoTemp = '292';
        break;
      case '292':
        lineNoTemp = '291';
        break;
      case '231':
        lineNoTemp = '232';
        break;
      case '232':
        lineNoTemp = '231';
        break;
    }
    this.setData({
      isUpDown: 1^this.data.isUpDown,
      lineNo: lineNoTemp
    })
    this.onReady()
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getLineInfo();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showLoading({
      title: '加载中',
    })
    this.getLineInfo();
    wx.stopPullDownRefresh()
    setTimeout(function () {
      wx.showToast({
        title: '刷新成功',
        icon: 'success',
      })
     }, 1000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})