# 1
#include<bits/stdc++.h>
using namespace std;

string solution(string my_string, string overwrite_string, int s) {
    string answer = "";
    int len = s + size(overwrite_string);
    for(int i = 0; i < size(my_string); i++) {
        if (s <= i && i < len) {
            answer += overwrite_string[i - s];
        } else {
            answer += my_string[i];