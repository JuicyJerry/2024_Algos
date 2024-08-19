#include <string>
#include <vector>

using namespace std;

vector<vector<int>> solution(int n) {
    vector<vector<int>> spiral(n, vector<int>(n, 0));

    int t = 0, b = n - 1, l = 0, r = n - 1;
    int num = 1;
    
    while (t <= b && l <= r) {
        // 상좌에서 상우로
        for (int i = l; i <= r; i++) {
            spiral[t][i] = num++;
        } 
        t++;
    
        // 상우에서 하우로
        for (int i = t; i <= b; i++) {
            spiral[i][r] = num++;
        }
        r--;
    
        // 하우에서 하좌로 
        if (l <= r) {
            for (int i = r; i >= l; i--) {
                spiral[b][i] = num++;
            }
            b--;
        }
        
        
        // 하좌에서 상좌로
        if (t <= b) {
            for (int i = b; i >= t; i--) {
                spiral[i][l] = num++;
            }            
            l++;
        }
    }
    
    return spiral;
}