// try3: success
#include<bits/stdc++.h>
using namespace std;
int n;
string s, pat, pre, suf;
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    cin >> n; cin >> pat;
    int pos = pat.find('*');
    pre = pat.substr(0, pos);
    suf = pat.substr(pos + 1);
    for (int i = 0; i < n; i++) {
        cin >> s;
        if (pre.size() + suf.size() > s.size()) cout << "NE\n";
        else {
            if (pre == s.substr(0, pre.size()) && suf == s.substr(s.size() - suf.size())) cout << "DA\n";
            else cout << "NE\n";
        }
    }
    return 0;
}

// try2: fail
#include<bits/stdc++.h>
using namespace std;
int n;
string s, tmp, p, prefix, suffix;
vector<string> v;
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    cin >> n; cin >> p;
    
    for (int i = 0; i < p.size(); i++) {
        if (p[i] == '*') {
            v.push_back(tmp);
            tmp.clear();
        } else {
            tmp += p[i];            
        }
    }
    v.push_back(tmp);

    for (int i = 0; i < n; i++) {
        cin >> s;
        prefix = s.substr(0, v[0].size());
        suffix = s.substr(s.size() - v[1].size(), v[1].size());
        if (prefix == v[0] && suffix == v[1]) cout << "DA\n";
        else cout << "NE\n";
    }
    return 0;
}

// try1: fail
#include<bits/stdc++.h>
using namespace std;
int n;
string p, s;
int len1, len2;
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    cin >> n; cin >> p;
    len1 = size(p);
    for (int i = 0; i < n; i++) {
        cin >> s;
        len2 = s.size();
        if (s[0] != p[0] || s[len2 - 1] != p[len1 - 1]) cout << "NE\n";
        else cout << "DA\n";
    }
    
    return 0;
}