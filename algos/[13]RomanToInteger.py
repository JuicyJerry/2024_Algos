class Solution:
    def romanToInt(self, s: str) -> int:
        hashmap = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000,
        }

        result = 0
        length = len(s) - 1
        while length > -1:
            if hashmap[s[length]] >= result or hashmap[s[length]] == hashmap[s[length + 1]]:
                result += hashmap[s[length]]
            else:
                result -= hashmap[s[length]]
            length -= 1
        return result