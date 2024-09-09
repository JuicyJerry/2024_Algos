#include <bits/stdc++.h>

using namespace std;

int solution(string my_string, string is_prefix) {
    vector<string> v;
    for(int i = 0; i < size(my_string); i++) {
        v.push_back(my_string.substr(0, i + 1));
    }
    
    for(auto& s : v) {
        if (s == is_prefix) return 1;
    }
    
    return 0;
}