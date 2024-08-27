// #2 : 정답
#include <bits/stdc++.h>
using namespace std;
pair<int, int> ret;
int sum = 0;
int arr[9];
vector<int> v;

void solve() {
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < i; j++) {
            if (sum - arr[i] - arr[j] == 100) {
                ret = {i, j};
                return;
            }
        }
    }
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    for (int i = 0; i < 9; i++) {
        cin >> arr[i];
        sum += arr[i];
    }
    solve();
    for(int i = 0; i < 9; i++) {
        if (ret.first == i || ret.second == i) continue;
            v.push_back(arr[i]);
    }
    sort(v.begin(), v.end());
    for(int i : v) cout << i << "\n";
    return 0;
}


// #1 : 실패 : 조합으로 시도
#include <bits/stdc++.h>
using namespace std;

int n = 9, k = 7, a[11] = {};

void print(vector<int> b) {
    sort(b.begin(), b.end(), less<int>());
    for (int i = 0; i < k; i++) {
        cout << b[i] << "\n";
    }
}

void combi(int start, vector<int> b) {
    if (b.size() == k) {
        int sum = accumulate(b.begin(), b.end(), 0);

        if (sum == 100) {
            print(b);
            return;
        }
    }

    for (int i = start + 1; i < n; i++) {
        b.push_back(a[i]);
        combi(i, b);
        b.pop_back();
    }

    return;
}


int main() {
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    vector<int> b;
    combi(-1, b);
    return 0;
}

