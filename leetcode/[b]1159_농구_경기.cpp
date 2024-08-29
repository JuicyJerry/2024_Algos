// #1
#include<bits/stdc++.h>
using namespace std;
int n, sum = 1;
string s[150];
string ret;
char t;
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    cin >> n;
    for(int i = 0; i < n; i++) {
        cin >> s[i];
    }
    sort(s, s + n);
    t = s[0][0];
    for(int i = 1; i < n; i++) {
        if (t == s[i][0]) sum++;
        else if (t != s[i][0]) {
            if (sum >= 5) {
                ret += t;
            } 
            t = s[i][0];
            sum = 1;
        }
    } 
    

    if (sum >= 5) {
        ret += t;
    }
    if (!ret.empty()) cout << ret;
    else cout << "PREDAJA";
    
    return 0;
}