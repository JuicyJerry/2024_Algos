// #1: success
#include <bits/stdc++.h>
using namespace std;
int n, ret = 1;
int a[101][101];
int visited[101][101];
int dy[] = {-1, 0, 1, 0};
int dx[] = {0, 1, 0, -1};
void dfs(int y, int x, int d) {
    visited[y][x] = 1;
    for (int i = 0; i < 4; i++) {
        int ny = y + dy[i];
        int nx = x + dx[i];
        
        if (ny < 0 || nx < 0 || ny >= n || nx >= n) continue;
        if (!visited[ny][nx] && a[ny][nx] > d) dfs(ny, nx, d);
    }
    return;
}

int main() {
    cin.tie(NULL); cout.tie(NULL);
    cin >> n;
    
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> a[i][j];
        }
    }
    
    for (int d = 1; d <= 100; d++) {
        fill(&visited[0][0], &visited[0][0] + 101 * 101, 0);
        int cnt = 0;
       for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (!visited[i][j] && a[i][j] > d) {
                    dfs(i, j, d);
                    cnt++;
                }
            }
        }
        ret = max(ret, cnt);
    }
    
    cout << ret;
    return 0;
}

// #1: fail
#include<bits/stdc++.h>
using namespace std;
int t, max_n, ret, max_ret, h;
int a[101][101];
int b[101][101];
vector<int> tmp;
int visited[101][101];
int dy[] = {-1, 0, 1, 0};
int dx[] = {0, 1, 0, -1};
void dfs(int y, int x, int h) {
    visited[y][x] = 1;
    for (int i = 0; i < 4; i++) {
        int ny = y + dy[i];
        int nx = x + dx[i];
        
        if (ny < 0 || nx < 0 || ny >= t || nx >= t) continue;
        if (b[ny][nx] > h && !visited[ny][nx]) {
            dfs(ny, nx, h);
        }
    }
    
    return;    
}

int main() {
    cin.tie(NULL); cout.tie(NULL);
    cin >> t;
    max_ret = 0;
    for (int j = 0; j < t; j++) {
        for (int i = 0; i < t; i++) {
            cin >> a[j][i];
            tmp.push_back(a[j][i]);
        }
    }
        
    max_n = *max_element(tmp.begin(), tmp.end());
    
    for (int i = 1; i < 101; i++) {
        fill(&visited[0][0], &visited[0][0] + 101 * 101, 0);
        ret = 0;
        
        for (int y = 0; y < t; y++) {
            for (int x = 0; x < t; x++) {
                if (a[y][x] <= i) {
                    b[y][x] = 0;
                } else {
                    b[y][x] = a[y][x];
                }
            }
        }
        
        for (int y = 0; y < t; y++) {
            for (int x = 0; x < t; x++) {
                if (!visited[y][x] && b[y][x] > i) {
                    dfs(y, x, i);
                    ret++;
                }
            }
        }

        if (max_ret < ret) max_ret = ret;
    }
    
    cout << max_ret << "\n";
    return 0;
}

// #1 : fail
#include<bits/stdc++.h>
using namespace std;
int t, max_n, ret, max_ret;
int a[101][101];
int b[101][101];
vector<int> tmp;
int visited[101][101];
int dy[] = {-1, 0, 1, 0};
int dx[] = {0, 1, 0, -1};
void dfs(int y, int x) {
    for (int i = 0; i < 4; i++) {
        int ny = y + dy[i];
        int nx = x + dx[i];
        
        if (ny < 0 || nx < 0 || ny >= t || nx >= t) continue;
        if (b[ny][nx] != 0 && !visited[ny][nx]) {
            dfs(ny, nx);
        }
    }
    
    return;    
}

int main() {
    cin.tie(NULL); cout.tie(NULL);
    cin >> t;
    for (int j = 0; j < t; j++) {
        for (int i = 0; i < t; i++) {
            cin >> a[j][i];
            tmp.push_back(a[j][i]);
        }
    }
        
    max_n = *max_element(tmp.begin(), tmp.end());
    cout << "max_n :: " << max_n << "\n";
    
    for (int i = 2; i <= max_n; i++) {
        for (int y = 0; y < t; y++) {
            for (int x = 0; x < t; x++) {
                if (b[y][x] <= i) {
                    b[y][x] = 0;
                } else {
                    b[y][x] = a[y][x];
                }
            }
        }
        
        for (int y = 0; y < t; y++) {
            for (int x = 0; x < t; x++) {
                if (!visited[y][x] && b[y][x] != 0) {
                    dfs(y, x);
                    ret++;
                }
            }
        }

        cout << "ret :: " << ret << "\n";
        if (max_ret < ret) max_ret = ret;
        cout << "max_ret :: " << max_ret << "\n";
    }
    
        cout << "(ret)max_ret :: " << max_ret << "\n";
    // cout << max_ret << "\n";
    return 0;
}

