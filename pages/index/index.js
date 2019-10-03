// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    linesData: [{ 'lineNo': '251', 'lineName': '25路', 'isUpDown': 1, 'stationFirst': '通川一小站', 'stationLast': '肖公庙公交首末站' }, { 'lineNo': '201', 'lineName': '20路', 'isUpDown': 0, 'stationFirst': '肖公庙公交首末站', 'stationLast': '春兰路口站' }, { 'lineNo': '1001', 'lineName': 'K1路', 'isUpDown': 0, 'stationFirst': '火车站公交枢纽站', 'stationLast': '徐家坝公交首 末站' }, { 'lineNo': '1002', 'lineName': 'K2路', 'isUpDown': 0, 'stationFirst': '客运南站', 'stationLast': '火车站公交枢纽站' }, { 'lineNo': '1003', 'lineName': 'K3路', 'isUpDown': 0, 'stationFirst': '火车站公交枢纽站', 'stationLast': '徐家坝公交首末站' }, { 'lineNo': '1004', 'lineName': 'K4路', 'isUpDown': 0, 'stationFirst': '客运南站', 'stationLast': '徐家坝公交首末站' }, { 'lineNo': '3021', 'lineName': '302路', 'isUpDown': 0, 'stationFirst': '河市机场站', 'stationLast': '华阳酒店' }, { 'lineNo': '3031', 'lineName': '303路', 'isUpDown': 0, 'stationFirst': '河市机场站', 'stationLast': '客运南站' }, { 'lineNo': '11', 'lineName': '1路', 'isUpDown': 0, 'stationFirst': '客运南站', 'stationLast': '职教园区站' }, { 'lineNo': '21', 'lineName': '2路', 'isUpDown': 0, 'stationFirst': '南方医院站', 'stationLast': '徐家坝公交首末站' }, { 'lineNo': '31', 'lineName': '3路', 'isUpDown': 0, 'stationFirst': '江湾城站', 'stationLast': '七河路站' }, { 'lineNo': '41', 'lineName': '4路', 'isUpDown': 0, 'stationFirst': '物流港站', 'stationLast': '肖公庙公交首末站' }, { 'lineNo': '51', 'lineName': '5路', 'isUpDown': 0, 'stationFirst': '七河路站', 'stationLast': '肖公庙公交首末站' }, { 'lineNo': '61', 'lineName': '6路', 'isUpDown': 0, 'stationFirst': '火车站公交枢纽站', 'stationLast': '南方医院站' }, { 'lineNo': '71', 'lineName': '7路', 'isUpDown': 0, 'stationFirst': '火车站公交枢纽站', 'stationLast': '巨全双语学校站' }, { 'lineNo': '81', 'lineName': '8路', 'isUpDown': 0, 'stationFirst': '莱克汽车城站', 'stationLast': '莲花湖湿地公园站' }, { 'lineNo': '91', 'lineName': '9路', 'isUpDown': 0, 'stationFirst': '莲花湖湿地公园站', 'stationLast': '客运南站' }, { 'lineNo': '101', 'lineName': '10路', 'isUpDown': 0, 'stationFirst': '火车站公交枢纽站', 'stationLast': '职教园区站' }, { 'lineNo': '111', 'lineName': '11路', 'isUpDown': 0, 'stationFirst': '火车站公交枢纽站', 'stationLast': '徐家坝公交首末站' }, { 'lineNo': '121', 'lineName': '12路', 'isUpDown': 0, 'stationFirst': '火车站公交枢纽站', 'stationLast': '江湾城站' }, { 'lineNo': '131', 'lineName': '13路', 'isUpDown': 0, 'stationFirst': '黄家坝大桥站', 'stationLast': '肖公庙公交首末站' }, { 'lineNo': '141', 'lineName': '14路', 'isUpDown': 0, 'stationFirst': '莲花湖湿地公园站', 'stationLast': '肖公庙公交首末站' }, { 'lineNo': '151', 'lineName': '15路', 'isUpDown': 0, 'stationFirst': '钢花小区站', 'stationLast': '钢花小区站' }, { 'lineNo': '161', 'lineName': '16路', 'isUpDown': 0, 'stationFirst': '石梁子站', 'stationLast': '莲花湖湿地公园站' }, { 'lineNo': '171', 'lineName': '17路', 'isUpDown': 0, 'stationFirst': '火车站公交枢纽站', 'stationLast': '双龙公交首末站' }, { 'lineNo': '181', 'lineName': '18路', 'isUpDown': 0, 'stationFirst': '莲花湖湿地公园站', 'stationLast': '双龙公交首末站' }, { 'lineNo': '191', 'lineName': '19路', 'isUpDown': 0, 'stationFirst': '莲花湖湿地公园站', 'stationLast': '渠钢站' }, { 'lineNo': '211', 'lineName': '21路', 'isUpDown': 0, 'stationFirst': '铭仁园中学站', 'stationLast': '铭仁园中学站' }, { 'lineNo': '221', 'lineName': '22路', 'isUpDown': 0, 'stationFirst': '铭仁园中学站', 'stationLast': '大东街站' }, { 'lineNo': '231', 'lineName': '23路A', 'isUpDown': 0, 'stationFirst': '肖公庙公交首末站', 'stationLast': '肖公庙公交首末站' }, { 'lineNo': '241', 'lineName': '24路', 'isUpDown': 0, 'stationFirst': '小红旗桥站', 'stationLast': '罗江站站' }, { 'lineNo': '261', 'lineName': '26路', 'isUpDown': 0, 'stationFirst': '彭家湾站', 'stationLast': '吴家沟社区站' }, { 'lineNo': '271', 'lineName': '27路', 'isUpDown': 0, 'stationFirst': '牌 楼站', 'stationLast': '石家湾站' }, { 'lineNo': '281', 'lineName': '28路', 'isUpDown': 0, 'stationFirst': '时代广场站', 'stationLast': '通川区医院站' }, { 'lineNo': '291', 'lineName': '29路A', 'isUpDown': 0, 'stationFirst': '莱克汽车城站', 'stationLast': '莱克汽车城站' }, { 'lineNo': '301', 'lineName': '30路A', 'isUpDown': 0, 'stationFirst': '南坝站', 'stationLast': '塔沱北站' }, { 'lineNo': '311', 'lineName': '31路A', 'isUpDown': 0, 'stationFirst': '莲花湖湿地公园站', 'stationLast': '莲花湖湿地公园站' }, { 'lineNo': '341', 'lineName': '34路', 'isUpDown': 0, 'stationFirst': '环城好一新站', 'stationLast': '肖公庙公交首末站' }, { 'lineNo': '461', 'lineName': '46路', 'isUpDown': 0, 'stationFirst': '环城好一新站', 'stationLast': '南方医院站' }]
  },
  openLine: function(e){
    wx.navigateTo({
      url: '../line/line?lineNo=' + e.currentTarget.dataset.id + '&isUpDown=' + e.currentTarget.dataset.updown
    })
  },

  switchLine: function(e){
    var line_num = e.currentTarget.dataset.id;
    var lineinfoTemp = this.data.linesData[line_num];
    switch (lineinfoTemp.lineNo) {
      case '311':
        lineinfoTemp.lineNo = '312';
        break;
      case '312':
        lineinfoTemp.lineNo = '311';
        break;
      case '301':
        lineinfoTemp.lineNo = '302';
        break;
      case '302':
        lineinfoTemp.lineNo = '301';
        break;
      case '291':
        lineinfoTemp.lineNo = '292';
        break;
      case '292':
        lineinfoTemp.lineNo = '291';
        break;
      case '231':
        lineinfoTemp.lineNo = '232';
        break;
      case '232':
        lineinfoTemp.lineNo = '231';
        break;
    }
    if (lineinfoTemp.lineName.indexOf('A') != -1){
      lineinfoTemp.lineName = lineinfoTemp.lineName.replace('A', 'B')
    } else if (lineinfoTemp.lineName.indexOf('B') != -1){
      lineinfoTemp.lineName = lineinfoTemp.lineName.replace('B', 'A')
    }
    var stationTemp = lineinfoTemp.stationFirst;
    lineinfoTemp.isUpDown = 1^lineinfoTemp.isUpDown;
    lineinfoTemp.stationFirst = lineinfoTemp.stationLast;
    lineinfoTemp.stationLast = stationTemp;
    var lineinfo = this.data.linesData;
    lineinfo[line_num] = lineinfoTemp
    this.setData({
      linesData: lineinfo
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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