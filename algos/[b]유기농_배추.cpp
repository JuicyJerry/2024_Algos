// #1: success
#include <bits/stdc++.h>
using namespace std;
int t, m, n, y, x, k, ret, ny, nx;
int visited[51][51];
int a[51][51];
int dy[] = {-1, 0, 1, 0};
int dx[] = {0, 1, 0, -1};
void dfs(int y, int x) {
    visited[y][x] = 1;
    for (int i = 0; i < 4; i++) {
        ny = y + dy[i];
        nx = x + dx[i];
        if (ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
        if (!visited[ny][nx] && a[ny][nx] == 1) {
            dfs(ny, nx);
        }
    }

    return;    
}

int main() {
    cin.tie(NULL); cout.tie(NULL);
    cin >> t;
    while (t--) {
        fill(&a[0][0], &a[0][0] + 51 * 51, 0);
        fill(&visited[0][0], &visited[0][0] + 51 * 51, 0);
        ret = 0;
        cin >> m >> n >> k;
        
        for (int i = 0; i < k; i++) {
            cin >> x >> y;
            a[y][x] = 1;
        }
        
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (!visited[i][j] && a[i][j] == 1) {
                    dfs(i, j);
                    ret++;
                } 
            }
        }
        cout << ret << "\n";
    }
    
    return 0;
}

// #1 : fail
#include <bits/stdc++.h>
using namespace std;
const int max_len = 50;
const int a_cnt = 2500;
int t, m, n, k, x, y, r, s, w, q;
int dy[] = {-1, 0, 1, 0};
int dx[] = {0, 1, 0, -1};
int a[max_len][max_len];
int visited[max_len][max_len];
void go(int r, int s) {
    queue<pair<int, int>> q;
    q.push({r, s});
    while(q.size()) {
        tie(s, w) = q.front(); q.pop();
        cout << "s :: " << s << " w :  " << w << "\n";
        for (int i = 0; i < 4; i++) {
            int ny = s + dy[i];
            int nx = w + dx[i];
            cout << "(before)ny :: " << ny << " nx :  " << nx << "\n";
            if (ny < 0 || ny >= m || nx < 0 || nx >= n) continue;
            if (visited[ny][nx]) continue;
            if (a[ny][nx] == 0) continue;
            cout << "(after) ny :: " << ny << " nx :  " << nx << "\n";
            visited[ny][nx] = visited[s][w];
            q.push({ny, nx});
        }
    }
   
}

int main() {
    cin >> t;
    
    for (int i = 0; i < t; i++) {
        cin >> m >> n >> k;
        
        a[max_len][max_len];
        visited[max_len][max_len];
        
        for (int j = 0; j < k; j++) {
            cin >> x >> y;
            a[x][y] = 1;
        }
        
        // visited[0][0] = 1;
        go(0, 0);
        cout << visited[m - 1][n - 1] << "\n";
    }
    return 0;
}

// answer
#include <bits/stdc++.h>
using namespace std;
const int max_len = 51;
int t, m, n, k, x, y, ret;
int a[max_len][max_len];
int visited[max_len][max_len];
int dy[] = {-1, 0, 1, 0};
int dx[] = {0, 1, 0, -1};
void dfs(int y, int x) {
    visited[y][x] = 1;
    for (int i = 0; i < 4; i++) {
        int ny = y + dy[i];
        int nx = x + dx[i];
        if (ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
        if (!a[ny][nx]) continue;
        if (visited[ny][nx]) continue;
        dfs(ny, nx);
        
    }
    
    return ;
}

int main() {
    cin >> t;
    
    while (t--) {
        fill(&a[0][0], &a[0][0] + 51 * 51, 0);
        fill(&visited[0][0], &visited[0][0] + 51 * 51, 0);
        ret = 0;
        cin >> m >> n >> k;
        
        for (int i = 0; i < k; i++) {
            cin >> x >> y;
            a[y][x] = 1;
        }
        
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (!visited[i][j] && a[i][j] == 1) {
                    dfs(i, j);
                    ret++;
                }
            }
        }
        cout << ret << "\n";
    }
    
    return 0;
}