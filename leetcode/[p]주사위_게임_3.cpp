// 실패
#include<bits/stdc++.h>

using namespace std;

int solution(int a, int b, int c, int d) {
    int answer = 0;
    map<int, int> mp;
    mp[a]++;
    mp[b]++;
    mp[c]++;
    mp[d]++;

    int p = 0;
    int q = 0;
    bool it1 = false;
    bool it2 = false;
    bool it3 = false;
    bool it4 = false;
    bool isSame = (mp.find(1) != mp.end());
    
    for(auto it = mp.begin(); it != mp.end(); ++it) {
        if (it->second == 4) {
            it4 = true;
        } else if (it->second == 3) {
            it3 = true;
            p = it->first;
            for(auto t = mp.begin(); t != mp.end(); ++t) {
                if (t->second == 1) {
                    q = t->first;
                }
            }
        } else if (it->second == 2) {
            it2 = true;
            if (isSame) {
                if (q == 0) p = it->first;
                else q = it->first;
            } else {
                for(auto it = mp.begin(); it != mp.begin(); it++) {
                    if (it->second != 2 && p != 1) p = it-> second;
                    else q = it-> second;
                }
            }
        } else {
            it1 = true;
        }
    }
    
    cout << "p -> "<< p << " q -> "<< q << "\n";
    
    if(it4) {
        cout << "it4";
        answer = a * 1000 + b * 100 + c * 10 + d * 1;
    } else if(it3) {
        cout << "it3";
        answer = (10 * p + q) * (10 * p + q);
    } else if(it2) {
        cout << "it2";
        answer = (p + q) * abs(p - q);
    } else {
        cout << "it1";
        answer = min({a, b, c, d});
    } 
    
    return answer;
}