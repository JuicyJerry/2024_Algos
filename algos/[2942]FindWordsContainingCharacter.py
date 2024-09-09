class Solution:
    def findWordsContaining(self, words: List[str], x: str) -> List[int]:
        idxs = []
        for i in range(len(words)):
            if words[i].find(x) > -1:
                idxs.append(i)
        
        return idxs