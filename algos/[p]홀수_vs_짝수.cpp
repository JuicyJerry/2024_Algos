#include <bits/stdc++.h>

using namespace std;

int solution(vector<int> num_list) {
    int oddSum = 0;
    int evenSum = 0;
    
    for(int i = 0; i < size(num_list); i++) {
        if (i == 0 || i % 2 == 0) evenSum += num_list[i];
        else oddSum += num_list[i];
    }
    
    return evenSum > oddSum ? evenSum : oddSum;
}