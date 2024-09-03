// #1: better
#include<bits/stdc++.h>
using namespace std;
stack<char> stk;
int n, cnt, ret;
string s;
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);cout.tie(NULL);
    cin >> n;
    for(int i = 0; i < n; i++) {
        cin >> s;

        for (char a : s) {
            if (size(stk) && stk.top() == a) cnt++; stk.pop();
            else stk.push(a);
        }
        
        if (size(stk) == 0) ret++;
        while(size(stk)) stk.pop();
    }
    cout << ret;
    return 0;
}

// #1: success
#include<bits/stdc++.h>
using namespace std;
stack<char> stk;
int n, cnt, ret;
string s;
void solve(char t) {
    if (size(stk) >= 1 && stk.top() == t) {
        cnt++; stk.pop();
    } else {
        stk.push(t);
    }
    return;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);cout.tie(NULL);
    cin >> n;
    for(int i = 0; i < n; i++) {
        cin >> s;

        for (int j = 0; j < s.size(); j++) {
            solve(s[j]);     
        }
        
        if (size(stk) == 0) {
            ret++;
        } 
        while(size(stk)) stk.pop();
        cnt = 0;
    }
    cout << ret;
    return 0;
}