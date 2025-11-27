// 从原始index.html中提取的完整JavaScript代码

// Tailwind配置
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        success: '#10B981',
        danger: '#EF4444',
        warning: '#F59E0B',
        info: '#06B6D4'
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }
    }
  }
}

// 页面内容数据
const smartContentHTML = `
        <!-- 筛选条件 -->
        <div class="bg-white rounded-xl border border-neutral-200 shadow-card p-4 mb-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- 口味标签和按钮区域 -->
              <div class="flex items-end justify-between">
                <div class="flex-1">
                  <label class="block text-sm font-medium text-neutral-700 mb-3">口味标签</label>
                  <div class="flex gap-2 whitespace-nowrap overflow-x-auto pb-2">
                    <button class="bg-neutral-100 text-neutral-700 text-xs px-3 py-1.5 rounded-full hover:bg-green-50 transition-custom">开胃</button>
                    <button class="bg-neutral-100 text-neutral-700 text-xs px-3 py-1.5 rounded-full hover:bg-green-50 transition-custom">清淡</button>
                    <button class="bg-neutral-100 text-neutral-700 text-xs px-3 py-1.5 rounded-full hover:bg-green-50 transition-custom">减脂</button>
                    <button class="bg-neutral-100 text-neutral-700 text-xs px-3 py-1.5 rounded-full hover:bg-green-50 transition-custom">滋补</button>
                    <button class="bg-neutral-100 text-neutral-700 text-xs px-3 py-1.5 rounded-full hover:bg-green-50 transition-custom">套餐</button>
                    <button class="bg-neutral-100 text-neutral-700 text-xs px-3 py-1.5 rounded-full hover:bg-green-50 transition-custom">想尝鲜？</button>
                  </div>
                </div>
                <div class="ml-6">
                  <button class="flex items-center bg-green-100 hover:bg-green-200 text-green-700 px-4 py-2 rounded-lg transition-custom whitespace-nowrap">
                    <i class="ri-refresh-line mr-2"></i>
                    <span class="text-sm font-medium">智能推荐</span>
                  </button>
                </div>
              </div>
          </div>
        </div>
        
        <!-- 推荐餐厅列表 -->
        <div class="mb-4">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold text-neutral-800">为你推荐的餐厅</h3>
            <button class="text-green-600 text-sm font-medium flex items-center hover:underline">
              <span>查看全部</span>
              <i class="ri-arrow-right-s-line ml-1.5"></i>
            </button>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- 湘悦楼 -->
            <div class="bg-white rounded-xl border border-neutral-200 shadow-card overflow-hidden hover:shadow-hover transition-custom">
              <div class="w-full h-40 overflow-hidden">
                <img class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="湘悦楼餐厅" src="https://picsum.photos/id/292/400/300">
              </div>
              
              <div class="p-5">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="text-neutral-800 font-semibold">湘悦楼</h4>
                  <div class="flex items-center text-neutral-500 text-xs">
                    <i class="ri-map-pin-line mr-1"></i>
                    <span>500米</span>
                  </div>
                </div>
                
                <p class="text-neutral-500 text-sm mb-4">人均 ¥85 | 湘菜 | 营业中</p>
                
                <h5 class="text-neutral-700 text-sm font-medium mb-2">推荐菜品</h5>
                
                <div class="flex gap-3 overflow-x-auto scrollbar-hide pb-2 mb-4">
                  <div class="min-w-[112px]">
                    <div class="w-full h-24 rounded-lg overflow-hidden mb-2">
                      <img class="w-full h-full object-cover" alt="剁椒鱼头" src="https://picsum.photos/id/1080/200/200">
                    </div>
                    <p class="text-neutral-800 text-sm font-medium mb-1 truncate">剁椒鱼头</p>
                    <div class="flex justify-between items-center">
                      <span class="text-green-600 text-sm font-bold">¥68</span>
                      <div class="flex items-center text-neutral-500 text-xs">
                        <i class="ri-bolt-line text-amber-500 mr-1"></i>
                        <span>420kcal</span>
                      </div>
                    </div>
                  </div>
                  
                  <div class="min-w-[112px]">
                    <div class="w-full h-24 rounded-lg overflow-hidden mb-2">
                      <img class="w-full h-full object-cover" alt="麻婆豆腐" src="https://picsum.photos/id/102/200/200">
                    </div>
                    <p class="text-neutral-800 text-sm font-medium mb-1 truncate">麻婆豆腐</p>
                    <div class="flex justify-between items-center">
                      <span class="text-green-600 text-sm font-bold">¥28</span>
                      <div class="flex items-center text-neutral-500 text-xs">
                        <i class="ri-bolt-line text-amber-500 mr-1"></i>
                        <span>310kcal</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button class="w-full py-2 border border-green-600 text-green-600 text-sm font-medium rounded-lg hover:bg-green-50 transition-custom">
                  查看完整菜单
                </button>
              </div>
            </div>
            
            <!-- 沪上小馆 -->
            <div class="bg-white rounded-xl border border-neutral-200 shadow-card overflow-hidden hover:shadow-hover transition-custom">
              <div class="w-full h-40 overflow-hidden">
                <img class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="沪上小馆餐厅" src="https://picsum.photos/id/431/400/300">
              </div>
              
              <div class="p-5">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="text-neutral-800 font-semibold">沪上小馆</h4>
                  <div class="flex items-center text-neutral-500 text-xs">
                    <i class="ri-map-pin-line mr-1"></i>
                    <span>800米</span>
                  </div>
                </div>
                
                <p class="text-neutral-500 text-sm mb-4">人均 ¥75 | 本帮菜 | 营业中</p>
                
                <h5 class="text-neutral-700 text-sm font-medium mb-2">推荐菜品</h5>
                
                <div class="flex gap-3 overflow-x-auto scrollbar-hide pb-2 mb-4">
                  <div class="min-w-[112px]">
                    <div class="w-full h-24 rounded-lg overflow-hidden mb-2">
                      <img class="w-full h-full object-cover" alt="清蒸鲈鱼" src="https://picsum.photos/id/1080/200/200">
                    </div>
                    <p class="text-neutral-800 text-sm font-medium mb-1 truncate">清蒸鲈鱼</p>
                    <div class="flex justify-between items-center">
                      <span class="text-green-600 text-sm font-bold">¥88</span>
                      <div class="flex items-center text-neutral-500 text-xs">
                        <i class="ri-bolt-line text-amber-500 mr-1"></i>
                        <span>320kcal</span>
                      </div>
                    </div>
                  </div>
                  
                  <div class="min-w-[112px]">
                    <div class="w-full h-24 rounded-lg overflow-hidden mb-2">
                      <img class="w-full h-full object-cover" alt="红烧肉" src="https://picsum.photos/id/292/200/200">
                    </div>
                    <p class="text-neutral-800 text-sm font-medium mb-1 truncate">红烧肉</p>
                    <div class="flex justify-between items-center">
                      <span class="text-green-600 text-sm font-bold">¥68</span>
                      <div class="flex items-center text-neutral-500 text-xs">
                        <i class="ri-bolt-line text-amber-500 mr-1"></i>
                        <span>520kcal</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button class="w-full py-2 border border-green-600 text-green-600 text-sm font-medium rounded-lg hover:bg-green-50 transition-custom">
                  查看完整菜单
                </button>
              </div>
            </div>
            
            <!-- 饮食小Tips -->
            <div class="bg-gradient-to-br from-green-400 to-green-600 rounded-xl shadow-card overflow-hidden hover:shadow-hover transition-custom">
              <div class="h-16 flex items-center justify-center">
                <h4 class="text-white text-lg font-bold text-center">饮食小Tips</h4>
              </div>
              
              <div class="bg-white p-4">
                <div class="space-y-3">
                  <div class="bg-green-50 rounded-lg p-3">
                    <h6 class="text-green-700 text-xs font-medium mb-1">🚫 食物相克</h6>
                    <p class="text-neutral-600 text-xs leading-tight">牛奶 + 橙子 = 消化不良</p>
                    <p class="text-neutral-500 text-xs leading-tight">牛奶中的蛋白质与橙子中的果酸结合会凝固，影响消化吸收</p>
                  </div>
                  
                  <div class="bg-orange-50 rounded-lg p-3">
                    <h6 class="text-orange-700 text-xs font-medium mb-1">💊 用药提醒</h6>
                    <p class="text-neutral-600 text-xs leading-tight">头孢类药物 + 酒精 = 双硫仑反应</p>
                    <p class="text-neutral-500 text-xs leading-tight">服药期间饮酒可能导致面部潮红、心悸、呼吸困难等严重反应</p>
                  </div>
                  
                  <div class="bg-blue-50 rounded-lg p-3">
                    <h6 class="text-blue-700 text-xs font-medium mb-1">🍎 健康建议</h6>
                    <p class="text-neutral-600 text-xs leading-tight">降压药 + 西柚 = 血压过低</p>
                    <p class="text-neutral-500 text-xs leading-tight">西柚会抑制药物代谢，导致药效增强，可能引起头晕、乏力等不适</p>
                  </div>
                </div>
                
                <button class="w-full py-1.5 bg-green-100 hover:bg-green-200 text-green-700 text-xs font-medium rounded-lg transition-custom mt-3">
                  查看更多建议
                </button>
              </div>
            </div>
          </div>
        </div>`;

