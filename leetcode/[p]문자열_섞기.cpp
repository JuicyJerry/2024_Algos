#include<bits/stdc++.h>
using namespace std;

string solution(string str1, string str2) {
    string answer = "";
    for(int i = 0; i < size(str1); i++) {
        answer = answer + str1[i] + str2[i];
    }
    return answer;
}