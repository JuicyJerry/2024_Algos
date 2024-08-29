// #1
#include<bits/stdc++.h>
using namespace std;
string s;
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    cin >> s;
    for(int i = 0; i < s.size(); i++) {
        if (i == s.size() - i - 1) break;
        if (s[i] != s[s.size() - i - 1]) {
            cout << 0;
            return 0;
        } 
    }
    cout << 1;
    return 0;
}

// #1
#include<bits/stdc++.h>
using namespace std;
string s, s2;
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    cin >> s;
    s2 = s;
    reverse(s2.begin(), s2.end());
    if (s == s2) cout << 1;
    else cout << 0;
    return 0;
}