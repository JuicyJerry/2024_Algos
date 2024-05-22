class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        brackets = {
            "]": "[",
            "}": "{",
            ")": "(",
        }

        for bracket in s:
            if bracket in brackets:
                top_element = stack.pop() if stack else "#"
                if brackets[bracket] != top_element:
                    return False
            else:
                stack.append(bracket)

        return not stack