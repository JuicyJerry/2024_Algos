#include <bits/stdc++.h>

using namespace std;

vector<int> solution(string my_string) {
    vector<int> ans;
    
    for(int i = 0; i < 52; i++) {
        ans.push_back(0);
    }

    for(int i = 0; i <= size(my_string); i++) {
        if (my_string[i] >= 'A' && my_string[i] <= 'Z') {
            ans[my_string[i] - 'A']++;
        }
        if (my_string[i] >= 'a' && my_string[i] <= 'z') {
            ans[my_string[i] - 'a' + 26]++;
        }
    }
    
    return ans;
}