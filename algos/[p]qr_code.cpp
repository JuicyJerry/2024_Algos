#include <bits/stdc++.h>

using namespace std;

string solution(int q, int r, string code) {
    string ans;
    for (int i = 0; i < size(code); i++) {
        if (i % q == r) {
            ans += code[i];
        }
    }
    return ans;
}