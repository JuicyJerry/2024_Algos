#include<bits/stdc++.h>
using namespace std;

int solution(int n, string control) {
    int answer = n;
    map<string, int> mp = {
        {"w", 1},
        {"s", -1},
        {"d", 10},
        {"a", -10},
    };
    for (char chr : control) answer += mp[string(1, chr)];
    return answer;
}


#include<bits/stdc++.h>
using namespace std;

int solution(int n, string control) {
    int answer = n;
    map<char, int> mp = {
        {'w', 1},
        {'s', -1},
        {'d', 10},
        {'a', -10},
    };
    for (char ch : control) answer += mp[ch];
    return answer;
}

#include<bits/stdc++.h>
using namespace std;

int solution(int n, string control) {
    for (char ch : control) {
        cout << ch << "\n";
        switch(ch) {
            case 'w': n++; break;
            case 's': n--; break;
            case 'd': n+=10; break;
            case 'a': n-=10; break;
        }
    }
    return n;
}