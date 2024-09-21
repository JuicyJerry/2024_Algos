// #1: answer
#include <bits/stdc++.h>
using namespace std;
int dy[] = {-1, 0, 1, 0};
int dx[] = {0, 1, 0, -1};
int visited[101][101];
int a[101][101];
int m, n, k, w1, h1, w2, h2;
vector<int> ret;
int dfs(int y, int x) {
    visited[y][x] = 1;
    int ret = 1;
    for (int i = 0; i < 4; i++) {
        int ny = y + dy[i];
        int nx = x + dx[i];
        if (ny < 0 || nx < 0 || ny >= m || nx >= n) continue;
        if (visited[ny][nx] == 1) continue;
        if (a[ny][nx] == 1) continue;
        ret += dfs(ny, nx);
    }
    return ret;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);
    cin >> m >> n >> k;
    for (int i = 0; i < k; i++) {
        cin >> w1 >> h1 >> w2 >> h2;
        for (int x = w1; x < w2; x++) {
            for (int y = h1; y < h2; y++) {
                a[y][x] = 1;
            }
        }
    }
    
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (!visited[i][j] && a[i][j] == 0) {
                ret.push_back(dfs(i, j));
            }
        }
    }
    sort(ret.begin(), ret.end());
    cout << ret.size() << "\n";
    for (int a : ret) cout << a << " ";
    return 0;
}

// #1: fail
#include <bits/stdc++.h>
using namespace std;
int dy[] = {-1, 0, 1, 0};
int dx[] = {0, 1, 0, -1};
int visited[101][101];
int a[101][101];
int m, n, k, w1, h1, w2, h2, ret;

void dfs(int y, int x) {
    visited[y][x] = 1;
    for (int i = 0; i < 4; i++) {
        int ny = y + dy[i];
        int nx = x + dx[i];
        if (ny < 0 || nx < 0 || ny >= m || nx >= n) continue;
        if (!visited[ny][nx]) continue;
        if (a[ny][nx] == 1) continue;
        // visited[ny][nx] = visited[y][x] + 1;
        dfs(ny, nx);
    }
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);
    cin >> m >> n >> k;
    for (int i = 0; i < k; i++) {
        cin >> w1 >> h1 >> w2 >> h2;
        for (int y = h1; y < h2; y++) {
            for (int x = w1; x < w2; x++) {
                a[y][x] = 1;
            }
        }
    }
    
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (!visited[i][j] && a[i][j] == 0) {
                dfs(i, j);
                ret++;
            }
        }
    }
    cout << ret << "\n";
    
    return 0;
}
