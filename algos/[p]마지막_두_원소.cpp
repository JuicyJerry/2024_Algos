#include<bits/stdc++.h>
using namespace std;

vector<int> solution(vector<int> num_list) {
    vector<int> ans;
    int len = num_list.size();
    for (int num : num_list) ans.push_back(num);
    ans.back() > ans[len - 2] ? ans.push_back(ans.back() - ans[len - 2]) : ans.push_back(ans.back() * 2);
    return ans;
}