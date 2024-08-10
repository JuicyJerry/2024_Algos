// #1
#include <bits/stdc++.h>
using namespace std;

vector<int> solution(string myString) {
    vector<int> ans;
    int cnt = 0;
    for (int i = 0; i < myString.size(); i++) {        
        if (myString[i] == 'x') {
            ans.push_back(cnt);
            cnt = 0;
        } else {
            cnt++;
        }
    }
    
    ans.push_back(cnt);
    return ans;
}



// #2
#include <bits/stdc++.h>
using namespace std;

vector<int> solution(string s) {
    int i = 0;
    vector<int> v;
    for_each(s.cbegin(), s.cend(), [&i, &v](char c) {
        if (c == 'x') {
            v.push_back(i);
            i = 0;
        } else {
            i++;
        }
    });
    
    v.push_back(i);
    return v;
}