// #3 : 다시 풀어보기
#include<bits/stdc++.h>
using namespace std;
int a[9];
int n = 9, r = 7;
void solve() {
    int sum = 0;
    for (int i = 0; i < r; i++) {
        sum += a[i];
    }
    if (sum == 100) {
        sort(a, a + 7);
        for(int i = 0; i < r; i++) cout << a[i] << "\n";
        exit(0);
    }
}
void makePermutation(int n, int r, int depth) {
    if (r == depth) {
        solve();
        return;
    }
    for (int i = depth; i < n; i++) {
        swap(a[i], a[depth]);
        makePermutation(n, r, depth + 1);
        swap(a[i], a[depth]);
    }
    return;
}
int main() {
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    makePermutation(n, r, 0);
    return 0;
}

// #3 : 다시 풀어보기
#include<bits/stdc++.h>
using namespace std;
int a[9];
int main() {
    for (int i = 0; i < 9; i++) cin >> a[i];
    sort(a, a + 9);
    do {
        int sum = 0;
        for (int i = 0; i < 7; i++) sum += a[i];
        if (sum == 100) break;
    } while(next_permutation(a, a + 9));
    for(int i = 0; i < 7; i++) cout << a[i] << "\n";
    return 0;
}

// #3 : 다시 풀어보기
#include <bits/stdc++.h>
using namespace std;
int sum = 0, n;
vector<int> ret;
pair<int, int> p = {};
void solve() {
    for(int i = 0; i < 9; i++) {
        for(int j = 0; j < i; j++) {
            if(sum - ret[i] - ret[j] == 100) {
                p.first = ret[i];
                p.second = ret[j];
                return;
            }
        }
    }
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    for(int i = 0; i < 9; i++) {
        cin >> n; sum += n;
        ret.push_back(n);
    }
    solve();
    sort(ret.begin(), ret.end());
    for(auto n : ret) {
        if (n == p.first || n == p.second) continue;
        cout << n << "\n";
    }
    return 0;
}

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

