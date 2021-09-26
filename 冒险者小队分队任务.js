/**
 * Author: Tyllllll
 * Version: 1.0
 * Date: 09/25/2021
 */
;(() => {
  // ①这里写要完成的任务信息
  const missions = [
    [350, 300, 300],

    [410, 145, 270],

    [440, 300, 175],
    [185, 310, 465],
    [310, 480, 170],
    [370, 355, 345],

    // [530, 275, 385],
    // [245, 560, 385],
    // [265, 385, 540],
    // [385, 560, 245],
    // [385, 265, 540],
    // [530, 385, 275],
    // [385, 560, 245],
    // [385, 265, 540],
  ]

  // ①这里写训练获得的点数(总和为200或280或400)
  const trainingPoints = [120, 160, 120]

  // ③展示结果数（0表示所有）
  const IWantTimes = 3

  // ④选择必定使用的队员序号，注释示例表示一定会用1号幻术师和3号斧术师，一般用于练级或吉兆
  const mustUsed = []
  // const mustUsed = [1,3]

  // ⑤这里写你的小队队员信息
  const heros = [
    // 1
    {
      name: '幻术师',
      level: 43,
    },
    // 2
    {
      name: '弓箭手',
      level: 49,
    },
    // 3
    {
      name: '斧术师',
      level: 47,
    },
    // 4
    {
      name: '幻术师',
      level: 47,
    },
    // 5
    {
      name: '枪术师',
      level: 46,
    },
    // 6
    {
      name: '秘术师',
      level: 42,
    },
    // 7
    {
      name: '咒术师',
      level: 41,
    },
    // 8
    {
      name: '剑术师',
      level: 42,
    },
  ]

  // 这里是wiki是数据，不需要更改
  const heroDatas = {
    斧术师: [
      [60, 12, 24],
      [61, 12, 25],
      [63, 12, 25],
      [64, 12, 26],
      [65, 13, 26],
      [66, 13, 27],
      [66, 14, 28],
      [68, 14, 28],
      [70, 14, 28],
      [72, 14, 28],
      [73, 15, 28],
      [74, 15, 29],
      [74, 16, 30],
      [75, 16, 31],
      [77, 16, 31],
      [78, 16, 32],
      [79, 17, 32],
      [80, 17, 33],
      [80, 18, 34],
      [82, 18, 34],
      [84, 18, 34],
      [86, 18, 34],
      [87, 19, 34],
      [88, 19, 35],
      [88, 20, 36],
      [89, 20, 37],
      [91, 20, 37],
      [92, 20, 38],
      [93, 21, 38],
      [94, 21, 39],
      [94, 22, 40],
      [96, 22, 40],
      [98, 22, 40],
      [100, 22, 40],
      [101, 23, 40],
      [102, 23, 41],
      [102, 24, 42],
      [103, 24, 43],
      [105, 24, 43],
      [106, 24, 44],
      [107, 25, 44],
      [108, 25, 45],
      [108, 26, 46],
      [110, 26, 46],
      [112, 26, 46],
      [114, 26, 46],
      [115, 27, 46],
      [116, 27, 47],
      [116, 28, 48],
      [117, 28, 49],
      [119, 28, 49],
      [120, 28, 50],
      [121, 29, 50],
      [122, 29, 51],
      [122, 30, 52],
      [124, 30, 52],
      [126, 30, 52],
      [128, 30, 52],
      [129, 31, 52],
      [130, 31, 53],
    ],
    剑术师: [
      [48, 12, 36],
      [50, 12, 36],
      [52, 12, 36],
      [54, 12, 36],
      [55, 13, 36],
      [56, 13, 37],
      [56, 14, 38],
      [57, 14, 39],
      [59, 14, 39],
      [60, 14, 40],
      [61, 15, 40],
      [62, 15, 41],
      [62, 16, 42],
      [64, 16, 42],
      [66, 16, 42],
      [68, 16, 42],
      [69, 17, 42],
      [70, 17, 43],
      [70, 18, 44],
      [71, 18, 45],
      [73, 18, 45],
      [74, 18, 46],
      [75, 19, 46],
      [76, 19, 47],
      [76, 20, 48],
      [78, 20, 48],
      [80, 20, 48],
      [82, 20, 48],
      [83, 21, 48],
      [84, 21, 49],
      [84, 22, 50],
      [85, 22, 51],
      [87, 22, 51],
      [88, 22, 52],
      [89, 23, 52],
      [90, 23, 53],
      [90, 24, 54],
      [92, 24, 54],
      [94, 24, 54],
      [96, 24, 54],
      [97, 25, 54],
      [98, 25, 55],
      [98, 26, 56],
      [99, 26, 57],
      [101, 26, 57],
      [102, 26, 58],
      [103, 27, 58],
      [104, 27, 59],
      [104, 28, 60],
      [106, 28, 60],
      [108, 28, 60],
      [110, 28, 60],
      [111, 29, 60],
      [112, 29, 61],
      [112, 30, 62],
      [113, 30, 63],
      [115, 30, 63],
      [116, 30, 64],
      [117, 31, 64],
      [118, 31, 65],
    ],
    弓箭手: [
      [12, 12, 72],
      [13, 12, 73],
      [13, 12, 75],
      [14, 12, 76],
      [14, 13, 77],
      [15, 13, 78],
      [16, 14, 78],
      [17, 14, 79],
      [17, 14, 81],
      [18, 14, 82],
      [18, 15, 83],
      [19, 15, 84],
      [20, 16, 84],
      [21, 16, 85],
      [21, 16, 87],
      [22, 16, 88],
      [22, 17, 89],
      [23, 17, 90],
      [24, 18, 90],
      [25, 18, 91],
      [25, 18, 93],
      [26, 18, 94],
      [26, 19, 95],
      [27, 19, 96],
      [28, 20, 96],
      [29, 20, 97],
      [29, 20, 99],
      [30, 20, 100],
      [30, 21, 101],
      [31, 21, 102],
      [32, 22, 102],
      [33, 22, 103],
      [33, 22, 105],
      [34, 22, 106],
      [34, 23, 107],
      [35, 23, 108],
      [36, 24, 108],
      [37, 24, 109],
      [37, 24, 111],
      [38, 24, 112],
      [38, 25, 113],
      [39, 25, 114],
      [40, 26, 114],
      [41, 26, 115],
      [41, 26, 117],
      [42, 26, 118],
      [42, 27, 119],
      [43, 27, 120],
      [44, 28, 120],
      [45, 28, 121],
      [45, 28, 123],
      [46, 28, 124],
      [46, 29, 125],
      [47, 29, 126],
      [48, 30, 126],
      [49, 30, 127],
      [49, 30, 129],
      [50, 30, 130],
      [50, 31, 131],
      [51, 31, 132],
    ],
    双剑师: [
      [24, 12, 60],
      [24, 12, 62],
      [24, 12, 64],
      [24, 12, 66],
      [24, 13, 67],
      [25, 13, 68],
      [26, 14, 68],
      [27, 14, 69],
      [27, 14, 71],
      [28, 14, 72],
      [28, 15, 73],
      [29, 15, 74],
      [30, 16, 74],
      [30, 16, 76],
      [30, 16, 78],
      [30, 16, 80],
      [30, 17, 81],
      [31, 17, 82],
      [32, 18, 82],
      [33, 18, 83],
      [33, 18, 85],
      [34, 18, 86],
      [34, 19, 87],
      [35, 19, 88],
      [36, 20, 88],
      [36, 20, 90],
      [36, 20, 92],
      [36, 20, 94],
      [36, 21, 95],
      [37, 21, 96],
      [38, 22, 96],
      [39, 22, 97],
      [39, 22, 99],
      [40, 22, 100],
      [40, 23, 101],
      [41, 23, 102],
      [42, 24, 102],
      [42, 24, 104],
      [42, 24, 106],
      [42, 24, 108],
      [42, 25, 109],
      [43, 25, 110],
      [44, 26, 110],
      [45, 26, 111],
      [45, 26, 113],
      [46, 26, 114],
      [46, 27, 115],
      [47, 27, 116],
      [48, 28, 116],
      [48, 28, 118],
      [48, 28, 120],
      [48, 28, 122],
      [48, 29, 123],
      [49, 29, 124],
      [50, 30, 124],
      [51, 30, 125],
      [51, 30, 127],
      [52, 30, 128],
      [52, 31, 129],
      [53, 31, 130],
    ],
    枪术师: [
      [36, 12, 48],
      [37, 12, 49],
      [37, 12, 51],
      [38, 12, 52],
      [38, 13, 53],
      [39, 13, 54],
      [40, 14, 54],
      [40, 14, 56],
      [40, 14, 58],
      [40, 14, 60],
      [40, 15, 61],
      [41, 15, 62],
      [42, 16, 62],
      [43, 16, 63],
      [43, 16, 65],
      [44, 16, 66],
      [44, 17, 67],
      [45, 17, 68],
      [46, 18, 68],
      [46, 18, 70],
      [46, 18, 72],
      [46, 18, 74],
      [46, 19, 75],
      [47, 19, 76],
      [48, 20, 76],
      [49, 20, 77],
      [49, 20, 79],
      [50, 20, 80],
      [50, 21, 81],
      [51, 21, 82],
      [52, 22, 82],
      [52, 22, 84],
      [52, 22, 86],
      [52, 22, 88],
      [52, 23, 89],
      [53, 23, 90],
      [54, 24, 90],
      [55, 24, 91],
      [55, 24, 93],
      [56, 24, 94],
      [56, 25, 95],
      [57, 25, 96],
      [58, 26, 96],
      [58, 26, 98],
      [58, 26, 100],
      [58, 26, 102],
      [58, 27, 103],
      [59, 27, 104],
      [60, 28, 104],
      [61, 28, 105],
      [61, 28, 107],
      [62, 28, 108],
      [62, 29, 109],
      [63, 29, 110],
      [64, 30, 110],
      [64, 30, 112],
      [64, 30, 114],
      [64, 30, 116],
      [64, 31, 117],
      [65, 31, 118],
    ],
    格斗家: [
      [36, 24, 36],
      [37, 24, 37],
      [37, 24, 39],
      [38, 24, 40],
      [38, 25, 41],
      [39, 25, 42],
      [40, 26, 42],
      [41, 26, 43],
      [41, 26, 45],
      [42, 26, 46],
      [42, 27, 47],
      [43, 27, 48],
      [44, 28, 48],
      [45, 28, 49],
      [45, 28, 51],
      [46, 28, 52],
      [46, 29, 53],
      [47, 29, 54],
      [48, 30, 54],
      [49, 30, 55],
      [49, 30, 57],
      [50, 30, 58],
      [50, 31, 59],
      [51, 31, 60],
      [52, 32, 60],
      [53, 32, 61],
      [53, 32, 63],
      [54, 32, 64],
      [54, 33, 65],
      [55, 33, 66],
      [56, 34, 66],
      [57, 34, 67],
      [57, 34, 69],
      [58, 34, 70],
      [58, 35, 71],
      [59, 35, 72],
      [60, 36, 72],
      [61, 36, 73],
      [61, 36, 75],
      [62, 36, 76],
      [62, 37, 77],
      [63, 37, 78],
      [64, 38, 78],
      [65, 38, 79],
      [65, 38, 81],
      [66, 38, 82],
      [66, 39, 83],
      [67, 39, 84],
      [68, 40, 84],
      [69, 40, 85],
      [69, 40, 87],
      [70, 40, 88],
      [70, 41, 89],
      [71, 41, 90],
      [72, 42, 90],
      [73, 42, 91],
      [73, 42, 93],
      [74, 42, 94],
      [74, 43, 95],
      [75, 43, 96],
    ],
    幻术师: [
      [12, 72, 12],
      [12, 73, 13],
      [12, 75, 13],
      [12, 76, 14],
      [13, 77, 14],
      [13, 78, 15],
      [14, 78, 16],
      [14, 80, 16],
      [14, 82, 16],
      [14, 84, 16],
      [15, 85, 16],
      [15, 86, 17],
      [16, 86, 18],
      [16, 87, 19],
      [16, 89, 19],
      [16, 90, 20],
      [17, 91, 20],
      [17, 92, 21],
      [18, 92, 22],
      [18, 94, 22],
      [18, 96, 22],
      [18, 98, 22],
      [19, 99, 22],
      [19, 100, 23],
      [20, 100, 24],
      [20, 101, 25],
      [20, 103, 25],
      [20, 104, 26],
      [21, 105, 26],
      [21, 106, 27],
      [22, 106, 28],
      [22, 108, 28],
      [22, 110, 28],
      [22, 112, 28],
      [23, 113, 28],
      [23, 114, 29],
      [24, 114, 30],
      [24, 115, 31],
      [24, 117, 31],
      [24, 118, 32],
      [25, 119, 32],
      [25, 120, 33],
      [26, 120, 34],
      [26, 122, 34],
      [26, 124, 34],
      [26, 126, 34],
      [27, 127, 34],
      [27, 128, 35],
      [28, 128, 36],
      [28, 129, 37],
      [28, 131, 37],
      [28, 132, 38],
      [29, 133, 38],
      [29, 134, 39],
      [30, 134, 40],
      [30, 136, 40],
      [30, 138, 40],
      [30, 140, 40],
      [31, 141, 40],
      [31, 142, 41],
    ],
    咒术师: [
      [12, 60, 24],
      [12, 61, 25],
      [12, 63, 25],
      [12, 64, 26],
      [13, 65, 26],
      [13, 66, 27],
      [14, 66, 28],
      [14, 67, 29],
      [14, 69, 29],
      [14, 70, 30],
      [15, 71, 30],
      [15, 72, 31],
      [16, 72, 32],
      [16, 73, 33],
      [16, 75, 33],
      [16, 76, 34],
      [17, 77, 34],
      [17, 78, 35],
      [18, 78, 36],
      [18, 79, 37],
      [18, 81, 37],
      [18, 82, 38],
      [19, 83, 38],
      [19, 84, 39],
      [20, 84, 40],
      [20, 85, 41],
      [20, 87, 41],
      [20, 88, 42],
      [21, 89, 42],
      [21, 90, 43],
      [22, 90, 44],
      [22, 91, 45],
      [22, 93, 45],
      [22, 94, 46],
      [23, 95, 46],
      [23, 96, 47],
      [24, 96, 48],
      [24, 97, 49],
      [24, 99, 49],
      [24, 100, 50],
      [25, 101, 50],
      [25, 102, 51],
      [26, 102, 52],
      [26, 103, 53],
      [26, 105, 53],
      [26, 106, 54],
      [27, 107, 54],
      [27, 108, 55],
      [28, 108, 56],
      [28, 109, 57],
      [28, 111, 57],
      [28, 112, 58],
      [29, 113, 58],
      [29, 114, 59],
      [30, 114, 60],
      [30, 115, 61],
      [30, 117, 61],
      [30, 118, 62],
      [31, 119, 62],
      [31, 120, 63],
    ],
    秘术师: [
      [12, 48, 36],
      [12, 49, 37],
      [12, 51, 37],
      [12, 52, 38],
      [13, 53, 38],
      [13, 54, 39],
      [14, 54, 40],
      [14, 55, 41],
      [14, 57, 41],
      [14, 58, 42],
      [15, 59, 42],
      [15, 60, 43],
      [16, 60, 44],
      [16, 61, 45],
      [16, 63, 45],
      [16, 64, 46],
      [17, 65, 46],
      [17, 66, 47],
      [18, 66, 48],
      [18, 67, 49],
      [18, 69, 49],
      [18, 70, 50],
      [19, 71, 50],
      [19, 72, 51],
      [20, 72, 52],
      [20, 73, 53],
      [20, 75, 53],
      [20, 76, 54],
      [21, 77, 54],
      [21, 78, 55],
      [22, 78, 56],
      [22, 79, 57],
      [22, 81, 57],
      [22, 82, 58],
      [23, 83, 58],
      [23, 84, 59],
      [24, 84, 60],
      [24, 85, 61],
      [24, 87, 61],
      [24, 88, 62],
      [25, 89, 62],
      [25, 90, 63],
      [26, 90, 64],
      [26, 91, 65],
      [26, 93, 65],
      [26, 94, 66],
      [27, 95, 66],
      [27, 96, 67],
      [28, 96, 68],
      [28, 97, 69],
      [28, 99, 69],
      [28, 100, 70],
      [29, 101, 70],
      [29, 102, 71],
      [30, 102, 72],
      [30, 103, 73],
      [30, 105, 73],
      [30, 106, 74],
      [31, 107, 74],
      [31, 108, 75],
    ],
  }

  const solve = (mission) => {
    // 将heros转换成能力数据
    const abilities = heros.map((val) => {
      const { name, level } = val
      return heroDatas[name][level - 1]
    })
    const res = []
    const dfs = (i, selectedHeros) => {
      if (i > abilities.length) {
        return
      }
      if (
        // 队员总数大于4，要满编4人队
        (abilities.length >= 4 && selectedHeros.length === 4) ||
        // 队员总数小于4，上全部人
        (abilities.length < 4 && selectedHeros.length === abilities.length)
      ) {
        // 需要把[1,2,3]变成[[12,12,12],[12,12,12],[12,12,12]]变成[36,36,36]
        const selectedAbilities = selectedHeros.map((val) => abilities[val])
        const totalAbilities = selectedAbilities.reduce((prev, val) =>
          prev.map((v, index) => v + val[index])
        )
        // 再和mission作差去正(顺便记一下第一个属性的差距)
        const ablilitiesError = totalAbilities.map((val, index) => {
          let error = mission[index] - val
          error = error > 0 ? error : 0
          while (error % 20) {
            error++
          }
          return error
        })
        // 需求总量
        const wanted = arrSum(ablilitiesError)
        // 点数够用但不一定分配的好，可能需要训练
        let x = null
        if (wanted <= totalTrainingPoints) {
          // ablilitiesError与当前训练点数作差，得出需要被线性组合的向量
          const tempB = ablilitiesError.map((val, index) => val - trainingPoints[index])
          // 有正值，需要求解
          if (tempB.some((val) => val > 0)) {
            const A = [
              [40, -20, -20],
              [-20, 40, -20],
              [-20, -20, 40],
            ]
            const b = tempB.map((val) => (val < 0 ? 0 : val))
            x = null
            // 尽量取对富于属性影响小的方式
            while (true) {
              x = columnGauss(3, 3, A.slice(), b.slice())
              if (x !== null) {
                // 要求整数解
                if (x.every(isInteger)) {
                  break
                }
              }
              // 无法训练
              if (b.every((val, index) => val === tempB[index])) {
                x = null
                break
              }
              // 调整需求向量
              for (let i = 0; i < b.length; i++) {
                if (b[i] <= 0 && b[i] > tempB[i]) {
                  b[i] -= 20
                }
              }
            }
          }
        }
        // 这时候x是一个特解，现在要取x的通解的绝对值之和最小
        // 因为此问题的齐次线性方程组的通解为x1=x3,x2=x3
        // 因此对x1,x2,x3同加1或同减1，结果不变
        // 再由于x特解是以x3为0的结果
        // 因此最小化过程变为：当x1,x2不为0且同号时，x1,x2,x3同时加1或减1
        if (x !== null) {
          x[2] = 0
          while (x[0] * x[1] > 0) {
            if (x[0] > 0) {
              x[0]--
              x[1]--
              x[2]--
            } else {
              x[0]++
              x[1]++
              x[2]++
            }
          }
        }
        res.push({
          selectedHeros,
          totalAbilities,
          ablilitiesError,
          wanted,
          trainingProcess: x,
        })
        return
      }
      // 遇到必选的跳过
      if (!mustUsed.includes(i + 1)) {
        dfs(i + 1, [...selectedHeros, i])
      }
      dfs(i + 1, selectedHeros)
    }
    dfs(
      0,
      mustUsed.map((val) => val - 1)
    )

    const success = []
    const maybe = []
    const failer = []

    res.forEach((val) => {
      if (val.ablilitiesError.every((val, index) => val <= trainingPoints[index])) {
        success.push(val)
      } else if (val.trainingProcess !== null) {
        maybe.push(val)
      } else {
        failer.push(val)
      }
    })

    maybe.sort(
      (a, b) =>
        arrSum(a.trainingProcess.map((val) => Math.abs(val))) -
        arrSum(b.trainingProcess.map((val) => Math.abs(val)))
    )
    const satisfy2 = []
    const satisfy1 = []
    const satisfy0 = []
    failer.forEach((val) => {
      const { ablilitiesError } = val
      let count = 0
      for (let i = 0; i < ablilitiesError.length; i++) {
        if (ablilitiesError[i] <= trainingPoints[i]) {
          count++
        }
      }
      switch (count) {
        case 0:
          satisfy0.push(val)
          break
        case 1:
          satisfy1.push(val)
          break
        case 2:
          satisfy2.push(val)
          break
        default:
          break
      }
    })
    return { success, maybe, failer: { satisfy2, satisfy1, satisfy0 } }
  }

  // 计算训练点数总和
  const totalTrainingPoints = arrSum(trainingPoints)
  // res是{ success, maybe, failer{} }的数组，对应每项任务
  const res = missions.map((val) => solve(val))

  const logRes = (val, index) => {
    const { selectedHeros, totalAbilities, ablilitiesError, wanted, trainingProcess } = val
    console.log(`第${index + 1}种结果：`)
    let selectedHerosStr = ''
    selectedHeros
      .sort((a, b) => a - b)
      .forEach((val) => {
        selectedHerosStr += `${val + 1}号${heros[val].name}，`
      })
    console.log(selectedHerosStr)
    if (trainingProcess !== null) {
      console.log(`小队队员属性为：${totalAbilities.join(', ')}，共计${arrSum(totalAbilities)}点`)
      console.log(`需要训练点数为：${ablilitiesError.join(', ')}，共计${wanted}点。`)
      console.log(`建议训练次数：${arrSum(trainingProcess.map((val) => Math.abs(val)))}`)
      console.log(`建议训练过程：`)
      if (trainingProcess[0] > 0) {
        console.log(`40/-20/-20训练${trainingProcess[0]}次`)
      } else if (trainingProcess[0] < 0) {
        console.log(`-40/20/20训练${-trainingProcess[0]}次`)
      }
      if (trainingProcess[1] > 0) {
        console.log(`-20/40/-20训练${trainingProcess[1]}次`)
      } else if (trainingProcess[1] < 0) {
        console.log(`20/-40/20训练${-trainingProcess[1]}次`)
      }
      if (trainingProcess[2] > 0) {
        console.log(`-20/-20/40训练${trainingProcess[2]}次`)
      } else if (trainingProcess[2] < 0) {
        console.log(`20/20/40训练${-trainingProcess[2]}次`)
      }
    }
  }
  const filterDisplayTimes = (_, __) => (IWantTimes === 0 ? true : __ < IWantTimes)

  // 从这里开始输出
  console.log('结果如下，队员前序号代表其对应位置，防止多个同名队员无法判别。')
  res.forEach((val, index) => {
    const {
      success,
      maybe,
      failer: { satisfy2, satisfy1, satisfy0 },
    } = val

    console.log(`******************************`)
    console.log(`**         第${index + 1}项任务         **`)
    console.log(`******************************`)
    // 输出必定成功
    console.log(
      `必定成功的有${success.length}种(显示${IWantTimes === 0 ? '全部' : IWantTimes}种)：`
    )
    success.filter(filterDisplayTimes).forEach(logRes)
    if (success.length === 0) {
      // 输出可能成功
      console.log(
        `未必成功但可以训练成功的有${maybe.length}种，以训练次数由小到大排序(显示${
          IWantTimes === 0 ? '全部' : IWantTimes
        }种)：`
      )
      maybe.filter(filterDisplayTimes).forEach(logRes)
      // 输出不能成功
      if (maybe.length === 0) {
        console.log(
          `两项属性达标的有${satisfy2.length}种(显示${IWantTimes === 0 ? '全部' : IWantTimes}种)：`
        )
        satisfy2.filter(filterDisplayTimes).forEach(logRes)
        if (satisfy2.length === 0) {
          console.log(
            `其中两项属性达标的有${satisfy1.length}种(显示${
              IWantTimes === 0 ? '全部' : IWantTimes
            }种)：`
          )
          satisfy1.filter(filterDisplayTimes).forEach(logRes)
          if (satisfy1.length === 0) {
            console.log(
              `其中两项属性达标的有${satisfy0.length}种(显示${
                IWantTimes === 0 ? '全部' : IWantTimes
              }种)：`
            )
            satisfy0.filter(filterDisplayTimes).forEach(logRes)
          }
        }
      }
    }
    // // 求推荐顺序
    // const recommendOrder = []
    // if (success.length !== 0) {
    //   recommendOrder.push((index + 1) * 10000)
    // } else if (maybe.length !== 0) {
    //   recommendOrder.push(
    //     (10 - maybe[0].trainingProcess.reduce((_, __) => _ + Math.abs(__), 0)) * 100 + index
    //   )
    // } else {
    //   recommendOrder.push(99 - index) //最大99
    // }
  })
  console.log(`-------------------------------------------`)
  // for (let i = 0; i < missions.length; i++) {
  //   const index = recommendOrder.indexOf(Math.max(...recommendOrder))
  //   console.log(`第${i + 1}推荐完成第${index + 1}个任务`)
  //   recommendOrder[index] = 0
  // }
  console.log('此结果不包含吉兆，请根据实际进行选择。')
  console.log('以上结果仅供参考，队员属性数据来源为灰机wiki最终幻想XIV中文维基。')
  console.log('作者：梅利奥达夫 旅人栈桥。')

  function columnGauss(row, col, A, b) {
    let shifter = 0
    // 前代
    for (let k = 0; k < col - 1; k++) {
      // 一行的首元素是0，找有没有不是0的，交换两行，同时b也要交换
      if (!A[k][k]) {
        for (let i = k + 1; i < row; i++) {
          if (A[i][k]) {
            let swapTemp = A[i]
            A[i] = A[k]
            A[k] = swapTemp
            swapTemp = b[i]
            b[i] = b[k]
            b[k] = swapTemp
            break
          }
        }
        // 还为0，说明未交换，说明这一列下全是0，shifter用于错位削元
        if (!A[k][k]) {
          shifter++
        }
      }
      // 第一行不用变，从第二行开始
      for (let i = k + 1; i < row; i++) {
        const tempk = A[i][k + shifter] / A[k][k + shifter]
        A[i] = A[i].map((num, index) => -A[k][index] * tempk + num)
        b[i] = -b[k] * tempk + b[i]
      }
    }
    let rA = row
    let rAb = row
    // 求A矩阵和Ab增广矩阵的秩
    for (let i = row - 1; i >= 0; i--) {
      let sumA = 0
      sumA += A[i].reduce((prev, val) => prev + Math.abs(val))
      if (!sumA) {
        rA--
        if (!b[i]) {
          rAb--
        }
      } else {
        break
      }
    }
    // 判断方程解的个数
    if (rA < rAb) {
      // console.log('方程组无解')
      return null
    } else {
      if (rA < col) {
        // console.log(`方程组有无穷多解，取x${rA + 1}${rA + 1 !== col ? '至x' + col : ''}为0`)
        const newA = []
        for (let i = 0; i < rA; i++) {
          newA.push([...A[i].filter((_, __) => __ < rA)])
        }
        const newB = b.filter((_, __) => __ < rA)
        return columnGauss(rA, rA, newA, newB)
      } else if (rA > col) {
        // console.log('方程组无解')
        return null
      } else {
        // 唯一解，回代
        const x = []
        for (let i = row - 1; i >= 0; i--) {
          let k = b[i]
          for (let j = col - 1; j > i; j--) {
            k -= A[i][j] * x[j]
          }
          x[i] = k / A[i][i]
        }
        return x
      }
    }
  }

  function arrSum(arr) {
    return arr.reduce((_, __) => _ + __)
  }

  function isInteger(obj) {
    return typeof obj === 'number' && obj % 1 === 0
  }
})()
