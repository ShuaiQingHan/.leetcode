/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let map = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }
	return [];
};

var twoSum = function(nums ,tartget) {
   let map = new Map();
   for(let i = 0; i < nums.length;i++){
      if(map.has(target - nums[i])){
          
      } 
   }
}

// @lc code=end

132*190
132+96+63