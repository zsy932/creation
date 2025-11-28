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
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- 口味标签和按钮区域 -->
              <div class="flex items-center justify-between">
                <div class="flex-1">
                  <label class="block text-sm font-medium text-neutral-700 mb-3">口味标签</label>
                  <div class="flex gap-2 overflow-x-auto pb-2">
                    <button class="bg-gradient-to-r from-green-100 to-green-200 text-green-700 text-sm px-4 py-2 rounded-full hover:from-green-200 hover:to-green-300 transition-all duration-300 shadow-sm hover:shadow-md font-medium whitespace-nowrap">🍃 开胃</button>
                    <button class="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 text-sm px-4 py-2 rounded-full hover:from-blue-200 hover:to-blue-300 transition-all duration-300 shadow-sm hover:shadow-md font-medium whitespace-nowrap">💧 清淡</button>
                    <button class="bg-gradient-to-r from-pink-100 to-pink-200 text-pink-700 text-sm px-4 py-2 rounded-full hover:from-pink-200 hover:to-pink-300 transition-all duration-300 shadow-sm hover:shadow-md font-medium whitespace-nowrap">🏃‍♀️ 减脂</button>
                    <button class="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 text-sm px-4 py-2 rounded-full hover:from-orange-200 hover:to-orange-300 transition-all duration-300 shadow-sm hover:shadow-md font-medium whitespace-nowrap">🍯 滋补</button>
                    <button class="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 text-sm px-4 py-2 rounded-full hover:from-purple-200 hover:to-purple-300 transition-all duration-300 shadow-sm hover:shadow-md font-medium whitespace-nowrap">🍱 套餐</button>
                    <button class="bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-700 text-sm px-4 py-2 rounded-full hover:from-yellow-200 hover:to-yellow-300 transition-all duration-300 shadow-sm hover:shadow-md font-medium whitespace-nowrap">✨ 想尝鲜？</button>
                  </div>
                </div>
                <div class="ml-6 flex-shrink-0 self-end pb-2">
                  <button class="flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg font-medium whitespace-nowrap">
                    <i class="ri-refresh-line mr-2"></i>
                    <span>智能推荐</span>
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
              
              <div class="bg-white p-5 h-full flex flex-col justify-between">
                <div class="space-y-4">
                  <div class="bg-green-50 rounded-lg p-4 flex-1">
                    <h6 class="text-green-700 text-sm font-medium mb-2 flex items-center">🚫 食物相克</h6>
                    <p class="text-neutral-600 text-sm leading-relaxed">牛奶 + 橙子 = 消化不良</p>
                    <p class="text-neutral-500 text-xs leading-relaxed mt-1">牛奶中的蛋白质与橙子中的果酸结合会凝固，影响消化吸收</p>
                  </div>
                  
                  <div class="bg-orange-50 rounded-lg p-4 flex-1">
                    <h6 class="text-orange-700 text-sm font-medium mb-2 flex items-center">💊 用药提醒</h6>
                    <p class="text-neutral-600 text-sm leading-relaxed">头孢类药物 + 酒精 = 双硫仑反应</p>
                    <p class="text-neutral-500 text-xs leading-relaxed mt-1">服药期间饮酒可能导致面部潮红、心悸、呼吸困难等严重反应</p>
                  </div>
                  
                  <div class="bg-blue-50 rounded-lg p-4 flex-1">
                    <h6 class="text-blue-700 text-sm font-medium mb-2 flex items-center">🍎 健康建议</h6>
                    <p class="text-neutral-600 text-sm leading-relaxed">降压药 + 西柚 = 血压过低</p>
                    <p class="text-neutral-500 text-xs leading-relaxed mt-1">西柚会抑制药物代谢，导致药效增强，可能引起头晕、乏力等不适</p>
                  </div>
                </div>
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
            height: 160px;
            position: relative;
          }
          
          .restaurant-image-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 8px;
            height: 160px;
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
            height: 160px;
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
        <section class="restaurant-info" style="height: 160px;">
          <div class="restaurant-image-container">
            <img src="https://picsum.photos/id/326/800/600" alt="胡同小馆餐厅环境" class="restaurant-image">
          </div>
          <div class="restaurant-content">
            <div class="restaurant-header">
              <div class="flex items-center space-x-4">
                <h1 class="restaurant-name">胡同小馆</h1>
                <span class="text-neutral-600 text-base font-medium">传统北京风格餐厅，地道小吃和家常菜</span>
              </div>
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

        <!-- 智能推荐菜品组合 -->
        <section class="special-card">
          <div class="special-header">
            <div class="special-title">智能推荐菜品组合</div>
            <div class="flex items-center space-x-2">
              <div class="text-sm opacity-90">根据人均价格 + 人数 + 口味智能搭配</div>
              <div class="flex space-x-2">
                <button id="combo-recommend-btn" class="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg font-medium text-sm whitespace-nowrap">
                  <i class="ri-magic-line mr-1"></i>
                  智能搭配
                </button>
                <button id="reset-filters-btn" class="bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg font-medium text-sm whitespace-nowrap">
                  <i class="ri-refresh-line mr-1"></i>
                  重置筛选
                </button>
              </div>
            </div>
          </div>
          <div class="special-content">
            <!-- 筛选条件 -->
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 mb-6">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <!-- 口味偏好 -->
                <div>
                  <label class="block text-sm font-medium text-blue-800 mb-3">口味偏好</label>
                  <div class="flex gap-3 flex-wrap">
                    <button class="taste-filter bg-blue-100 text-blue-700 text-sm px-3 py-1.5 rounded-full hover:bg-blue-200 transition-all duration-300 font-medium" data-taste="开胃">🍃 开胃</button>
                    <button class="taste-filter bg-blue-100 text-blue-700 text-sm px-3 py-1.5 rounded-full hover:bg-blue-200 transition-all duration-300 font-medium" data-taste="清淡">💧 清淡</button>
                    <button class="taste-filter bg-red-100 text-red-700 text-sm px-3 py-1.5 rounded-full hover:bg-red-200 transition-all duration-300 font-medium" data-taste="爱辣">🌶️ 爱辣</button>
                  </div>
                </div>
                
                <!-- 用餐人数 -->
                <div>
                  <label class="block text-sm font-medium text-blue-800 mb-3">用餐人数</label>
                  <div class="flex gap-3 flex-wrap">
                    <button class="people-filter bg-orange-100 text-orange-700 text-sm px-3 py-1.5 rounded-full hover:bg-orange-200 transition-all duration-300 font-medium" data-people="1">👤 1人</button>
                    <button class="people-filter bg-orange-100 text-orange-700 text-sm px-3 py-1.5 rounded-full hover:bg-orange-200 transition-all duration-300 font-medium" data-people="2">👥 2人</button>
                    <button class="people-filter bg-orange-100 text-orange-700 text-sm px-3 py-1.5 rounded-full hover:bg-orange-200 transition-all duration-300 font-medium" data-people="3-4">👨‍👩‍👧 3-4人</button>
                    <button class="people-filter bg-orange-100 text-orange-700 text-sm px-3 py-1.5 rounded-full hover:bg-orange-200 transition-all duration-300 font-medium" data-people="5+">👨‍👩‍👧‍👦 5人+</button>
                  </div>
                </div>
                
                <!-- 人均预算 -->
                <div>
                  <label class="block text-sm font-medium text-blue-800 mb-3">人均预算</label>
                  <div class="flex gap-3 flex-wrap">
                    <button class="budget-filter bg-green-100 text-green-700 text-sm px-3 py-1.5 rounded-full hover:bg-green-200 transition-all duration-300 font-medium" data-budget="20">💰 20元以下</button>
                    <button class="budget-filter bg-yellow-100 text-yellow-700 text-sm px-3 py-1.5 rounded-full hover:bg-yellow-200 transition-all duration-300 font-medium" data-budget="30">💎 30元以下</button>
                    <button class="budget-filter bg-purple-100 text-purple-700 text-sm px-3 py-1.5 rounded-full hover:bg-purple-200 transition-all duration-300 font-medium" data-budget="50">👑 50元以下</button>
                  </div>
                </div>
          </div>
          
          
            </div>
            
            <!-- 推荐结果 -->
            <div id="combo-results" class="hidden">
              <h4 class="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                <i class="ri-lightbulb-line mr-2"></i>
                智能搭配方案
              </h4>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div id="combo-menu" class="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4">
                  <!-- 菜单搭配将在这里显示 -->
                </div>
                <div id="combo-summary" class="bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-200 rounded-lg p-4">
                  <!-- 搭配总结将在这里显示 -->
                </div>
              </div>
            </div>
            
            <!-- 默认显示推荐搭配 -->
            <div id="default-combos">
              <h4 class="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                <i class="ri-star-line mr-2"></i>
                精选搭配推荐
              </h4>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <!-- 经济实惠组合 -->
                <div class="bg-white border border-green-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div class="flex items-center justify-between mb-3">
                    <h5 class="font-semibold text-gray-800">💰 经济套餐</h5>
                    <div class="text-green-600 font-bold">¥25/人</div>
                  </div>
                  <div class="text-sm text-gray-600 mb-3">适合1-2人，性价比之选</div>
                  <div class="space-y-2">
                    <div class="flex justify-between text-sm">
                      <span>杂粮煎饼</span>
                      <span class="text-blue-600">¥12</span>
                    </div>
                    <div class="flex justify-between text-sm">
                      <span>嫩豆腐脑</span>
                      <span class="text-blue-600">¥8</span>
                    </div>
                    <div class="flex justify-between text-sm">
                      <span>三鲜水饺(3个)</span>
                      <span class="text-blue-600">¥15</span>
                    </div>
                  </div>
                  <div class="mt-3 pt-3 border-t border-gray-200">
                    <div class="flex justify-between text-sm font-medium">
                      <span>总计</span>
                      <span class="text-green-600">¥35</span>
                    </div>
                  </div>
                </div>
                
                <!-- 经典搭配组合 -->
                <div class="bg-white border border-blue-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div class="flex items-center justify-between mb-3">
                    <h5 class="font-semibold text-gray-800">🥢 经典组合</h5>
                    <div class="text-blue-600 font-bold">¥35/人</div>
                  </div>
                  <div class="text-sm text-gray-600 mb-3">适合2-3人，传统美味</div>
                  <div class="space-y-2">
                    <div class="flex justify-between text-sm">
                      <span>老北京肉夹馍</span>
                      <span class="text-blue-600">¥22</span>
                    </div>
                    <div class="flex justify-between text-sm">
                      <span>酸辣汤</span>
                      <span class="text-blue-600">¥15</span>
                    </div>
                    <div class="flex justify-between text-sm">
                      <span>拌小菜</span>
                      <span class="text-blue-600">¥8</span>
                    </div>
                  </div>
                  <div class="mt-3 pt-3 border-t border-gray-200">
                    <div class="flex justify-between text-sm font-medium">
                      <span>总计</span>
                      <span class="text-blue-600">¥45</span>
                    </div>
                  </div>
                </div>
                
                <!-- 家庭分享组合 -->
                <div class="bg-white border border-purple-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div class="flex items-center justify-between mb-3">
                    <h5 class="font-semibold text-gray-800">👨‍👩‍👧 家庭套餐</h5>
                    <div class="text-purple-600 font-bold">¥40/人</div>
                  </div>
                  <div class="text-sm text-gray-600 mb-3">适合4-6人，丰富多样</div>
                  <div class="space-y-2">
                    <div class="flex justify-between text-sm">
                      <span>麻辣香锅</span>
                      <span class="text-purple-600">¥48</span>
                    </div>
                    <div class="flex justify-between text-sm">
                      <span>北京炸酱面</span>
                      <span class="text-purple-600">¥25</span>
                    </div>
                    <div class="flex justify-between text-sm">
                      <span>家常豆腐</span>
                      <span class="text-purple-600">¥28</span>
                    </div>
                    <div class="flex justify-between text-sm">
                      <span>米饭</span>
                      <span class="text-purple-600">¥10</span>
                    </div>
                  </div>
                  <div class="mt-3 pt-3 border-t border-gray-200">
                    <div class="flex justify-between text-sm font-medium">
                      <span>总计</span>
                      <span class="text-purple-600">¥111</span>
                    </div>
                  </div>
                </div>
              </div>
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
            height: 160px;
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
        <section class="restaurant-info" style="height: 160px;">
          <div class="restaurant-image-container">
            <img src="https://picsum.photos/id/504/800/600" alt="攸州小镇餐厅环境" class="restaurant-image">
          </div>
          <div class="restaurant-content">
            <div class="restaurant-header">
              <div class="flex items-center space-x-4">
                <h1 class="restaurant-name">攸州小镇</h1>
                <span class="text-neutral-600 text-base font-medium">融合湖南风味的特色餐厅，正宗湘菜和创新菜品</span>
              </div>
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
              环境时尚温馨。
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

  // 内容缓存标志
  let contentInitialized = {
    smart: false,
    hutong: false,
    xiaozhen: false
  };

  // 初始化智能推荐页面
  smartContent.innerHTML = smartContentHTML;
  contentInitialized.smart = true;
  
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
  function showContent(targetElement, content, contentType) {
    // 隐藏所有内容
    smartContent.style.display = 'none';
    hutongContent.style.display = 'none';
    xiaozhenContent.style.display = 'none';
    
    // 显示目标内容
    targetElement.style.display = 'block';
    
    // 只在第一次加载时设置内容
    if (content && !contentInitialized[contentType]) {
      targetElement.innerHTML = content;
      contentInitialized[contentType] = true;
    }
  }

  // 绑定事件监听器
  smartTab.addEventListener('click', () => {
    switchTab(smartTab, [hutongTab, xiaozhenTab]);
    showContent(smartContent, null, 'smart');
    setTimeout(initTasteTags, 100);
  });

  hutongTab.addEventListener('click', () => {
    switchTab(hutongTab, [smartTab, xiaozhenTab]);
    showContent(hutongContent, hutongContentHTML, 'hutong');
    setTimeout(initComboSystem, 100);
  });

  xiaozhenTab.addEventListener('click', () => {
    switchTab(xiaozhenTab, [smartTab, hutongTab]);
    showContent(xiaozhenContent, xiaozhenContentHTML, 'xiaozhen');
  });

  // 智能搭配功能
  function initComboSystem() {
    const comboBtn = document.getElementById('combo-recommend-btn');
    const resetBtn = document.getElementById('reset-filters-btn');
    const comboResults = document.getElementById('combo-results');
    const defaultCombos = document.getElementById('default-combos');
    const comboMenu = document.getElementById('combo-menu');
    const comboSummary = document.getElementById('combo-summary');
    const budgetFilters = document.querySelectorAll('.budget-filter');
    const peopleFilters = document.querySelectorAll('.people-filter');
    const tasteFilters = document.querySelectorAll('.taste-filter');

    let selectedBudget = '';
    let selectedPeople = '';
    let selectedTastes = [];

    // 菜品数据
    const dishes = [
      { name: '老北京肉夹馍', price: 22, tags: ['主食', '开胃'], portion: 'single' },
      { name: '三鲜水饺', price: 30, tags: ['主食', '清淡'], portion: 'single' },
      { name: '麻辣香锅', price: 48, tags: ['爱辣', '开胃'], portion: 'sharing' },
      { name: '嫩豆腐脑', price: 8, tags: ['早餐', '清淡'], portion: 'single' },
      { name: '杂粮煎饼', price: 12, tags: ['早餐', '主食'], portion: 'single' },
      { name: '北京炸酱面', price: 25, tags: ['主食', '开胃'], portion: 'single' },
      { name: '宫保鸡丁', price: 38, tags: ['爱辣', '开胃'], portion: 'sharing' },
      { name: '家常豆腐', price: 28, tags: ['清淡', '主食'], portion: 'sharing' },
      { name: '酸辣汤', price: 15, tags: ['清淡', '开胃'], portion: 'single' },
      { name: '红烧肉', price: 45, tags: ['开胃'], portion: 'sharing' },
      { name: '拌小菜', price: 8, tags: ['清淡'], portion: 'single' },
      { name: '米饭', price: 10, tags: ['主食'], portion: 'sharing' }
    ];

    // 人均价格选择
    budgetFilters.forEach(filter => {
      filter.addEventListener('click', function() {
        budgetFilters.forEach(f => {
          f.classList.remove('bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'text-white');
          f.classList.add('text-green-700', 'text-yellow-700', 'text-purple-700');
          if (f.dataset.budget === '20') f.classList.add('bg-green-100');
          if (f.dataset.budget === '30') f.classList.add('bg-yellow-100');
          if (f.dataset.budget === '50') f.classList.add('bg-purple-100');
        });
        
        if (this.dataset.budget === '20') {
          this.classList.remove('bg-green-100', 'text-green-700');
          this.classList.add('bg-green-500', 'text-white');
        } else if (this.dataset.budget === '30') {
          this.classList.remove('bg-yellow-100', 'text-yellow-700');
          this.classList.add('bg-yellow-500', 'text-white');
        } else if (this.dataset.budget === '50') {
          this.classList.remove('bg-purple-100', 'text-purple-700');
          this.classList.add('bg-purple-500', 'text-white');
        }
        
        selectedBudget = this.dataset.budget;
      });
    });

    // 人数选择
    peopleFilters.forEach(filter => {
      filter.addEventListener('click', function() {
        peopleFilters.forEach(f => {
          f.classList.remove('bg-orange-500', 'text-white');
          f.classList.add('bg-orange-100', 'text-orange-700');
        });
        
        this.classList.remove('bg-orange-100', 'text-orange-700');
        this.classList.add('bg-orange-500', 'text-white');
        
        selectedPeople = this.dataset.people;
      });
    });

    // 口味偏好选择
    tasteFilters.forEach(filter => {
      filter.addEventListener('click', function() {
        const taste = this.dataset.taste;
        
        if (this.classList.contains('bg-blue-500')) {
          // 取消选择
          this.classList.remove('bg-blue-500', 'text-white');
          this.classList.add('bg-blue-100', 'text-blue-700');
          selectedTastes = selectedTastes.filter(t => t !== taste);
        } else {
          // 选择
          this.classList.remove('bg-blue-100', 'text-blue-700');
          this.classList.add('bg-blue-500', 'text-white');
          selectedTastes.push(taste);
        }
      });
    });

    // 智能搭配按钮
    comboBtn.addEventListener('click', function() {
      if (!selectedBudget || !selectedPeople) {
        alert('请选择人均预算和用餐人数');
        return;
      }
      
      const combos = generateCombos(selectedBudget, selectedPeople, selectedTastes);
      displayComboResults(combos);
      comboResults.classList.remove('hidden');
      defaultCombos.classList.add('hidden');
    });

    // 重置按钮
    resetBtn.addEventListener('click', function() {
      // 重置所有选择
      budgetFilters.forEach(f => {
        f.classList.remove('bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'text-white');
        if (f.dataset.budget === '20') f.classList.add('bg-green-100', 'text-green-700');
        if (f.dataset.budget === '30') f.classList.add('bg-yellow-100', 'text-yellow-700');
        if (f.dataset.budget === '50') f.classList.add('bg-purple-100', 'text-purple-700');
      });
      
      peopleFilters.forEach(f => {
        f.classList.remove('bg-orange-500', 'text-white');
        f.classList.add('bg-orange-100', 'text-orange-700');
      });
      
      tasteFilters.forEach(f => {
        f.classList.remove('bg-blue-500', 'text-white');
        f.classList.add('bg-blue-100', 'text-blue-700');
      });
      
      selectedBudget = '';
      selectedPeople = '';
      selectedTastes = [];
      
      comboResults.classList.add('hidden');
      defaultCombos.classList.remove('hidden');
    });

    // 生成搭配组合
    function generateCombos(budget, people, tastes) {
      const budgetLimit = parseInt(budget);
      const peopleCount = people === '1' ? 1 : 
                         people === '2' ? 2 : 
                         people === '3-4' ? 3.5 : 
                         people === '5+' ? 5 : 1;
      const totalBudget = budgetLimit * peopleCount;
      
      // 根据人数和口味筛选菜品
      let filteredDishes = dishes.filter(dish => {
        let tasteMatch = tastes.length === 0 || tastes.some(taste => dish.tags.includes(taste));
        
        // 人数适配
        let peopleMatch = true;
        if (people === '1') {
          peopleMatch = dish.portion === 'single';
        } else if (people === '3-4' || people === '5+') {
          peopleMatch = dish.portion === 'sharing';
        }
        
        return tasteMatch && peopleMatch && dish.price <= totalBudget;
      });
      
      // 生成搭配方案
      let combos = [];
      
      if (people === '1') {
        // 单人套餐
        const main = filteredDishes.find(d => dish.tags.includes('主食'));
        const side = filteredDishes.find(d => !d.tags.includes('主食') && d.price <= 15);
        
        if (main) {
          combos.push({
            name: '单人精致套餐',
            dishes: [main, side].filter(Boolean),
            total: [main, side].filter(Boolean).reduce((sum, d) => sum + d.price, 0),
            description: '适合单人用餐，营养均衡'
          });
        }
      } else {
        // 多人分享套餐
        const sharingDishes = filteredDishes.filter(d => d.portion === 'sharing');
        const singleDishes = filteredDishes.filter(d => d.portion === 'single');
        
        if (sharingDishes.length > 0) {
          combos.push({
            name: '分享套餐',
            dishes: sharingDishes.slice(0, Math.min(3, sharingDishes.length)),
            total: sharingDishes.slice(0, Math.min(3, sharingDishes.length)).reduce((sum, d) => sum + d.price, 0),
            description: '适合多人分享，丰盛美味'
          });
        }
      }
      
      return combos.length > 0 ? combos : [{ name: '推荐套餐', dishes: [], total: 0, description: '没有找到完全匹配的组合，建议调整筛选条件' }];
    }

    // 显示搭配结果
    function displayComboResults(combos) {
      comboMenu.innerHTML = `
        <h5 class="font-semibold text-gray-800 mb-3 flex items-center">
          <i class="ri-menu-line mr-2"></i>
          推荐菜单
        </h5>
        ${combos.map(combo => `
          <div class="mb-4">
            <div class="flex items-center justify-between mb-2">
              <h6 class="font-medium text-gray-800">${combo.name}</h6>
              <div class="text-green-600 font-bold">¥${combo.total}</div>
            </div>
            <div class="space-y-1">
              ${combo.dishes.map(dish => `
                <div class="flex justify-between text-sm">
                  <span class="text-gray-700">${dish.name}</span>
                  <span class="text-blue-600">¥${dish.price}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      `;
      
      comboSummary.innerHTML = `
        <h5 class="font-semibold text-gray-800 mb-3 flex items-center">
          <i class="ri-file-list-line mr-2"></i>
          搭配总结
        </h5>
        <div class="space-y-3">
          <div class="flex justify-between text-sm">
            <span class="text-gray-700">人均预算</span>
            <span class="text-green-600">¥${selectedBudget}</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-700">用餐人数</span>
            <span class="text-orange-600">${selectedPeople}</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-700">口味偏好</span>
            <span class="text-blue-600">${selectedTastes.length > 0 ? selectedTastes.join('、') : '不限'}</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-700">总预算</span>
            <span class="text-purple-600">¥${combos[0].total}</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-700">人均消费</span>
            <span class="text-green-600">¥${Math.round(combos[0].total / (selectedPeople === '1' ? 1 : selectedPeople === '2' ? 2 : selectedPeople === '3-4' ? 3.5 : 5))}</span>
          </div>
          <div class="mt-3 pt-3 border-t border-gray-200">
            <div class="text-xs text-gray-500 text-center">
              ${combos[0].description}
            </div>
          </div>
        </div>
      `;
    }
  }

  // 初始化标签交互
  initTasteTags();

  // 初始化标签交互
  initTasteTags();
});