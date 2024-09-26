// #2: answer
#include <bits/stdc++.h>
using namespace std;
int n;
int a[100][100];
string k;
string quard(int y, int x, int size) {
    if (size == 1) return string(1, a[y][x]);
    char b = a[y][x];
    string ret = "";
    for (int i = y; i < y + size; i++) {
        for (int j = x; j < x + size; j++) {
            if (b != a[i][j]) {
                ret += '(';
                ret += quard(y, x, size / 2); // 좌상
                ret += quard(y, x + size / 2, size / 2); // 우상
                ret += quard(y + size / 2, x, size / 2); // 좌하
                ret += quard(y + size / 2, x + size / 2, size / 2); // 우하
                ret += ')';
                return ret;
            }
        }
    }
    return string(1, a[y][x]);
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);
    
    cin >> n;
    for (int i = 0; i < n; i++) {
        cin >> k;
        for (int j = 0; j < n; j++) {
            a[i][j] = k[j];    
        }
    }
    
    cout << quard(0, 0, n) << '\n';
    return 0;
}

// #1 : fail 
#include <bits/stdc++.h>
using namespace std;
int n, visited[68][68], a[68][68];
set<int>::iterator t1, t2;
int dy[] = {1, 0, -1, 0};
int dx[] = {0, 1, 0, -1};
string ret;
string dfs(int y, int x) {
    string tmp = "(";
    visited[y][x] = 1;
    set<int> s;
    for (int i = 0; i < 4; i++) {
        int ny = y + dy[i];
        int nx = x + dx[i];
        if (ny < 0 || nx < 0 || ny >= n || nx >= n) continue;
        if (!visited[ny][nx]) continue;
        s.insert(a[ny][nx]);
        tmp += to_string(a[ny][nx]);
    }
    
    t1 = s.find(0);
    t2 = s.find(1);
    if (t1 != s.end() && t2 != s.end()) return tmp += ")";
    if (t1 != s.end()) return "0";
    return "1";
}
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);
    cin >> n;
    for (int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            cin >> a[i][j];
        }
    }
    
    ret += "(";
    while (n /= 2) {
      for (int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
                ret += dfs(i, j);
            }
        }
        
      for (int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
                ret += dfs(i, j);
            }
        } 
    }
    ret += ")";
    for (char c : ret) cout << c;
    return 0;
}