// 胡同小馆内容
const hutongContentHTML = `
        <style>
          .restaurant-info {
            background-color: white;
            border-radius: 15px;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
            margin-bottom: 30px;
            position: relative;
            overflow: hidden;
            display: flex;
            gap: 20px;
          }
          
          .restaurant-image-container {
            flex-shrink: 0;
            width: 300px;
            height: 200px;
            position: relative;
          }
          
          .restaurant-image-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 8px;
            height: 200px;
            background: linear-gradient(to bottom, #93c5fd, #60a5fa);
            border-radius: 8px 0 0 8px;
          }
          
          .restaurant-content {
            flex: 1;
            padding: 25px;
          }
          
          @media (max-width: 768px) {
            .restaurant-info {
              flex-direction: column;
            }
            
            .restaurant-image-container {
              width: 100%;
              height: 200px;
            }
            
            .restaurant-image {
              border-radius: 15px 15px 0 0;
            }
            
            .restaurant-image-container::before {
              border-radius: 8px 8px 0 0;
            }
          }
          
          .restaurant-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
          }
          
          .restaurant-name {
            font-size: 32px;
            color: #3b82f6;
            font-weight: 700;
          }
          
          .restaurant-details {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
            margin-bottom: 20px;
          }
          
          .detail-item {
            display: flex;
            align-items: center;
            font-size: 16px;
          }
          
          .detail-item i {
            margin-right: 10px;
            color: #60a5fa;
            width: 20px;
            text-align: center;
          }
          
          .restaurant-description {
            font-size: 14px;
            color: #666;
            margin-bottom: 10px;
            line-height: 1.5;
          }
          
          .restaurant-image {
            width: 100%;
            height: 200px;
            border-radius: 15px 0 0 15px;
            object-fit: cover;
          }
          
          .specials {
            display: grid;
            grid-template-columns: 1fr;
            gap: 25px;
            margin-bottom: 30px;
          }
          
          .special-card {
            background-color: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
          }
          
          .special-header {
            background: linear-gradient(135deg, #dbeafe, #93c5fd);
            color: #1e40af;
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          
          .special-title {
            font-size: 20px;
            font-weight: 700;
          }
          
          .specia.special-date {
            font-size: 14px;
            opacity: 0.9;
          }
          
          .special-content {
            padding: 20px;
          }
          
          .week-specials {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 15px;
          }
          
          .week-special-item {
            text-align: center;
            padding: 15px 10px;
            border-radius: 10px;
            background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
            transition: all 0.3s ease;
          }
          
          .week-special-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          }
          
          .week-special-item.active {
            background: linear-gradient(135deg, #93c5fd, #60a5fa);
            color: white;
          }
          
          .day {
            font-size: 14px;
            margin-bottom: 8px;
            opacity: 0.8;
          }
          
          .dish-name {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 8px;
          }
          
          .dish-price {
            font-size: 18px;
            font-weight: 700;
            color: #e74c3c;
          }
          
          .week-special-item.active .dish-price {
            color: white;
          }
          
          .dishes-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          }
          
          .dishes-table th {
            background-color: #dbeafe;
            padding: 15px;
            text-align: left;
            font-weight: 600;
            color: #1e40af;
          }
          
          .dishes-table th:first-child {
            width: 80px;
            text-align: center;
          }
          
          .dishes-table td:first-child {
            text-align: center;
            padding: 10px;
          }
          
          .dishes-table td {
            padding: 15px;
            border-bottom: 1px solid #f0e6d8;
          }
          
          .dishes-table tr:last-child td {
            border-bottom: none;
          }
          
          .dishes-table tr:hover {
            background-color: #eff6ff;
          }
          
          .dishes-table-container {
            max-height: 280px;
            overflow-y: auto;
            border-radius: 10px;
            border: 1px solid #e0f2fe;
          }
          
          .dish-preview-image {
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            border-radius: 6px;
            width: 50px;
            height: 40px;
            font-size: 12px;
          }
          
          .dish-tags {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
          }
          
          .dish-tag {
            background: linear-gradient(135deg, #93c5fd, #60a5fa);
            color: white;
            padding: 3px 8px;
            border-radius: 12px;
            font-size: 12px;
          }
        </style>
        
        <!-- 餐厅信息 -->
        <section class="restaurant-info">
          <div class="restaurant-image-container">
            <img src="https://picsum.photos/id/326/800/600" alt="胡同小馆餐厅环境" class="restaurant-image">
          </div>
          <div class="restaurant-content">
            <div class="restaurant-header">
              <h1 class="restaurant-name">胡同小馆</h1>
            </div>
            <div class="restaurant-details">
              <div class="detail-item">
                <i class="ri-map-pin-line"></i>
                <span>公司东侧胡同内30米</span>
              </div>
              <div class="detail-item">
                <i class="ri-time-line"></i>
                <span>10:00-21:00</span>
              </div>
              <div class="detail-item">
                <i class="ri-phone-line"></i>
                <span>010-12345678</span>
              </div>
            </div>
            <p class="restaurant-description">
              传统北京风格餐厅，地道小吃和家常菜，环境雅致，口味正宗。
            </p>
          </div>
        </section>

        <!-- 特价菜品 -->
        <section class="specials">
          <!-- 本周特价 -->
          <div class="special-card">
            <div class="special-header">
              <div class="special-title">本周特价</div>
              <div class="special-date">11.25-12.01</div>
            </div>
            <div class="special-content">
              <div class="week-specials">
                <div class="week-special-item active">
                  <div class="day">周一</div>
                  <div class="dish-name">宫保鸡丁</div>
                  <div class="dish-price">￥22</div>
                </div>
                <div class="week-special-item">
                  <div class="day">周二</div>
                  <div class="dish-name">鱼香肉丝</div>
                  <div class="dish-price">￥20</div>
                </div>
                <div class="week-special-item">
                  <div class="day">周三</div>
                  <div class="dish-name">京酱肉丝</div>
                  <div class="dish-price">￥19</div>
                </div>
                <div class="week-special-item">
                  <div class="day">周四</div>
                  <div class="dish-name">糖醋里脊</div>
                  <div class="dish-price">￥24</div>
                </div>
                <div class="week-special-item">
                  <div class="day">周五</div>
                  <div class="dish-name">木须肉</div>
                  <div class="dish-price">￥21</div>
                </div>
                <div class="week-special-item">
                  <div class="day">周六</div>
                  <div class="dish-name">红烧肉</div>
                  <div class="dish-price">￥28</div>
                </div>
                <div class="week-special-item">
                  <div class="day">周日</div>
                  <div class="dish-name">白切鸡</div>
                  <div class="dish-price">￥26</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 全部菜品 -->
        <section class="special-card">
          <div class="special-header">
            <div class="special-title">全部菜品</div>
          </div>
          <div class="special-content">
            <div class="dishes-table-container">
              <table class="dishes-table">
                <thead>
                  <tr>
                    <th>预览</th>
                    <th>菜品名称</th>
                    <th>价格</th>
                    <th>能量值</th>
                    <th>口味标签</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="dish-preview-image" style="background-color: #60a5fa;">
                        肉夹馍
                      </div>
                    </td>
                    <td>老北京肉夹馍</td>
                    <td>¥22</td>
                    <td>320kcal</td>
                    <td>
                      <div class="dish-tags">
                        <span class="dish-tag">主食</span>
                        <span class="dish-tag">开胃</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="dish-preview-image" style="background-color: #93c5fd;">
                        水饺
                      </div>
                    </td>
                    <td>三鲜水饺</td>
                    <td>¥30</td>
                    <td>280kcal</td>
                    <td>
                      <div class="dish-tags">
                        <span class="dish-tag">主食</span>
                        <span class="dish-tag">清淡</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="dish-preview-image" style="background-color: #3b82f6;">
                        香锅
                      </div>
                    </td>
                    <td>麻辣香锅</td>
                    <td>¥48</td>
                    <td>520kcal</td>
                    <td>
                      <div class="dish-tags">
                        <span class="dish-tag">爱辣</span>
                        <span class="dish-tag">开胃</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="dish-preview-image" style="background-color: #1d4ed8;">
                        豆腐脑
                      </div>
                    </td>
                    <td>嫩豆腐脑</td>
                    <td>¥8</td>
                    <td>120kcal</td>
                    <td>
                      <div class="dish-tags">
                        <span class="dish-tag">早餐</span>
                        <span class="dish-tag">清淡</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="dish-preview-image" style="background-color: #2563eb;">
                        煎饼
                      </div>
                    </td>
                    <td>杂粮煎饼</td>
                    <td>¥12</td>
                    <td>280kcal</td>
                    <td>
                      <div class="dish-tags">
                        <span class="dish-tag">早餐</span>
                        <span class="dish-tag">主食</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>`;

