Ext.define('Study.view.member.MemberList', {
	extend: 'Ext.grid.Panel',
	xtype : 'memberList',
	title: '회원목록',
	controller:'memberList',
	viewModel : 'memberList',
	requires : ['Ext.ux.ProgressBarPager'],
	
	columnLines : true,
	plugins : 'cellediting',
	tbar : [{
		xtype : 'combo',
		displayField : 'a',
		valueField : 'b',
		store: {
			field : ['a','b'],
			data : [{
				a: 'a',
				b: 'b'
				
			}]
		}
		
	},{
		xtype : 'textfield',
		emptyText: '검색어를 입력해주세요'
		
	},{
		xtype : 'button',
		text :  '검색'
	}],
	columns : [{
		xtype : 'rownumberer'
		
	},{
		text : '상품명',
		dataIndex : 'productNm',
		flex : 1,
		editor : {
			xtype : 'textfield'
		}
	},{
		text : '가격',
		dataIndex : 'price',
		flex : 1,
		editor : {
			xtype : 'numberfield'
		}
			
	},{
		text : '재고량',
		dataIndex : 'amount',
		flex : 1,
		editor : {
			xtype : 'numberfield'
		}
	},{
		text : '등록일',
		dataIndex : 'rgstDt',
		flex : 1
	}],
	bind : {
		store : '{memberList}'
	
	},
	bbar: {
		xtype : 'pagingtoolbar',
//		plugins : 'ux-slidingpager',
		plugins : 'ux-progressbarpager',
		displayInfo:true
	}
});