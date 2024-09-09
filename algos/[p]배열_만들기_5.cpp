#include<bits/stdc++.h>
using namespace std;

vector<int> solution(vector<string> intStrs, int k, int s, int l) {
    vector<int> ans;
    for(auto a : intStrs) {
        int n = stoi(a.substr(s, l));
        if (k < n) ans.push_back(n);
    }
    return ans;
}