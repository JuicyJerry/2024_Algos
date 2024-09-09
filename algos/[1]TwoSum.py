class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashmap = {}
        for i in range(0, len(nums)):
            complement = target - nums[i]
            if complement in hashmap: 
                return [i, hashmap[complement]]
            hashmap[nums[i]] = i