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

// #실패
#include <bits/stdc++.h>

using namespace std;

int solution(int a, int b, int c, int d) {
    // 4개 같은 숫자 : 1111 x p
    // 3개 같은 숫자 + 1개 다른 숫자 : (10 * p + q)^2
    // 2개 같은 숫자 + 2개 같은 숫자 : (p + q) * |p - q|
    // 2개 같은 숫자 + 1개 다른 숫자 + 1개 다른 숫자 : q * r
    // 모두 다른 숫자 : 가장 작은 숫자
    
    int ans = 0;
    map<int, int> m;
    m[a]++;    
    m[b]++;    
    m[c]++;    
    m[d]++;    
    
        
    for (auto iter = m.begin(); iter != m.end(); iter++) {
        cout << iter->first << " " << iter->second << "\n";

        if (iter->second == 4) {
            ans = 1111 * iter->first;
        } else if (iter->second == 3) {
           
        } else if (iter->second == 2) {
            ans = 1;
            for (auto it = m.begin(); it != m.end(); it++) {
                if (it->second != 2) {
                    ans *= it->first;
                } else {
                    (iter->first + it->first) * abs(iter->first - it->first);
                }
            }
            break;
        } else {
            if (iter->second == 3) {
                for (auto it = m.begin(); it != m.end(); it++) {
                    if (it->second != 3) {
                        ans = (10 * iter->first + it->first) * (10 * iter->first + it->first);
                    }
                }
            } else {
                ans = min({a, b, c, d});
                break;
            }
        }
    }
    
    return ans;
}

// 성공
#include <bits/stdc++.h>

using namespace std;

int solution(int a, int b, int c, int d) {
    // 4개 같은 숫자 : 1111 x p
    // 3개 같은 숫자 + 1개 다른 숫자 : (10 * p + q)^2
    // 2개 같은 숫자 + 2개 같은 숫자 : (p + q) * |p - q|
    // 2개 같은 숫자 + 1개 다른 숫자 + 1개 다른 숫자 : q * r
    // 모두 다른 숫자 : 가장 작은 숫자
    
    // 4개 같은 숫자
    if (a == b && b == c && c == d) return 1111 * a;
    int dice[7] = {0};
    dice[a]++;
    dice[b]++;
    dice[c]++;
    dice[d]++;
    
    int p = 0;
    // 3개 같은 숫자
    for (int i = 1; i <= 6; i++) {
        if (dice[i] == 3) {
            p = i;
            
            for (int j = 1; j <= 6; j++) {
                if (dice[j] == 1) {
                    return (10 * p + j) * (10 * p + j);
                }
            }
        }
    }
    
    // 2개 같은 숫자 + 2개 같은 숫자
    for (int i = 1; i <= 6; i++) {
        if (dice[i] == 2) {
            p = i;
            
            for (int j = 1; j <= 6; j++) {
                if (i != j && dice[j] == 2) {
                    return (p + j) * abs(p - j);
                }
            }
        }
    }
    
    // 2개 같은 숫자 + 나머지 다른 숫자
    for (int i = 1; i <= 6; i++) {
        if (dice[i] == 2) {
            int q = 0, r = 0;
            for (int j = 1; j <= 6; j++) {
                if (i != j && dice[j] == 1) {
                    if (q == 0) {
                        q = j;
                    } else {
                        r = j;
                    }
                }
            }
            return q * r;
        }
    }
    
    // 모두 1개 숫자
    return min({a, b, c, d});
}