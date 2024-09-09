class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        length = len(nums)
        string_numbers = [str(number) for number in nums]
        for i in range(length + 1):
            if str(i) not in string_numbers:
                return i
