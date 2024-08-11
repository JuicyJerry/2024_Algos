#include <bits/stdc++.h>

using namespace std;

int solution(string num_str) {
    int ans = 0;
    for(auto &it : num_str) {
        ans += it - '0';
    }
    return ans;
}