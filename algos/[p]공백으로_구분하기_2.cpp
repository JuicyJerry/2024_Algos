#include <bits/stdc++.h>
using namespace std;

vector<string> solution(string my_string) {
    vector<string> answer;
    string s;
    
    for (int i = 0; i < my_string.size(); i++) {
        if (my_string[i] == ' ') {
            if (s.size() > 0) {
                answer.push_back(s);
                s.clear();
            }
        } else {
            s.push_back(my_string[i]);    
        }
    }
    
    if (s.size() > 0) {
        answer.push_back(s);
    }
    return answer;
}