// 攸州小镇内容  
const xiaozhenContentHTML = `
        <style>
          .restaurant-info {
            background-color: white;
            border-radius: 15px;
            padding: 25px;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
            margin-bottom: 30px;
            position: relative;
            overflow: hidden;
          }
          
          .restaurant-image-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 8px;
            height: 200px;
            background: linear-gradient(to bottom, #fbbf24, #f59e0b);
            border-radius: 8px 0 0 8px;
          }
          
          .restaurant-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
          }
          
          .restaurant-name {
            font-size: 32px;
            color: #f59e0b;
            font-weight: 700;
          }
          
          .restaurant-details {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
            margin-bottom: 20px;
          }
          
          .detail-item {
            display: flex;
            align-items: center;
            font-size: 16px;
          }
          
          .detail-item i {
            margin-right: 10px;
            color: #fbbf24;
            width: 20px;
            text-align: center;
          }
          
          .restaurant-description {
            font-size: 16px;
            color: #666;
            margin-bottom: 15px;
            line-height: 1.7;
          }
          
          .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
          }
          
          .tag {
            background: linear-gradient(135deg, #fef3c7, #fde68a);
            color: #d97706;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 500;
          }
          
          .specials {
            display: grid;
            grid-template-columns: 1fr;
            gap: 25px;
            margin-bottom: 30px;
          }
          
          .special-card {
            background-color: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
          }
          
          .special-header {
            background: linear-gradient(135deg, #fef3c7, #fbbf24);
            color: #d97706;
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          
          .special-title {
            font-size: 20px;
            font-weight: 700;
          }
          
          l-date {
            font-size: 14px;
            opacity: 0.9;
          }
          
          .special-content {
            padding: 20px;
          }
          
          .week-specials {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 15px;
          }
          
          .week-special-item {
            text-align: center;
            padding: 15px 10px;
            border-radius: 10px;
            background: linear-gradient(135deg, #fffbeb, #fef3c7);
            transition: all 0.3s ease;
          }
          
          .week-special-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          }
          
          .week-special-item.active {
            background: linear-gradient(135deg, #fbbf24, #f59e0b);
            color: white;
          }
          
          .day {
            font-size: 14px;
            margin-bottom: 8px;
            opacity: 0.8;
          }
          
          .dish-name {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 8px;
          }
          
          .dish-price {
            font-size: 18px;
            font-weight: 700;
            color: #e74c3c;
          }
          
          .week-special-item.active .dish-price {
            color: white;
          }
          
          .dishes-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          }
          
          .dishes-table th {
            background-color: #fef3c7;
            padding: 15px;
            text-align: left;
            font-weight: 600;
            color: #d97706;
          }
          
          .dishes-table th:first-child {
            width: 80px;
            text-align: center;
          }
          
          .dishes-table td:first-child {
            text-align: center;
            padding: 10px;
          }
          
          .dishes-table td {
            padding: 15px;
            border-bottom: 1px solid #fde68a;
          }
          
          .dishes-table tr:last-child td {
            border-bottom: none;
          }
          
          .dishes-table tr:hover {
            background-color: #fffbeb;
          }
          
          .dishes-table-container {
            max-height: 280px;
            overflow-y: auto;
            border-radius: 10px;
            border: 1px solid #fde68a;
          }
          
          .dish-preview-image {
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            border-radius: 6px;
            width: 50px;
            height: 40px;
            font-size: 12px;
          }
          
          .dish-tags {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
          }
          
          .dish-tag {
            background: linear-gradient(135deg, #fbbf24, #f59e0b);
            color: white;
            padding: 3px 8px;
            border-radius: 12px;
            font-size: 12px;
          }
        </style>
        
        <!-- 餐厅信息 -->
        <section class="restaurant-info">
          <div class="restaurant-image-container">
            <img src="https://picsum.photos/id/504/800/600" alt="攸州小镇餐厅环境" class="restaurant-image">
          </div>
          <div class="restaurant-content">
            <div class="restaurant-header">
              <h1 class="restaurant-name">攸州小镇</h1>
            </div>
            <div class="restaurant-details">
              <div class="detail-item">
                <i class="ri-map-pin-line"></i>
                <span>公司西侧商业街2楼</span>
              </div>
              <div class="detail-item">
                <i class="ri-time-line"></i>
                <span>11:00-22:00</span>
              </div>
              <div class="detail-item">
                <i class="ri-phone-line"></i>
                <span>010-87654321</span>
              </div>
            </div>
            <p class="restaurant-description">
              融合湖南风味的特色餐厅，正宗湘菜和创新菜品，环境时尚温馨。
            </p>
            <div class="tags">
              <span class="tag">湘菜</span>
              <span class="tag">创意菜</span>
              <span class="tag">环境时尚</span>
              <span class="tag">适合聚餐</span>
            </div>
          </div>
        </section>

        <!-- 特价菜品 -->
        <section class="specials">
          <!-- 本周特价 -->
          <div class="special-card">
            <div class="special-header">
              <div class="special-title">本周特价</div>
              <div class="special-date">11.25-12.01</div>
            </div>
            <div class="special-content">
              <div class="week-specials">
                <div class="week-special-item active">
                  <div class="day">周一</div>
                  <div class="dish-name">剁椒鱼头</div>
                  <div class="dish-price">￥58</div>
                </div>
                <div class="week-special-item">
                  <div class="day">周二</div>
                  <div class="dish-name">口水鸡</div>
                  <div class="dish-price">￥32</div>
                </div>
                <div class="week-special-item">
                  <div class="day">周三</div>
                  <div class="dish-name">毛血旺</div>
                  <div class="dish-price">￥45</div>
                </div>
                <div class="week-special-item">
                  <div class="day">周四</div>
                  <div class="dish-name">辣子鸡</div>
                  <div class="dish-price">￥38</div>
                </div>
                <div class="week-special-item">
                  <div class="day">周五</div>
                  <div class="dish-name">糖醋排骨</div>
                  <div class="dish-price">￥42</div>
                </div>
                <div class="week-special-item">
                  <div class="day">周六</div>
                  <div class="dish-name">麻辣香锅</div>
                  <div class="dish-price">￥48</div>
                </div>
                <div class="week-special-item">
                  <div class="day">周日</div>
                  <div class="dish-name">水煮鱼</div>
                  <div class="dish-price">￥52</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 全部菜品 -->
        <section class="special-card">
          <div class="special-header">
            <div class="special-title">全部菜品</div>
          </div>
          <div class="special-content">
            <div class="dishes-table-container">
              <table class="dishes-table">
                <thead>
                  <tr>
                    <th>预览</th>
                    <th>菜品名称</th>
                    <th>价格</th>
                    <th>能量值</th>
                    <th>口味标签</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="dish-preview-image" style="background-color: #fbbf24;">
                        剁椒鱼头
                      </div>
                    </td>
                    <td>剁椒鱼头</td>
                    <td>¥58</td>
                    <td>420kcal</td>
                    <td>
                      <div class="dish-tags">
                        <span class="dish-tag">招牌</span>
                        <span class="dish-tag">爱辣</span>
                 </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="dish-preview-image" style="background-color: #f59e0b;">
                        口水鸡
                      </div>
                    </td>
                    <td>口水鸡</td>
                    <td>¥32</td>
                    <td>280kcal</td>
                    <td>
                      <div class="dish-tags">
                        <span class="dish-tag">凉菜</span>
                        <span class="dish-tag">开胃</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="dish-preview-image" style="background-color: #d97706;">
                        毛血旺
                      </div>
                    </td>
                    <td>毛血旺</td>
                    <td>¥52</td>
                    <td>380kcal</td>
                    <td>
                      <div class="dish-tags">
                        <span class="dish-tag">爱辣</span>
                        <span class="dish-tag">下饭</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="dish-preview-image" style="background-color: #b45309;">
                        辣子鸡
                      </div>
                    </td>
                    <td>辣子鸡</td>
                    <td>¥45</td>
                    <td>350kcal</td>
                    <td>
                      <div class="dish-tags">
                        <span class="dish-tag">爱辣</span>
                        <span class="dish-tag">下酒</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="dish-preview-image" style="background-color: #92400e;">
                        糖醋排骨
                      </div>
                    </td>
                    <td>糖醋排骨</td>
                    <td>¥48</td>
                    <td>420kcal</td>
                    <td>
                      <div class="dish-tags">
                        <span class="dish-tag">酸甜</span>
                        <span class="dish-tag">下饭</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>`;

