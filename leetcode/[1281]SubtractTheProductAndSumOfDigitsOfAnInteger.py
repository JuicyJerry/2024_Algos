class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        def productOfDigits(num):
            product = 1
            
            while num > 0:
                product *= num % 10
                num //= 10
            return product
                
        def sumOfDigits(num):
            summation = 0
            
            while num > 0:
                summation += num % 10
                num // 10
            return summation

        product = productOfDigits(n)
        summation = sumOfDigits(n)

        print(product)
        print(summation)

        return product - summation
