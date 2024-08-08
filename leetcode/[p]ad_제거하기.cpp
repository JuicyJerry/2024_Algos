#include <bits/stdc++.h>

using namespace std;

vector<string> solution(vector<string> strArr) {
    vector<string> v;
    for(auto &it : strArr) {
        if (it.find("ad") == string::npos) {
            v.push_back(it);   
        }
    }
    
    return v;
}