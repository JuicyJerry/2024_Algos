#include<bits/stdc++.h>
using namespace std;

int solution(int n) {
    bool isOdd = n % 2 == 0 ? false : true;
    int sum = 0;
    if (isOdd) {
        for(int i = 1; i <= n; i+=2) sum += i;
    } else {
        for(int i = 2; i <= n; i+=2) sum += (int)pow(i, 2);
    }
    return sum;
}