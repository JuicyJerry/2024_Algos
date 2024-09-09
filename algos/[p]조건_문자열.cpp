#include<bits/stdc++.h>
using namespace std;

int solution(string ineq, string eq, int n, int m) {
    if (ineq == ">" && eq == "=" && n >= m) return 1; 
    if (ineq == "<" && eq == "=" && n <= m) return 1; 
    if (ineq == ">" && eq == "!" && n > m) return 1; 
    if (ineq == "<" && eq == "!" && n < m) return 1; 
    return 0;
}