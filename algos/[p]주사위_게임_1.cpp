#include <bits/stdc++.h>

using namespace std;

int solution(int a, int b) {
    int r1 = a % 2 == 1;
    int r2 = b % 2 == 1;
    if (r1 && r2) return pow(a, 2) + pow(b, 2); 
    else if (r1 || r2) return 2 * (a + b);
    return abs(a - b);
    
}