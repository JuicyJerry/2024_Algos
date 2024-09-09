# try 1
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        maxLen = len(max(a, b))
        if len(a) != maxLen:
            for num in a:
                a = '0' + num
        elif len(b) != maxLen:
            for num in b:
                b = '0' + num

        sumList = [0 for _ in range(maxLen)]
        print('sumList ---> ', sumList)

        i = maxLen
        while i > 0:
            i -= 1
            print(i)
            print( 'int(a[i]) + int(a[i]) ---> ',  int(a[i]) + int(a[i]))
            print( 'sumList[i] + int(a[i]) ---> ',  sumList[i] + int(a[i]))
            
            if int(a[i]) + sumList[i] == 2 or int(a[i]) + int(b[i]) == 2:
                print('sumList[i - 1] ---> ', sumList[i - 1])
                if i < 0:
                    print('check')
                    sumList.insert(0, 1)
                sumList[i - 1] += 1

            print(sumList, '\n')
                
                