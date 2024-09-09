#include <bits/stdc++.h>

using namespace std;

vector<string> solution(string s) {
    vector<string> ans;
    string tmp;
    for (int i = 0; i < s.size(); i++) {
        if (s[i] != 'a' && s[i] != 'b' && s[i] != 'c') {
            tmp += s[i];
        } else {
            if (!tmp.empty()) {
                ans.push_back(tmp);
                tmp = "";
            }
        } 
    }
    
    if (!tmp.empty()) {
        ans.push_back(tmp);
        tmp = "";
    }
    if (ans.size() == 0) ans.push_back("EMPTY");
    return ans;
}