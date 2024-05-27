class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        digits = int(('').join([str(num) for num in digits])) + 1
        return [int(num) for num in list(str(digits))]