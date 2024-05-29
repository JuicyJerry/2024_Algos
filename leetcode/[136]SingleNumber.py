class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        numberCount = {}
        for num in nums:
            if num in numberCount:
                numberCount[num] += 1
            else:
                numberCount[num] = 1

        for key, value in numberCount.items():
            if value == 1:
                return key