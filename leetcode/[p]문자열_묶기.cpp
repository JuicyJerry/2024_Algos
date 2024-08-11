#include <bits/stdc++.h>
using namespace std;

int solution(vector<string> strArr) {
    map<int, int> m;
    for (auto &it : strArr) {
        int len = it.length();
        m[len]++;
    }
    
    int maxCnt = 0;
    for (auto &pair : m) {
        maxCnt = max(maxCnt, pair.second);
    }
    
    return maxCnt;
}