class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        minStr = min(strs, key=len)

        if len(strs) == 0 or len(strs) == 1 or len(minStr) == 0: return minStr
        for i in range(len(minStr)):
            filterList = list(filter(lambda n: n[i] != minStr[i] , strs))
            if len(filterList) > 0: return minStr[:i]
        
        return minStr


class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ""

        minStr = min(strs, key=len)

        for i, char in enumerate(minStr):
            for string in strs:
                if string[i] != char:
                    return minStr[:i]
        
        return minStr


