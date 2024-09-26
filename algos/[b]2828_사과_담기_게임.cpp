// #1: answer
#include <bits/stdc++.h>
using namespace std; 
int n, m, j, l, r, temp, ret;
int main () {
    cin >> n >> m >> j;
    l = 1;
    for (int i = 0; i < j; i++) {
        r = l + m - 1;
        cin >> temp;
        if (temp >= l && temp <= r) continue;
        else {
            if (temp < l) {
                ret += (l - temp);
                l = temp;
            } else {
                l += (temp - r);
                ret += (temp - r);
            }
        }
    }
    cout << ret << "\n";
	return 0;
}

// #1: fail
#include <bits/stdc++.h>
using namespace std;
int n, m, k;
int ret = 0;
int p;
int pos, diff;
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);
    // 스크린 n칸, 바구니 m칸
    cin >> n >> m;
    cin >> k;
    for (int i = 0; i < k; i++) {
        cin >> p;
        int tmp;
        if (p > m) diff = p - m;
        else diff = m - p;
        cout << "diff :: " << diff << "\n";
        
        if (diff <= m) continue;
        ret += diff;
        m += diff;
        cout << "m :: " << m << "\n";
        cout << "ret :: " << ret << "\n\n";
    }
    cout << ret;
    return 0;
}
