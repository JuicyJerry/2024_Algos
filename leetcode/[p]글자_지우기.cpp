#include <bits/stdc++.h>

using namespace std;

string solution(string my_string, vector<int> indices) {
    string answer = "";
    for (int i = 0; i < size(indices); i++) {
        my_string[indices[i]] = '-';
    }
    for (auto& c : my_string) {
        if (c != '-') answer += c;
    }
    return answer;
}

