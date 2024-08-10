#include <bits/stdc++.h>
using namespace std;

vector<string> solution(string s) {
    vector<string> ans;
    string tmp;
    
    for (int i = 0; i < s.size(); i++) {
        if (s[i] == 'x') {
            if (!tmp.empty()) {
                ans.push_back(tmp);
                tmp = "";                
            }

        } else {
            tmp += s[i];
        }
    }
    
    if (!tmp.empty()) {
        ans.push_back(tmp);
    }
    sort(ans.begin(), ans.end());
    
    return ans;
}