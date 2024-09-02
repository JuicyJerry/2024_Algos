// #1: another answer
#include <bits/stdc++.h>
using namespace std;
int n, m, a[15001], cnt;
void combi(int idx, vector<int> &v) {
    if (v.size() == 2) {
        int b = a[v[0]];
        int c = a[v[1]];
        if(b + c == m) cnt++;
        return;
    }
    for (int i = idx + 1; i < n; i++) {
        v.push_back(i);
        combi(1, v);
        v.pop_back(i);
    }
}
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);cout.tie(NULL);
    cin >> n >> m;
    for(int i = 0; i < n; i++) cin >> a[i];
    vector<int> v;
    combi(-1, v);
    cout << cnt << '\n';
    return 0;
}
// #1: correct
#include <bits/stdc++.h>
using namespace std;
int n, m, cnt;
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);cout.tie(NULL);
    cin >> n >> m;
    int ret[n];
    for (int i = 0; i < n; i++) {
        cin >> ret[i];
    }
    
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (ret[i] + ret[j] == m) {
                cnt++;
            }
        }
    }
    cout << cnt;
    return 0;
}



// #1: fail
#include <bits/stdc++.h>
using namespace std;
int n, m, sum;
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);cout.tie(NULL);
    cin >> n >> m;
    int ret[n];
    for (int i = 0; i < n; i++) {
        cin >> ret[i];
        sum += ret[i];
    }
    cout << (sum / m);
    return 0;
}