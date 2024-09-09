#include<bits/stdc++.h>

using namespace std;

string solution(string my_string, vector<int> index_list) {
    string answer = "";
    for(auto& it : index_list) answer += my_string[it];
    return answer;
}