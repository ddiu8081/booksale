var app = new Vue({
  el: '#app',
  data: {
    step: 1,
    bookList: [
      {
        id: 1,
        title: '高等数学（上册）',
        img: 'http://image.ddiu.site/img/20190613091358.png!/fw/120',
        isbn: '9787040306606',
        selected: false,
        mount: 1
      }, {
        id: 2,
        title: '高等数学（下册）',
        img: 'http://image.ddiu.site/img/20190613091443.png!/fw/120',
        isbn: '9787040315363',
        selected: false,
        mount: 1
      }, {
        id: 3,
        title: '线性代数与解析几何',
        img: 'http://image.ddiu.site/img/20190613091540.png!/fw/120',
        isbn: '9787030340986',
        selected: false,
        mount: 1
      }, {
        id: 4,
        title: '概率统计与随机过程',
        img: 'http://image.ddiu.site/img/20190613091628.png!/fw/120',
        isbn: '9787115287915',
        selected: false,
        mount: 1
      }, {
        id: 5,
        title: '数学实验',
        img: 'http://image.ddiu.site/img/20190613091754.png!/fw/120',
        isbn: '9787030267146',
        selected: false,
        mount: 1
      }, {
        id: 6,
        title: '大学物理实验',
        img: 'http://image.ddiu.site/img/20190613092456.png!/fw/120',
        isbn: '9787040341096',
        selected: false,
        mount: 1
      }, {
        id: 7,
        title: '思修（2015年修订版）',
        img: 'http://image.ddiu.site/img/20190613092718.png!/fw/120',
        isbn: '9787040431988',
        selected: false,
        mount: 1
      }, {
        id: 8,
        title: '近现代史（2015年修订版）',
        img: 'http://image.ddiu.site/img/20190613092809.png!/fw/120',
        isbn: '9787040431995',
        selected: false,
        mount: 1
      }, {
        id: 9,
        title: '马原（2015年修订版）',
        img: 'http://image.ddiu.site/img/20190613092901.png!/fw/120',
        isbn: '9787040431971',
        selected: false,
        mount: 1
      }, {
        id: 10,
        title: '毛概（2018年版）',
        img: 'http://image.ddiu.site/img/20190613093023.png!/fw/120',
        isbn: '9787040494815',
        selected: false,
        mount: 1
      }, {
        id: 11,
        title: '军事理论教程',
        img: 'http://image.ddiu.site/img/20190613093406.png!/fw/120',
        isbn: '9787305135446',
        selected: false,
        mount: 1
      }, {
        id: 12,
        title: '当代大学生心理健康教育',
        img: 'http://image.ddiu.site/img/20190613094030.png!/fw/120',
        isbn: '9787560283906',
        selected: false,
        mount: 1
      }, {
        id: 13,
        title: 'C语言程序设计(第2版)',
        img: 'http://image.ddiu.site/img/20190613093247.png!/fw/120',
        isbn: '9787115367525',
        selected: false,
        mount: 1
      }, {
        id: 14,
        title: 'C语言程序设计习题解析与实验指导(第2版)',
        img: 'http://image.ddiu.site/img/20190613093619.png!/fw/120',
        isbn: '9787115370457',
        selected: false,
        mount: 1
      }, {
        id: 15,
        title: '全新版大学英语2（第二版）',
        img: 'http://image.ddiu.site/img/20190613094134.png!/fw/120',
        isbn: '9787544637176',
        selected: false,
        mount: 1
      }, {
        id: 16,
        title: '全新版大学英语2 快速阅读',
        img: 'http://image.ddiu.site/img/20190613094252.png!/fw/120',
        isbn: '9787544636582',
        selected: false,
        mount: 1
      }, {
        id: 17,
        title: '全新版大学英语3（第二版）',
        img: 'http://image.ddiu.site/img/20190613094434.png!/fw/120',
        isbn: '9787544637213',
        selected: false,
        mount: 1
      }, {
        id: 18,
        title: '全新版大学英语3 快速阅读',
        img: 'http://image.ddiu.site/img/20190613094530.png!/fw/120',
        isbn: '9787544636599',
        selected: false,
        mount: 1
      }, {
        id: 19,
        title: '全新版大学英语4（第二版）',
        img: 'http://image.ddiu.site/img/20190613094602.png!/fw/120',
        isbn: '9787544637152',
        selected: false,
        mount: 1
      }, {
        id: 20,
        title: '全新版大学英语4 快速阅读',
        img: 'http://image.ddiu.site/img/20190613094644.png!/fw/120',
        isbn: '9787544636605',
        selected: false,
        mount: 1
      }, {
        id: 21,
        title: '模拟电子技术基础（第3版）',
        img: 'http://image.ddiu.site/img/20190613094802.png!/fw/120',
        isbn: '9787111545224',
        selected: false,
        mount: 1
      }, {
        id: 22,
        title: '数字电路与系统设计',
        img: 'http://image.ddiu.site/img/20190613094858.png!/fw/120',
        isbn: '9787115377388',
        selected: false,
        mount: 1
      }, {
        id: 23,
        title: '电路分析基础（第4版）',
        img: 'http://image.ddiu.site/img/20190613094959.png!/fw/120',
        isbn: '9787115382856',
        selected: false,
        mount: 1
      }, {
        id: 24,
        title: '计算机图形学教程',
        img: 'http://image.ddiu.site/img/20190613095048.png!/fw/120',
        isbn: '9787115358004',
        selected: false,
        mount: 1
      }, {
        id: 25,
        title: '数字图像处理与图像通信(第3版)',
        img: 'http://image.ddiu.site/img/20190613095203.png!/fw/120',
        isbn: '9787563539130',
        selected: false,
        mount: 1
      }, {
        id: 26,
        title: 'PhotoShop CS5图形图像处理案例教程（第2版）',
        img: 'http://image.ddiu.site/img/20190613095721.png!/fw/120',
        isbn: '9787301249192',
        selected: false,
        mount: 1
      }, {
        id: 27,
        title: '数字视频策划与制作',
        img: 'http://image.ddiu.site/img/20190613095806.png!/fw/120',
        isbn: '9787121287190',
        selected: false,
        mount: 1
      }, {
        id: 28,
        title: '新视野大学英语：视听说教程2',
        img: 'https://image.ddiu.site/img/20190613100625.png!/fw/120',
        isbn: '9787513556828',
        selected: false,
        mount: 1
      }, {
        id: 29,
        title: '新视野大学英语：视听说教程3',
        img: 'https://image.ddiu.site/img/20190613100706.png!/fw/120',
        isbn: '9787513556835',
        selected: false,
        mount: 1
      }, {
        id: 30,
        title: '新视野大学英语：视听说教程4',
        img: 'https://image.ddiu.site/img/20190613100743.png!/fw/120',
        isbn: '9787513556842',
        selected: false,
        mount: 1
      }, {
        id: 31,
        title: '数据库系统概论（第5版）',
        img: 'https://image.ddiu.site/img/20190613100958.png!/fw/120',
        isbn: '9787040406641',
        selected: false,
        mount: 1
      }, {
        id: 32,
        title: '数字图像处理（MATLAB版）:本科教学版',
        img: 'https://image.ddiu.site/img/20190613101055.png!/fw/120',
        isbn: '9787121201974',
        selected: false,
        mount: 1
      }, {
        id: 33,
        title: '数字图像处理与图像通信（第四版）',
        img: 'https://image.ddiu.site/img/20190613101202.png!/fw/120',
        isbn: '9787513556842',
        selected: false,
        mount: 1
      }, {
        id: 34,
        title: '数字图像处理（第三版）',
        img: 'https://image.ddiu.site/img/20190613101255.png!/fw/120',
        isbn: '9787560635972',
        selected: false,
        mount: 1
      }, {
        id: 35,
        title: '图像工程(上册)',
        img: 'https://image.ddiu.site/img/20190613101358.png!/fw/120',
        isbn: '9787302277675',
        selected: false,
        mount: 1
      }, {
        id: 36,
        title: '数据结构',
        img: 'https://image.ddiu.site/img/20190613101551.png!/fw/120',
        isbn: '9787115184023',
        selected: false,
        mount: 1
      }, {
        id: 37,
        title: '物理学（第六版）上册',
        img: 'https://image.ddiu.site/img/20190613101752.png!/fw/120',
        isbn: '9787040399226',
        selected: false,
        mount: 1
      }, {
        id: 38,
        title: '物理学（第六版）下册',
        img: 'https://image.ddiu.site/img/20190613101824.png!/fw/120',
        isbn: '9787040403909',
        selected: false,
        mount: 1
      }, {
        id: 39,
        title: '电工电子基础实验',
        img: 'https://image.ddiu.site/img/20190613101948.png!/fw/120',
        isbn: '9787115360021',
        selected: false,
        mount: 1
      }, {
        id: 40,
        title: '信号与系统分析',
        img: 'https://image.ddiu.site/img/20190613102539.png!/fw/120',
        isbn: '9787115260765',
        selected: false,
        mount: 1
      }, {
        id: 41,
        title: '网络学术资源检索与利用（第2版）',
        img: 'https://image.ddiu.site/img/20190613102702.png!/fw/120',
        isbn: '9787305117831',
        selected: false,
        mount: 1
      }, {
        id: 42,
        title: 'C#应用程序设计教程',
        img: 'https://image.ddiu.site/img/20190613102737.png!/fw/120',
        isbn: '9787115235275',
        selected: false,
        mount: 1
      }, {
        id: 43,
        title: '二维动画制作基础',
        img: 'https://image.ddiu.site/img/20190613102849.png!/fw/120',
        isbn: '9787502768560',
        selected: false,
        mount: 1
      }, {
        id: 44,
        title: '设计心理学',
        img: 'https://image.ddiu.site/img/20190613103116.png!/fw/120',
        isbn: '9787532283705',
        selected: false,
        mount: 1
      }, {
        id: 45,
        title: '视听心理学',
        img: 'https://image.ddiu.site/img/20190613103222.png!/fw/120',
        isbn: '9787510047817',
        selected: false,
        mount: 1
      }, {
        id: 46,
        title: '摄影与摄像基础教程',
        img: 'https://image.ddiu.site/img/20190613103337.png!/fw/120',
        isbn: '9787115238566',
        selected: false,
        mount: 1
      }, {
        id: 47,
        title: '人机交互设计',
        img: 'https://image.ddiu.site/img/20190613103422.png!/fw/120',
        isbn: '9787121298479',
        selected: false,
        mount: 1
      }, {
        id: 48,
        title: '电脑音乐制作与编配解读',
        img: 'https://image.ddiu.site/img/20190613103520.png!/fw/120',
        isbn: '9787030353245',
        selected: false,
        mount: 1
      }, {
        id: 49,
        title: '网站设计与Web应用开发技术（第二版）',
        img: 'https://image.ddiu.site/img/20190613103602.png!/fw/120',
        isbn: '9787302400233',
        selected: false,
        mount: 1
      }
    ],
    selectedMount: 0,
    selectedBook: [],
    selectIdStr: [],
  },
  mounted() {
    // axios.get('http://api.ddiu.site/book')
    //   .then((res) => {
    //     this.loading = false;
    //     this.bookList = res.data;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
  methods: {
    handleCardClick (item) {
      if (item.mount > 0) {
        if (item.selected) {
          item.selected = false;
          this.selectedMount--;
        } else {
          item.selected = true;
          this.selectedMount++;
        }
      }
    },
    getSelectList () {
      if (this.selectedMount > 0) {
        let selectedBook = [];
        let selectId = [];
        this.bookList.forEach((item) => {
          if (item.selected) {
            selectedBook.push(item);
            selectId.push(item.id);
          }
        })
        this.selectedBook = selectedBook;
        this.selectIdStr = window.btoa(selectId.join('|'));
        this.step = 2;
        // console.log(this.selectIdStr);
      }
    },
    handleBack () {
      this.step = 1;
    }
  }
})
