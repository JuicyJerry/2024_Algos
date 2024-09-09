// #1
#include<bits/stdc++.h>
using namespace std;
int n, m;
map<int, string> mp1;
map<string, int> mp2;
string s;
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);
    cin >> n >> m;
    for (int i = 0; i < n; i++) {
        cin >> s;
        mp1.insert({i + 1, s});
        mp2.insert({s, i + 1});
    }
    for (int i = 0; i < m; i++) {
        cin >> s;
        if (atoi(s.c_str()) > 0) {
            cout << mp1[atoi(s.c_str())] << "\n";
        } else {
            cout << mp2[s] << "\n";
        }
    }

    return 0;
}