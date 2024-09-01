// #1: answer
#include <bits/stdc++.h>
using namespace std;
int t, n;
string a, b;
imt main() {
    cin >> t;
    while(t--) {
        map<string, int> _map;
        cin >> n;
        for (int i = 0; i < n; i++) {
            cin >> a >> b;
            _map[b]++;
        }
        long long ret = 1;
        for(auto c : _map) {
            ret *= ((long long)c.second + 1);
        }
        ret--;
        cout << ret << "\n";
    }

    return 0;
}

// #1: fail
#include<bits/stdc++.h>
using namespace std;
int n, k;
map<string, string> mp;
string s1, s2;
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);
    cin >> n 
    for (int j = 0; j < n; j++) {
        cin >> k;
        for (int i = 0; i < k; i++) {
            cin >> s1 >> s2;
            map.insert({s1, s2});
        }
        do {
            
        } while(next_permutation(mp.begin(), mp.end()));
        
    }

    


    return 0;
}

