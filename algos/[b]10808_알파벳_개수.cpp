// #1
#include <bits/stdc++.h>
using namespace std;
string s;
map<char, int> m;
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    cin >> s;
    for (int c = 97; c <= 122; c++) {
         m[(char)c] = 0;
    }
    for (auto ch : s) m[ch]++; 
    for (auto e : m) cout << e.second << " ";
    return 0;
}

// #1
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
string str;
int cnt[26];
int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
    cin >> str;
    for (char a : str) cnt[a - 'a']++;
    for (int i = 0; i < 26; i++) cout << cnt[i] << " ";
    return 0;
}