
var firstDayOfSchool = new Date('2016-9-12');
var midDayOfSchool = new Date('2016-11-14');
var finalDayOfSchool = new Date('2017-1-15');

var main = new Vue({
    el: '#vue_body',
    data: {
        title: '105資料結構TA課',
        navItems: [
            { name: 'Online Judge', href: 'http://maselab318.ddns.net:20001/OJ/' },
            { name: '出席狀況', href: '#' }, 
            { name: '作業成績', href: '#' }
        ],
        TAnews: [
            { isNew: false, content: '因老師出國，所以九月份由TA代課，十月份老師會在TA課時補課。'},
        ],
        schedule1: {
            title: '期中考前',
            pro: 0,
            weeks: [
                { w: '第一週', content: '開心中秋節', 
                  ppt: [{
                    name: 'TA課程簡介', href: './ppt/%E7%AC%AC%E4%B8%80%E9%80%B1%E8%AA%B2%E5%A0%82%E7%B0%A1%E4%BB%8B', demo: ''
                  }],
                  homework: [{
                    name: '', href: '#'
                  }]
                },
                { w: '第二週', content: '', 
                  ppt: [{
                    name: 'Coding Style', href: './ppt/105DS_class1_coding_style/', demo: ''
                  }, {
                    name: '迴圈與陣列', href: './ppt/20160922/', demo: './demo/demo1.zip'
                  }],
                  homework: [{
                    name: '簡單迴圈、陣列測驗', href: './ppt/105DS_EasyTest.pdf'
                  }, {
                    name: '作業', href: './ppt/105DS_Homework1.pdf'
                  }]
                },
                { w: '第三週', content: '', 
                  ppt: [{
                    name: '堆疊與佇列', href: './ppt/105DS_Stack_and_Queue.pdf', demo: ''
                  }, {
                    name: '位址與指標', href: './ppt/105DS_Pointer_Address.pdf', demo: ''
                  }, {
                    name: '類別x樣板x結構', href: './ppt/105DS_Class_Template_Struct.pdf', demo: './demo/demo2.zip'
                  }],
                  homework: [{
                    name: '作業：超級堆疊', href: './ppt/105DS_Homework2.pdf'
                  }]
                },
                { w: '第四週', content: '老師補課', 
                  ppt: [{
                    name: '', href: '', demo: ''
                  }],
                  homework: [{
                    name: '', href: '#'
                  }]
                },
                { w: '第五週', content: '老師補課', 
                  ppt: [{
                    name: 'C++效能分析', href: 'ppt/105DS_Measuring/', demo: ''
                  }],
                  homework: [{
                    name: '', href: '#'
                  }]
                },
                { w: '第六週', content: '', 
                  ppt: [{
                    name: '', href: '', demo: ''
                  }],
                  homework: [{
                    name: '', href: '#'
                  }]
                },
                { w: '第七週', content: '', 
                  ppt: [{
                    name: '', href: '', demo: ''
                  }],
                  homework: [{
                    name: '', href: '#'
                  }]
                },
                { w: '第八週', content: '', 
                  ppt: [{
                    name: '', href: '', demo: ''
                  }],
                  homework: [{
                    name: '', href: '#'
                  }]
                },
                { w: '第九週', content: '期中考', 
                  ppt: [{
                    name: '', href: '', demo: ''
                  }],
                  homework: [{
                    name: '', href: '#'
                  }]
                },
            ]
        },
        schedule2: {
            title: '期中考後',
            pro: '0',
            weeks: [
                { w: '第十週', content: '', 
                  ppt: [{
                    name: '', href: '', demo: ''
                  }],
                  homework: [{
                    name: '', href: '#'
                  }]
                },
                { w: '第十一週', content: '', 
                  ppt: [{
                    name: '', href: '', demo: ''
                  }],
                  homework: [{
                    name: '', href: '#'
                  }]
                },
                { w: '第十二週', content: '', 
                  ppt: [{
                    name: '', href: '', demo: ''
                  }],
                  homework: [{
                    name: '', href: '#'
                  }]
                },
                { w: '第十三週', content: '', 
                  ppt: [{
                    name: '', href: '', demo: ''
                  }],
                  homework: [{
                    name: '', href: '#'
                  }]
                },
                { w: '第十四週', content: '', 
                  ppt: [{
                    name: '', href: '', demo: ''
                  }],
                  homework: [{
                    name: '', href: '#'
                  }]
                },
                { w: '第十五週', content: '', 
                  ppt: [{
                    name: '', href: '', demo: ''
                  }],
                  homework: [{
                    name: '', href: '#'
                  }]
                },
                { w: '第十六週', content: '', 
                  ppt: [{
                    name: '', href: '', demo: ''
                  }],
                  homework: [{
                    name: '', href: '#'
                  }]
                },
                { w: '第十七週', content: '', 
                  ppt: [{
                    name: '', href: '', demo: ''
                  }],
                  homework: [{
                    name: '', href: '#'
                  }]
                },
                { w: '第十八週', content: '期末考', 
                  ppt: [{
                    name: '', href: '', demo: ''
                  }],
                  homework: [{
                    name: '', href: '#'
                  }]
                },
            ]
        }
    },
    computed: {
        progress: function () {
            var d = new Date();
            var today = new Date(d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate());
            if (today < midDayOfSchool) {
                this.schedule1.pro = Math.round((today-firstDayOfSchool)/24/60/60/10/63*100)/100;
                this.schedule2.pro = 0;
            } else if (today < finalDayOfSchool) {
                this.schedule1.pro = 100;
                this.schedule2.pro = Math.round((today-midDayOfSchool)/24/60/60/10/63*100)/100;
            } else {
                this.schedule1.pro = this.schedule2.pro = 100;
            }
        }
    }
});
