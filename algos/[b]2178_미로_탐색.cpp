// #1 : answer


// #1 : fail
#include <bits/stdc++.h>
using namespace std;
int n, m, cnt = 1;
vector<int> v[101][101];
int dy[] = {-1, 0, 1, 0};
int dx[] = {0, 1, 0, -1};
int visited[101][101];

void go(int y, int x) {
    visited[y][x] = 1;
    for (int i = 0; i < 4; i++) {
        int ny = y + dy[y];
        int nx = x + dx[x];
         if (nx < 0 || nx > x || ny < 0 || ny > y) continue;
        if (visited[ny][nx] == 0) continue;
    }
    
}
int main() {
    cin >> n >> m;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> v[i][j];
        }
    }
    
    for (int y = 0; y < n; y++) {
        for (int x = 0; x < m; x++) {
            if (v[y][x] == 0 && visited[y][x]) continue;
            go(y, x);
            cnt++;
        }
    }
    
    cout << cnt << "\n";
    
    return 0;
}