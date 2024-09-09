// #1
#include<bits/stdc++.h>
using namespace std;
int n, k, max_sum = -999, sum = 0, cnt = 0;
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);
    
    cin >> n; cin >> k;
    int nums[n];
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    for (int i = 0; i < n; i++) {
        cnt++;
        sum += nums[i];
        if (cnt == k) {
            if (max_sum < sum) {
                max_sum = sum;
            }
            cnt--;
            sum -= nums[i - k + 1];
        }
    }
    cout << max_sum;
    return 0;
}

// #1
#include<bits/stdc++.h>
using namespace std;
int n, k, temp, psum[100001], ret = -100000;
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);
    cin >> n >> k;
    for (int i = 1; i <= n; i++) {
        cin >> temp; psum[i] = psum[i - 1] + temp;
    }
    for (int i = k; i <= n; i++) {
        ret = max(ret, psum[i] - psum[i - k]);
    }
    cout << ret;
    return 0;
}