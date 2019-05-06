$(function() {
	/**
	 * 通过数组id获取地址列表数组
	 *
	 * @param {Number} id
	 * @return {Array} 
	 */
	function getAddrsArrayById(id) {
		var results = [];
		if(addr_arr[id] != undefined)
			addr_arr[id].forEach(function(subArr) {
				results.push({
					key: subArr[0],
					val: subArr[1]
				});
			});
		else {
			return;
		}
		return results;
	}
	/**
	 * 通过开始的key获取开始时应该选中开始数组中哪个元素
	 *
	 * @param {Array} StartArr
	 * @param {Number|String} key
	 * @return {Number} 
	 */
	function getStartIndexByKeyFromStartArr(startArr, key) {
		var result = 0;
		if(startArr != undefined)
			startArr.forEach(function(obj, index) {
				if(obj.key == key) {
					result = index;
					return false;
				}
			});
		return result;
	}

	//bind the click event for 'input' element
	$("#myAddrs").click(function() {
		var PROVINCES = [],
			startCities = [],
			startDists = [];
		//Province data，shall never change.
		addr_arr[0].forEach(function(prov) {
			PROVINCES.push({
				key: prov[0],
				val: prov[1]
			});
		});
		//init other data.
		var $input = $(this),
			dataKey = $input.attr("data-key"),
			provKey = 1, //default province 北京
			cityKey = 36, //default city 北京
			distKey = 37, //default district 北京东城区
			distStartIndex = 0, //default 0
			cityStartIndex = 0, //default 0
			provStartIndex = 0; //default 0

		if(dataKey != "" && dataKey != undefined) {
			var sArr = dataKey.split("-");
			if(sArr.length == 3) {
				provKey = sArr[0];
				cityKey = sArr[1];
				distKey = sArr[2];

			} else if(sArr.length == 2) { //such as 台湾，香港 and the like.
				provKey = sArr[0];
				cityKey = sArr[1];
			}
			startCities = getAddrsArrayById(provKey);
			startDists = getAddrsArrayById(cityKey);
			provStartIndex = getStartIndexByKeyFromStartArr(PROVINCES, provKey);
			cityStartIndex = getStartIndexByKeyFromStartArr(startCities, cityKey);
			distStartIndex = getStartIndexByKeyFromStartArr(startDists, distKey);
		}
		var navArr = [{ //3 scrollers, and the title and id will be as follows:
			title: "省",
			id: "scs_items_prov"
		}, {
			title: "市",
			id: "scs_items_city"
		}, {
			title: "区",
			id: "scs_items_dist"
		}];
		SCS.init({
			navArr: navArr,
			onOk: function(selectedKey, selectedValue) {
				$input.val(selectedValue).attr("data-key", selectedKey);
			}
		});
		var distScroller = new SCS.scrollCascadeSelect({
			el: "#" + navArr[2].id,
			dataArr: startDists,
			startIndex: distStartIndex
		});
		var cityScroller = new SCS.scrollCascadeSelect({
			el: "#" + navArr[1].id,
			dataArr: startCities,
			startIndex: cityStartIndex,
			onChange: function(selectedItem, selectedIndex) {
				distScroller.render(getAddrsArrayById(selectedItem.key), 0); //re-render distScroller when cityScroller change
			}
		});
		var provScroller = new SCS.scrollCascadeSelect({
			el: "#" + navArr[0].id,
			dataArr: PROVINCES,
			startIndex: provStartIndex,
			onChange: function(selectedItem, selectedIndex) { //re-render both cityScroller and distScroller when provScroller change
				cityScroller.render(getAddrsArrayById(selectedItem.key), 0);
				distScroller.render(getAddrsArrayById(cityScroller.getSelectedItem().key), 0);
			}
		});
	});
});