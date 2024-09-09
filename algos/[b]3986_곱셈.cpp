// #1 : answer
#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
ll a, b, c;
ll go(ll a, ll b) {
    if (b == 1) return a % c;
    ll ret = go(a, b / 2);
    ret = (ret * ret) % c;
    if (b % 2) ret = (ret * a) % c; // 함수 go는 재귀적으로 b를 반으로 줄여 계산을 반복
    return ret;
}
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);
    cin >> a >> b >> c;
    cout << go(a, b) << "\n";
    return 0;
}

// #1: timeout
#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
ll a, b, c;
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);
    cin >> a >> b >> c;
    
    for (int i = 0; i < b; i++) {
        a *= a;
        a %= c;
    }
    cout << a;
    return 0;
}

// #1: fail
#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
ll a, b, c, tmp;
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);
    cin >> a >> b >> c;
    tmp = pow(a, b);
    cout << (tmp % c);
    return 0;
}