// 页面初始化和事件处理
document.addEventListener('DOMContentLoaded', function() {
  // 获取DOM元素
  const smartTab = document.getElementById('smart-tab');
  const hutongTab = document.getElementById('hutong-tab');
  const xiaozhenTab = document.getElementById('xiaozhen-tab');
  const smartContent = document.getElementById('smart-content');
  const hutongContent = document.getElementById('hutong-content');
  const xiaozhenContent = document.getElementById('xiaozhen-content');

  // 初始化智能推荐页面
  smartContent.innerHTML = smartContentHTML;
  
  // 初始化标签交互
  initTasteTags();

  // Tab切换函数
  function switchTab(activeTab, inactiveTabs) {
    // 激活当前tab
    activeTab.classList.remove('text-neutral-500');
    activeTab.classList.add('text-primary', 'border-b-2', 'border-primary');
    
    // 取消激活其他tabs
    inactiveTabs.forEach(tab => {
      tab.classList.remove('text-primary', 'border-b-2', 'border-primary');
      tab.classList.add('text-neutral-500');
    });
  }

  // 显示内容函数
  function showContent(targetElement, content) {
    // 隐藏所有内容
    smartContent.style.display = 'none';
    hutongContent.style.display = 'none';
    xiaozhenContent.style.display = 'none';
    
    // 显示目标内容
    targetElement.style.display = 'block';
    if (content) {
      targetElement.innerHTML = content;
    }
  }

  // 绑定事件监听器
  smartTab.addEventListener('click', () => {
    switchTab(smartTab, [hutongTab, xiaozhenTab]);
    showContent(smartContent);
    setTimeout(initTasteTags, 100);
  });

  hutongTab.addEventListener('click', () => {
    switchTab(hutongTab, [smartTab, xiaozhenTab]);
    showContent(hutongContent, hutongContentHTML);
  });

  xiaozhenTab.addEventListener('click', () => {
    switchTab(xiaozhenTab, [smartTab, hutongTab]);
    showContent(xiaozhenContent, xiaozhenContentHTML);
  });

  // 标签点击交互效果
  function initTasteTags() {
    const tags = document.querySelectorAll('#smart-content .flex.gap-2.whitespace-nowrap button');
    tags.forEach(tag => {
      tag.addEventListener('click', function() {
        // 切换激活状态
        if (this.textContent === '想尝鲜？') {
          // "想尝鲜？"标签可以单独激活，不影响其他标签
          this.classList.toggle('bg-green-100');
          this.classList.toggle('text-green-600');
          this.classList.toggle('bg-neutral-100');
          this.classList.toggle('text-neutral-700');
        } else {
          // 其他标签互斥
          tags.forEach(t => {
            if (t !== this && t.textContent !== '想尝鲜？') {
              t.classList.remove('bg-green-100', 'text-green-600');
              t.classList.add('bg-neutral-100', 'text-neutral-700');
            }
          });
          // 切换当前标签状态
          this.classList.toggle('bg-green-100');
          this.classList.toggle('text-green-600');
          this.classList.toggle('bg-neutral-100');
          this.classList.toggle('text-neutral-700');
        }
      });
    });
  }
});