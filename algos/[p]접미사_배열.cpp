#include<bits/stdc++.h>
using namespace std;

vector<string> solution(string my_string) {
    vector<string> v;
    int len =  size(my_string);
    for(int i = 0; i < len; i++) {
        string temp = "";
        for(int j = i; j < len; j++) {
            temp += my_string[j];
        }
        
        v.push_back(temp);
    }
    sort(v.begin(), v.end());
    return v;
}

// 다른 풀이
vector<string> solution(string my_string) {
    vector<string> answer;
    for (int i = 0; i < my_string.length(); i++)
        answer.push_back(my_string.substr(i));
    sort(answer.begin(), answer.end());
    return answer;
}

