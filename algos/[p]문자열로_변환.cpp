#include <bits/stdc++.h>
using namespace std;

string solution(int n) {
    string ans;
    string s = to_string(n);
    int carry = 0;
    int i = s.size() - 1;
    
    while (i >= 0 || carry) {
        int sum = carry;
        sum += s[i--] - '0';
        carry = sum / 10;
        ans += (sum % 10) + '0';
    }
    
    reverse(ans.begin(), ans.end());
    return ans;
}