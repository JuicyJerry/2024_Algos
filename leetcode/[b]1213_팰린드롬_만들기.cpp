// #2: answer
#include<bits/stdc++.h>
using namespace std;
string s, ret;
int cnt[200], flag;
char mid;
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);
    cin >> s;
    for (char a : s) cnt[a]++;
    for (int i = 'Z'; i >= 'A'; i--) {
        if (cnt[i]) {
            if (cnt[i] & 1) {
                mid = char(i); flag++;
                cnt[i]--;
            }
            if (flag == 2) break;
            for (int j = 0; j < cnt[i]; j+=2) {
                ret = char(i) + ret;
                ret += char(i);
            }
        }
    }
    
    if (mid) ret.insert(ret.begin() + ret.size() / 2, mid);
    if (flag == 2) cout << "I'm Sorry Hansoo\n";
    else cout << ret << "\n";
}


// #1 : fail(timeout)
#include<bits/stdc++.h>
using namespace std;
string s, pre, suf, mid;
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);
    cin >> s;
    
    do {
        bool isOdd = false;
        if (s.size() % 2 != 0) isOdd = true;
        if (isOdd) {
            pre = s.substr(0, s.size() / 2);
            suf = s.substr(s.size()/2 + 1);
            mid = s[s.size() / 2];
            reverse(suf.begin(), suf.end());
            if (pre == suf) {
                reverse(suf.begin(), suf.end());
                cout << pre << mid << suf;
                exit(0);
            } 
        } else {
            pre = s.substr(0, s.size() / 2);
            suf = s.substr(s.size() / 2);
            reverse(suf.begin(), suf.end());
            if (pre == suf) {
                reverse(suf.begin(), suf.end());
                cout << pre << suf;
                exit(0);
            } 
        }
    } while(next_permutation(s.begin(), s.end()));
    
    cout << "I'm Sorry Hansoo";
    return 0;
}