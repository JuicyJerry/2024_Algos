#1
class Solution:
    def isPalindrome(self, x: int) -> bool:
        isMinus = False
        if (x < 0): 
            isMinus = True
        arr = []
        temp = x
        digit = 0

        if x < 0: return False
        while temp > 0:
            arr.append(temp % 10)
            temp //= 10
            digit += 1

        if digit <= 1: return True
        if isMinus: arr[0] *= -1
        for i in range(0, len(arr)):
            if arr[i] != arr[len(arr) - i - 1]: return False
        return True

#2
class Solution:
    def isPalindrome(self, x: int) -> bool:
        if (x < 0 or (x % 10 == 0 and x != 0)): return False

        revertedNum = 0
        while x > revertedNum:
            revertedNum = revertedNum * 10 + (x % 10);
            x //= 10

        return x == revertedNum or x == revertedNum // 10

#3
class Solution:
    def isPalindrome(self, x: int) -> bool:
        return str(x) == str(x)[::-1]