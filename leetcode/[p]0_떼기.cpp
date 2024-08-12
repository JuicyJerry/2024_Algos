#include <bits/stdc++.h>

using namespace std;

string solution(string n_str) {
    string ans = "";
    int t = 0;
    
    if (n_str[0] != '0') {
        return n_str;
    }
    
    for (int i = 1; i < n_str.size(); i++) {
        if (n_str[i - 1] == '0' && n_str[i] == '0') continue;
        else {
            t = i;
            break;
        }
    }
    
    for (int i = t; i < n_str.size(); i++) ans.push_back(n_str[i]);
    return ans;
}