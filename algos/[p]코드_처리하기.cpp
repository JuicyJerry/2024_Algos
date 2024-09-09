#include<bits/stdc++.h>
using namespace std;

string solution(string code) {
    string ret = "";
    int mode = 0;
    for(int i = 0; i < code.size(); i++) {
        if (code[i] == '0' || code[i] == '1') {
            mode = !(int) mode; 
            continue;
        }
        
        if (mode == 0 && i % 2 == 0) {
            ret += code[i];
        } else if (mode == 1 && i % 2 == 1) {
            ret += code[i];
        }
    }
    return size(ret) > 0 ? ret : "EMPTY";
}