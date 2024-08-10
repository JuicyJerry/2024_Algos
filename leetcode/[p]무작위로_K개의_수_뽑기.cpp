#include <bits/stdc++.h>

using namespace std;

vector<int> solution(vector<int> arr, int k) {
    vector<int> ans;
    for (auto &it : arr) {
        if (ans.size() == k) return ans;
        else {
            if (find(ans.begin(), ans.end(), it) == ans.end()) ans.push_back(it);
        }
    }
    
    if (ans.size() != k) {
        ans.insert(ans.end(), k - ans.size(), -1);
    }
    return ans;
}