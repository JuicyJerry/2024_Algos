#include<bits/stdc++.h>
using namespace std;

vector<int> solution(int l, int r) {   
    vector<int> arr;
    for(int i = l; i <= r; i++) {
        bool check = true;
        string t = to_string(i);
        for (char ch : t) {
            if(ch != '5' && ch != '0') {
                check = false;
                break;
            }
        }
        if(check) arr.push_back(stoi(t));
    }
    
    return arr.size() == 0 ? (arr.push_back(-1), arr) : arr;
}