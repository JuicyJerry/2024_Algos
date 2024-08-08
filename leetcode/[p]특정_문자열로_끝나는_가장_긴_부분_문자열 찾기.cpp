#include <bits/stdc++.h>

using namespace std;

string solution(string myString, string pat) {
    string ans;
    
    for (int i = myString.size() - pat.size(); i >= 0; i--) {
        if (pat == myString.substr(i, pat.size())) {
            ans += myString.substr(0, i + pat.size());
            break;
        }
    }
    
    return ans;
}