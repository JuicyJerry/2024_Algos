// #1
#include <bits/stdc++.h>
using namespace std;
const int dy[] = {-1, 0, 1, 0};
const int dx[] = {0, 1, 0, -1};
vector<vector<int>> v[3][3];
vector<vector<int>> visited(3, vector<int>(3, 0));
// vector<vector<int>> visited[3][3];
void solve(int y, int x) {
    cout << "solve ---> " << y << " :: " << x << '\n';
    if (y >= 0 && y < 4 && x >= 0 && x < 4) {
        if (visited[y][x]) return;
        else if (v[y][x].size() > 0) {
            visited[y][x] = 1;
            cout << "find! ---> ";
            cout << y << " :: " << x << '\n';                
        }
    }

}
int main() {
    v[0][0].push_back({1}); 
    int y = 0, x = 0;
    for (int i = 0; i < 4; i++) {
        int ny = y + dy[i];
        int nx = x + dx[i];
        
        solve(ny, nx);
        cout << "ny --> " << ny << "::" << "nx --> " << nx << '\n';
    }
    
    return 0;
}

// #1 : answer
#include <bits/stdc++.h>
using namespace std;
const int dy[] = {-1, 0, 1, 0};
const int dx[] = {0, 1, 0, -1};
const int n = 3;
int a[n][n], visited[n][n];

void go(int y, int x) {
    visited[y][x] = 1;
    cout << y << " : " << x << "\n";
    for (int i = 0; i < 4; i++) {
        int ny = y + dy[i];
        int nx = x + dx[i];
        if (ny < 0 || ny >= 3 || nx < 0 || nx >= 3) continue;
        if (a[ny][nx] == 0) continue;
        if (visited[ny][nx]) continue;
        go(ny, nx);
    }
    return;
}
int main() {
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            cin >> a[i][j];         
        }
    }
    go(0, 0);
    return 0;
}