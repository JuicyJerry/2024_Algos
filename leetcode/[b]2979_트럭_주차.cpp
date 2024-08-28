// #1
#include <bits/stdc++.h>
using namespace std;
int cnt[101];
int A, B, C, a, b, sum;
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
	cin >> A >> B >> C; 
	for(int i = 0; i < 3; i++){
		cin >> a >> b; 
		for(int j = a; j < b; j++)cnt[j]++;
	}
	for(int i = 0; i < 100; i++) {
	    if (cnt[i] == 3) {
	        sum += (3 * C);
	    } else if(cnt[i] == 2) {
	        sum += (2 * B);
	    } else if(cnt[i] == 1) {
	        sum += (1 * A);
	    }
	}
	
	cout << sum;
    return 0;
}