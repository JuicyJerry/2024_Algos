#include<bits/stdc++.h>
using namespace std;

int solution(int a, int b, int c) {
    int ret = 0;
    map<string, int> mp = {
        {"type1", a + b + c}, 
        {"type2", (int)pow(a, 2) + (int)pow(b, 2) + (int)pow(c, 2)}, 
        {"type3", (int)pow(a, 3) + (int)pow(b, 3) + (int)pow(c, 3)},
    };
    if (a == b && b == c && a == c) ret = mp["type1"] * mp["type2"] * mp["type3"];
    else if (a != b && b != c && a != c) ret = mp["type1"];
    else ret = mp["type1"] * mp["type2"];
    return ret;
}

#include<bits/stdc++.h>
using namespace std;
int solution(int a, int b, int c) {
    set<int> s{a, b, c};
    if(s.size() == 3) 
        return a + b + c;
    if(s.size() == 2) 
        return (a + b + c) * (pow(a, 2) + pow(b, 2) + pow(c, 2));
    if(s.size() == 1) 
        return (a + b + c) * (pow(a, 2) + pow(b, 2) + pow(c, 2)) * (pow(a, 3) + pow(b, 3) + pow(c, 3));
}