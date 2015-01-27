/*
 * @author:korealiang 
 * @email: hanguoliang1992@gmail.com
 * @desciption: 用于配置相关的全局信息
 */

var config ={
		route:{
			index:{
				banner:['概况预览'],
				firstChild:[],
				child:[]
			},
			recruit:{
				banner:['招商'],
				firstChild:[
				   ['联系中','未联系']
				],
				child:[{
					href:1,
					name:'同类目卖家库',
					parent:'联系中',
					setHref:'#/recruit?banner=0&tag=1'
				},{
					href:2,
					name:'相关类目卖家库',
					parent:'联系中',
					setHref:'#/recruit?banner=0&tag=2'
				},{
					href:3,
					name:'类目分销商',
					parent:'未联系',
					setHref:'#/recruit?banner=0&tag=3'
				},{
					href:4,
					name:'其他相关卖家',
					parent:'未联系',
					setHref:'#/recruit?banner=0&tag=4'
				}]
			},
			manage:{
				banner:['分销商管理','分销商品管理'],
				firstChild:[
					['系统分层','自定义分层'],
					['已上架产品','下架中产品']
				],
				child:[{
					href:1,
					name:'运营模型分层',
					parent:'系统分层',
					setHref:'#/manage?banner=0&tag=1'
				},{
					href:2,
					name:'能力模型分层',
					parent:'系统分层',
					setHref:'#/manage?banner=0&tag=2'
				},{
					href:3,
					name:'潜力模型模式',
					parent:'系统分层',
					setHref:'#/manage?banner=0&tag=3'
				},{
					href:4,
					name:'出售中',
					parent:'已上架产品',
					setHref:'#/manage?banner=1&tag=4'
				},{
					href:5,
					name:'仓库',
					parent:'下架中产品',
					setHref:'#/manage?banner=1&tag=5'
				}]
			},
			improve:{
				banner:['分销提升'],
				firstChild:[
					['黄金关键词','优质渠道','最佳搭配','提升工具']
				],
				child:[{
					href:1,
					name:'高流量、高转化关键词TOP50',
					parent:'黄金关键词',
					setHref:'#/improve?banner=0&tag=1'
				},{
					href:2,
					name:'高展现、高点击关键词TOP50',
					parent:'黄金关键词',
					setHref:'#/improve?banner=0&tag=2'
				},{
					href:3,
					name:'免费流量',
					parent:'优质渠道',
					setHref:'#/improve?banner=0&tag=3'
				},{
					href:4,
					name:'付费流量',
					parent:'优质渠道',
					setHref:'#/improve?banner=0&tag=4'
				},{
					href:5,
					name:'最佳搭配宝贝',
					parent:'最佳搭配',
					setHref:'#/improve?banner=0&tag=5'
				},{
					href:6,
					name:'提升工具箱',
					parent:'提升工具',
					setHref:'#/improve?banner=0&tag=6'
				}]
			},
			behavior:{
				banner:['行为管理'],
				firstChild:[
					['行为管理']
				],
				child:[{
					href:1,
					name:'串货监控',
					parent:'行为管理',
					setHref:'#/behavior?banner=0&tag=1'
				},{
					href:2,
					name:'乱价监控',
					parent:'行为管理',
					setHref:'#/behavior?banner=0&tag=2'
				},{
					href:3,
					name:'差评监控',
					parent:'行为管理',
					setHref:'#/behavior?banner=0&tag=3'
				}]
			},
			settings:{
				banner:['系统设置'],
				firstChild:[
					['系统设置']
				],
				child:[{
					href:1,
					name:'快捷设置',
					parent:'系统设置'
				},{
					href:2,
					name:'新闻管理',
					parent:'系统设置'
				}]
			}
		},
		settingManage:[{
			name:'disPv',
			des:'分销流量',
			type:'int',
			unit:'人'
		},{
			name:'inAllPv',
			des:'全店流量',
			type:'int',
			unit:'人'
		},
		{
			name:'disUv',
			des:'分销访客数',
			type:'int',
			unit:'人'
		},{
			name:'inAllUv',
			des:'全店访客数',
			type:'int',
			unit:'人'
		},{
			name:'disSellMoney',
			des:'分销销售额',
			type:'num',
			unit:'元'
		},{
			name:'inAllSellMoney',
			des:'全店销售额',
			type:'num',
			unit:'元'
		},{
			name:'disPayPersons',
			des:'分销支付人数',
			type:'int',
			unit:'人'
		},{
			name:'inAllPayPersons',
			des:'全店支付人数',
			type:'int',
			unit:'人'
		},{
			name:'disSellAmount',
			des:'分销销量',
			type:'int',
			unit:'个'
		},{
			name:'inAllSellAmount',
			des:'全店销量',
			type:'int',
			unit:'个'
		},{
			name:'disTransformationEfficiency',
			des:'分销转化率',
			type:'dor',
			unit:'%'
		},{
			name:'inAllTransformationEfficiency',
			des:'全店转化率',
			type:'dor',
			unit:'%'
		},{
			name:'disPerCustomerTransaction',
			des:'分销客单价',
			type:'num',
			unit:'元'
		},{
			name:'inAllPerCustomerTransaction',
			des:'全店客单价',
			type:'num',
			unit:'元'
		},{
			name:'disOrderNum',
			des:'分销订单数',
			type:'int',
			unit:'个'
		},{
			name:'inAllOrderNum',
			des:'全店订单数',
			type:'int',
			unit:'个'
		},{
			name:'sellAmountPercent',
			des:'分销成交量占比',
			type:'dor',
			unit:'%'
		},{
			name:'sellMoneyPercent',
			des:'分销成交额占比',
			type:'dor',
			unit:'%'
		},{
			name:'payPvPercent',
			des:'支付流量占比',
			type:'dor',
			unit:'%'
		},{
			name:'searchPvPercent',
			des:'搜索流量占比',
			type:'dor',
			unit:'%'
		},{
			name:'sellingProductsAmountPercent',
			des:'分销动销产品占比',
			type:'dor',
			unit:'%'
		},{
			name:'disShopCreateTime',
			des:'开店时间',
			type:'date',
			unit:'<i class="fa fa-calendar"></i>'
		},{
			name:'disBuyerGoodRate',
			des:'好评率',
			type:'num',
			unit:'%'
		},{
			name:'disShopLevel',
			des:'店铺等级',
			type:'int',
			unit:'级'
		}],
		model:{
			1:['忠诚分销商','冲刺分销商','服务型分销商'],
			2:['高流量分销商','高销量分销商','高转化分销商','高成交额分销商'],
			3:['潜力分销商']
		}
	}