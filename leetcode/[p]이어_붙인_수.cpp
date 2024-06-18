#include <bits/stdc++.h>
using namespace std;

int solution(vector<int> num_list) {
    string evenSum = "";
    string oddSum = "";
    
    for(auto num : num_list) {
        if (num % 2 == 0) {
            evenSum += to_string(num);
        } else if (num % 2 == 1) {
            oddSum += to_string(num);
        }
    }
    return stoi(evenSum) + stoi(oddSum);
}