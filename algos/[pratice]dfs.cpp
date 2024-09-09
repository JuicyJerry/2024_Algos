// #1
#include <bits/stdc++.h>
using namespace std;
const int n = 6;
vector<int> adj[n];
int visited[n];
void DFS(int u) {
    visited[u] = 1;
    cout << u << "\n";
    for (int v : adj[u]) {
        if (visited[v] == 0) {
            DFS(v);
        }
    }
    cout << u << "로부터 시작된 함수가 종료되었습니다.\n";
    return;
}
int main() {
    adj[1].push_back(2);
    adj[1].push_back(3);
    adj[2].push_back(4);
    adj[4].push_back(2);
    adj[2].push_back(5);
    DFS(1);
    return 0;
}

// 구현방법1 : 돌다리를 두들겨 보다.
void DFS(int here) {
    visited[here] = 1;
    for (int there : adj[here]) {
        if (visited[there]) continue;
        DFS(there);
    }
}

void DFS(int here) {
    for (int there : adj[there]) {
        if (visited[there]) continue;
        visited[there] = 1;
        DFS(there);
    }
    visited[there]
}

// 구현방법2 : 못 먹어도 GO
void DFS(int here) {
    if (visited[here]) return;
    visited[here] = 1;
    for (int there : adj[here]) {
        DFS(there);
    }
}

// Q. 종화는 방구쟁이야!

// fail
#include <bits/stdc++.h>
using namespace std;
int n, m, t;
// vector<int <vector<int>> m;
vector<int> adj[n];
const int dy[] = {-1, 0, 1, 0};
const int dx[] = {0, 1, 0, -1};
int cnt = 0;
void go(int y, int x) {
    for (int i = 0; i < 4; i++) {
        int ny = y + dy[i];
        int nx = x + dx[i];
        
        if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
        if (adj[ny][nx] == 0) continue;
        adj[ny][nx] = 0; // make it not to go
        cnt++;
    }
    cout << "cnt ---> " << cnt << "\n";
    go(ny, nx);
}

int main() {
    cin >> n >> m;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> t;
            adj[i].push_back(t);
        }
    }
    go(0, 0);
    return 0;
}

// answer
#include <bits/stdc++.h>
using namespace std;
int dy[4] = {-1, 0, 1, 0};
int dx[4] = {0, 1, 0, -1};
int a[104][104];
bool visited[104][104];
int n, m, ret;

void DFS(int y, int x) {
    visited[y][x] = 1;
    for (int i = 0; i < 4; i++) {
        int ny = y + dy[i];
        int nx = x + dx[i];
        if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
        if (!visited[ny][nx] && a[ny][nx] == 1) {
            DFS(ny, nx);
        }
    }
    return;
}

int main() {
    cin.tie(NULL); cout.tie(NULL);
    cin >> n >> m;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> a[i][j];
        }
    }
    
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (a[i][j] == 1 && !visited[i][j]) {
                ret++;
                DFS(i, j);   
            }
        }
    }
    cout << ret << "\n";
    return 0;
}