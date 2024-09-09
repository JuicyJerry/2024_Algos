#include<bits/stdc++.h>
using namespace std;
string t;
map<char, int> mp;
void solve() {
    for(char c : t) {
        mp[c] += 1;
    }
}
int main() {
    cin >> t;
    for(char ch = 97; ch <= 122; ch++) {
        mp[ch] = 0;
    }    
    solve();
    for(auto it = mp.begin(); it != mp.end(); it++) cout << it->second << " ";
    return 0;
}

#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
string str;
int cnt[26];
int main() [
    ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
    cin >> str;
    for(char a : str) {
        cnt[a - 'a']++;
    }
    for(int i = 0; i < 26; i++) cout << cnt[i] << " ";
    
    return 0;
]