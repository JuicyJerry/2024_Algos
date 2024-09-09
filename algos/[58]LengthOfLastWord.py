# Approach 1: Built-in String Functions
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        strs = [str for str in s.split(' ') if str != '']
        return len(strs[-1])

# Approach 2: Built-in String Functions
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        return 0 if not s or s.isspace() else len(s.split()[-1])

# Approach 3: One-loop Iteration
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        i, length = len(s), 0

        while i > 0:
            i -= 1
            if s[i] != ' ':
                length += 1
            elif length > 0:
                return length
        return length